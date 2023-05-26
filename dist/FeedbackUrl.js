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
exports.FeedbackUrl = void 0;
var postgres_backend_1 = require("@smoke-trees/postgres-backend");
var FeedbackUrl = /** @class */ (function () {
    function FeedbackUrl(url, tl_method, params) {
        this.url = url,
            this.tl_method = tl_method;
        this.params = params;
    }
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", Object)
    ], FeedbackUrl.prototype, "url", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "array", items: {} }),
        __metadata("design:type", Number)
    ], FeedbackUrl.prototype, "tl_method", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "object", properties: { id: { type: "string" } } }),
        __metadata("design:type", Object)
    ], FeedbackUrl.prototype, "params", void 0);
    FeedbackUrl = __decorate([
        postgres_backend_1.Documentation.addSchema({ type: "object" }),
        __metadata("design:paramtypes", [String, Number, Object])
    ], FeedbackUrl);
    return FeedbackUrl;
}());
exports.FeedbackUrl = FeedbackUrl;
var feedbackMethod;
(function (feedbackMethod) {
    feedbackMethod[feedbackMethod["http/get"] = 0] = "http/get";
    feedbackMethod[feedbackMethod["http/post "] = 1] = "http/post ";
})(feedbackMethod || (feedbackMethod = {}));
//# sourceMappingURL=FeedbackUrl.js.map