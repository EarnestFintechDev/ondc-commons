import { Documentation } from "@smoke-trees/postgres-backend";
import { Break } from "./break";
import { Quotation as quotation } from "./common";
import { Price } from "./Price";
@Documentation.addSchema({ type: "object" })
export class Quotation {
  /**
   * Describes a quote.
   * @param {number} ttl - type string.
   * @param {string} price -  Describes duration as per ISO8601 format.
   * @param {number} breakup - Describe a breakup.
   */
  @Documentation.addField({ $ref: Documentation.getRef(Price) })
  price?: Price;
  @Documentation.addField({ $ref: Documentation.getRef(Break) })
  breakup?: [Break];
  @Documentation.addField({ type: "string" })
  ttl?: string;
}
