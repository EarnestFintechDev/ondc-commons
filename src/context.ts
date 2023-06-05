import { Documentation } from "@smoke-trees/postgres-backend";


enum Domain {
  "nic2004:52110" = "nic2004:52110",
}
export enum City {
  "std:080" = "std:080",
  "std:011" = "std:011",
  "std:0422" = "std:0422",
  "std:0364" = "std:0364",
  "std:0522" = "std:0522",
  "std:0755" = "std:0755",
  "std:044" = "std:044",
  " std:0497" = " std:0497",
  "std:0487" = "std:0487",
  "std:022" = "std:022",
  "std:020"= "std:020",
  "std:040" = "std:040",
  "std:0145" = "std:0145",
}
export enum Action {
  "search"="search",
  "select" = "select",
  "init" ="init",
  "confirm"="confirm",
  "update" ="update",
  "status" ="status",
  "track" = "track",
  "cancel"="cancel",
    "rating" ="rating",
  "support" ="support",
  "on_search" ="on_search",
  "on_select" ="on_select",
  "on_init" ="on_init",
  "on_confirm" ="on_confirm",
  "on_update" ="on_update",
  "on_status" ="on_status",
  "on_track" ="on_track",
  "on_cancel"="on_cancel",
  "on_rating"="on_rating",
  "on_support" ="on_support",
}
@Documentation.addSchema({ type: "object" })
export class Context {
  /**
   * 	Describes the price of an item. Allows for domain extension.
   * @param {string} domain - Codification of domain for ONDC.
   * @param {string} country - Country/properties/codestring. Country code as per ISO 3166 Alpha-3 code format.
   * @param {string} city -  City/properties/codestring. Codification of city code will be using the std code of the city e.g. for Bengaluru, city code is 'std:080'.Enum:[ std:080, std:011, std:0422, std:0364, std:0522, std:0755, std:044, std:0497, std:0487, std:022, std:020, std:040, std:0145 ]
   * @param {string} action -  Defines the ONDC API call. Any actions other than the enumerated actions are not supported by ONDC Protocol.
   * @param {string} core_version -  Version of ONDC core API specification being used.
   * @param {string} bap_id -  Unique id of the Buyer App. By default it is the fully qualified domain name of the Buyer App.
   * @param {string} bap_url -  URI of the Buyer App for accepting callbacks. Must have the same domain name as the bap_id.
   * @param {string} bpp_id -  Unique id of the Buyer App. By default it is the fully qualified domain name of the Buyer App.
   * @param {string} bpp_url -  URI of the Buyer App for accepting callbacks. Must have the same domain name as the bap_id.
   * @param {string} transaction_id -  This is a unique value which persists across all API calls from search through confirm.
   * @param {string} message_id - This is a unique value which persists during a request / callback cycle
   * @param {string} timestamp -  Time of request generation in RFC3339 format.
   * @param {string} key -    // The encryption public key of the sender.
   * @param {string} ttl -    // Timestamp for which this message holds valid in ISO8601 durations format - Outer limit for ttl for search, select, init, confirm, status, track, cancel, update, rating, support is 'PT30S' which is 30 seconds, different buyer apps can change this to meet their UX requirements, but it shouldn't exceed this outer limit.
  */




  @Documentation.addField({ type: "string", enum: ["nic2004: 52110"],default:Domain["nic2004:52110"] })
  domain: Domain;
  @Documentation.addField({
    type: "object", properties: {
      city: { type: "object", properties: { code: { type: 'string', enum: Object.keys(City), default: City["std:011"] } }},
      country: {
        type: "object", properties: {
          code: { type: 'string', default: "IND" },
        },
      }
    }
  })
  location: {
      city: { code: City },
      country: { code: string }
  };
  @Documentation.addField({ type: "string", enum: Object.keys(Action) })
  action: Action;
  @Documentation.addField({ type: "string" })
  version: string;
  @Documentation.addField({ type: "string" })
  bap_id?: string;
  @Documentation.addField({ type: "string" })
  bap_uri?: string;
  @Documentation.addField({ type: "string" })
  bpp_id: string | null;
  @Documentation.addField({ type: "string" })
  bpp_uri: string | null;
  @Documentation.addField({ type: "string" })
  transaction_id: string;
  @Documentation.addField({ type: "string" })
  message_id: string;
  @Documentation.addField({ type: "string" })
  timestamp: string;
  @Documentation.addField({ type: "string" })
  ttl: string ;
  constructor(
    ttl: string,
    location: {
      city: { code: City },
      country: { code: string }
    },
    timestamp: string,
    message_id: string,
    transaction_id: string,
    bpp_uri: string,
    bpp_id: string,
    version: string,
    action: Action,
    domain: Domain,
    bap_id?: string,
    bap_uri?: string,
    
  ) {
    this.domain = domain,
    this.location=location,
    this.action = action,
      (this.bpp_uri = bpp_uri),
      (this.bpp_id = bpp_id),
      (this.version = version),
      (this.message_id = message_id),
      (this.timestamp = timestamp),
      (this.transaction_id = transaction_id);
    this.ttl = ttl;
    this.bap_id = bap_id
    this.bap_uri = bap_uri
  }
}


