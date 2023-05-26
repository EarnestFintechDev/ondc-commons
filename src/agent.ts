import { Documentation } from "@smoke-trees/postgres-backend";

@Documentation.addSchema({ type: "object" })
export class Agent {
  /**
   * Create Agent.
   * @param {string} name - pattern : Describes the name of a person in format: ./{given_name}/{honorific_prefix}/{first_name}/{middle_name}/{last_name}/{honorific_suffix}
   * @param {string} image - Image of an object.A url based image will look like,uri:http://path/to/image.An image can also be sent as a data string. For example data:js87y34ilhriuho84r3i4.
   * @param {string} dob - Dateof birth in date format.
   * @param {string} gender - Gender of something, typically a Person, but possibly also fictional characters, animals, etc. While Male and Female may be used, text strings are also acceptable for people who do not identify as a binary gender.
   * @param {string} cred - credit.
   * @param {string} tags - 	Describes a tag. This is a simple key-value store which is used to contain extended metadata.
   * @param {string} phone-  Phone number.
   * @param {string} email- email id.
   * @param {string} rateable - If the entity can be rated or not.
   */
  @Documentation.addField({ type: "string" })
  name!: string | null;
  @Documentation.addField({ type: "string" })
  image!: string | null;
  @Documentation.addField({ type: "string" })
  dob!: string | null;
  @Documentation.addField({ type: "string" })
  gender!: string | null;
  @Documentation.addField({ type: "string" })
  cred!: string | null;
  @Documentation.addField({ type: "object" })
  tags!: object;
  @Documentation.addField({ type: "string" })
  phone!: string | null;
  @Documentation.addField({ type: "string" })
  email!: string | null;
  @Documentation.addField({ type: "boolean" })
  rateable!: boolean | false;
  constructor(
    name: string,
    dob: string,
    gender: string,
    cred: string,
    tags: object,
    phone: string,
    email: string,
    rateable: boolean
  ) {
    this.name = name;
    this.dob = dob;
    this.gender = gender;
    this.cred = cred;
    this.tags = tags;
    this.phone = phone;
    this.email = email;
    this.rateable = rateable;
  }
}
