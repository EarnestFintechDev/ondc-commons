import { KeyPair } from './KeyPair';
export interface EntityGst {
    legal_entity_name: string;
    business_address: string;
    city_code: string[];
    gst_no: string;
}
export interface EntityPan {
    name_as_per_pan: string;
    pan_no: string;
    date_of_incorporation: string;
}
export declare class Entity {
    gst: EntityGst;
    pan: EntityPan;
    name_of_authorised_signatory: string;
    designation_of_authorised_signatory: string;
    email_id: string;
    mobile_no: string;
    country: string;
    subscriber_id: string;
    callback_url: string;
    key_pair: KeyPair;
    constructor(gst: EntityGst, pan: EntityPan, name_of_authorised_signatory: string, designation_of_authorised_signatory: string, email_id: string, mobile_no: string, country: string, subscriber_id: string, callback_url: string, key_pair: KeyPair);
}
