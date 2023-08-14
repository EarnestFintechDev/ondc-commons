import { log } from '@smoke-trees/postgres-backend';
import _sodium from 'libsodium-wrappers';
import crypto from 'crypto'

export const generateKeyPair = async (): Promise<{
  signing_public_key: string;
  signing_private_key: string;
  encryption_public_key: string;
  encryption_private_key: string;
  valid_from: Date;
  valid_to: Date;
}> => {
  try {
    await _sodium.ready;
    const sodium = _sodium;

    // Signing Key Pair
    const signingKeyPair = sodium.crypto_sign_keypair();
    const signingPublicKey = sodium.to_base64(signingKeyPair.publicKey, _sodium.base64_variants.ORIGINAL);
    const signingPrivateKey = sodium.to_base64(signingKeyPair.privateKey, _sodium.base64_variants.ORIGINAL);

    // Encryption Key Pair
    // const encryptionKeyPair = sodium.crypto_box_keypair();
    // const encryptionPublicKey = sodium.to_base64(encryptionKeyPair.publicKey, _sodium.base64_variants.ORIGINAL);
    // const encryptionPrivateKey = sodium.to_base64(encryptionKeyPair.privateKey, _sodium.base64_variants.ORIGINAL);

    const encryptionKeyPair = crypto.generateKeyPairSync('x25519')
    const encryptionPublicKey = encryptionKeyPair.publicKey.export({ type: 'spki', format: 'der' }).toString('base64')
    const encryptionPrivateKey = encryptionKeyPair.privateKey.export({ type: 'pkcs8', format: 'der' }).toString('base64')

    // signingKeyPair = sodium.crypto_sign_keypair();
    // signingPublicKey = sodium.to_base64(signingKeyPair.publicKey, _sodium.base64_variants.ORIGINAL);
    // signingPrivateKey = sodium.to_base64(signingKeyPair.privateKey, _sodium.base64_variants.ORIGINAL);

    // encryptionKeyPair = sodium.crypto_box_keypair();
    // encryptionPublicKey = sodium.to_base64(encryptionKeyPair.publicKey, _sodium.base64_variants.ORIGINAL);
    // encryptionPrivateKey = sodium.to_base64(encryptionKeyPair.privateKey, _sodium.base64_variants.ORIGINAL);




    const validFrom = new Date();
    // 2 years from now
    const validTo = new Date(validFrom.getTime() + 2 * 365 * 24 * 60 * 60 * 1000);

    const keyPair = {
      signing_public_key: signingPublicKey,
      signing_private_key: signingPrivateKey,
      encryption_public_key: encryptionPublicKey,
      encryption_private_key: encryptionPrivateKey,
      valid_from: validFrom,
      valid_to: validTo
    };

    return keyPair;
  } catch (err) {
    log.error('Error generating key pair', 'generateKeyPair', err);
    return Promise.reject(false);
  }
};
