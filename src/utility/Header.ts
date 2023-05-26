import { log } from '@smoke-trees/postgres-backend';
import { createSigningString } from './verifySignature';

export const getHeader = async (body: any) => {
  log.debug('Looking for body in utility/header.ts -> ', body);
  const { created, expires, digest_base64 } = await createSigningString(body, '', '');
  log.debug(
    'Looking for digest after calling createSigningString in utility/header.ts -> ',
    JSON.stringify({
      digest: digest_base64,
      creted: created,
      expires: expires
    })
  );

  const subscriber_id: any = process.env.SUBSCRIBERID;
  const UKID: any = process.env.UNIQUEKEYID;
  const algorithm: any = process.env.ALGORITHM;
  const header = {
    "host": process.env.LOCALHOST,
    "accept": "application/json",
    "authorization": `Signature keyId="${subscriber_id}|${UKID}|${algorithm}",algorithm="ed25519",created=${created},expires=${expires},headers="(created) (expires) digest",signature="${digest_base64}"`,
    'user-agent': "ReactorNetty/1.0.19",
    'content-type': 'application/json',
  };
  log.debug("Looking for header  before return in utility/header.ts -> ","getHeader()",{header});
  return header;
};
