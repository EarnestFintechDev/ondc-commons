import { Documentation } from "@smoke-trees/postgres-backend";
import { Context } from "../context";
import { Descriptors } from "../descriptor";
@Documentation.addSchema({ type: "object" })
export class Cancel {
  @Documentation.addField({ $ref: Documentation.getRef(Context) })
  context: Context;
  @Documentation.addField({
    type: "object",
    properties: {
      order_id: { type: "string" },
      cancellation_reason_id: { type: "string" },
      descriptor: { $ref: Documentation.getRef(Descriptors) },
    },
  })
  message: {
    order_id: string;
    cancellation_reason_id: string;
    descriptor: Descriptors;
  };
  constructor(
    context: Context,
    message: {
      order_id: string;
      cancellation_reason_id: string;
      descriptor: Descriptors;
    }
  ) {
    this.context = context;
    this.message = message;
  }
}
