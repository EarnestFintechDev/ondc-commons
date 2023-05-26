import { Documentation } from "@smoke-trees/postgres-backend";
import { Time as time } from "./common";
import { Schedule } from "./schedule";
@Documentation.addSchema({ type: 'object' })
export class Time{
    /**
   * Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations.
   * @param {string} label - type string.
   * @param {string} timestamps -  date-time.
   * @param {string} duration - string.
   * @param {string} range - range type string.
   * @param {string} days - comma separated values representing days of the week.
   * @param {string} schedule - 	Describes a schedule.
   */
  @Documentation.addField({ type:"string"})
  label?: string;
  @Documentation.addField({ type:"string"})
  timestamp?: string;
  @Documentation.addField({ type:"string"})
  duration?: string;
  @Documentation.addField({ type:"object", properties:{
    start:{type:"string"},
    end:{type:"string"}

  }})
  range?: {
    start: string;
    end: string;
  };
  days?: string;
  @Documentation.addField({ $ref: Documentation.getRef(Schedule)  })
  schedule?: Schedule;
}