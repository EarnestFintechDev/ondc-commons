import { Price } from "./Price";
import { Break } from "./break";
export declare class Quotation {
    /**
     * Describes a quote.
     * @param {number} ttl - type string.
     * @param {string} price -  Describes duration as per ISO8601 format.
     * @param {number} breakup - Describe a breakup.
     */
    price?: Price;
    breakup?: [Break];
    ttl?: string;
}
