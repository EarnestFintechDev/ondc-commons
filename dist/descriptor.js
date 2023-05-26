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
exports.Descriptors = void 0;
var postgres_backend_1 = require("@smoke-trees/postgres-backend");
var Descriptors = /** @class */ (function () {
    function Descriptors(name, code, symbol, short_desc, long_desc, images, audio, d_render) {
        this.name = name;
        this.code = code;
        this.symbol = symbol;
        this.short_desc = short_desc;
        this.long_desc = long_desc;
        this.images = images;
        this.audio = audio;
        this.d_render = d_render;
    }
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", Object)
    ], Descriptors.prototype, "name", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", Object)
    ], Descriptors.prototype, "code", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", Object)
    ], Descriptors.prototype, "symbol", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", Object)
    ], Descriptors.prototype, "short_desc", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", Object)
    ], Descriptors.prototype, "long_desc", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "array", items: {} }),
        __metadata("design:type", Object)
    ], Descriptors.prototype, "images", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", Object)
    ], Descriptors.prototype, "audio", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", Object)
    ], Descriptors.prototype, "d_render", void 0);
    Descriptors = __decorate([
        postgres_backend_1.Documentation.addSchema({ type: "object" }),
        __metadata("design:paramtypes", [String, String, String, String, String, String, String, String])
    ], Descriptors);
    return Descriptors;
}());
exports.Descriptors = Descriptors;
//# sourceMappingURL=descriptor.js.map