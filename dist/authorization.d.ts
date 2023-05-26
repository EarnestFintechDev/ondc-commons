export declare class Authorizations {
    /**
     * Create Authorization.
     * @param {string} type - Type of authorization mechanism used.
     * @param {string} token - Token used for authorization.
     * @param {string} valid_from - Timestamp in RFC3339 format from which token is valid.
     * @param {string} valid_to - Timestamp in RFC3339 format until which token is valid.
     * @param {string} status - credit.
     */
    type: string | null;
    token: string | null;
    valid_from: string | null;
    valid_to: string | null;
    status: string | null;
    constructor(type: string, token: string, valid_from: string, valid_to: string, status: string);
}
