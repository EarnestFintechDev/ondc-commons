import { Documentation } from "@smoke-trees/postgres-backend";
import { Context } from "../context";
@Documentation.addSchema({ type: "object" })
export class Track {
  @Documentation.addField({ $ref: Documentation.getRef(Context) })
  context: Context;
  @Documentation.addField({ type: "object",properties: {
    order_id:{ type: "string"},
    callback_url:{ type: "string"}

  }})
  message: {
    order_id: string,
    callback_url: string
  };
  constructor(context: Context, message: { order_id: string,callback_url: string}) {
    this.context = context;
    this.message = message;
  }
}
