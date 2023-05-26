/**
 * Operations number
 */
export declare enum OPS_NO {
    /** 1 - Buyer New entity registration */
    'ONE' = 1,
    /** 2 - Non-MSN Seller New entity registration */
    'TWO' = 2,
    /** 3 - MSN Seller New entity registration */
    'THREE' = 3,
    /** 4 - Buyer and Non-MSN Seller new registration */
    'FOUR' = 4,
    /** 5 - Buyer and MSN Seller new registration */
    'FIVE' = 5,
    /** 6 - Buyer/Non-MSN/MSN SellerApp key rotation */
    'SIX' = 6,
    /** 7 - MSN Seller changing keys for Seller on Record */
    'SEVEN' = 7,
    /** 8 - Buyer adding New network participant for Non-MSN Seller */
    'EIGHT' = 8,
    /** 9 - Buyer adding New network participant for MSN Seller */
    'NINE' = 9,
    /** 10 - MSN Seller adding new seller on record */
    'TEN' = 10,
    /** 11 - BuyerApp/SellerApp amending city */
    'ELEVEN' = 11,
    /** 12 - MSN Seller amending Seller on record city */
    'TWELVE' = 12
}
export declare class SubscriberContext {
    ops_no: OPS_NO;
    constructor(ops_no: OPS_NO);
}
