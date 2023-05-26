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
exports.Items = void 0;
var postgres_backend_1 = require("@smoke-trees/postgres-backend");
var Price_1 = require("./Price");
var common_1 = require("./common");
var contact_1 = require("./contact");
var descriptor_1 = require("./descriptor");
var time_1 = require("./time");
var itemQuantity_1 = require("./itemQuantity");
var Items = /** @class */ (function () {
    function Items() {
    }
    __decorate([
        postgres_backend_1.Documentation.addField({ type: 'string' }),
        __metadata("design:type", String)
    ], Items.prototype, "id", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: 'string' }),
        __metadata("design:type", Object)
    ], Items.prototype, "parent_item_id", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ $ref: postgres_backend_1.Documentation.getRef(descriptor_1.Descriptors) }),
        __metadata("design:type", descriptor_1.Descriptors)
    ], Items.prototype, "descriptor", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ $ref: postgres_backend_1.Documentation.getRef(Price_1.Price) }),
        __metadata("design:type", Price_1.Price)
    ], Items.prototype, "price", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ $ref: postgres_backend_1.Documentation.getRef(itemQuantity_1.ItemQuantity) }),
        __metadata("design:type", itemQuantity_1.ItemQuantity)
    ], Items.prototype, "quantity", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: 'string' }),
        __metadata("design:type", String)
    ], Items.prototype, "category_id", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: 'string' }),
        __metadata("design:type", Array)
    ], Items.prototype, "fulfillment_ids", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: 'number' }),
        __metadata("design:type", Number)
    ], Items.prototype, "rating", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: 'string' }),
        __metadata("design:type", String)
    ], Items.prototype, "location_id", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ $ref: postgres_backend_1.Documentation.getRef(time_1.Time) }),
        __metadata("design:type", time_1.Time)
    ], Items.prototype, "time", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: 'boolean', default: false }),
        __metadata("design:type", Boolean)
    ], Items.prototype, "rateable", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: 'boolean', default: false }),
        __metadata("design:type", Boolean)
    ], Items.prototype, "matched", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: 'boolean', default: false }),
        __metadata("design:type", Boolean)
    ], Items.prototype, "related", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: 'boolean', default: false }),
        __metadata("design:type", Boolean)
    ], Items.prototype, "recommended", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: 'string' }),
        __metadata("design:type", String)
    ], Items.prototype, "@ondc/org/brand_provider_name", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ $ref: postgres_backend_1.Documentation.getRef(contact_1.Contacts) }),
        __metadata("design:type", contact_1.Contacts)
    ], Items.prototype, "@ondc/org/brand_provider_contact_details", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string", enum: ["SMS", "EMAIL", "SMS_EMAIL", "PHYSICAL"] }),
        __metadata("design:type", String)
    ], Items.prototype, "@ondc/org/delivery_type", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: 'array', items: { type: 'number' } }),
        __metadata("design:type", Array)
    ], Items.prototype, "@ondc/org/denomination", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string", enum: ["BIRTHDAY", "MARRIAGE", "FESTIVAL", "FRIENDSHIP", "OTHER"] }),
        __metadata("design:type", String)
    ], Items.prototype, "@ondc/org/occasion", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string", enum: ["online", "offline", "both"] }),
        __metadata("design:type", String)
    ], Items.prototype, "@ondc/org/usability", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: 'string' }),
        __metadata("design:type", String)
    ], Items.prototype, "@ondc/org/expiry_period", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: 'string' }),
        __metadata("design:type", String)
    ], Items.prototype, "@ondc/org/terms_and_conditions", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: 'boolean', default: false }),
        __metadata("design:type", Boolean)
    ], Items.prototype, "@ondc/org/returnable", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: 'boolean', default: false }),
        __metadata("design:type", Boolean)
    ], Items.prototype, "@ondc/org/seller_pickup_return", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: 'string' }),
        __metadata("design:type", String)
    ], Items.prototype, "@ondc/org/return_window", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: 'boolean', default: false }),
        __metadata("design:type", Boolean)
    ], Items.prototype, "@ondc/org/cancellable", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: 'string' }),
        __metadata("design:type", String)
    ], Items.prototype, "@ondc/org/time_to_ship", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: 'boolean', default: false }),
        __metadata("design:type", Boolean)
    ], Items.prototype, "@ondc/org/available_on_cod", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: 'string' }),
        __metadata("design:type", String)
    ], Items.prototype, "@ondc/org/contact_details_consumer_care", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: 'object' }),
        __metadata("design:type", Object)
    ], Items.prototype, "@ondc/org/statutory_reqs_packaged_commodities", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: 'object' }),
        __metadata("design:type", Object)
    ], Items.prototype, "@ondc/org/statutory_reqs_prepackaged_food", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: 'object' }),
        __metadata("design:type", Object)
    ], Items.prototype, "@ondc/org/mandatory_reqs_veggies_fruits", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: 'array', items: { type: 'object' } }),
        __metadata("design:type", Array)
    ], Items.prototype, "tags", void 0);
    return Items;
}());
exports.Items = Items;
//# sourceMappingURL=Item.js.map