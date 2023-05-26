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
exports.Time = void 0;
var postgres_backend_1 = require("@smoke-trees/postgres-backend");
var schedule_1 = require("./schedule");
var Time = /** @class */ (function () {
    function Time() {
    }
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", String)
    ], Time.prototype, "label", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", String)
    ], Time.prototype, "timestamp", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", String)
    ], Time.prototype, "duration", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "object", properties: {
                start: { type: "string" },
                end: { type: "string" }
            } }),
        __metadata("design:type", Object)
    ], Time.prototype, "range", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ $ref: postgres_backend_1.Documentation.getRef(schedule_1.Schedule) }),
        __metadata("design:type", schedule_1.Schedule)
    ], Time.prototype, "schedule", void 0);
    Time = __decorate([
        postgres_backend_1.Documentation.addSchema({ type: 'object' })
    ], Time);
    return Time;
}());
exports.Time = Time;
//# sourceMappingURL=time.js.map