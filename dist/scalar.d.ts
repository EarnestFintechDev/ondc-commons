export declare class Scalar {
    /**
   * An object representing a scalar quantity..
   * @param {string} type- Enum type.
   * @param {number} value - number.
   * @param {number} estimted_value - number.
   * @param {number} vcomputed_alue - number.
   * @param {number} range - min and max number.
   * @param {string} unit - Street name or number.
   */
    type?: type | null;
    value?: number;
    estimated_value?: number | null;
    computed_value?: number | null;
    range?: {
        min: number | null;
        max: number | null;
    };
    unit?: string;
}
declare enum type {
    "CONSTANT" = 0,
    "VARIABLE" = 1
}
export {};
