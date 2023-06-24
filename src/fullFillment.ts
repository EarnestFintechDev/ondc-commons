import { Documentation } from "@smoke-trees/postgres-backend";
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

@Documentation.addSchema({ type: "object" })
export class Fulfillments {
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
  @Documentation.addField({ type: "string" })
  id?: string | null;
  @Documentation.addField({ type: "string" })
  type?: string | null;
  @Documentation.addField({ type: "string" })
  provider_id?: string | null;
  @Documentation.addField({ type: "number" })
  rating?: number | 0;
  state?: State;
  @Documentation.addField({ type: "boolean" })
  tracking?: boolean | false;
  @Documentation.addField({
    type: "object",
    properties: {
      contact: { $ref: Documentation.getRef(Contact) },

      person: { $ref: Documentation.getRef(Person) },
    },
  })
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

  @Documentation.addField({ $ref: Documentation.getRef(Agent) })
  agent?: Agent | null;

  @Documentation.addField({ $ref: Documentation.getRef(Person) })
  person?: Person | null;

  @Documentation.addField({ $ref: Documentation.getRef(Contact) })
  contact?: Contact | null;

  @Documentation.addField({ $ref: Documentation.getRef(Vehicle) })
  vehicle?: Vehicle | null;

  @Documentation.addField({
    type: "object",
    properties: {
      location: { $ref: Documentation.getRef(Location) },
      time: { $ref: Documentation.getRef(Time) },

      contact: { $ref: Documentation.getRef(Contact) },

      person: { $ref: Documentation.getRef(Person) },
      authorization: { $ref: Documentation.getRef(Authorization) },
    },
  })
  start?: {

    location?: Location;
    time?: Time;
    instructions?: Descriptor;
    contact?: Contact;
    person?: Person;
    authorization?: Authorization;
  };

  @Documentation.addField({
    type: "object",
    properties: {
      location: { $ref: Documentation.getRef(Location) },
      time: { $ref: Documentation.getRef(Time) },
      contact: { $ref: Documentation.getRef(Contact) },
      person: { $ref: Documentation.getRef(Person) },
      authorization: { $ref: Documentation.getRef(Authorization) },
    },
  })
  end?: {
    location?: Location;
    time?: Time;
    instructions?: Descriptor;
    contact?: Contact;
    person?: Person;
    authorization?: Authorization;
  };

  @Documentation.addField({ type: "boolean" })
  rateable?: boolean | null;

  @Documentation.addField({ type: "object" })
  tags?: Tags[];


  constructor(
    id?: string,
    symbol?: string,
    provider_id?: string,
    agent?: Agent,
    type?: string,
    person?: Person,
    contact?: Contact,
    vehicle?: Vehicle,
    state?: State,
    start?: object,
    end?: object,
    rateable?: boolean,
    tags?: Tags[],
    stops?: {
      id?: string;
      contact?: Contact | null;
      person?: Person | null;
    }[],
    customer?: {
      id?: string;
      contact?: Contact | null;
      person?: Person | null;
    }
  ) {
    this.id = id;
    this.provider_id = provider_id;
    this.agent = agent;
    this.type = type;
    this.person = person;
    this.contact = contact;
    this.vehicle = vehicle;
    this.state = state;
    this.start = start;
    this.end = end;
    this.rateable = rateable;
    this.tags = tags
    this.stops = stops
    this.customer = customer
  }
}

export const FulfillmentsLookup: { [key: string]: { id: string, type: string } } = {
  F1: { id: 'F1', type: 'ONLINE_EMAIL_SMS' },
  F2: { id: 'F2', type: 'ONLINE_EMAIL_SMS' },
  F3: { id: 'F3', type: 'ONLINE_EMAIL_SMS' },
}
