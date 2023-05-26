import { Documentation } from "@smoke-trees/postgres-backend";
import { Context } from "../context";
import { Order } from "../order";

@Documentation.addSchema({ type: "object" })
export class Select {
  @Documentation.addField({ $ref: Documentation.getRef(Context) })
  context: Context;
  @Documentation.addField({ $ref: Documentation.getRef(Order) })
  message: {
    order: Order;
  };
  constructor(context: Context, message: { order: Order }) {
    this.context = context;
    this.message = message;
  }
}
