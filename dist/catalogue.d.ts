import { category as Categories } from "./category";
import { Offer as Offers } from "./offer";
import { Descriptors as Descriptor } from "./descriptor";
import { Fulfillments } from "./fullFillment";
import { Payments } from "./payment";
import { Providers } from "./provider";
export declare class Catalogue {
    /**
     * Describes a Seller App catalog.
     * @param {string} description - Describes the description of a real-world object.
     * @param {string} categories - Describes a category.
     * @param {string} fulfillments - Describes how a single product/service will be rendered/fulfilled to the end customer.
     * @param {string} payments - Describes a payment.
     * @param {string} offers - Describes an offer.
     * @param {string} providers - 	Describes a service provider. This can be a restaurant, a hospital, a Store etc.
     * @param {string} exp-  Time after which catalog has to be refreshed.
     */
    descriptions: Descriptor;
    categories: [Categories];
    fulfillments: [Fulfillments];
    payments: [Payments];
    offers: [Offers];
    providers: [Providers];
    exp: string;
    constructor(description: Descriptor, categories: [Categories], fulfillments: [Fulfillments], payments: [Payments], offers: [Offers], providers: [Providers], exp: string);
}
