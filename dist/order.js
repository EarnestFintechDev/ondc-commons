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
exports.Order = void 0;
var postgres_backend_1 = require("@smoke-trees/postgres-backend");
var billing_1 = require("./billing");
// import { Payment } from "./common";
var document_1 = require("./document");
var fullFillment_1 = require("./fullFillment");
var payment_1 = require("./payment");
var quotation_1 = require("./quotation");
var scalar_1 = require("./scalar");
// import { Items } from "./Item";
var Items = /** @class */ (function () {
    function Items(id, quantity) {
        this.id = id;
        this.quantity = quantity;
    }
    __decorate([
        postgres_backend_1.Documentation.addField({ type: 'string' }),
        __metadata("design:type", String)
    ], Items.prototype, "id", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: 'object', properties: {
                counters: { type: 'number' },
                measure: { $ref: postgres_backend_1.Documentation.getRef(scalar_1.Scalar) }
            } }),
        __metadata("design:type", Object)
    ], Items.prototype, "quantity", void 0);
    Items = __decorate([
        postgres_backend_1.Documentation.addSchema({ type: 'object' }),
        __metadata("design:paramtypes", [String, Object])
    ], Items);
    return Items;
}());
;
var add_Ons = /** @class */ (function () {
    function add_Ons(id) {
        this.id = id;
    }
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", String)
    ], add_Ons.prototype, "id", void 0);
    add_Ons = __decorate([
        postgres_backend_1.Documentation.addSchema({ type: 'object' }),
        __metadata("design:paramtypes", [String])
    ], add_Ons);
    return add_Ons;
}());
;
var Offerr = /** @class */ (function () {
    function Offerr(id) {
        this.id = id;
    }
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", String)
    ], Offerr.prototype, "id", void 0);
    Offerr = __decorate([
        postgres_backend_1.Documentation.addSchema({ type: 'object' }),
        __metadata("design:paramtypes", [String])
    ], Offerr);
    return Offerr;
}());
;
var Order = /** @class */ (function () {
    function Order() {
    }
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", Object)
    ], Order.prototype, "id", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", Object)
    ], Order.prototype, "state", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "object", properties: {
                id: { type: "string" },
                locations: { type: "object", properties: {
                        id: { type: "string" },
                    } }
            } }),
        __metadata("design:type", Object)
    ], Order.prototype, "provider", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({
            type: "array",
            items: { $ref: postgres_backend_1.Documentation.getRef(Items) }
        }),
        __metadata("design:type", Array)
    ], Order.prototype, "items", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({
            type: "array",
            items: { $ref: postgres_backend_1.Documentation.getRef(add_Ons) }
        }),
        __metadata("design:type", Array)
    ], Order.prototype, "add_ons", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({
            type: "array",
            items: { $ref: postgres_backend_1.Documentation.getRef(Offerr) }
        }),
        __metadata("design:type", Array)
    ], Order.prototype, "offers", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "array", items: { $ref: postgres_backend_1.Documentation.getRef(document_1.Document) } }),
        __metadata("design:type", Array)
    ], Order.prototype, "documents", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ $ref: postgres_backend_1.Documentation.getRef(billing_1.Billing) }),
        __metadata("design:type", billing_1.Billing)
    ], Order.prototype, "billing", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ $ref: postgres_backend_1.Documentation.getRef(fullFillment_1.Fulfillments) }),
        __metadata("design:type", fullFillment_1.Fulfillments)
    ], Order.prototype, "fulfillment", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ $ref: postgres_backend_1.Documentation.getRef(quotation_1.Quotation) }),
        __metadata("design:type", quotation_1.Quotation)
    ], Order.prototype, "quote", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ $ref: postgres_backend_1.Documentation.getRef(payment_1.Payments) }),
        __metadata("design:type", payment_1.Payments)
    ], Order.prototype, "payment", void 0);
    Order = __decorate([
        postgres_backend_1.Documentation.addSchema({ type: "object" })
    ], Order);
    return Order;
}());
exports.Order = Order;
//# sourceMappingURL=order.js.map