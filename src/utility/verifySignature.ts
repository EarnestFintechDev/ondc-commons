import axios from 'axios';
import _ from 'lodash';
import _sodium from 'libsodium-wrappers';

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

    const result = sodium.crypto_sign_verify_detached(
      sodium.from_base64(signedString, _sodium.base64_variants.ORIGINAL),
      signingString,
      sodium.from_base64(publicKey, _sodium.base64_variants.ORIGINAL)
    );
    console.log(36, result);
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
  console.log('line 49', {
    signature: headerParts['signature'],
    signing_string: signing_string,
    key: public_key
  });
  const verified = await verifyMessage(headerParts['signature'], signing_string, public_key);

  return verified;
};

const getProviderPublicKey = async (providers: any, keyId: string) => {
  try {
    // console.log(providers)
    const provider = _.find(providers, (obj: any) => obj.ukId == keyId && obj);
    // console.log(provider)
    return provider?.signing_public_key || false;
  } catch (err) {
    return false;
  }
};

const lookupRegistry = async (subscriber_id: string, unique_key_id: string) => {
  try {
    const body = { subscriber_id: subscriber_id, type: 'BAP', domain: 'nic2004:52110' };
    console.log('line 69', body);

    const response = await axios.post('https://pilot-gateway-1.beckn.nsdl.co.in/lookup', body);

    if (!response) return false;

    const public_key = await getProviderPublicKey(response.data, unique_key_id);
    console.log('78', public_key);
    if (!public_key) return false;

    return public_key;
  } catch (err) {
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

    const headerParts = split_auth_header(header);

    const keyIdSplit = headerParts['keyId'].split('|');
    const subscriber_id = keyIdSplit[0];
    const unique_key_id = keyIdSplit[1];
    const algorithm = keyIdSplit[2];

    console.log(algorithm === headerParts.algorithm);
    console.log('line 119', headerParts['signature']);

    if (algorithm === headerParts.algorithm) {
      const public_key = await lookupRegistry(subscriber_id, unique_key_id);

      if (public_key) isValid = await verifyHeader(headerParts, body, public_key);
    }
    return isValid;
  } catch (err) {
    return false;
  }
};
