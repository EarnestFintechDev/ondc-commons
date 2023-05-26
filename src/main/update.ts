import { Documentation } from "@smoke-trees/postgres-backend";
import { Context } from "../context";
import { Descriptors } from "../descriptor";
import { Order } from "../order";
@Documentation.addSchema({ type: "object" })
export class Update {
  @Documentation.addField({ $ref: Documentation.getRef(Context) })
  context: Context;
  @Documentation.addField({
    type: "object",
    properties: {
      update_target: { type: "string" },
      order: { $ref: Documentation.getRef(Order) },
    },
  })
  @Documentation.addField({ $ref: Documentation.getRef(Order) })
  message: {
    update_target:string
    order: Order;
  };
  constructor(context: Context, message: { update_target:string,order: Order }) {
    this.context = context;
    this.message = message;
  }
}
