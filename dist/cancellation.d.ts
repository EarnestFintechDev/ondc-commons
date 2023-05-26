import { Descriptors as Descriptor } from "./descriptor";
import { Option } from "./option";
import { Policy } from "./policy";
export declare class Cancellation {
    /**
     * Create Billing
     * @param {string} type- Type of cancellation either full or partial.
     * @param {string} ref_id- refeerence id type uid.
     * @param {string} time- timestamp.
     * @param {string} parent_policy_id- type object.
     * Descriptor.
     * @param {string} name - Name of the product.
     * @param {string} code - code type string.
     * @param {string} symbol - type string.
     * @param {string} short_desc - short description.
     * @param {string} long_desc - Long description.
     * @param {string} images - image of of the product in uri or data type.
     * @param {string} audio -  audio.
     * @param {string} d_render - 3d_render.
     * @param {string} Selected_reason -Selcted reason in id .
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
    type: type;
    ref_id: string;
    policies: [Policy];
    time: string;
    cancelled_by: string;
    reasons: Option;
    selected_reason: {
        id: string;
    };
    additional_description: Descriptor;
    constructor(type: type, ref_id: string, policies: [Policy], time: string, cancelled_by: string, reasons: Option, selected_reason: {
        id: string;
    }, additional_description: Descriptor);
}
declare enum type {
    "full" = 0,
    "Partial" = 1
}
export {};
