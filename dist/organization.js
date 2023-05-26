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
exports.Organization = void 0;
var postgres_backend_1 = require("@smoke-trees/postgres-backend");
var Organization = /** @class */ (function () {
    function Organization(name, cred) {
        this.name = name;
        this.cred = cred;
    }
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", String)
    ], Organization.prototype, "name", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", String)
    ], Organization.prototype, "cred", void 0);
    Organization = __decorate([
        postgres_backend_1.Documentation.addSchema({ type: 'object' }),
        __metadata("design:paramtypes", [String, String])
    ], Organization);
    return Organization;
}());
exports.Organization = Organization;
//# sourceMappingURL=organization.js.map