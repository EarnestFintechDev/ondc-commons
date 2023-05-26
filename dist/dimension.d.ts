import { Scalar } from "./scalar";
export declare class Dimension {
    /**
     * Describes a Seller App catalog.
     * @param {string} length - An object representing a scalar quantity.
     * @param {string} breadth - An object representing a scalar quantity.
     * @param {string} height - An object representing a scalar quantity.
     */
    length: Scalar;
    breadth: Scalar;
    height: Scalar;
    constructor(length: Scalar, breadth: Scalar, height: Scalar);
}
