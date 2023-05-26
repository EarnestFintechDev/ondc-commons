"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkParticipant = exports.NetworkParticipantType = void 0;
var NetworkParticipantType;
(function (NetworkParticipantType) {
    NetworkParticipantType[NetworkParticipantType["buyerApp"] = 0] = "buyerApp";
    NetworkParticipantType[NetworkParticipantType["sellerApp"] = 1] = "sellerApp";
    NetworkParticipantType[NetworkParticipantType["gateway"] = 2] = "gateway";
})(NetworkParticipantType = exports.NetworkParticipantType || (exports.NetworkParticipantType = {}));
var NetworkParticipant = /** @class */ (function () {
    function NetworkParticipant(subscriber_url, domain, type, msn, city_code, seller_on_record) {
        this.subscriber_url = subscriber_url;
        this.domain = domain;
        this.type = type;
        this.msn = msn;
        this.city_code = city_code;
        this.seller_on_record = seller_on_record;
    }
    return NetworkParticipant;
}());
exports.NetworkParticipant = NetworkParticipant;
//# sourceMappingURL=NetworkParticipant.js.map