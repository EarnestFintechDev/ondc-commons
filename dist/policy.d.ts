import { Descriptor, Time } from "./common";
export declare class Policy {
    /**
    * Describes a policy. Allows for domain extension.
    * @param {string} id - uri.
    * @param {string} descriptor- Describes the description of a real-world object.
    * @param {string} parent_policy_id - Policy/properties/idstring.
    * @param {string} time - Describe a time.
    */
    id: string | null;
    descriptor: Descriptor | null;
    parent_policy_id: string | null;
    time: Time | null;
}
