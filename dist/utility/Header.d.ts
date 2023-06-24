export declare const getHeader: (body: string) => Promise<{
    accept: string;
    authorization: string;
    'content-type': string;
}>;
