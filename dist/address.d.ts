export declare class Address {
    /**
     * Create Address.
     * @param {string} door - Door / Shop number of the address.
     * @param {string} building - Name of the building or block.
     * @param {string} street - Name of address if applicable. Example, shop name.
     * @param {string} name - Street name or number.
     * @param {string} locality - Name of the locality, apartments.
     * @param {string} ward - Name or number of the ward if applicable.
     * @param {string} state -  State name.
     * @param {string} country - Country name.
     * @param {string} area_code - This can be Pincode, ZIP code or any equivalent.
     * @param {string} country - Country name.
     */
    door: string | null;
    name: string | null;
    building: string | null;
    street: string | null;
    locality: string | null;
    ward: string | null;
    city: string | null;
    state: string | null;
    country: string | null;
    area_code: string | null;
    constructor(name: string, city: string, state: string, ward: string, country: string, area_code: string, locality: string, street: string, building: string);
}
