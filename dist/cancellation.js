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
exports.Cancellation = void 0;
var postgres_backend_1 = require("@smoke-trees/postgres-backend");
var descriptor_1 = require("./descriptor");
var option_1 = require("./option");
var policy_1 = require("./policy");
var Cancellation = /** @class */ (function () {
    function Cancellation(type, ref_id, policies, time, cancelled_by, reasons, selected_reason, additional_description) {
        this.type = type;
        this.additional_description = additional_description;
        this.cancelled_by = cancelled_by;
        this.reasons = reasons;
        this.selected_reason = selected_reason;
        this.time = time;
        this.policies = policies;
        this.ref_id = ref_id;
    }
    __decorate([
        postgres_backend_1.Documentation.addField({
            type: "string",
            description: 'ENUM ["full","Partial",]',
        }),
        __metadata("design:type", Number)
    ], Cancellation.prototype, "type", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", String)
    ], Cancellation.prototype, "ref_id", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({
            type: "array",
            items: {
                $ref: postgres_backend_1.Documentation.getRef(policy_1.Policy),
            },
        }),
        __metadata("design:type", Array)
    ], Cancellation.prototype, "policies", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", String)
    ], Cancellation.prototype, "time", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", String)
    ], Cancellation.prototype, "cancelled_by", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ $ref: postgres_backend_1.Documentation.getRef(option_1.Option) }),
        __metadata("design:type", option_1.Option)
    ], Cancellation.prototype, "reasons", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({
            type: "object",
            properties: {
                id: { type: "string" },
            },
        }),
        __metadata("design:type", Object)
    ], Cancellation.prototype, "selected_reason", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ $ref: postgres_backend_1.Documentation.getRef(descriptor_1.Descriptors) }),
        __metadata("design:type", descriptor_1.Descriptors)
    ], Cancellation.prototype, "additional_description", void 0);
    Cancellation = __decorate([
        postgres_backend_1.Documentation.addSchema({ type: "object" }),
        __metadata("design:paramtypes", [Number, String, Array, String, String, option_1.Option, Object, descriptor_1.Descriptors])
    ], Cancellation);
    return Cancellation;
}());
exports.Cancellation = Cancellation;
var type;
(function (type) {
    type[type["full"] = 0] = "full";
    type[type["Partial"] = 1] = "Partial";
})(type || (type = {}));
//# sourceMappingURL=cancellation.js.map