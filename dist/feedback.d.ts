import { FeedbackForms as FeedbackForm } from "./feedbackForm";
import { FeedbackUrl } from "./FeedbackUrl";
export declare class Feedbacks {
    /**
     * Feedback for a service.
     * @param {string} feedback_form - Describes a feedback form that a Seller App can send to get feedback from the Buyer App.
     * @param {string} feedback_url -  Describes how a feedback URL will be sent by the Seller App.
     */
    feedback_form: FeedbackForm | null;
    feedback_url: FeedbackUrl | null;
    constructor(FeedbackForm: FeedbackForm, feedback_url: FeedbackUrl);
}
