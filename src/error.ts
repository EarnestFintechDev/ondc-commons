import { Documentation } from "@smoke-trees/postgres-backend";
import { ErrorType } from "./utility/constant/error";

@Documentation.addSchema({ type:"object"})
export class Errors{
      /**
   * Describes an Error.
   * @param {string} type - ENUM ["CONTEXT-ERROR", "CORE-ERROR", "DOMAIN-ERROR", "POLICY-ERROR", "JSON-SCHEMA-ERROR"].
   * @param {string} code - ONDC specific error code. For full list of error codes, refer to docs/drafts/Error Codes.md of this repo.
   * @param {string} path - Path to json schema generating the error. Used only during json schema validation errors.
   * @param {string} message - Human readable message describing the error.
   */
  @Documentation.addField({ type:"string"})
  type: ErrorType;
  @Documentation.addField({type:"string"})
  code: string;
  @Documentation.addField({type:"string"})
  path: string;
  @Documentation.addField({type:"string"})
  message: string;
  constructor(type: ErrorType, code: string, path: string, message: string)
  {
    this.code = code;
    this.type=type;
    this.path = path;
    this.message = message;
  }
}