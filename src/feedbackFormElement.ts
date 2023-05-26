import { Documentation } from "@smoke-trees/postgres-backend";
import { FeedbackFormElement } from "./common";
@Documentation.addSchema({ type:"object"})
export class FeedBackFormElement {
    /**
   * An element in the feedback form. It can be question or an answer to the question.
   * @param {string} id - uri.
   * @param {string} parent_id -  string.
   * @param {string} question - Specifies the question to which the answer options will be contained in the child FeedbackFormElements
   * @param {string} answer_type - Specifies how the answer option should be rendered.
   */
  @Documentation.addField({type:"string"})
  id: string;
  @Documentation.addField({type:"string"})

  parent_id: string;
  @Documentation.addField({type:"string"})

  question: string;
  @Documentation.addField({type:"string"})

  answer: string;
  @Documentation.addField({type:"string", description:'"radio","checkbox","text",'})

  answer_type: AnswerType;
  constructor(id: string,parent_id:string,question:string,answer_type:AnswerType,answer:string)
  {
this.question = question;
this.answer = answer;
this.answer_type= answer_type;
this.id= id;
this.parent_id= parent_id;
  }
}
enum AnswerType {
    "radio",
    "checkbox",
    "text",
  }