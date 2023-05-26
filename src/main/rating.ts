import { Documentation } from "@smoke-trees/postgres-backend";
import { Context } from "../context";
import { FeedbackForms } from "../feedbackForm";
import { Order } from "../order";

@Documentation.addSchema({ type: "object" })
export class Rating {
  @Documentation.addField({ $ref: Documentation.getRef(Context) })
  context: Context;
  @Documentation.addField({type: "object",properties: {
    rating_category:{ type: "string"},
    id: { type: "string"},
    value: { type: "number"},
    feedback_form: { type:"array", items:{$ref: Documentation.getRef(FeedbackForms)} },
    feedback_id: { type: "string"}
  }})
  message: {
    rating_category: string,
    id: string,
    value:Number|0,
    feedback_form:[FeedbackForms]
    feedback_id: string
  };
  constructor(context: Context, message: { rating_category: string; id: string; value: number; feedback_form:[FeedbackForms]; feedback_id: string}) {
    this.context = context;
    this.message = message;
  }
}




