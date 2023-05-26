export declare class KeyPair {
    signing_public_key: string;
    encryption_public_key: string;
    valid_from: string;
    valid_until: string;
    constructor(signing_public_key: string, encryption_public_key: string, valid_from: string, valid_until: string);
}
