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
exports.Errors = void 0;
var postgres_backend_1 = require("@smoke-trees/postgres-backend");
var error_1 = require("./utility/constant/error");
var Errors = /** @class */ (function () {
    function Errors(type, code, path, message) {
        this.code = code;
        this.type = type;
        this.path = path;
        this.message = message;
    }
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", String)
    ], Errors.prototype, "type", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", String)
    ], Errors.prototype, "code", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", String)
    ], Errors.prototype, "path", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", String)
    ], Errors.prototype, "message", void 0);
    Errors = __decorate([
        postgres_backend_1.Documentation.addSchema({ type: "object" }),
        __metadata("design:paramtypes", [String, String, String, String])
    ], Errors);
    return Errors;
}());
exports.Errors = Errors;
//# sourceMappingURL=error.js.map