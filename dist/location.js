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
exports.Location = void 0;
var city_1 = require("./city");
var country_1 = require("./country");
var descriptor_1 = require("./descriptor");
var time_1 = require("./time");
var postgres_backend_1 = require("@smoke-trees/postgres-backend");
var circle_1 = require("./circle");
var Location = /** @class */ (function () {
    function Location() {
    }
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", String)
    ], Location.prototype, "id", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ $ref: postgres_backend_1.Documentation.getRef(descriptor_1.Descriptors) }),
        __metadata("design:type", descriptor_1.Descriptors)
    ], Location.prototype, "descriptor", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", String)
    ], Location.prototype, "gps", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", String)
    ], Location.prototype, "station_code", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ $ref: postgres_backend_1.Documentation.getRef(city_1.Cities) }),
        __metadata("design:type", city_1.Cities)
    ], Location.prototype, "city", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ $ref: postgres_backend_1.Documentation.getRef(country_1.Countries) }),
        __metadata("design:type", country_1.Countries)
    ], Location.prototype, "country", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ $ref: postgres_backend_1.Documentation.getRef(circle_1.Circles) }),
        __metadata("design:type", circle_1.Circles)
    ], Location.prototype, "circle", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", String)
    ], Location.prototype, "polygon", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", String)
    ], Location.prototype, "dspace", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ $ref: postgres_backend_1.Documentation.getRef(time_1.Time) }),
        __metadata("design:type", time_1.Time)
    ], Location.prototype, "time", void 0);
    Location = __decorate([
        postgres_backend_1.Documentation.addSchema({ type: "string" })
    ], Location);
    return Location;
}());
exports.Location = Location;
//# sourceMappingURL=location.js.map