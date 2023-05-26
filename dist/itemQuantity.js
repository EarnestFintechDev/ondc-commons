"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemQuantity = void 0;
var postgres_backend_1 = require("@smoke-trees/postgres-backend");
var scalar_1 = require("./scalar");
var ItemQuantity = /** @class */ (function () {
    function ItemQuantity(allocated, available, maximum, minimum, selected) {
        this.allocated = allocated;
        this.available = available;
        this.maximum = maximum;
        this.minimum = minimum;
        this.selected = selected;
    }
    __decorate([
        postgres_backend_1.Documentation.addField({
            type: "object", properties: {
                count: { type: "number", default: 0 },
                measure: { $ref: postgres_backend_1.Documentation.getRef(scalar_1.Scalar) }
            }
        }),
        __metadata("design:type", Object)
    ], ItemQuantity.prototype, "allocated", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({
            type: "object", properties: {
                count: { type: "number", default: 0 },
                measure: { $ref: postgres_backend_1.Documentation.getRef(scalar_1.Scalar) }
            }
        }),
        __metadata("design:type", Object)
    ], ItemQuantity.prototype, "available", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({
            type: "object", properties: {
                count: { type: "number", default: 0 },
                measure: { $ref: postgres_backend_1.Documentation.getRef(scalar_1.Scalar) }
            }
        }),
        __metadata("design:type", Object)
    ], ItemQuantity.prototype, "maximum", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({
            type: "object", properties: {
                count: { type: "number", default: 0 },
                measure: { $ref: postgres_backend_1.Documentation.getRef(scalar_1.Scalar) }
            }
        }),
        __metadata("design:type", Object)
    ], ItemQuantity.prototype, "minimum", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({
            type: "object", properties: {
                count: { type: "number", default: 0 },
                measure: { $ref: postgres_backend_1.Documentation.getRef(scalar_1.Scalar) }
            }
        }),
        __metadata("design:type", Object)
    ], ItemQuantity.prototype, "selected", void 0);
    ItemQuantity = __decorate([
        postgres_backend_1.Documentation.addSchema({
            type: "object",
        }),
        __metadata("design:paramtypes", [Object, Object, Object, Object, Object])
    ], ItemQuantity);
    return ItemQuantity;
}());
exports.ItemQuantity = ItemQuantity;
//# sourceMappingURL=itemQuantity.js.map