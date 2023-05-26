import { log } from '@smoke-trees/postgres-backend';
import crypto from 'crypto';

export default async function challengeDecrypt(
  cryptoPrivateKey: string,
  cryptoPublicKey: string,
  cipherstring: string
) {
  const privateKeyBuffer = Buffer.from(cryptoPrivateKey, 'base64');
  const publicKeyBuffer = Buffer.from(cryptoPublicKey, 'base64');

  log.debug('Buffers', 'utils/challengeDecrypt', { privateKeyBuffer, publicKeyBuffer });

  //   try {
  //     const formattedPrivateKey = await crypto.createPrivateKey({
  //       key: privateKeyBuffer,
  //       format: 'der',
  //       type: 'pkcs1'
  //     });

  //     console.log('readPrivateKey', formattedPrivateKey);
  //   } catch (err) {
  //     console.log('err', err);

  //     throw err;
  //   }

  const publicPrefix = '-----BEGIN PUBLIC KEY-----\n';
  const publicPostfix = '-----END PUBLIC KEY-----';
  const privatePrefix = '-----BEGIN PRIVATE KEY-----\n';
  const privatePostfix = '-----END PRIVATE KEY-----';

  if (!publicKeyBuffer || !privateKeyBuffer) {
    log.error('No public or private key found', 'utils/challengeDecrypt', {
      cryptoPrivateKey,
      cryptoPublicKey,
      cipherstring,
      publicKeyBuffer,
      privateKeyBuffer
    });
    throw new Error('No public or private key found');
  }

  const pemPublicKey =
    publicPrefix +
    publicKeyBuffer
      .toString('base64')
      .match(/.{0,64}/g)!
      .join('\n') +
    publicPostfix;

  const pemPrivateKey =
    privatePrefix +
    privateKeyBuffer
      .toString('base64')
      .match(/.{0,64}/g)!
      .join('\n') +
    privatePostfix;

  log.debug('PEM Keys', 'utils/challengeDecrypt', { pemPublicKey, pemPrivateKey });

  const sharedKey = crypto.diffieHellman({
    privateKey: crypto.createPrivateKey({
      key: pemPrivateKey
    }),
    publicKey: crypto.createPublicKey({
      key: pemPublicKey
    })
  });

  log.debug('Shared Key', 'utils/challengeDecrypt', { sharedKey });

  const cipher = crypto.createDecipheriv('aes-256-ecb', sharedKey, '');
  const ciphertxt = Buffer.from(cipherstring, 'base64');
  let decrypted = cipher.update(ciphertxt);
  decrypted = Buffer.concat([decrypted, cipher.final()]);
  return decrypted.toString('utf-8');

  //   const privateKey = await readPrivateKey(cryptoPrivateKey);
  //   const publicKey = await readPublicKey(cryptoPublicKey);
  //   const sharedKey = crypto.diffieHellman({
  //     privateKey: privateKey.export({ format: 'base64', type: 'pkcs8' }),
  //     publicKey: publicKey.export({ format: 'base64', type: 'spki' })
  //   });
  //   const cipher = crypto.createDecipheriv('aes-256-ecb', sharedKey, '');
  //   let ciphertxt = Buffer.from(base64url.decode(cipherstring), 'base64');
  //   let decrypted = cipher.update(ciphertxt);
  //   decrypted += cipher.final();
  //   return decrypted.toString('utf-8');
}

// console.log(
//   encrypt(
//     'MC4CAQAwBQYDK2VuBCIEIOgl3rf3arbk1PvIe0C9TZp7ImR71NSQdvuSu+zzY6xo',
//     'MCowBQYDK2VuAyEAi801MjVpgFOXHjliyT6Nb14HkS5dj1p41qbeyU6/SC8='
//   )
// );

//* Testing
// const plainText = decrypt(
//   'MC4CAQAwBQYDK2VuBCIEIOgl3rf3arbk1PvIe0C9TZp7ImR71NSQdvuSu+zzY6xo',
//   'MCowBQYDK2VuAyEAi801MjVpgFOXHjliyT6Nb14HkS5dj1p41qbeyU6/SC8=',
//   'CrwN248HS4CIYsUvxtrK0pWCBaoyZh4LnWtGqeH7Mpc='
// );
