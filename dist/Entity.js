"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
var Entity = /** @class */ (function () {
    function Entity(gst, pan, name_of_authorised_signatory, address_of_authorised_signatory, email_id, mobile_no, country, subscriber_id, callback_url, key_pair) {
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
    return Entity;
}());
exports.Entity = Entity;
//# sourceMappingURL=Entity.js.map