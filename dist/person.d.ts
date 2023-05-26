export declare class Persons {
    /**
* 	Describes the price of an item. Allows for domain extension.
* @param {string} name -   // Describes the name of a person in format: ./{given_name}/{honorific_prefix}/{first_name}/{middle_name}/{last_name}/{honorific_suffix}.
* @param {string} image -  Image of an object. A url based image will look like, uri:http://path/to/image.An image can also be sent as a data string. For example : data:js87y34ilhriuho84r3i4.
* @param {string} dob-  date-time.
* @param {string} gender -  Gender of something, typically a Person, but possibly also fictional characters, animals, etc. While Male and Female may be used, text strings are also acceptable for people who do not identify as a binary gender.
* @param {string} cred -  cred.
* @param {string} tags -  tags.
*/
    name?: string;
    image?: string;
    dob?: string;
    gender?: string;
    cred?: string;
    tags?: [];
}
