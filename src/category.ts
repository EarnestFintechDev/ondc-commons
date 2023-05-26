import { Documentation } from "@smoke-trees/postgres-backend";

import { Descriptors as Descriptor } from "./descriptor";
import { Time } from "./time";
@Documentation.addSchema({ type: "object" })
export class category {
  /**
   * Describe a category.
   * @param {string} id - Unique id of the category.
   * @param {string} parent_category_id - Category/properties/idstring.Unique id of the category
   * @param {string} descriptor - Describes the description of a real-world object.
   * @param {string} time - Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations.
   * @param {string} tags - 	Describes a tag. This is a simple key-value store which is used to contain extended metadata.
   */
  @Documentation.addField({ type: "string" })
  id: string | null;
  @Documentation.addField({ type: "string" })
  parent_category_id?: string;
  @Documentation.addField({ $ref: Documentation.getRef(Descriptor) })
  descriptor: Descriptor | null;
  @Documentation.addField({ $ref: Documentation.getRef(Time) })
  time?: Time | null;
  @Documentation.addField({ type: "object" })
  tags?: {};
  constructor(
    id: string,
    parent_category_id: string,
    descriptor: Descriptor,
    Time: Time,
    tags: {}
  ) {
    this.id = id;
    this.parent_category_id = parent_category_id;
    this.descriptor = descriptor;
    this.time = Time;
    this.tags = tags;
  }
}
