import { SellerOnRecord } from './SellerOnRecord';
export declare enum NetworkParticipantType {
    'buyerApp' = 0,
    'sellerApp' = 1,
    'gateway' = 2
}
export declare class NetworkParticipant {
    subscriber_url: string;
    domain: string;
    type: NetworkParticipantType;
    msn: string;
    city_code: string[];
    seller_on_record: SellerOnRecord[];
    constructor(subscriber_url: string, domain: string, type: NetworkParticipantType, msn: string, city_code: string[], seller_on_record: SellerOnRecord[]);
}
