import { Documentation } from "@smoke-trees/postgres-backend";
import { Circle } from "./common";
import { Scalar } from "./scalar";

@Documentation.addSchema({ type: "object" })
export class Circles {
  /**
   * Describes a circular area on the map.
   * @param {string} gps - pattern: ^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$.Describes a gps coordinate.
   * @param {string} radius - An object representing a scalar quantity.
   */
  @Documentation.addField({ type: "string" })
  gps?: string | null;
  @Documentation.addField({ $ref: Documentation.getRef(Scalar) })
  radius?: Scalar;
  constructor(radius: Scalar, gps: string) {
    this.radius = radius;
    this.gps = gps;
  }
}
