import { Time } from "./time";
export declare class Payments {
    /**
     * Describes the description of a real-world object.
     * @param {string} uri -  A payment uri to be called by the Buyer App. If empty, then the payment is to be done offline. The details of payment should be present in the params object. If tl_method = http/get, then the payment details will be sent as url params. Two url param values, $transaction_id and $amount are mandatory. And example url would be : https://www.example.com/pay?txid=$transaction_id&amount=$amount&vpa=upiid&payee=shopez&billno=1234 .
     * @param {string} tl_method -  Enum:[ http/get, http/post, payto, upi ].
     * @param {string} amount -    Decimal Value. pattern: [+-]?([0-9]*[.])?[0-9]+.Describes a decimal value
     * @param {string} type -  Enum, describes order status.
     * @param {string} status - Enum, payment status.
     * @param {string} time - 	Describes a time.
     * @param {string} collected_by - Enum, collectedBy.
     * @param {string} currency - 	 Price/properties/currency string. ISO 4217 alphabetic currency code e.g. 'INR'.
     */
    uri?: string;
    tl_method?: Method | null;
    params?: {
        transaction_id: string;
        transaction_status: string | null;
        amount: string | null;
        currency: string;
    };
    type?: orderStatus | null;
    status?: paymentStatus | null;
    time?: Time;
    collected_by?: collectedBy | null;
    "@ondc/org/collected_by_status"?: confirmStatus;
    "@ondc/org/buyer_app_finder_fee_type"?: feeType;
    "@ondc/org/buyer_app_finder_fee_amount"?: string;
    "@ondc/org/withholding_amount"?: string;
    "@ondc/org/withholding_amount_status"?: confirmStatus;
    "@ondc/org/return_window"?: string;
    "@ondc/org/return_window_status"?: confirmStatus;
    "@ondc/org/settlement_basis"?: settlementBasis;
    "@ondc/org/settlement_basis_status"?: confirmStatus;
    "@ondc/org/settlement_window"?: string;
    "@ondc/org/settlement_window_status"?: confirmStatus;
    "@ondc/org/settlement_details": [settlementDetails];
}
export interface settlementDetails {
    "settlement_counterparty"?: counterParty;
    "settlement_phase"?: settlementPhase;
    "settlement_amount"?: number;
    "settlement_type"?: settlementType;
    "settlement_bank_account_no"?: string;
    "settlement_ifsc_code"?: string;
    "bank_name"?: string;
    "branch_name"?: string;
    "beneficiary_name"?: string;
    "beneficiary_address"?: string;
    "settlement_status"?: string;
    "settlement_reference"?: string;
    "settlement_timestamp"?: string;
}
export declare enum confirmStatus {
    Assert = "Assert",
    Agree = "Agree",
    Disagree = "Disagree",
    Terminate = "Terminate"
}
export declare enum settlementStatus {
    "PAID" = "PAID",
    "NOT-PAID" = "NOT-PAID"
}
export declare enum settlementType {
    neft = "neft",
    rtgs = "rtgs ",
    upi = "upi"
}
export declare enum settlementBasis {
    Collection = "Collection",
    Shipment = "Shipment",
    Delivery = "Delivery"
}
export declare enum feeType {
    Amount = "Amount",
    Percent = "Percent"
}
export declare enum counterParty {
    buyer = "buyer",
    "buyer-app" = "buyer-app",
    "seller-app" = "seller-app",
    "logistics-provider" = "logistics-provider"
}
export declare enum settlementPhase {
    "sale-amount" = "sale-amount",
    "withholding-amount" = "withholding-amount",
    refund = "refund"
}
declare enum orderStatus {
    "ON-ORDER" = 0,
    "PRE-FULFILLMENT" = 1,
    "ON-FULFILLMENT" = 2,
    "POST-FULFILLMENT" = 3
}
declare enum paymentStatus {
    "PAID" = 0,
    "NOT-PAID" = 1
}
declare enum collectedBy {
    "BAP" = 0,
    "BPP" = 1
}
declare enum Method {
    "http/get" = 0,
    "http/post" = 1,
    "payto" = 2,
    "upi" = 3
}
export {};
