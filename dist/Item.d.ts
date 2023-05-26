import { Price } from "./Price";
import { DeliveryType, occasionType, usabilityType } from "./common";
import { Contacts } from "./contact";
import { Descriptors } from "./descriptor";
import { Time } from "./time";
import { ItemQuantity } from "./itemQuantity";
export declare class Items {
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
    id: string;
    parent_item_id?: string | null;
    descriptor?: Descriptors;
    price?: Price;
    quantity?: ItemQuantity;
    category_id?: string;
    fulfillment_ids?: string[];
    rating?: number;
    location_id?: string;
    time?: Time;
    rateable?: boolean | false;
    matched?: boolean | false;
    related?: boolean | false;
    recommended?: boolean | false;
    "@ondc/org/brand_provider_name"?: string;
    "@ondc/org/brand_provider_contact_details"?: Contacts;
    "@ondc/org/delivery_type"?: DeliveryType;
    "@ondc/org/denomination"?: [number];
    "@ondc/org/occasion"?: occasionType;
    "@ondc/org/usability"?: usabilityType;
    "@ondc/org/expiry_period"?: string;
    "@ondc/org/terms_and_conditions"?: string;
    "@ondc/org/returnable"?: boolean;
    "@ondc/org/seller_pickup_return"?: boolean;
    "@ondc/org/return_window"?: string;
    "@ondc/org/cancellable"?: boolean;
    "@ondc/org/time_to_ship"?: string;
    "@ondc/org/available_on_cod"?: boolean;
    "@ondc/org/contact_details_consumer_care"?: string;
    "@ondc/org/statutory_reqs_packaged_commodities"?: object;
    "@ondc/org/statutory_reqs_prepackaged_food"?: object;
    "@ondc/org/mandatory_reqs_veggies_fruits"?: object;
    tags?: [];
}
