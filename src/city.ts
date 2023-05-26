import { Documentation } from "@smoke-trees/postgres-backend";
import { City } from "./common";

@Documentation.addSchema({ type: "object" })
export class Cities {
  /**
   * Describes a city.
   * @param {string} name - Name of the city.
   * @param {string} code - Codification of city code will be using the std code of the city e.g. for Bengaluru, city code is 'std:080'.
   */
  @Documentation.addField({ type: "string" })
  name?: string;
  @Documentation.addField({ type: "string" })
  code?: string;
}
