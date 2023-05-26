export declare class Subscriber {
    /**
     * Any entity which wants to authenticate itself on a network. This can be a Buyer App, Seller App or Gateway.
     * @param {string} subscriber_id - Registered domain name of the subscriber. Must have a valid SSL certificate issued by a Certificate Authority of the operating region.
     * @param {number} type- Enum [ bap, bpp, bg],
     * @param {string} cb_url - Callback URL of the subscriber. The Registry will call this URL's on_subscribe API to validate the subscriber's credentials.
     * @param {string} domain - Codification of domains supported by ONDC.
     * @param {string} signing_public_key - // Signing Public key of the subscriber. Any subscriber platform (Buyer App, Seller App, Gateway) who wants to transact on the network must digitally sign the requestBody using the corresponding private key of this public key and send it in the transport layer header. In case of HTTP it is the Authorization header. The Authorization will be used to validate the signature of a Buyer App or Seller App. Furthermore, if an API call is being proxied or multicast by a ONDC Gateway, the Gateway must use it's signing key to digitally sign the requestBody using the corresponding private key of this public key and send it in the X-Gateway-Authorization header.
     * @param {string} country -// Country/properties/codestring. Country code as per ISO 3166 Alpha-3 code format.
     * @param {string} encryption_public_key- Encryption public key of the Buyer App. Any Seller App must encrypt the requestBody.message value of the on_search API using this public key.
     * @param {string} status - Enum[ INITIATED, UNDER_SUBSCRIPTION, SUBSCRIBED, INVALID_SSL, UNSUBSCRIBED  ].
     * @param {string} expires - timestamp in UTC derived from the lease_time of the subscriber.
     *  @param {string} city - City/properties/codestring. Codification of city code will be using the std code of the city e.g. for Bengaluru, city code is 'std:080'.
     */
    subscriber_id: string;
    type: subscriber_type;
    cb_url: string;
    domain: string;
    city: string;
    country: string;
    signing_public_key: string;
    encryption_public_key: string;
    status: status;
    created: string;
    updated: string;
    expires: string;
}
declare enum subscriber_type {
    bap = 0,
    bpp = 1,
    bg = 2
}
declare enum status {
    INITIATED = 0,
    UNDER_SUBSCRIPTION = 1,
    SUBSCRIBED = 2,
    INVALID_SSL = 3,
    UNSUBSCRIBED = 4
}
export {};
