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
exports.Quotation = void 0;
var postgres_backend_1 = require("@smoke-trees/postgres-backend");
var Price_1 = require("./Price");
var break_1 = require("./break");
var Quotation = /** @class */ (function () {
    function Quotation() {
    }
    __decorate([
        postgres_backend_1.Documentation.addField({ $ref: postgres_backend_1.Documentation.getRef(Price_1.Price) }),
        __metadata("design:type", Price_1.Price)
    ], Quotation.prototype, "price", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ $ref: postgres_backend_1.Documentation.getRef(break_1.Break) }),
        __metadata("design:type", Array)
    ], Quotation.prototype, "breakup", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", String)
    ], Quotation.prototype, "ttl", void 0);
    Quotation = __decorate([
        postgres_backend_1.Documentation.addSchema({ type: "object" })
    ], Quotation);
    return Quotation;
}());
exports.Quotation = Quotation;
//# sourceMappingURL=quotation.js.map