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
exports.Address = void 0;
var postgres_backend_1 = require("@smoke-trees/postgres-backend");
var Address = /** @class */ (function () {
    function Address(name, city, state, ward, country, area_code, locality, street, building) {
        this.name = name;
        this.city = city;
        this.state = state;
        this.ward = ward;
        this.country = country;
        this.area_code = area_code;
        this.locality = locality;
        this.street = street;
        this.building = building;
    }
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", Object)
    ], Address.prototype, "door", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", Object)
    ], Address.prototype, "name", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", Object)
    ], Address.prototype, "building", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", Object)
    ], Address.prototype, "street", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", Object)
    ], Address.prototype, "locality", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", Object)
    ], Address.prototype, "ward", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", Object)
    ], Address.prototype, "city", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", Object)
    ], Address.prototype, "state", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", Object)
    ], Address.prototype, "country", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", Object)
    ], Address.prototype, "area_code", void 0);
    Address = __decorate([
        postgres_backend_1.Documentation.addSchema({ type: "object" }),
        __metadata("design:paramtypes", [String, String, String, String, String, String, String, String, String])
    ], Address);
    return Address;
}());
exports.Address = Address;
//# sourceMappingURL=address.js.map