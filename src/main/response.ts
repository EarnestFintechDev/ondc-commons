import { Documentation } from "@smoke-trees/postgres-backend";
import { Ack } from "../ack";
import { Context } from "../context";
import { Errors } from "../error";
import { Order } from "../order";

@Documentation.addSchema({ type: "object" })
export class RespondBack {
  @Documentation.addField({ type:"object",properties:{
    status:{$ref: Documentation.getRef(Ack) },
    error:{$ref: Documentation.getRef(Errors) },

  }})
  message: {
    status: Ack;
    error:Errors|undefined
  };
  constructor(message: { status:Ack,error:Errors|undefined }) {
    this.message = message;
  }
}
