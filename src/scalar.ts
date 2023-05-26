import { Documentation } from "@smoke-trees/postgres-backend";
import { Scalar as scalar } from "./common";

@Documentation.addSchema({ type: 'object' })
export class Scalar{
    /**
   * An object representing a scalar quantity..
   * @param {string} type- Enum type.
   * @param {number} value - number.
   * @param {number} estimted_value - number.
   * @param {number} vcomputed_alue - number.
   * @param {number} range - min and max number.
   * @param {string} unit - Street name or number.
   */
     @Documentation.addField({ type: 'string' })
     type?: type | null;
     @Documentation.addField({ type: 'number' })
     value?: number;
     @Documentation.addField({ type: 'number' })
     estimated_value?: number | null;
     @Documentation.addField({ type: 'number' })
     computed_value?: number | null;
     @Documentation.addField({ type: 'object',properties:{
        min:{type: 'number',},
        max:{type: 'number',}
     }})
     range?: {
       min: number | null;
       max: number | null;
     };
     unit?: string;
   
}
enum type {
    "CONSTANT",
    "VARIABLE",
  }