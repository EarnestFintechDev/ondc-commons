import { FeedBackFormElement } from "./feedbackFormElement";
export declare class Rating {
    /**
   * Describes the rating of a person or an object.
   * @param {string} id - Id of the object being rated.
   * @param {number} value- minimum: 0.Rating value given to the object
   * @param {string} rating_category - Category of the object being rated
   * @param {string} id - Id of the object being rated.
   *  @param {string} feedback_id - // FeedbackUrl/properties/params/properties/feedback_idstring. This value will be placed in the the $feedback_id url param in case of http/get and in the requestBody http/post requests.
   */
    rating_category: string | null;
    id: string | null;
    value: number | 0;
    feedback_form: [FeedBackFormElement] | null;
    feedback_id: string | null;
}
