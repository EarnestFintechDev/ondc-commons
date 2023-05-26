export declare class FeedBackFormElement {
    /**
   * An element in the feedback form. It can be question or an answer to the question.
   * @param {string} id - uri.
   * @param {string} parent_id -  string.
   * @param {string} question - Specifies the question to which the answer options will be contained in the child FeedbackFormElements
   * @param {string} answer_type - Specifies how the answer option should be rendered.
   */
    id: string;
    parent_id: string;
    question: string;
    answer: string;
    answer_type: AnswerType;
    constructor(id: string, parent_id: string, question: string, answer_type: AnswerType, answer: string);
}
declare enum AnswerType {
    "radio" = 0,
    "checkbox" = 1,
    "text" = 2
}
export {};
