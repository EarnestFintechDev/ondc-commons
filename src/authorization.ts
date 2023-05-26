import { Documentation } from "@smoke-trees/postgres-backend";
import { Authorization } from "./common";
@Documentation.addSchema({ type: "object" })
export class Authorizations {
  /**
   * Create Authorization.
   * @param {string} type - Type of authorization mechanism used.
   * @param {string} token - Token used for authorization.
   * @param {string} valid_from - Timestamp in RFC3339 format from which token is valid.
   * @param {string} valid_to - Timestamp in RFC3339 format until which token is valid.
   * @param {string} status - credit.
   */
  @Documentation.addField({ type: "string" })
  type: string | null;
  @Documentation.addField({ type: "string" })
  token: string | null;
  @Documentation.addField({ type: "string" })
  valid_from: string | null;
  @Documentation.addField({ type: "string" })
  valid_to: string | null;
  @Documentation.addField({ type: "string" })
  status: string | null;
  constructor(
    type: string,
    token: string,
    valid_from: string,
    valid_to: string,
    status: string
  ) {
    this.type = type;
    this.token = token;
    this.valid_from = valid_from;
    this.valid_to = valid_to;
    this.status = status;
  }
}
