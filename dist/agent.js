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
exports.Agent = void 0;
var postgres_backend_1 = require("@smoke-trees/postgres-backend");
var Agent = /** @class */ (function () {
    function Agent(name, dob, gender, cred, tags, phone, email, rateable) {
        this.name = name;
        this.dob = dob;
        this.gender = gender;
        this.cred = cred;
        this.tags = tags;
        this.phone = phone;
        this.email = email;
        this.rateable = rateable;
    }
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", Object)
    ], Agent.prototype, "name", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", Object)
    ], Agent.prototype, "image", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", Object)
    ], Agent.prototype, "dob", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", Object)
    ], Agent.prototype, "gender", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", Object)
    ], Agent.prototype, "cred", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "object" }),
        __metadata("design:type", Object)
    ], Agent.prototype, "tags", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", Object)
    ], Agent.prototype, "phone", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", Object)
    ], Agent.prototype, "email", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "boolean" }),
        __metadata("design:type", Boolean)
    ], Agent.prototype, "rateable", void 0);
    Agent = __decorate([
        postgres_backend_1.Documentation.addSchema({ type: "object" }),
        __metadata("design:paramtypes", [String, String, String, String, Object, String, String, Boolean])
    ], Agent);
    return Agent;
}());
exports.Agent = Agent;
//# sourceMappingURL=agent.js.map