import { Documentation } from "@smoke-trees/postgres-backend";

@Documentation.addSchema({ type: "object"})

export class Countries{
   /**
   * Describes a country.
   * @param {string} name - Name of the country.
   * @param {string} code - Country code as per ISO 3166 Alpha-3 code format.
   */
  @Documentation.addField({ type: "string"})
  name: string;
  @Documentation.addField({ type: "string"})
  code: String;
  constructor(name: string, code:string){
    this.name = name;
    this.code = code;
  }
}