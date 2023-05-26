export declare class Schedule {
    /**
     * Describes a schedule.
     * @param {string} frequency- Describes duration as per ISO8601 format.
     * @param {string} holidays - date-time.
     * @param {string} times - date-time.
     */
    frequency?: string | null;
    holidays?: string[] | null;
    times?: string[] | null;
}
