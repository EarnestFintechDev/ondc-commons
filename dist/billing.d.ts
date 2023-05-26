import { Address } from "./address";
import { Organization } from "./organization";
import { Time } from "./time";
export declare class Billing {
    /**
     * Create Billing
     * @param {string} name- Personal details of the customer needed for billing.
     * @param {string} email- Email address of the customer- holidays.
     * @param {string} phone- Phone number of the customer- holidays.
     * Organization
     * @param {string}  -Name of the organization .
     * @param {string} cred - Credit.
     * Time -Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations
     * @param {string} label - label.
     * @param {string} timestamp - timestamp($date-time) .
     * @param {string} duration - Describes duration as per ISO8601 format.
     * @param {string} range - It's range of start and end.
     * @param {string} days- comma separated values representing days of the week.
     * @param {string} range - It's range of start and end.
     * @param {string} schedule - Describes a schedule.
     * @param {string} frequency - Describes duration as per ISO8601 format.
     * @param {string} holidays - holidays.
     * @param {string} times- times.
     * @param {string} holidays - holidays.
     * @param {string} tax_number - tax number.
     * @param {string} created_at - created.
     * @param {string} updated_at - updated.
     */
    name: string;
    organization?: Organization;
    address?: Address;
    email?: string | null;
    phone?: string | null;
    time?: Time | null;
    constructor(name: string, address?: Address, email?: string, time?: Time, phone?: string, organization?: Organization);
}
