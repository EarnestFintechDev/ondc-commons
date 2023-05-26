export declare class Price {
    /**
     * 	Describes the price of an item. Allows for domain extension.
     * @param {string} currency - ISO 4217 alphabetic currency code e.g. 'INR'.
     * @param {string} value -  DecimalValuestring. pattern: [+-]?([0-9]*[.])?[0-9]+. Describes a decimal value.
     * @param {string} estimated_value -  DecimalValuestring. pattern: [+-]?([0-9]*[.])?[0-9]+. Describes a decimal value.
     * @param {string} computed_value -  DecimalValuestring. pattern: [+-]?([0-9]*[.])?[0-9]+. Describes a decimal value.
     * @param {string} listed_value -  DecimalValuestring. pattern: [+-]?([0-9]*[.])?[0-9]+. Describes a decimal value.
     * @param {string} offered_value -  DecimalValuestring. pattern: [+-]?([0-9]*[.])?[0-9]+. Describes a decimal value.
     * @param {string} minimum_value -  DecimalValuestring. pattern: [+-]?([0-9]*[.])?[0-9]+. Describes a decimal value.
     * @param {string} maximum_value -  DecimalValuestring. pattern: [+-]?([0-9]*[.])?[0-9]+. Describes a decimal value.
     */
    currency?: string | null;
    value?: string | null;
    estimated_value?: string | null;
    computed_value?: string | null;
    listed_value?: string | null;
    offered_value?: string | null;
    minimum_value?: string | null;
    maximum_value?: string | null;
}
