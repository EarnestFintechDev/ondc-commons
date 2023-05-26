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
exports.Providers = void 0;
var postgres_backend_1 = require("@smoke-trees/postgres-backend");
var fullFillment_1 = require("./fullFillment");
var time_1 = require("./time");
var payment_1 = require("./payment");
var Item_1 = require("./Item");
var location_1 = require("./location");
var descriptor_1 = require("./descriptor");
var Providers = /** @class */ (function () {
    function Providers() {
    }
    __decorate([
        postgres_backend_1.Documentation.addField({ type: 'string', nullable: false }),
        __metadata("design:type", String)
    ], Providers.prototype, "id", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({
            type: 'array', items: {
                $ref: postgres_backend_1.Documentation.getRef(descriptor_1.Descriptors)
            }
        }),
        __metadata("design:type", Object)
    ], Providers.prototype, "descriptor", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: 'string' }),
        __metadata("design:type", String)
    ], Providers.prototype, "category_id", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({
            type: 'array', items: {
                $ref: postgres_backend_1.Documentation.getRef(time_1.Time)
            }
        }),
        __metadata("design:type", time_1.Time)
    ], Providers.prototype, "time", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({
            type: 'array', items: {
                $ref: postgres_backend_1.Documentation.getRef(fullFillment_1.Fulfillments)
            }
        }),
        __metadata("design:type", Array)
    ], Providers.prototype, "fulfillments", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({
            type: 'array', items: {
                $ref: postgres_backend_1.Documentation.getRef(payment_1.Payments)
            }
        }),
        __metadata("design:type", Array)
    ], Providers.prototype, "payments", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({
            type: 'array', items: {
                $ref: postgres_backend_1.Documentation.getRef(location_1.Location)
            }
        }),
        __metadata("design:type", Array)
    ], Providers.prototype, "locations", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({
            type: 'array', items: {
                $ref: postgres_backend_1.Documentation.getRef(Item_1.Items)
            }
        }),
        __metadata("design:type", Array)
    ], Providers.prototype, "items", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: 'string' }),
        __metadata("design:type", String)
    ], Providers.prototype, "exp", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: 'boolean', default: false }),
        __metadata("design:type", Boolean)
    ], Providers.prototype, "rateable", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: 'array', }),
        __metadata("design:type", Array)
    ], Providers.prototype, "tags", void 0);
    Providers = __decorate([
        postgres_backend_1.Documentation.addSchema({ type: 'object' })
    ], Providers);
    return Providers;
}());
exports.Providers = Providers;
//# sourceMappingURL=provider.js.map