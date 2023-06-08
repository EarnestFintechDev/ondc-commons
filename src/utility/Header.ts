import { log } from '@smoke-trees/postgres-backend';
import { createSigningString } from './verifySignature';
import _sodium from 'libsodium-wrappers'

export const getHeader = async (body: any) => {
  await _sodium.ready
  const sodium = _sodium
  log.debug('Looking for body in utility/header.ts -> ', body);
  const { created, expires, signing_string } = await createSigningString(body, '', '');
  log.debug(
    'Looking for digest after calling createSigningString in utility/header.ts -> ',
    'getHeader',
    {
      signatureString: signing_string,
      created: created,
      expires: expires
    }
  );

  const subscriber_id: any = process.env.SUBSCRIBERID;
  const UKID: any = process.env.UNIQUEKEYID;
  const algorithm: any = process.env.ALGORITHM;
  const signingKey = process.env.SIGNING_KEY ?? ''

  const signature = sodium.to_base64(sodium.crypto_sign_detached(
    signing_string,
    sodium.from_base64(signingKey, sodium.base64_variants.ORIGINAL)
  ), sodium.base64_variants.ORIGINAL)



  const header = {
    "accept": "application/json",
    "authorization": `Signature keyId="${subscriber_id}|${UKID}|${algorithm}",algorithm="ed25519",created=${created},expires=${expires},headers="(created) (expires) digest",signature="${signature}"`,
    'content-type': 'application/json',
  };
  log.debug("Looking for header  before return in utility/header.ts -> ", "getHeader()", { header });
  return header;
};
