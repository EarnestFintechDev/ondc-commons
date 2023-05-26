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
exports.Gps = void 0;
var postgres_backend_1 = require("@smoke-trees/postgres-backend");
var Gps = /** @class */ (function () {
    function Gps() {
    }
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string", }),
        __metadata("design:type", String)
    ], Gps.prototype, "gps", void 0);
    Gps = __decorate([
        postgres_backend_1.Documentation.addSchema({ type: "object" })
    ], Gps);
    return Gps;
}());
exports.Gps = Gps;
//# sourceMappingURL=gps.js.map