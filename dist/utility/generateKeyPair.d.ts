export declare const generateKeyPair: () => Promise<{
    signing_public_key: string;
    signing_private_key: string;
    encryption_public_key: string;
    encryption_private_key: string;
    valid_from: Date;
    valid_to: Date;
}>;
