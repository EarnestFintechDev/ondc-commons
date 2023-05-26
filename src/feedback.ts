import { Documentation } from "@smoke-trees/postgres-backend";
import { Feedback } from "./common";
import { FeedbackForms as FeedbackForm } from "./feedbackForm";
import { FeedbackUrl } from "./FeedbackUrl";

@Documentation.addSchema({ type: "object" })
export class Feedbacks {
  /**
   * Feedback for a service.
   * @param {string} feedback_form - Describes a feedback form that a Seller App can send to get feedback from the Buyer App.
   * @param {string} feedback_url -  Describes how a feedback URL will be sent by the Seller App.
   */
  @Documentation.addField({ $ref: Documentation.getRef(FeedbackForm) })
  feedback_form: FeedbackForm | null;
  @Documentation.addField({$ref: Documentation.getRef(FeedbackUrl)  })
  feedback_url: FeedbackUrl | null;
  constructor(FeedbackForm: FeedbackForm, feedback_url: FeedbackUrl) {
    this.feedback_form = FeedbackForm;
    this.feedback_url = feedback_url;
  }
}
