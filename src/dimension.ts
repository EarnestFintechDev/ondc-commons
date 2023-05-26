import { Documentation } from "@smoke-trees/postgres-backend";
import { Scalar } from "./scalar";

@Documentation.addSchema({ type:"object"})
export class Dimension {
  /**
   * Describes a Seller App catalog.
   * @param {string} length - An object representing a scalar quantity.
   * @param {string} breadth - An object representing a scalar quantity.
   * @param {string} height - An object representing a scalar quantity.
   */
  @Documentation.addField({$ref: Documentation.getRef(Scalar)})
  length: Scalar;
  @Documentation.addField({$ref: Documentation.getRef(Scalar)})
  breadth: Scalar;
  @Documentation.addField({$ref: Documentation.getRef(Scalar)})
  height: Scalar;
  constructor(length: Scalar, breadth:Scalar,height:Scalar) {
    this.length = length;
    this.breadth = breadth;
    this.height = height;

  }
}
