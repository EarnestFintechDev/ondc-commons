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

export class Entity {
  gst: EntityGst;
  pan: EntityPan;
  name_of_authorised_signatory: string;
  address_of_authorised_signatory: string;
  email_id: string;
  mobile_no: string;
  country: string;
  subscriber_id: string;
  callback_url: string;
  key_pair: KeyPair;

  constructor(
    gst: EntityGst,
    pan: EntityPan,
    name_of_authorised_signatory: string,
    address_of_authorised_signatory: string,
    email_id: string,
    mobile_no: string,
    country: string,
    subscriber_id: string,
    callback_url: string,
    key_pair: KeyPair
  ) {
    this.gst = gst;
    this.pan = pan;
    this.name_of_authorised_signatory = name_of_authorised_signatory;
    this.address_of_authorised_signatory = address_of_authorised_signatory;
    this.email_id = email_id;
    this.mobile_no = mobile_no;
    this.country = country;
    this.subscriber_id = subscriber_id;
    this.callback_url = callback_url;
    this.key_pair = key_pair;
  }
}
