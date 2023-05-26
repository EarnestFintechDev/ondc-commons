import { Documentation } from "@smoke-trees/postgres-backend";
import { Categories, Descriptor, Item, Offers, Payment, Provider as provider } from "./common";
import { Fulfillments as Fulfillment } from "./fullFillment";
import { Time } from "./time";
import { Payments } from "./payment";
import { Items } from "./Item";
import { Location } from "./location";
import { Descriptors } from "./descriptor";

@Documentation.addSchema({ type: 'object'})
export class Providers {
    @Documentation.addField({ type: 'string',nullable:false})
    id!: string;
    // Id of the provider
    @Documentation.addField({
        type: 'array', items: {
            $ref: Documentation.getRef(Descriptors)
        }
    })
    descriptor?: Descriptor;
    @Documentation.addField({ type: 'string' })

    category_id?: string;
    // Category Id of the provider

    // rating	Rating/properties/value[...]
    @Documentation.addField({
        type: 'array', items: {
            $ref: Documentation.getRef(Time)
        }
    })
    time?: Time;
    categories?: [Categories];
    @Documentation.addField({
        type: 'array', items: {
            $ref: Documentation.getRef(Fulfillment)
        }
    })
    fulfillments?: [Fulfillment];
    @Documentation.addField({
        type: 'array', items: {
            $ref: Documentation.getRef(Payments)
        }
    })
    payments?: [Payment];
    @Documentation.addField({
        type: 'array', items: {
            $ref: Documentation.getRef(Location)
        }
    })
    locations?: [Location];
    offers?: [Offers];
    @Documentation.addField({
        type: 'array', items: {
            $ref: Documentation.getRef(Items)
        }
    })
    items?: [Item];
    @Documentation.addField({ type: 'string' })
    exp?: string;
    // Time after which catalog has to be refreshed
    @Documentation.addField({ type: 'boolean', default: false })
    rateable?: boolean;
    @Documentation.addField({ type: 'array', })
    tags?: [];

}