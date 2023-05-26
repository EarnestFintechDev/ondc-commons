import { Agent } from "./agent";
import { Authorizations as Authorization } from "./authorization";
import { Contacts as Contact } from "./contact";
import { Descriptors as Descriptor } from "./descriptor";
import { Location } from "./location";
import { Persons as Person } from "./person";
import { State } from "./state";
import { Time } from "./time";
import { Vehicle } from "./vehicle";
import { Tags } from "./tags";
export declare class Fulfillments {
    /**
     * Describes the description of a real-world object.
     * @param {string} id -  Unique reference ID to the fulfillment of an .
     * @param {string} type - This describes the type of fulfillment.
     * @param {string} provider_id - short description.
     * @param {string} rating - Rating/properties/valuenumber. minimum: 0. Rating value given to the object.
     * @param {string} state - 	Describes a state.
     * @param {string} tracking -  Indicates whether the fulfillment allows tracking.
     * @param {string} customer - Describe a customer.
     * @param {string} agent -	Describes an  executor.
     * @param {string} person -	Describes a person.
     * @param {string} contact - Describes a contact .
     * @param {string} vehicle - Describes the properties of a vehicle used in a mobility service .
     * @param {string} start -Details on the start of fulfillment .
     * @param {string} end -Details on the end of fulfillment.
     * @param {string} rateable -If the entity can be rated or not.
     * @param {string} tags -	Describes a tag. This is a simple key-value store which is used to contain extended metadata .
     */
    id?: string | null;
    type?: string | null;
    provider_id?: string | null;
    rating?: number | 0;
    state?: State;
    tracking?: boolean | false;
    customer?: {
        id?: string;
        contact?: Contact | null;
        person?: Person | null;
    };
    stops?: {
        id?: string;
        contact?: Contact | null;
        person?: Person | null;
    }[];
    agent?: Agent | null;
    person?: Person | null;
    contact?: Contact | null;
    vehicle?: Vehicle | null;
    start?: {
        location?: Location;
        time?: Time;
        instructions?: Descriptor;
        contact?: Contact;
        person?: Person;
        authorization?: Authorization;
    };
    end?: {
        location?: Location;
        time?: Time;
        instructions?: Descriptor;
        contact?: Contact;
        person?: Person;
        authorization?: Authorization;
    };
    rateable?: boolean | null;
    tags?: Tags[];
    constructor(id?: string, symbol?: string, provider_id?: string, agent?: Agent, type?: string, person?: Person, contact?: Contact, vehicle?: Vehicle, state?: State, start?: object, end?: object, rateable?: boolean, tags?: Tags[], stops?: {
        id?: string;
        contact?: Contact | null;
        person?: Person | null;
    }[], customer?: {
        id?: string;
        contact?: Contact | null;
        person?: Person | null;
    });
}
