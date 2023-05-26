export declare const createSigningString: (message: string, created: string, expires: string) => Promise<{
    signing_string: string;
    created: string;
    expires: string;
    digest_base64: string;
}>;
export declare const verifySignature: (header: any, body: any) => Promise<boolean>;
