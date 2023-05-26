import { Documentation } from "@smoke-trees/postgres-backend";
import { Schedule as schedule } from "./common";

@Documentation.addSchema({ type: "object" })
export class Schedule {
  /**
   * Describes a schedule.
   * @param {string} frequency- Describes duration as per ISO8601 format.
   * @param {string} holidays - date-time.
   * @param {string} times - date-time.
   */
  @Documentation.addField({ type: "string" })
  frequency?: string | null;
  @Documentation.addField({ type: "string" })
  holidays?: string[] | null;
  @Documentation.addField({ type: "string" })
  times?: string[] | null;
}
