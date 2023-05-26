"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryType = exports.AnswerType = exports.feedbackMethod = exports.Context = exports.collectedBy = exports.paymentStatus = exports.orderStatus = exports.Method = exports.type = exports.occasionType = exports.usabilityType = void 0;
// ENUM
var usabilityType;
(function (usabilityType) {
    usabilityType["online"] = "online";
    usabilityType["offline"] = "offline";
    usabilityType["both"] = "both";
})(usabilityType = exports.usabilityType || (exports.usabilityType = {}));
var occasionType;
(function (occasionType) {
    occasionType["BIRTHDAY"] = "BIRTHDAY";
    occasionType["MARRIAGE"] = "MARRIAGE";
    occasionType["FESTIVAL"] = "FESTIVAL";
    occasionType["FRIENDSHIP"] = "FRIENDSHIP";
    occasionType["OTHER"] = "OTHER";
})(occasionType = exports.occasionType || (exports.occasionType = {}));
var type;
(function (type) {
    type[type["CONSTANT"] = 0] = "CONSTANT";
    type[type["VARIABLE"] = 1] = "VARIABLE";
})(type = exports.type || (exports.type = {}));
var Method;
(function (Method) {
    Method[Method["http/get"] = 0] = "http/get";
    Method[Method["http/post"] = 1] = "http/post";
    Method[Method["payto"] = 2] = "payto";
    Method[Method["upi"] = 3] = "upi";
})(Method = exports.Method || (exports.Method = {}));
var orderStatus;
(function (orderStatus) {
    orderStatus[orderStatus["ON-ORDER"] = 0] = "ON-ORDER";
    orderStatus[orderStatus["PRE-FULFILLMENT"] = 1] = "PRE-FULFILLMENT";
    orderStatus[orderStatus["ON-FULFILLMENT"] = 2] = "ON-FULFILLMENT";
    orderStatus[orderStatus["POST-FULFILLMENT"] = 3] = "POST-FULFILLMENT";
})(orderStatus = exports.orderStatus || (exports.orderStatus = {}));
var paymentStatus;
(function (paymentStatus) {
    paymentStatus[paymentStatus["PAID"] = 0] = "PAID";
    paymentStatus[paymentStatus["NOT-PAID"] = 1] = "NOT-PAID";
})(paymentStatus = exports.paymentStatus || (exports.paymentStatus = {}));
var collectedBy;
(function (collectedBy) {
    collectedBy[collectedBy["BAP"] = 0] = "BAP";
    collectedBy[collectedBy["BPP"] = 1] = "BPP";
})(collectedBy = exports.collectedBy || (exports.collectedBy = {}));
var Context;
(function (Context) {
    Context[Context["CONTEXT-ERROR"] = 0] = "CONTEXT-ERROR";
    Context[Context["CORE-ERROR"] = 1] = "CORE-ERROR";
    Context[Context["DOMAIN-ERROR"] = 2] = "DOMAIN-ERROR";
    Context[Context["POLICY-ERROR"] = 3] = "POLICY-ERROR";
    Context[Context["JSON-SCHEMA-ERROR"] = 4] = "JSON-SCHEMA-ERROR";
})(Context = exports.Context || (exports.Context = {}));
var feedbackMethod;
(function (feedbackMethod) {
    feedbackMethod[feedbackMethod["http/get"] = 0] = "http/get";
    feedbackMethod[feedbackMethod["http/post "] = 1] = "http/post ";
})(feedbackMethod = exports.feedbackMethod || (exports.feedbackMethod = {}));
var AnswerType;
(function (AnswerType) {
    AnswerType[AnswerType["radio"] = 0] = "radio";
    AnswerType[AnswerType["checkbox"] = 1] = "checkbox";
    AnswerType[AnswerType["text"] = 2] = "text";
})(AnswerType = exports.AnswerType || (exports.AnswerType = {}));
var DeliveryType;
(function (DeliveryType) {
    DeliveryType["SMS"] = "SMS";
    DeliveryType["EMAIL"] = "EMAIL";
    DeliveryType["SMS_EMAIL"] = "SMS_EMAIL";
    DeliveryType["PHYSICAL"] = "PHYSICAL";
})(DeliveryType = exports.DeliveryType || (exports.DeliveryType = {}));
//# sourceMappingURL=common.js.map