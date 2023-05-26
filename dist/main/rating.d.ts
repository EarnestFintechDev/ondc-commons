import { Context } from "../context";
import { FeedbackForms } from "../feedbackForm";
export declare class RatingApi {
    context: Context;
    message: {
        rating_category: string;
        id: string;
        value: Number | 0;
        feedback_form: [FeedbackForms];
        feedback_id: string;
    };
    constructor(context: Context, message: {
        rating_category: string;
        id: string;
        value: number;
        feedback_form: [FeedbackForms];
        feedback_id: string;
    });
}
