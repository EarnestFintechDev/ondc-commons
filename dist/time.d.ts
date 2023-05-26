import { Schedule } from "./schedule";
export declare class Time {
    /**
   * Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations.
   * @param {string} label - type string.
   * @param {string} timestamps -  date-time.
   * @param {string} duration - string.
   * @param {string} range - range type string.
   * @param {string} days - comma separated values representing days of the week.
   * @param {string} schedule - 	Describes a schedule.
   */
    label?: string;
    timestamp?: string;
    duration?: string;
    range?: {
        start: string;
        end: string;
    };
    days?: string;
    schedule?: Schedule;
}
