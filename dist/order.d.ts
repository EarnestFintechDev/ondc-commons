import { Billing } from "./billing";
import { Document } from "./document";
import { Fulfillments as Fulfillment } from "./fullFillment";
import { Payments as Payment } from "./payment";
import { Quotation } from "./quotation";
import { Scalar } from "./scalar";
declare class Items {
    /**
       * @param {string} id-  Item/properties/idstring. This is the most unique identifier of a service item. An example of an Item ID could be the SKU of a product.
       * @param {string} quantity-  Describe Quantity.
       
      */
    id: string;
    quantity: {
        count: number | 0;
        measure: Scalar;
    };
    constructor(id: string, quantity: {
        count: number | 0;
        measure: Scalar;
    });
}
declare class add_Ons {
    /**
     * @param {string} id- AddOn/properties/idstring. ID of the add-on. This follows the syntax {item.id}/add-on/{add-on unique id} for item specific add-on OR.
     */
    id: string;
    constructor(id: string);
}
declare class Offerr {
    /**
     * @param {string} id- Offer/properties/idstring.
     */
    id: string;
    constructor(id: string);
}
export declare class Order {
    /**
     *  Describes the details of an order
     * @param {string} id-  Hash of order object without id.
     * @param {string} state-  Describe a state.
     * @param {string} provider-  Provider/properties/idstring. Id of the provider and Location/properties/idstring, maxItem 1 .
     * @param {string} item-  Describe a item.
     * @param {string} add_on-  Describe a add_om.
     * @param {string} offers-  Describe a offers.
     * @param {string} documents- Describe a documents.
     * @param {string} billing- Describe a billing.
     * @param {string} fulfillment- Describe a fullfilments.
     * @param {string} quote- Describe a quote.
     * @param {string} payment- Describe a payment.
     */
    id: string | null;
    state: string | null;
    provider: {
        id: string | null;
        locations: [
            {
                id: string;
            }
        ];
    };
    items: [Items];
    add_ons: [add_Ons];
    offers: [Offerr];
    documents: [Document];
    billing: Billing;
    fulfillment: Fulfillment;
    quote: Quotation;
    payment: Payment;
}
export {};
