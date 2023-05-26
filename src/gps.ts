import { Documentation } from "@smoke-trees/postgres-backend";

@Documentation.addSchema({ type:"object"})
export class Gps {
  /**
   *@param {string} gps -: pattern: ^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$.Describes a gps coordinate.
   */
  @Documentation.addField({type:"string",})
  gps!: string;
}
