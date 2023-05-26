import { Documentation } from "@smoke-trees/postgres-backend";
import { Descriptors as Descriptor } from "./descriptor";
import { Option } from "./option";
import { Policy } from "./policy";

@Documentation.addSchema({ type: "object" })
export class Cancellation {
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
  @Documentation.addField({
    type: "string",
    description: 'ENUM ["full","Partial",]',
  })
  type: type;
  @Documentation.addField({ type: "string" })
  ref_id: string;
  @Documentation.addField({
    type: "array",
    items: {
      $ref: Documentation.getRef(Policy),
    },
  })
  policies: [Policy];
  @Documentation.addField({ type: "string" })
  time: string;
  @Documentation.addField({ type: "string" })
  cancelled_by: string;
  @Documentation.addField({ $ref: Documentation.getRef(Option) })
  reasons: Option;
  @Documentation.addField({
    type: "object",
    properties: {
      id: { type: "string" },
    },
  })
  selected_reason: {
    id: string;
  };
  @Documentation.addField({ $ref: Documentation.getRef(Descriptor) })
  additional_description: Descriptor;
  constructor(
    type: type,
    ref_id: string,
    policies: [Policy],
    time: string,
    cancelled_by: string,
    reasons:Option,
    selected_reason:{id:string},
    additional_description:Descriptor
  ) {
    this.type= type;
    this.additional_description= additional_description;
    this.cancelled_by=cancelled_by;
    this.reasons= reasons;
    this.selected_reason= selected_reason;
    this.time= time;
    this.policies=policies;
    this.ref_id = ref_id;
    
  }
}

enum type {
  "full",
  "Partial",
}

