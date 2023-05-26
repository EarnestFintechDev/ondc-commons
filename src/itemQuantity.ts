
import { Documentation } from "@smoke-trees/postgres-backend";
import { Scalar } from "./scalar";
@Documentation.addSchema({
    type: "object",
})
export class ItemQuantity {
    /**
    * Describes count or amount of an item.
    * @param {number} count - type number minimum 0.
    * @param {string} measure -  An object representing a scalar quantity.
    */
    @Documentation.addField({
        type: "object", properties: {
            count: { type: "number", default: 0 },
            measure: {$ref: Documentation.getRef(Scalar)}
    }})
    allocated?: {
        count?: number | 0;
        measure?: Scalar;
    };
    @Documentation.addField({
        type: "object", properties: {
            count: { type: "number", default: 0 },
            measure: { $ref: Documentation.getRef(Scalar) }
        }
    })
    available?: {
        count?: number | 0;
        measure?: Scalar;
    };
    @Documentation.addField({
        type: "object", properties: {
            count: { type: "number", default: 0 },
            measure: { $ref: Documentation.getRef(Scalar) }
        }
    })
    maximum?: {
        count?: number | 0;
        measure?: Scalar;
    };
    @Documentation.addField({
        type: "object", properties: {
            count: { type: "number", default: 0 },
            measure: { $ref: Documentation.getRef(Scalar) }
        }
    })
    minimum?: {
        count?: number | 0;
        measure: Scalar;
    };
    @Documentation.addField({
        type: "object", properties: {
            count: { type: "number", default: 0 },
            measure: { $ref: Documentation.getRef(Scalar) }
        }
    })
    selected?: {
        count?: number | 0;
        measure: Scalar;
    };
    constructor(allocated: { count?: number, measure: Scalar },
        available: { count?: number, measure: Scalar },
        maximum: { count?: number, measure: Scalar },
        minimum: { count?: number, measure: Scalar },
        selected: { count?: number, measure: Scalar }
    ) {
        this.allocated = allocated;
        this.available = available;
        this.maximum = maximum;
        this.minimum = minimum
        this.selected = selected

    }
}