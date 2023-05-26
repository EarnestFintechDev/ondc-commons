import { Categories, Descriptor, Item, Offers, Payment } from "./common";
import { Fulfillments as Fulfillment } from "./fullFillment";
import { Time } from "./time";
import { Location } from "./location";
export declare class Providers {
    id: string;
    descriptor?: Descriptor;
    category_id?: string;
    time?: Time;
    categories?: [Categories];
    fulfillments?: [Fulfillment];
    payments?: [Payment];
    locations?: [Location];
    offers?: [Offers];
    items?: [Item];
    exp?: string;
    rateable?: boolean;
    tags?: [];
}
