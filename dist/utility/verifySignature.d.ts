/// <reference types="node" />
export declare const createSigningString: (message: string, created: string, expires: string) => Promise<{
    signing_string: string;
    created: string;
    expires: string;
    digest_base64: string;
}>;
export declare const verifySignature: (header: any, body: any) => Promise<boolean>;
export declare function aes256GcmEncrypt(key: Buffer, plaintext: Buffer): string;
export declare function getSharedKey(publicKey: Buffer, privateKey: Buffer): string;
export declare const encryptData: (data: string, header: any, privateKey: any, domain?: string) => Promise<{
    readonly error: true;
    readonly encryptedString?: undefined;
} | {
    readonly error: false;
    readonly encryptedString: string;
}>;
export declare function aes256GcmDecrypt(encryptedString: string, key: Buffer): string;
