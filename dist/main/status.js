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
exports.Status = void 0;
var postgres_backend_1 = require("@smoke-trees/postgres-backend");
var context_1 = require("../context");
var Status = /** @class */ (function () {
    function Status(context, message) {
        this.context = context;
        this.message = message;
    }
    __decorate([
        postgres_backend_1.Documentation.addField({ $ref: postgres_backend_1.Documentation.getRef(context_1.Context) }),
        __metadata("design:type", context_1.Context)
    ], Status.prototype, "context", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "object", properties: {
                order_id: { type: "string" }
            } }),
        __metadata("design:type", Object)
    ], Status.prototype, "message", void 0);
    Status = __decorate([
        postgres_backend_1.Documentation.addSchema({ type: "object" }),
        __metadata("design:paramtypes", [context_1.Context, Object])
    ], Status);
    return Status;
}());
exports.Status = Status;
//# sourceMappingURL=status.js.map