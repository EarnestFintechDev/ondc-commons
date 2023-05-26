import { Documentation } from "@smoke-trees/postgres-backend";
import { Context } from "../context";
import { Intent } from "../intent";
@Documentation.addSchema({ type: "object" })
export class Status {
  @Documentation.addField({ $ref: Documentation.getRef(Context) })
  context: Context;
  @Documentation.addField({ type: "object",properties: {
    order_id:{ type: "string"}
  }})
  message: {
    order_id: string;
  };
  constructor(context: Context, message: { order_id: string }) {
    this.context = context;
    this.message = message;
  }
}
