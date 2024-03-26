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
exports.CategoryLookupV2 = exports.CategoryLookup = exports.category = void 0;
var postgres_backend_1 = require("@smoke-trees/postgres-backend");
var descriptor_1 = require("./descriptor");
var time_1 = require("./time");
var category = /** @class */ (function () {
    function category(id, parent_category_id, descriptor, Time, tags) {
        this.id = id;
        this.parent_category_id = parent_category_id;
        this.descriptor = descriptor;
        this.time = Time;
        this.tags = tags;
    }
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", Object)
    ], category.prototype, "id", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", String)
    ], category.prototype, "parent_category_id", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ $ref: postgres_backend_1.Documentation.getRef(descriptor_1.Descriptors) }),
        __metadata("design:type", Object)
    ], category.prototype, "descriptor", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ $ref: postgres_backend_1.Documentation.getRef(time_1.Time) }),
        __metadata("design:type", Object)
    ], category.prototype, "time", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "object" }),
        __metadata("design:type", Object)
    ], category.prototype, "tags", void 0);
    category = __decorate([
        postgres_backend_1.Documentation.addSchema({ type: "object" }),
        __metadata("design:paramtypes", [String, String, descriptor_1.Descriptors,
            time_1.Time, Object])
    ], category);
    return category;
}());
exports.category = category;
exports.CategoryLookup = {
    C1: { id: 'C1', descriptor: { code: 'ONLINE' } }
};
exports.CategoryLookupV2 = {
    C1: { id: 'C1', descriptor: { code: 'CARD' } }
};
//# sourceMappingURL=category.js.map