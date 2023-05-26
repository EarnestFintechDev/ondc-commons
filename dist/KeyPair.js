"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyPair = void 0;
var KeyPair = /** @class */ (function () {
    function KeyPair(signing_public_key, encryption_public_key, valid_from, valid_until) {
        this.signing_public_key = signing_public_key;
        this.encryption_public_key = encryption_public_key;
        this.valid_from = valid_from;
        this.valid_until = valid_until;
    }
    return KeyPair;
}());
exports.KeyPair = KeyPair;
//# sourceMappingURL=KeyPair.js.map