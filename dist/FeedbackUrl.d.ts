export declare class FeedbackUrl {
    /**
   * Describes how a feedback URL will be sent by the Seller App.
   * @param {string} url - feedback URL sent by the Seller App.
   * @param {string} tl_method -  Enum ["http/get", "http/post "].
   * @param {string} feedback_id -  This value will be placed in the the $feedback_id url param in case of http/get and in the requestBody http/post requests.
   */
    url: string | null;
    tl_method: feedbackMethod;
    params: {
        feedback_id: string;
    };
    constructor(url: string, tl_method: feedbackMethod, params: {
        feedback_id: string;
    });
}
declare enum feedbackMethod {
    "http/get" = 0,
    "http/post " = 1
}
export {};
