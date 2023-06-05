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
exports.Context = exports.Action = exports.City = void 0;
var postgres_backend_1 = require("@smoke-trees/postgres-backend");
var Domain;
(function (Domain) {
    Domain["nic2004:52110"] = "nic2004:52110";
})(Domain || (Domain = {}));
var City;
(function (City) {
    City["std:080"] = "std:080";
    City["std:011"] = "std:011";
    City["std:0422"] = "std:0422";
    City["std:0364"] = "std:0364";
    City["std:0522"] = "std:0522";
    City["std:0755"] = "std:0755";
    City["std:044"] = "std:044";
    City[" std:0497"] = " std:0497";
    City["std:0487"] = "std:0487";
    City["std:022"] = "std:022";
    City["std:020"] = "std:020";
    City["std:040"] = "std:040";
    City["std:0145"] = "std:0145";
})(City = exports.City || (exports.City = {}));
var Action;
(function (Action) {
    Action["search"] = "search";
    Action["select"] = "select";
    Action["init"] = "init";
    Action["confirm"] = "confirm";
    Action["update"] = "update";
    Action["status"] = "status";
    Action["track"] = "track";
    Action["cancel"] = "cancel";
    Action["rating"] = "rating";
    Action["support"] = "support";
    Action["on_search"] = "on_search";
    Action["on_select"] = "on_select";
    Action["on_init"] = "on_init";
    Action["on_confirm"] = "on_confirm";
    Action["on_update"] = "on_update";
    Action["on_status"] = "on_status";
    Action["on_track"] = "on_track";
    Action["on_cancel"] = "on_cancel";
    Action["on_rating"] = "on_rating";
    Action["on_support"] = "on_support";
})(Action = exports.Action || (exports.Action = {}));
var Context = /** @class */ (function () {
    function Context(ttl, location, timestamp, message_id, transaction_id, bpp_uri, bpp_id, version, action, domain, bap_id, bap_uri) {
        this.domain = domain,
            this.location = location,
            this.action = action,
            (this.bpp_uri = bpp_uri),
            (this.bpp_id = bpp_id),
            (this.version = version),
            (this.message_id = message_id),
            (this.timestamp = timestamp),
            (this.transaction_id = transaction_id);
        this.ttl = ttl;
        this.bap_id = bap_id;
        this.bap_uri = bap_uri;
    }
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string", enum: ["nic2004: 52110"], default: Domain["nic2004:52110"] }),
        __metadata("design:type", String)
    ], Context.prototype, "domain", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({
            type: "object", properties: {
                city: { type: "object", properties: { code: { type: 'string', enum: Object.keys(City), default: City["std:011"] } } },
                country: {
                    type: "object", properties: {
                        code: { type: 'string', default: "IND" },
                    },
                }
            }
        }),
        __metadata("design:type", Object)
    ], Context.prototype, "location", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string", enum: Object.keys(Action) }),
        __metadata("design:type", String)
    ], Context.prototype, "action", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", String)
    ], Context.prototype, "version", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", String)
    ], Context.prototype, "bap_id", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", String)
    ], Context.prototype, "bap_uri", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", Object)
    ], Context.prototype, "bpp_id", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", Object)
    ], Context.prototype, "bpp_uri", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", String)
    ], Context.prototype, "transaction_id", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", String)
    ], Context.prototype, "message_id", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", String)
    ], Context.prototype, "timestamp", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", String)
    ], Context.prototype, "ttl", void 0);
    Context = __decorate([
        postgres_backend_1.Documentation.addSchema({ type: "object" }),
        __metadata("design:paramtypes", [String, Object, String, String, String, String, String, String, String, String, String, String])
    ], Context);
    return Context;
}());
exports.Context = Context;
//# sourceMappingURL=context.js.map