export declare class Support {
    /**
    * Customer support.
    * @param {string} type - ENUM [order, billing, fulfillment]
    * @param {string} ref_id - Callback URL of the subscriber. The Registry will call this URL's on_subscribe API to validate the subscriber's credentials.
    * @param {string} channel - 	Describes a tag. This is a simple key-value store which is used to contain extended metadata.
   */
    type: support_type;
    ref_id: string;
    channels: [];
}
declare enum support_type {
    order = 0,
    billing = 1,
    fulfillment = 2
}
export {};
