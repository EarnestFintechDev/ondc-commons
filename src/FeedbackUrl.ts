import { Documentation } from "@smoke-trees/postgres-backend";

@Documentation.addSchema({ type:"object"})
export class FeedbackUrl{
    /**
   * Describes how a feedback URL will be sent by the Seller App.
   * @param {string} url - feedback URL sent by the Seller App.
   * @param {string} tl_method -  Enum ["http/get", "http/post "].
   * @param {string} feedback_id -  This value will be placed in the the $feedback_id url param in case of http/get and in the requestBody http/post requests.
   */
  @Documentation.addField({type: "string"})
  url: string | null;
  @Documentation.addField( {type:"array",items:{}})
  tl_method: feedbackMethod;
@Documentation.addField({ type:"object", properties:{id:{type:"string"}}})

  params: {
    feedback_id: string;
    // < * >:	string
}
constructor(url: string,tl_method:feedbackMethod,params:{feedback_id:string})
{
this.url = url,
this.tl_method= tl_method;
this.params=params;

}
}
enum feedbackMethod {
    "http/get",
    "http/post ",
  }