import { SellerOnRecord } from './SellerOnRecord';

export enum NetworkParticipantType {
  'buyerApp',
  'sellerApp',
  'gateway'
}

export class NetworkParticipant {
  subscriber_url: string;
  domain: string;
  type: NetworkParticipantType;
  msn: string;
  city_code: string[];
  seller_on_record: SellerOnRecord[];

  constructor(
    subscriber_url: string,
    domain: string,
    type: NetworkParticipantType,
    msn: string,
    city_code: string[],
    seller_on_record: SellerOnRecord[]
  ) {
    this.subscriber_url = subscriber_url;
    this.domain = domain;
    this.type = type;
    this.msn = msn;
    this.city_code = city_code;
    this.seller_on_record = seller_on_record;
  }
}
