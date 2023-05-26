import { Documentation } from "@smoke-trees/postgres-backend";
import { Price } from "./Price";

@Documentation.addSchema({ type: "object" })
export class Break {
  /**
   * @param {number} title - Describe a title.
   * @param {string} price -  Describe a price.
   */
  @Documentation.addField({ type: "string" })
  title: string;
  @Documentation.addField({ $ref: Documentation.getRef(Price) })
  price: Price;
  constructor(title: string, price: Price) {
    this.title = title;
    this.price = price;
  }
}
