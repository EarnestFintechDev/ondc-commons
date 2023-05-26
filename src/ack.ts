import { Documentation } from "@smoke-trees/postgres-backend";
import { status as Status } from "./utility/constant/status";

  @Documentation.addSchema({ type:"object"})
export class Ack{
    @Documentation.addField({ type:"string",example:"Ack"})
    status:Status;
    constructor(status:Status)
    {
      this.status=status
    }
  }