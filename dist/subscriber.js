"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subscriber = void 0;
var Subscriber = /** @class */ (function () {
    function Subscriber() {
    }
    return Subscriber;
}());
exports.Subscriber = Subscriber;
var subscriber_type;
(function (subscriber_type) {
    subscriber_type[subscriber_type["bap"] = 0] = "bap";
    subscriber_type[subscriber_type["bpp"] = 1] = "bpp";
    subscriber_type[subscriber_type["bg"] = 2] = "bg";
})(subscriber_type || (subscriber_type = {}));
var status;
(function (status) {
    status[status["INITIATED"] = 0] = "INITIATED";
    status[status["UNDER_SUBSCRIPTION"] = 1] = "UNDER_SUBSCRIPTION";
    status[status["SUBSCRIBED"] = 2] = "SUBSCRIBED";
    status[status["INVALID_SSL"] = 3] = "INVALID_SSL";
    status[status["UNSUBSCRIBED"] = 4] = "UNSUBSCRIBED";
})(status || (status = {}));
//# sourceMappingURL=subscriber.js.map