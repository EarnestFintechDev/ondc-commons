export class KeyPair {
  signing_public_key: string;
  encryption_public_key: string;
  valid_from: string;
  valid_until: string;

  constructor(signing_public_key: string, encryption_public_key: string, valid_from: string, valid_until: string) {
    this.signing_public_key = signing_public_key;
    this.encryption_public_key = encryption_public_key;
    this.valid_from = valid_from;
    this.valid_until = valid_until;
  }
}
