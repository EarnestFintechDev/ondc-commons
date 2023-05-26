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
exports.RespondBack = void 0;
var postgres_backend_1 = require("@smoke-trees/postgres-backend");
var ack_1 = require("../ack");
var error_1 = require("../error");
var RespondBack = /** @class */ (function () {
    function RespondBack(message) {
        this.message = message;
    }
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "object", properties: {
                status: { $ref: postgres_backend_1.Documentation.getRef(ack_1.Ack) },
                error: { $ref: postgres_backend_1.Documentation.getRef(error_1.Errors) },
            } }),
        __metadata("design:type", Object)
    ], RespondBack.prototype, "message", void 0);
    RespondBack = __decorate([
        postgres_backend_1.Documentation.addSchema({ type: "object" }),
        __metadata("design:paramtypes", [Object])
    ], RespondBack);
    return RespondBack;
}());
exports.RespondBack = RespondBack;
//# sourceMappingURL=response.js.map