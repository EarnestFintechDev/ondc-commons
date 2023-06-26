import { Documentation } from "@smoke-trees/postgres-backend";
import { Contact } from "./common";

@Documentation.addSchema({ type: 'object' })
export class Contacts{
      /**
   * Describes a circular area on the map.
   * @param {string} phone - phone.
   * @param {string} email - email.
   * @param {string} tags - Describes a tag. This is a simple key-value store which is used to contain extended metadata.
   *
   */
  @Documentation.addField({ type:"string"})
  phone: string;
  @Documentation.addField({ type:"string"})
  email: string;
  @Documentation.addField({ type:"object"})
  tags?: object;
  constructor(phone: string, email: string, tags?: object)
  {
    this.phone = phone;
    this.email = email;
    this.tags = tags;
  }
}
