import { Documentation } from "@smoke-trees/postgres-backend";
import { Context } from "../context";
import { Intent } from "../intent";
@Documentation.addSchema({ type: "object" })
export class Search {
  @Documentation.addField({ $ref: Documentation.getRef(Context) })
  context: Context;
  @Documentation.addField({ $ref: Documentation.getRef(Intent) })
  message: {
    intent: Intent;
  };
  constructor(context: Context, message: { intent: Intent }) {
    this.context = context;
    this.message = message;
  }
}
