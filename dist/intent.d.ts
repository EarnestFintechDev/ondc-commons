import { Items as Item } from "./Item";
export declare class Intent {
    /**
     * Intent of a user. Used for searching for services.
     * @param {string} descriptor - Describes the description of a real-world object.
     * @param {string} provider- 	Describes a service provider. This can be a restaurant, a hospital, a Store etc
     * @param {string} fulfillment- Describes how a single product/service will be rendered/fulfilled to the end customer.
     * @param {string} payment- Describes a payment.
     * @param {string} category- Describes a category.
     * @param {string} offer- Describes an offer.
     * @param {string} item- Describes a product or a service offered to the end consumer by the provider.
     * @param {string} tags- Describes a tag. This is a simple key-value store which is used to contain extended metadata.
     */
    item: Item;
    constructor(item: Item);
}
