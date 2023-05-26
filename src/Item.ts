import { Documentation } from "@smoke-trees/postgres-backend";
import { Price } from "./Price";
import { DeliveryType, Item, occasionType, usabilityType } from "./common";
import { Contacts } from "./contact";
import { Descriptors } from "./descriptor";
import { Time } from "./time";
import { ItemQuantity } from "./itemQuantity";


export class Items {
  /**
 * An element in the feedback form. It can be question or an answer to the question.
 * @param {string} id - This is the most unique identifier of a service item. An example of an Item ID could be the SKU of a product.
 * @param {string} parent_id -  This is the most unique identifier of a service item. An example of an Item ID could be the SKU of a product..
 * @param {string} descriptor - Describes the description of a real-world object.
 * @param {string} price - Describes the price of an item. Allows for domain extension.
 * @param {string} descriptor - Describes the description of a real-world object.
 * @param {string} category_id - Unique id of the category.
 * @param {string} fulfillment_id - Unique reference ID to the fulfillment of an order.
 * @param {string} location_id - Location/properties/idstring.
 * @param {number} rating - Rating value given to the object.
 * @param {string} time - Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations.
 * @param {boolean} rateable - If the entity can be rated or not.
 * @param {boolean} matched - boolean.
 * @param {boolean} related - boolean.
 * @param {boolean} recommended - boolean.
 * @param {array} tags - Describes a tag. This is a simple key-value store which is used to contain extended metadata.
 */
  @Documentation.addField({ type: 'string' })
    id!: string;

    @Documentation.addField({ type: 'string' })
    parent_item_id?: string | null;

    @Documentation.addField({ $ref: Documentation.getRef(Descriptors) })
  descriptor?: Descriptors;

    @Documentation.addField({ $ref: Documentation.getRef(Price) })
  price?: Price;

    @Documentation.addField({ $ref: Documentation.getRef(ItemQuantity) })
    quantity?: ItemQuantity

    @Documentation.addField({ type: 'string' })
  category_id?: string;

    @Documentation.addField({ type: 'string' })
  fulfillment_ids?: string[];

    @Documentation.addField({ type: 'number' })
    rating?: number;

    @Documentation.addField({ type: 'string' })
  location_id?: string;

    @Documentation.addField({ $ref: Documentation.getRef(Time) })
    time?: Time;

  @Documentation.addField({ type: 'boolean', default: false })
    rateable?: boolean | false;

    @Documentation.addField({ type: 'boolean', default: false })
  matched?: boolean | false;

    @Documentation.addField({ type: 'boolean', default: false })
    related?: boolean | false;

    @Documentation.addField({ type: 'boolean', default: false })
    recommended?: boolean | false;

    @Documentation.addField({ type: 'string' })
  "@ondc/org/brand_provider_name"?: string

    @Documentation.addField({ $ref: Documentation.getRef(Contacts) })
  "@ondc/org/brand_provider_contact_details"?: Contacts

    @Documentation.addField({ type: "string", enum: ["SMS", "EMAIL", "SMS_EMAIL", "PHYSICAL"] })
  "@ondc/org/delivery_type"?: DeliveryType

  @Documentation.addField({ type: 'array', items: { type: 'number' } })
    "@ondc/org/denomination"?: [number]

  @Documentation.addField({ type: "string", enum: ["BIRTHDAY", "MARRIAGE", "FESTIVAL", "FRIENDSHIP", "OTHER"] })
    "@ondc/org/occasion"?: occasionType

  @Documentation.addField({ type: "string", enum: ["online", "offline", "both"] })
  "@ondc/org/usability"?: usabilityType

    @Documentation.addField({ type: 'string' })
    "@ondc/org/expiry_period"?: string

    @Documentation.addField({ type: 'string' })
  "@ondc/org/terms_and_conditions"?: string

    @Documentation.addField({ type: 'boolean', default: false })
  "@ondc/org/returnable"?: boolean

    @Documentation.addField({ type: 'boolean', default: false })
  "@ondc/org/seller_pickup_return"?: boolean

    @Documentation.addField({ type: 'string' })
  "@ondc/org/return_window"?: string

    @Documentation.addField({ type: 'boolean', default: false })
  "@ondc/org/cancellable"?: boolean

    @Documentation.addField({ type: 'string' })
  "@ondc/org/time_to_ship"?: string

    @Documentation.addField({ type: 'boolean', default: false })
  "@ondc/org/available_on_cod"?: boolean

    @Documentation.addField({ type: 'string' })
    "@ondc/org/contact_details_consumer_care"?: string

    @Documentation.addField({ type: 'object' })
    "@ondc/org/statutory_reqs_packaged_commodities"?: object

    @Documentation.addField({ type: 'object' })
    "@ondc/org/statutory_reqs_prepackaged_food"?: object

    @Documentation.addField({ type: 'object' })
    "@ondc/org/mandatory_reqs_veggies_fruits"?: object

  @Documentation.addField({ type: 'array', items: { type: 'object' } })
    tags?: [];

}