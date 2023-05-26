import { Documentation } from "@smoke-trees/postgres-backend";
import { Time } from "./time";
@Documentation.addSchema({ type: "object" })
export class Payments {
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
  @Documentation.addField({ type: "string" })
  uri?: string;
  @Documentation.addField({ type: "string" })
  tl_method?: Method | null;
  @Documentation.addField({
    type: "object",
    properties: {
      transaction_id: { type: "string" },
      transaction_status: { type: "string" },
      amount: { type: "string" },
      currency: { type: "string" },
    },
  })
  params?: {
    transaction_id: string;
    transaction_status: string | null;
    amount: string | null;
    currency: string;
    // < * >:	string
  };
  @Documentation.addField({ type: "string" })
  type?: orderStatus | null;

  @Documentation.addField({ type: "string" })
  status?: paymentStatus | null;

  @Documentation.addField({ $ref: Documentation.getRef(Time) })
  time?: Time;

  @Documentation.addField({ type: "string", description: " BAP,BPP" })
  collected_by?: collectedBy | null;

  @Documentation.addField({
    type: "string",
    enum: ["Assert", "Agree", "Disagree", "Terminate"]
  })
  "@ondc/org/collected_by_status"?: confirmStatus

  @Documentation.addField({
    type: "string",
    enum: ["Amount", "Percent"]
  })
  "@ondc/org/buyer_app_finder_fee_type"?: feeType

  @Documentation.addField({ type: "string" })
  "@ondc/org/buyer_app_finder_fee_amount"?: string

  @Documentation.addField({
    type: "string",
    enum: ["Assert", "Agree", "Disagree", "Terminate"]
  })
  "@ondc/org/withholding_amount"?: string

  @Documentation.addField({
    type: "string",
    enum: ["Assert", "Agree", "Disagree", "Terminate"]
  })
  "@ondc/org/withholding_amount_status"?: confirmStatus

  @Documentation.addField({ type: "string" })
  "@ondc/org/return_window"?: string

  @Documentation.addField({
    type: "string",
    enum: ["Assert", "Agree", "Disagree", "Terminate"]
  })
  "@ondc/org/return_window_status"?: confirmStatus

  @Documentation.addField({
    type: "string",
    enum: ["Collection", "Shipment", "Delivery"]
  })
  "@ondc/org/settlement_basis"?: settlementBasis

  @Documentation.addField({
    type: "string",
    enum: ["Assert", "Agree", "Disagree", "Terminate"]
  })
  "@ondc/org/settlement_basis_status"?: confirmStatus

  @Documentation.addField({ type: "string" })
  "@ondc/org/settlement_window"?: string

  @Documentation.addField({
    type: "string",
    enum: ["Assert", "Agree", "Disagree", "Terminate"]
  })
  "@ondc/org/settlement_window_status"?: confirmStatus

  @Documentation.addField({
    type: "object",
    properties: {
      "settlement_counterparty": { type: "string", enum: ["buyer", "buyer-app", "seller-app", "logistics-provider"] },
      "settlement_phase": { type: "string", enum: ["sale-amount", "withholding-amount", "refund"] },
      "settlement_amount": { type: "number" },
      "settlement_type": { type: "string", enum: ["neft", "rtgs", "upi"] },
      "settlement_bank_account_no": { type: "string" },
      "settlement_ifsc_code": { type: "string" },
      "bank_name": { type: "string" },
      "branch_name": { type: "string" },
      "beneficiary_name": { type: "string" },
      "beneficiary_address": { type: "string" },
      "settlement_status": { type: "string" },
      "settlement_reference": { type: "string" },
      "settlement_timestamp": { type: "string" },
    }
  })
  "@ondc/org/settlement_details": [settlementDetails]
}



export interface settlementDetails {
  "settlement_counterparty"?: counterParty
  "settlement_phase"?: settlementPhase
  "settlement_amount"?: number
  "settlement_type"?: settlementType
  "settlement_bank_account_no"?: string
  "settlement_ifsc_code"?: string
  "bank_name"?: string
  "branch_name"?: string
  "beneficiary_name"?: string
  "beneficiary_address"?: string
  "settlement_status"?: string
  "settlement_reference"?: string
  "settlement_timestamp"?: string

}

export enum confirmStatus {
  Assert = "Assert", Agree = "Agree", Disagree = "Disagree", Terminate = "Terminate"
}

export enum settlementStatus {
  "PAID" = "PAID", "NOT-PAID" = "NOT-PAID"
}
export enum settlementType {
  neft = "neft", rtgs = "rtgs ", upi = "upi"
}
export enum settlementBasis {
  Collection = "Collection", Shipment = "Shipment", Delivery = "Delivery"
}
export enum feeType {
  Amount = "Amount", Percent = "Percent"
}
export enum counterParty {
  buyer = "buyer", "buyer-app" = "buyer-app", "seller-app" = "seller-app", "logistics-provider" = "logistics-provider"
}
export enum settlementPhase {
  "sale-amount" = "sale-amount", "withholding-amount" = "withholding-amount", refund = "refund"

}
enum orderStatus {
  "ON-ORDER",
  "PRE-FULFILLMENT",
  "ON-FULFILLMENT",
  "POST-FULFILLMENT",
}
enum paymentStatus {
  "PAID",
  "NOT-PAID",
}
enum collectedBy {
  "BAP",
  "BPP",
}
enum Method {
  "http/get",
  "http/post",
  "payto",
  "upi",
}
