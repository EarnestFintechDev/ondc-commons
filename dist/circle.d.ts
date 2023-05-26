import { Scalar } from "./scalar";
export declare class Circles {
    /**
     * Describes a circular area on the map.
     * @param {string} gps - pattern: ^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$.Describes a gps coordinate.
     * @param {string} radius - An object representing a scalar quantity.
     */
    gps?: string | null;
    radius?: Scalar;
    constructor(radius: Scalar, gps: string);
}
