export declare class Contacts {
    /**
 * Describes a circular area on the map.
 * @param {string} phone - phone.
 * @param {string} email - email.
 * @param {string} tags - Describes a tag. This is a simple key-value store which is used to contain extended metadata.
 *
 */
    phone: string;
    email: string;
    tags: object;
    constructor(phone: string, email: string, tags: object);
}
