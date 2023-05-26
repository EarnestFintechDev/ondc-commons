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
exports.FeedbackForms = void 0;
var postgres_backend_1 = require("@smoke-trees/postgres-backend");
var FeedbackForms = /** @class */ (function () {
    function FeedbackForms(id, parent_id, question, answer_type) {
        this.id = id;
        this.parent_id = parent_id;
        this.question = question;
        this.answer_type = answer_type;
    }
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", String)
    ], FeedbackForms.prototype, "id", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", String)
    ], FeedbackForms.prototype, "parent_id", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", String)
    ], FeedbackForms.prototype, "question", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", String)
    ], FeedbackForms.prototype, "answer", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string", description: '"radio", "checkbox", "text"' }),
        __metadata("design:type", Number)
    ], FeedbackForms.prototype, "answer_type", void 0);
    FeedbackForms = __decorate([
        postgres_backend_1.Documentation.addSchema({ type: "object" }),
        __metadata("design:paramtypes", [String, String, String, Number])
    ], FeedbackForms);
    return FeedbackForms;
}());
exports.FeedbackForms = FeedbackForms;
var AnswerType;
(function (AnswerType) {
    AnswerType[AnswerType["radio"] = 0] = "radio";
    AnswerType[AnswerType["checkbox"] = 1] = "checkbox";
    AnswerType[AnswerType["text"] = 2] = "text";
})(AnswerType || (AnswerType = {}));
//# sourceMappingURL=feedbackForm.js.map