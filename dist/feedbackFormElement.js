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
exports.FeedBackFormElement = void 0;
var postgres_backend_1 = require("@smoke-trees/postgres-backend");
var FeedBackFormElement = /** @class */ (function () {
    function FeedBackFormElement(id, parent_id, question, answer_type, answer) {
        this.question = question;
        this.answer = answer;
        this.answer_type = answer_type;
        this.id = id;
        this.parent_id = parent_id;
    }
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", String)
    ], FeedBackFormElement.prototype, "id", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", String)
    ], FeedBackFormElement.prototype, "parent_id", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", String)
    ], FeedBackFormElement.prototype, "question", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string" }),
        __metadata("design:type", String)
    ], FeedBackFormElement.prototype, "answer", void 0);
    __decorate([
        postgres_backend_1.Documentation.addField({ type: "string", description: '"radio","checkbox","text",' }),
        __metadata("design:type", Number)
    ], FeedBackFormElement.prototype, "answer_type", void 0);
    FeedBackFormElement = __decorate([
        postgres_backend_1.Documentation.addSchema({ type: "object" }),
        __metadata("design:paramtypes", [String, String, String, Number, String])
    ], FeedBackFormElement);
    return FeedBackFormElement;
}());
exports.FeedBackFormElement = FeedBackFormElement;
var AnswerType;
(function (AnswerType) {
    AnswerType[AnswerType["radio"] = 0] = "radio";
    AnswerType[AnswerType["checkbox"] = 1] = "checkbox";
    AnswerType[AnswerType["text"] = 2] = "text";
})(AnswerType || (AnswerType = {}));
//# sourceMappingURL=feedbackFormElement.js.map