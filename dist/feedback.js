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
exports.Feedbacks = void 0;
var postgres_backend_1 = require("@smoke-trees/postgres-backend");
var feedbackForm_1 = require("./feedbackForm");
var FeedbackUrl_1 = require("./FeedbackUrl");
var Feedbacks = /** @class */ (function () {
    function Feedbacks(FeedbackForm, feedback_url) {
        this.feedback_form = FeedbackForm;
        this.feedback_url = feedback_url;
    }
    __decorate([
        postgres_backend_1.Documentation.addField({ $ref: postgres_backend_1.Documentation.getRef(feedbackForm_1.FeedbackForms) }),
        __metadata("design:type", Object)
    ], Feedbacks.prototype, "feedback_form", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ $ref: postgres_backend_1.Documentation.getRef(FeedbackUrl_1.FeedbackUrl) }),
        __metadata("design:type", Object)
    ], Feedbacks.prototype, "feedback_url", void 0);
    Feedbacks = __decorate([
        postgres_backend_1.Documentation.addSchema({ type: "object" }),
        __metadata("design:paramtypes", [feedbackForm_1.FeedbackForms, FeedbackUrl_1.FeedbackUrl])
    ], Feedbacks);
    return Feedbacks;
}());
exports.Feedbacks = Feedbacks;
//# sourceMappingURL=feedback.js.map