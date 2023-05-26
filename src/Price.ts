import { Documentation } from "@smoke-trees/postgres-backend";
import { Price as price } from "./common";

@Documentation.addSchema({ type: "object" })
export class Price {
  /**
   * 	Describes the price of an item. Allows for domain extension.
   * @param {string} currency - ISO 4217 alphabetic currency code e.g. 'INR'.
   * @param {string} value -  DecimalValuestring. pattern: [+-]?([0-9]*[.])?[0-9]+. Describes a decimal value.
   * @param {string} estimated_value -  DecimalValuestring. pattern: [+-]?([0-9]*[.])?[0-9]+. Describes a decimal value.
   * @param {string} computed_value -  DecimalValuestring. pattern: [+-]?([0-9]*[.])?[0-9]+. Describes a decimal value.
   * @param {string} listed_value -  DecimalValuestring. pattern: [+-]?([0-9]*[.])?[0-9]+. Describes a decimal value.
   * @param {string} offered_value -  DecimalValuestring. pattern: [+-]?([0-9]*[.])?[0-9]+. Describes a decimal value.
   * @param {string} minimum_value -  DecimalValuestring. pattern: [+-]?([0-9]*[.])?[0-9]+. Describes a decimal value.
   * @param {string} maximum_value -  DecimalValuestring. pattern: [+-]?([0-9]*[.])?[0-9]+. Describes a decimal value.
   */
  @Documentation.addField({ type: "string" })
  currency?: string | null;
  @Documentation.addField({ type: "string" })
  value?: string | null;
  @Documentation.addField({ type: "string" })
  estimated_value?: string | null;
  @Documentation.addField({ type: "string" })
  computed_value?: string | null;
  @Documentation.addField({ type: "string" })
  listed_value?: string | null;
  @Documentation.addField({ type: "string" })
  offered_value?: string | null;
  @Documentation.addField({ type: "string" })
  minimum_value?: string | null;
  @Documentation.addField({ type: "string" })
  maximum_value?: string | null;
}
