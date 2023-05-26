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
exports.settlementPhase = exports.counterParty = exports.feeType = exports.settlementBasis = exports.settlementType = exports.settlementStatus = exports.confirmStatus = exports.Payments = void 0;
var postgres_backend_1 = require("@smoke-trees/postgres-backend");
var time_1 = require("./time");
var Payments = /** @class */ (function () {
    function Payments() {
    }
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", String)
    ], Payments.prototype, "uri", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", Object)
    ], Payments.prototype, "tl_method", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({
            type: "object",
            properties: {
                transaction_id: { type: "string" },
                transaction_status: { type: "string" },
                amount: { type: "string" },
                currency: { type: "string" },
            },
        }),
        __metadata("design:type", Object)
    ], Payments.prototype, "params", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", Object)
    ], Payments.prototype, "type", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", Object)
    ], Payments.prototype, "status", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ $ref: postgres_backend_1.Documentation.getRef(time_1.Time) }),
        __metadata("design:type", time_1.Time)
    ], Payments.prototype, "time", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string", description: " BAP,BPP" }),
        __metadata("design:type", Object)
    ], Payments.prototype, "collected_by", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({
            type: "string",
            enum: ["Assert", "Agree", "Disagree", "Terminate"]
        }),
        __metadata("design:type", String)
    ], Payments.prototype, "@ondc/org/collected_by_status", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({
            type: "string",
            enum: ["Amount", "Percent"]
        }),
        __metadata("design:type", String)
    ], Payments.prototype, "@ondc/org/buyer_app_finder_fee_type", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", String)
    ], Payments.prototype, "@ondc/org/buyer_app_finder_fee_amount", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({
            type: "string",
            enum: ["Assert", "Agree", "Disagree", "Terminate"]
        }),
        __metadata("design:type", String)
    ], Payments.prototype, "@ondc/org/withholding_amount", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({
            type: "string",
            enum: ["Assert", "Agree", "Disagree", "Terminate"]
        }),
        __metadata("design:type", String)
    ], Payments.prototype, "@ondc/org/withholding_amount_status", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", String)
    ], Payments.prototype, "@ondc/org/return_window", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({
            type: "string",
            enum: ["Assert", "Agree", "Disagree", "Terminate"]
        }),
        __metadata("design:type", String)
    ], Payments.prototype, "@ondc/org/return_window_status", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({
            type: "string",
            enum: ["Collection", "Shipment", "Delivery"]
        }),
        __metadata("design:type", String)
    ], Payments.prototype, "@ondc/org/settlement_basis", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({
            type: "string",
            enum: ["Assert", "Agree", "Disagree", "Terminate"]
        }),
        __metadata("design:type", String)
    ], Payments.prototype, "@ondc/org/settlement_basis_status", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", String)
    ], Payments.prototype, "@ondc/org/settlement_window", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({
            type: "string",
            enum: ["Assert", "Agree", "Disagree", "Terminate"]
        }),
        __metadata("design:type", String)
    ], Payments.prototype, "@ondc/org/settlement_window_status", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({
            type: "object",
            properties: {
                "settlement_counterparty": { type: "string", enum: ["buyer", "buyer-app", "seller-app", "logistics-provider"] },
                "settlement_phase": { type: "string", enum: ["sale-amount", "withholding-amount", "refund"] },
                "settlement_amount": { type: "number" },
                "settlement_type": { type: "string", enum: ["neft", "rtgs", "upi"] },
                "settlement_bank_account_no": { type: "string" },
                "settlement_ifsc_code": { type: "string" },
                "bank_name": { type: "string" },
                "branch_name": { type: "string" },
                "beneficiary_name": { type: "string" },
                "beneficiary_address": { type: "string" },
                "settlement_status": { type: "string" },
                "settlement_reference": { type: "string" },
                "settlement_timestamp": { type: "string" },
            }
        }),
        __metadata("design:type", Array)
    ], Payments.prototype, "@ondc/org/settlement_details", void 0);
    Payments = __decorate([
        postgres_backend_1.Documentation.addSchema({ type: "object" })
    ], Payments);
    return Payments;
}());
exports.Payments = Payments;
var confirmStatus;
(function (confirmStatus) {
    confirmStatus["Assert"] = "Assert";
    confirmStatus["Agree"] = "Agree";
    confirmStatus["Disagree"] = "Disagree";
    confirmStatus["Terminate"] = "Terminate";
})(confirmStatus = exports.confirmStatus || (exports.confirmStatus = {}));
var settlementStatus;
(function (settlementStatus) {
    settlementStatus["PAID"] = "PAID";
    settlementStatus["NOT-PAID"] = "NOT-PAID";
})(settlementStatus = exports.settlementStatus || (exports.settlementStatus = {}));
var settlementType;
(function (settlementType) {
    settlementType["neft"] = "neft";
    settlementType["rtgs"] = "rtgs ";
    settlementType["upi"] = "upi";
})(settlementType = exports.settlementType || (exports.settlementType = {}));
var settlementBasis;
(function (settlementBasis) {
    settlementBasis["Collection"] = "Collection";
    settlementBasis["Shipment"] = "Shipment";
    settlementBasis["Delivery"] = "Delivery";
})(settlementBasis = exports.settlementBasis || (exports.settlementBasis = {}));
var feeType;
(function (feeType) {
    feeType["Amount"] = "Amount";
    feeType["Percent"] = "Percent";
})(feeType = exports.feeType || (exports.feeType = {}));
var counterParty;
(function (counterParty) {
    counterParty["buyer"] = "buyer";
    counterParty["buyer-app"] = "buyer-app";
    counterParty["seller-app"] = "seller-app";
    counterParty["logistics-provider"] = "logistics-provider";
})(counterParty = exports.counterParty || (exports.counterParty = {}));
var settlementPhase;
(function (settlementPhase) {
    settlementPhase["sale-amount"] = "sale-amount";
    settlementPhase["withholding-amount"] = "withholding-amount";
    settlementPhase["refund"] = "refund";
})(settlementPhase = exports.settlementPhase || (exports.settlementPhase = {}));
var orderStatus;
(function (orderStatus) {
    orderStatus[orderStatus["ON-ORDER"] = 0] = "ON-ORDER";
    orderStatus[orderStatus["PRE-FULFILLMENT"] = 1] = "PRE-FULFILLMENT";
    orderStatus[orderStatus["ON-FULFILLMENT"] = 2] = "ON-FULFILLMENT";
    orderStatus[orderStatus["POST-FULFILLMENT"] = 3] = "POST-FULFILLMENT";
})(orderStatus || (orderStatus = {}));
var paymentStatus;
(function (paymentStatus) {
    paymentStatus[paymentStatus["PAID"] = 0] = "PAID";
    paymentStatus[paymentStatus["NOT-PAID"] = 1] = "NOT-PAID";
})(paymentStatus || (paymentStatus = {}));
var collectedBy;
(function (collectedBy) {
    collectedBy[collectedBy["BAP"] = 0] = "BAP";
    collectedBy[collectedBy["BPP"] = 1] = "BPP";
})(collectedBy || (collectedBy = {}));
var Method;
(function (Method) {
    Method[Method["http/get"] = 0] = "http/get";
    Method[Method["http/post"] = 1] = "http/post";
    Method[Method["payto"] = 2] = "payto";
    Method[Method["upi"] = 3] = "upi";
})(Method || (Method = {}));
//# sourceMappingURL=payment.js.map