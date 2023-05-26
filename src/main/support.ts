import { Documentation } from "@smoke-trees/postgres-backend";
import { Context } from "../context";
@Documentation.addSchema({ type: "object" })
export class Support {
  @Documentation.addField({ $ref: Documentation.getRef(Context) })
  context: Context;
  @Documentation.addField({ type: "object",properties: {
    ref_id:{ type: "string"}
  }})
  message: {
    ref_id: string;
  };
  constructor(context: Context, message: { ref_id: string }) {
    this.context = context;
    this.message = message;
  }
}
