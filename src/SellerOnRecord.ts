import { KeyPair } from './KeyPair';

export class SellerOnRecord {
  unique_key_id: string;
  key_pair: KeyPair;
  city_code: string[];

  constructor(unique_key_id: string, key_pair: KeyPair, city_code: string[]) {
    this.unique_key_id = unique_key_id;
    this.key_pair = key_pair;
    this.city_code = city_code;
  }
}
