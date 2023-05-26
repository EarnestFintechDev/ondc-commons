"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriberContext = exports.OPS_NO = void 0;
/**
 * Operations number
 */
var OPS_NO;
(function (OPS_NO) {
    /** 1 - Buyer New entity registration */
    OPS_NO[OPS_NO["ONE"] = 1] = "ONE";
    /** 2 - Non-MSN Seller New entity registration */
    OPS_NO[OPS_NO["TWO"] = 2] = "TWO";
    /** 3 - MSN Seller New entity registration */
    OPS_NO[OPS_NO["THREE"] = 3] = "THREE";
    /** 4 - Buyer and Non-MSN Seller new registration */
    OPS_NO[OPS_NO["FOUR"] = 4] = "FOUR";
    /** 5 - Buyer and MSN Seller new registration */
    OPS_NO[OPS_NO["FIVE"] = 5] = "FIVE";
    /** 6 - Buyer/Non-MSN/MSN SellerApp key rotation */
    OPS_NO[OPS_NO["SIX"] = 6] = "SIX";
    /** 7 - MSN Seller changing keys for Seller on Record */
    OPS_NO[OPS_NO["SEVEN"] = 7] = "SEVEN";
    /** 8 - Buyer adding New network participant for Non-MSN Seller */
    OPS_NO[OPS_NO["EIGHT"] = 8] = "EIGHT";
    /** 9 - Buyer adding New network participant for MSN Seller */
    OPS_NO[OPS_NO["NINE"] = 9] = "NINE";
    /** 10 - MSN Seller adding new seller on record */
    OPS_NO[OPS_NO["TEN"] = 10] = "TEN";
    /** 11 - BuyerApp/SellerApp amending city */
    OPS_NO[OPS_NO["ELEVEN"] = 11] = "ELEVEN";
    /** 12 - MSN Seller amending Seller on record city */
    OPS_NO[OPS_NO["TWELVE"] = 12] = "TWELVE";
})(OPS_NO = exports.OPS_NO || (exports.OPS_NO = {}));
var SubscriberContext = /** @class */ (function () {
    function SubscriberContext(ops_no) {
        this.ops_no = ops_no;
    }
    return SubscriberContext;
}());
exports.SubscriberContext = SubscriberContext;
//# sourceMappingURL=SubscriberContext.js.map