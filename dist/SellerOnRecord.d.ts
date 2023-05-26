import { KeyPair } from './KeyPair';
export declare class SellerOnRecord {
    unique_key_id: string;
    key_pair: KeyPair;
    city_code: string[];
    constructor(unique_key_id: string, key_pair: KeyPair, city_code: string[]);
}
