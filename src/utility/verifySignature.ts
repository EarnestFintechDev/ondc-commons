import axios from 'axios';
import _ from 'lodash';
import _sodium from 'libsodium-wrappers';
import { log } from '@smoke-trees/postgres-backend';
import crypto from 'crypto'

export const createSigningString = async (message: string, created: string, expires: string) => {
  if (!created) created = Math.floor(new Date().getTime() / 1000).toString();
  if (!expires) expires = (parseInt(created) + 1 * 60 * 60).toString();

  await _sodium.ready;

  const sodium = _sodium;
  const digest = sodium.crypto_generichash(64, sodium.from_string(message));
  const digest_base64 = sodium.to_base64(digest, _sodium.base64_variants.ORIGINAL);

  const signing_string = `(created): ${created}
(expires): ${expires}
digest: BLAKE-512=${digest_base64}`;

  return { signing_string, created, expires, digest_base64 };
};

const verifyMessage = async (signedString: string, signingString: string, publicKey: string) => {
  try {
    await _sodium.ready;
    const sodium = _sodium;
    const privateKey = process.env.SIGNING_KEY ?? ''

    const result = sodium.crypto_sign_verify_detached(
      sodium.from_base64(signedString, _sodium.base64_variants.ORIGINAL),
      signingString,
      sodium.from_base64(publicKey, _sodium.base64_variants.ORIGINAL)
    );
    return result;
  } catch (err) {
    return false;
  }
};

const verifyHeader = async (headerParts: any, body: object, public_key: string) => {
  const { signing_string } = await createSigningString(
    JSON.stringify(body),
    headerParts['created'],
    headerParts['expires']
  );


  const verified = await verifyMessage(headerParts['signature'], signing_string, public_key);

  return verified;
};

const getProviderPublicKey = async (providers: any, keyId: string) => {
  try {
    return providers[0].signing_public_key
    // console.log(providers)
    const provider = _.find(providers, (obj: any) => obj.ukId == keyId && obj);
    // console.log(provider)
    return provider?.signing_public_key || false;
  } catch (err) {
    return false;
  }
};

const lookupRegistry = async (subscriber_id: string, unique_key_id: string, domain: string) => {
  try {
    const body = { subscriber_id: subscriber_id, domain: "ONDC:FIS10" };

    const response = await axios.post(process.env.GATEWAY_LOOKUP_URL || '', body);

    if (!response) return false;

    console.log(response.data)
    const public_key = await getProviderPublicKey(response.data, unique_key_id);
    if (!public_key) {
      log.debug("No public key found", 'lookup registry', { domain, subscriber_id, unique_key_id })
      return false;
    }

    return public_key;
  } catch (err) {
    log.error("Error in lookup", 'lookupRegistry', err, { subscriber_id, unique_key_id, domain })
    return false;
  }
};

const remove_quotes = (a: string) => {
  return a.replace(/^["'](.+(?=["']$))["']$/, '$1');
};

const split_auth_header = (auth_header: any) => {
  const header = auth_header.replace('Signature ', '');
  let re = /\s*([^=]+)=([^,]+)[,]?/g;
  let m;
  let parts: any = {};
  while ((m = re.exec(header)) !== null) {
    if (m) {
      parts[m[1]] = remove_quotes(m[2]);
    }
  }
  return parts;
};

export const verifySignature = async (header: any, body: any) => {
  try {
    let isValid: boolean | undefined = false;
    const domain = body.context.domain
    log.debug("Verify Domain", 'verifySignature', { header, body })

    const headerParts = split_auth_header(header);
    log.debug('headerParts', 'verifySignature', { headerParts })

    const keyIdSplit = headerParts['keyId'].split('|');
    const subscriber_id = keyIdSplit[0];
    const unique_key_id = keyIdSplit[1];
    const algorithm = keyIdSplit[2];


    if (algorithm === headerParts.algorithm) {
      const public_key = await lookupRegistry(subscriber_id, unique_key_id, domain);
      if (public_key) isValid = await verifyHeader(headerParts, body, public_key);
    }
    return isValid;
  } catch (err) {
    log.error(
      'Error in verify signature',
      'verifySignature',
      err,
      { header, body }
    )
    return false;
  }
};

export function aes256GcmEncrypt(key: Buffer, plaintext: Buffer) {
  
    var nonce = crypto.randomBytes(12)
    var cipher = crypto.createCipheriv('aes-256-gcm', key, nonce);
    var nonceCiphertextTag = Buffer.concat([
        nonce, 
        cipher.update(plaintext), 
        cipher.final(), 
        cipher.getAuthTag()
    ]); 
    return nonceCiphertextTag.toString('base64');
}

export function getSharedKey(publicKey: Buffer, privateKey: Buffer, keyLength = 256) {
  const dh = crypto.createDiffieHellman(keyLength)

  dh.setPrivateKey(privateKey)
  dh.setPublicKey(publicKey)

  return dh.generateKeys().toString("base64")
}


export const encryptData = async (data: string, header: any, privateKey: any,domain: string = "ONDC:FIS10") => {
  try {
    log.debug("Encrypting data", "encryptData", { data, header, domain })
    const headerParts = split_auth_header(header)
    log.debug("headerParts", "encryptData", { headerParts })

    const keyIdSplit = headerParts["keyId"].split("|")
    const subscriber_id = keyIdSplit[0]
    const unique_key_id = keyIdSplit[1]
    const publicKey = await lookupRegistry(subscriber_id, unique_key_id, domain)
    if(!publicKey) {
      log.warn("Error getting public key", "encryptData", {publicKey})
      return {error: true} as const
    }
    log.debug("Public key", "encryptData", {publicKey})
    const sharedKey = getSharedKey(Buffer.from(publicKey, "base64"), Buffer.from(privateKey, "base64"))
    log.debug("Shared key", "encryptData", {sharedKey})
    const encryptedString = aes256GcmEncrypt(Buffer.from(sharedKey, "base64"), Buffer.from(data, "utf8"))
    log.debug("Encrypted String", "encryptData", { encryptedString })
    return {error: false, encryptedString} as const
  } catch (e: any) {
    log.error("Error in encrypting data", "encryptData", e, { message: e.message, data, header, domain })
    return {error: true} as const
  }
}

export function aes256GcmDecrypt(encryptedString: string, key: Buffer) {
  const encBuf = Buffer.from(encryptedString, "base64")
  const iv = encBuf.subarray(0, 12)
  const data = crypto.createDecipheriv("aes-256-gcm", key, iv)
  const authTag = encBuf.subarray(encBuf.length - 16)
  data.setAuthTag(authTag)
  let decrypted = Buffer.concat([data.update(encBuf.subarray(12, encBuf.length - 16)), data.final()])
  return decrypted.toString("utf8")
}