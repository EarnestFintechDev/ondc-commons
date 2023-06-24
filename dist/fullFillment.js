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
exports.FulfillmentsLookup = exports.Fulfillments = void 0;
var postgres_backend_1 = require("@smoke-trees/postgres-backend");
var agent_1 = require("./agent");
var authorization_1 = require("./authorization");
var contact_1 = require("./contact");
var location_1 = require("./location");
var person_1 = require("./person");
var state_1 = require("./state");
var time_1 = require("./time");
var vehicle_1 = require("./vehicle");
var Fulfillments = /** @class */ (function () {
    function Fulfillments(id, symbol, provider_id, agent, type, person, contact, vehicle, state, start, end, rateable, tags, stops, customer) {
        this.id = id;
        this.provider_id = provider_id;
        this.agent = agent;
        this.type = type;
        this.person = person;
        this.contact = contact;
        this.vehicle = vehicle;
        this.state = state;
        this.start = start;
        this.end = end;
        this.rateable = rateable;
        this.tags = tags;
        this.stops = stops;
        this.customer = customer;
    }
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", Object)
    ], Fulfillments.prototype, "id", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", Object)
    ], Fulfillments.prototype, "type", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", Object)
    ], Fulfillments.prototype, "provider_id", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "number" }),
        __metadata("design:type", Number)
    ], Fulfillments.prototype, "rating", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "boolean" }),
        __metadata("design:type", Boolean)
    ], Fulfillments.prototype, "tracking", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({
            type: "object",
            properties: {
                contact: { $ref: postgres_backend_1.Documentation.getRef(contact_1.Contacts) },
                person: { $ref: postgres_backend_1.Documentation.getRef(person_1.Persons) },
            },
        }),
        __metadata("design:type", Object)
    ], Fulfillments.prototype, "customer", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ $ref: postgres_backend_1.Documentation.getRef(agent_1.Agent) }),
        __metadata("design:type", Object)
    ], Fulfillments.prototype, "agent", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ $ref: postgres_backend_1.Documentation.getRef(person_1.Persons) }),
        __metadata("design:type", Object)
    ], Fulfillments.prototype, "person", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ $ref: postgres_backend_1.Documentation.getRef(contact_1.Contacts) }),
        __metadata("design:type", Object)
    ], Fulfillments.prototype, "contact", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ $ref: postgres_backend_1.Documentation.getRef(vehicle_1.Vehicle) }),
        __metadata("design:type", Object)
    ], Fulfillments.prototype, "vehicle", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({
            type: "object",
            properties: {
                location: { $ref: postgres_backend_1.Documentation.getRef(location_1.Location) },
                time: { $ref: postgres_backend_1.Documentation.getRef(time_1.Time) },
                contact: { $ref: postgres_backend_1.Documentation.getRef(contact_1.Contacts) },
                person: { $ref: postgres_backend_1.Documentation.getRef(person_1.Persons) },
                authorization: { $ref: postgres_backend_1.Documentation.getRef(authorization_1.Authorizations) },
            },
        }),
        __metadata("design:type", Object)
    ], Fulfillments.prototype, "start", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({
            type: "object",
            properties: {
                location: { $ref: postgres_backend_1.Documentation.getRef(location_1.Location) },
                time: { $ref: postgres_backend_1.Documentation.getRef(time_1.Time) },
                contact: { $ref: postgres_backend_1.Documentation.getRef(contact_1.Contacts) },
                person: { $ref: postgres_backend_1.Documentation.getRef(person_1.Persons) },
                authorization: { $ref: postgres_backend_1.Documentation.getRef(authorization_1.Authorizations) },
            },
        }),
        __metadata("design:type", Object)
    ], Fulfillments.prototype, "end", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "boolean" }),
        __metadata("design:type", Object)
    ], Fulfillments.prototype, "rateable", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "object" }),
        __metadata("design:type", Array)
    ], Fulfillments.prototype, "tags", void 0);
    Fulfillments = __decorate([
        postgres_backend_1.Documentation.addSchema({ type: "object" }),
        __metadata("design:paramtypes", [String, String, String, agent_1.Agent, String, person_1.Persons,
            contact_1.Contacts,
            vehicle_1.Vehicle,
            state_1.State, Object, Object, Boolean, Array, Array, Object])
    ], Fulfillments);
    return Fulfillments;
}());
exports.Fulfillments = Fulfillments;
exports.FulfillmentsLookup = {
    F1: { id: 'F1', type: 'ONLINE_EMAIL_SMS' },
    F2: { id: 'F2', type: 'ONLINE_EMAIL_SMS' },
    F3: { id: 'F3', type: 'ONLINE_EMAIL_SMS' },
};
//# sourceMappingURL=fullFillment.js.map