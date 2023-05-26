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
exports.AddOn = void 0;
var postgres_backend_1 = require("@smoke-trees/postgres-backend");
var descriptor_1 = require("./descriptor");
var Price_1 = require("./Price");
var AddOn = /** @class */ (function () {
    function AddOn(id, descriptor, price) {
        this.id = id,
            this.descriptor = descriptor,
            this.price = price;
    }
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", Object)
    ], AddOn.prototype, "id", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ $ref: postgres_backend_1.Documentation.getRef(descriptor_1.Descriptors) }),
        __metadata("design:type", descriptor_1.Descriptors)
    ], AddOn.prototype, "descriptor", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ $ref: postgres_backend_1.Documentation.getRef(Price_1.Price) }),
        __metadata("design:type", Price_1.Price)
    ], AddOn.prototype, "price", void 0);
    AddOn = __decorate([
        postgres_backend_1.Documentation.addSchema({ type: "object" }),
        __metadata("design:paramtypes", [String, descriptor_1.Descriptors, Price_1.Price])
    ], AddOn);
    return AddOn;
}());
exports.AddOn = AddOn;
//# sourceMappingURL=addOn.js.map