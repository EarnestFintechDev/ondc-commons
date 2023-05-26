import { Scalar } from "./scalar";
export declare class ItemQuantity {
    /**
    * Describes count or amount of an item.
    * @param {number} count - type number minimum 0.
    * @param {string} measure -  An object representing a scalar quantity.
    */
    allocated?: {
        count?: number | 0;
        measure?: Scalar;
    };
    available?: {
        count?: number | 0;
        measure?: Scalar;
    };
    maximum?: {
        count?: number | 0;
        measure?: Scalar;
    };
    minimum?: {
        count?: number | 0;
        measure: Scalar;
    };
    selected?: {
        count?: number | 0;
        measure: Scalar;
    };
    constructor(allocated: {
        count?: number;
        measure: Scalar;
    }, available: {
        count?: number;
        measure: Scalar;
    }, maximum: {
        count?: number;
        measure: Scalar;
    }, minimum: {
        count?: number;
        measure: Scalar;
    }, selected: {
        count?: number;
        measure: Scalar;
    });
}
