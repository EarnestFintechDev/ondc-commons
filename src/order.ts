import { Documentation } from "@smoke-trees/postgres-backend";
import { Billing } from "./billing";
// import { Payment } from "./common";
import { Document } from "./document";
import { Fulfillments as Fulfillment } from "./fullFillment";
import { Payments as Payment } from "./payment";
import { Quotation } from "./quotation";
import { Scalar } from "./scalar";
// import { Items } from "./Item";
@Documentation.addSchema({type: 'object'})
class Items{
  /**
     * @param {string} id-  Item/properties/idstring. This is the most unique identifier of a service item. An example of an Item ID could be the SKU of a product.
     * @param {string} quantity-  Describe Quantity.
     
    */
   @Documentation.addField({type: 'string'})
  id: string;
  
  @Documentation.addField({type: 'object',properties: {
    counters: {type: 'number'},
    measure:{$ref:Documentation.getRef(Scalar)}
  }})

  quantity: {
    count: number | 0;
    measure: Scalar;
  };
  constructor(id: string,quantity: {count: number|0,measure:Scalar})
  {
    this.id=id;
    this.quantity=quantity;
  }
};
@Documentation.addSchema({type: 'object'})

class add_Ons{
  /**
   * @param {string} id- AddOn/properties/idstring. ID of the add-on. This follows the syntax {item.id}/add-on/{add-on unique id} for item specific add-on OR.
   */
  @Documentation.addField({type: "string"})
  id: string;
  constructor(id: string){
    this.id=id
  }
};
@Documentation.addSchema({type: 'object'})

class Offerr{
  /**
   * @param {string} id- Offer/properties/idstring.
   */
   @Documentation.addField({type: "string"})
   id: string;
   constructor(id: string){
     this.id=id
   }
};

@Documentation.addSchema({ type: "object" })
export class Order {
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
  @Documentation.addField({ type: "string" })
  id!: string | null;
  @Documentation.addField({ type: "string" })
  state!: string | null;
  @Documentation.addField({ type: "object",properties:{
    id: { type: "string"},
    locations:{type:"object",properties:{
    id: { type: "string"},
    }}
  }})
  provider!: {
    id: string | null;
    // @Documentation.addField({ type: 'array' })

    locations: [
      {
        id: string;
      }
    ];
  };
  @Documentation.addField({
    type: "array",
    items: {$ref:Documentation.getRef(Items)}
    }
  )
  items!: [Items];
  @Documentation.addField({
    type: "array",
    items: {$ref:Documentation.getRef(add_Ons)}
    })
  add_ons!: [add_Ons];
  @Documentation.addField({
    type: "array",
    items: {$ref:Documentation.getRef(Offerr)}
    })
  offers!: [Offerr];
  @Documentation.addField({type: "array", items: {$ref: Documentation.getRef(Document) }})
  documents!: [Document];
  @Documentation.addField({ $ref: Documentation.getRef(Billing) })
  billing!: Billing;
  @Documentation.addField({ $ref: Documentation.getRef(Fulfillment) })
  fulfillment!: Fulfillment;
  @Documentation.addField({ $ref: Documentation.getRef(Quotation) })
  quote!: Quotation;
  @Documentation.addField({ $ref: Documentation.getRef(Payment) })
  payment!: Payment;
}

