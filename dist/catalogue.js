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
exports.Catalogue = void 0;
var postgres_backend_1 = require("@smoke-trees/postgres-backend");
var category_1 = require("./category");
var offer_1 = require("./offer");
var descriptor_1 = require("./descriptor");
var fullFillment_1 = require("./fullFillment");
var payment_1 = require("./payment");
var provider_1 = require("./provider");
var Catalogue = /** @class */ (function () {
    function Catalogue(description, categories, fulfillments, payments, offers, providers, exp) {
        this.descriptions = description;
        this.categories = categories;
        this.fulfillments = fulfillments;
        this.payments = payments;
        this.offers = offers;
        this.providers = providers;
        this.exp = exp;
    }
    __decorate([
        postgres_backend_1.Documentation.addField({ $ref: postgres_backend_1.Documentation.getRef(descriptor_1.Descriptors) }),
        __metadata("design:type", descriptor_1.Descriptors)
    ], Catalogue.prototype, "descriptions", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({
            type: "array",
            items: { $ref: postgres_backend_1.Documentation.getRef(category_1.category) },
        }),
        __metadata("design:type", Array)
    ], Catalogue.prototype, "categories", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({
            type: "array",
            items: { $ref: postgres_backend_1.Documentation.getRef(fullFillment_1.Fulfillments) },
        }),
        __metadata("design:type", Array)
    ], Catalogue.prototype, "fulfillments", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({
            type: "array",
            items: { $ref: postgres_backend_1.Documentation.getRef(payment_1.Payments) },
        }),
        __metadata("design:type", Array)
    ], Catalogue.prototype, "payments", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({
            type: "array",
            items: { $ref: postgres_backend_1.Documentation.getRef(offer_1.Offer) },
        }),
        __metadata("design:type", Array)
    ], Catalogue.prototype, "offers", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({
            type: "array",
            items: { $ref: postgres_backend_1.Documentation.getRef(provider_1.Providers) },
        }),
        __metadata("design:type", Array)
    ], Catalogue.prototype, "providers", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", String)
    ], Catalogue.prototype, "exp", void 0);
    Catalogue = __decorate([
        postgres_backend_1.Documentation.addSchema({
            type: "object", description: "Describes a Seller App catalog"
        }),
        __metadata("design:paramtypes", [descriptor_1.Descriptors, Array, Array, Array, Array, Array, String])
    ], Catalogue);
    return Catalogue;
}());
exports.Catalogue = Catalogue;
//# sourceMappingURL=catalogue.js.map