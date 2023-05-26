export declare const getHeader: (body: any) => Promise<{
    host: string | undefined;
    accept: string;
    authorization: string;
    'user-agent': string;
    'content-type': string;
}>;
