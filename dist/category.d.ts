import { Descriptors as Descriptor } from "./descriptor";
import { Time } from "./time";
export declare class category {
    /**
     * Describe a category.
     * @param {string} id - Unique id of the category.
     * @param {string} parent_category_id - Category/properties/idstring.Unique id of the category
     * @param {string} descriptor - Describes the description of a real-world object.
     * @param {string} time - Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations.
     * @param {string} tags - 	Describes a tag. This is a simple key-value store which is used to contain extended metadata.
     */
    id: string | null;
    parent_category_id?: string;
    descriptor: Descriptor | null;
    time?: Time | null;
    tags?: {};
    constructor(id: string, parent_category_id: string, descriptor: Descriptor, Time: Time, tags: {});
}
