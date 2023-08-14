import { log } from '@smoke-trees/postgres-backend';
import crypto from 'crypto';

export default async function challengeDecrypt(
  cryptoPrivateKey: string,
  cryptoPublicKey: string,
  cipherstring: string
) {
  const privateKeyBuffer = Buffer.from(cryptoPrivateKey, 'base64');
  const publicKeyBuffer = Buffer.from(cryptoPublicKey, 'base64');
  const buffer = Buffer.from(cipherstring, 'base64')

  const publicKey = crypto.createPublicKey({
    key: publicKeyBuffer,
    type: 'spki', format: 'der'

  });
  const privateKey = crypto.createPrivateKey({
    key: privateKeyBuffer,
    type: 'pkcs8', format: 'der'
  });

  const keyPair = crypto.diffieHellman({
    publicKey: publicKey,
    privateKey: privateKey
  })

  const deCipher = crypto.createDecipheriv(
    'aes-256-ecb',
    keyPair,
    null
  )

  const res1 = deCipher.update(buffer)

  const res2 = deCipher.final()
  console.log(res1.toString('utf-8') + res2.toString())

  return res1.toString('utf-8') + res2.toString()
}
