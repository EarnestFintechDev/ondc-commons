import { Documentation } from "@smoke-trees/postgres-backend";
import { Organiztion } from "./common";

@Documentation.addSchema({ type: 'object' })
export class Organization {
  /**
   * Describes an organization.
   * @param {string} name - name.
   * @param {string} cred - cred.
   */

  @Documentation.addField({ type: "string" })
  name: string;
  @Documentation.addField({ type: "string" })
  cred: string;
  constructor(name: string, cred: string) {
    this.name = name;
    this.cred = cred;
  }
}
