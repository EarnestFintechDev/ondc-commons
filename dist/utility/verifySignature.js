"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifySignature = exports.createSigningString = void 0;
var axios_1 = __importDefault(require("axios"));
var lodash_1 = __importDefault(require("lodash"));
var libsodium_wrappers_1 = __importDefault(require("libsodium-wrappers"));
var postgres_backend_1 = require("@smoke-trees/postgres-backend");
var createSigningString = function (message, created, expires) { return __awaiter(void 0, void 0, void 0, function () {
    var sodium, digest, digest_base64, signing_string;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!created)
                    created = Math.floor(new Date().getTime() / 1000).toString();
                if (!expires)
                    expires = (parseInt(created) + 1 * 60 * 60).toString();
                return [4 /*yield*/, libsodium_wrappers_1.default.ready];
            case 1:
                _a.sent();
                sodium = libsodium_wrappers_1.default;
                digest = sodium.crypto_generichash(64, sodium.from_string(message));
                digest_base64 = sodium.to_base64(digest, libsodium_wrappers_1.default.base64_variants.ORIGINAL);
                signing_string = "(created): ".concat(created, "\n(expires): ").concat(expires, "\ndigest: BLAKE-512=").concat(digest_base64);
                return [2 /*return*/, { signing_string: signing_string, created: created, expires: expires, digest_base64: digest_base64 }];
        }
    });
}); };
exports.createSigningString = createSigningString;
var verifyMessage = function (signedString, signingString, publicKey) { return __awaiter(void 0, void 0, void 0, function () {
    var sodium, privateKey, result, err_1;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                return [4 /*yield*/, libsodium_wrappers_1.default.ready];
            case 1:
                _b.sent();
                sodium = libsodium_wrappers_1.default;
                privateKey = (_a = process.env.SIGNING_KEY) !== null && _a !== void 0 ? _a : '';
                result = sodium.crypto_sign_verify_detached(sodium.from_base64(signedString, libsodium_wrappers_1.default.base64_variants.ORIGINAL), signingString, sodium.from_base64(publicKey, libsodium_wrappers_1.default.base64_variants.ORIGINAL));
                return [2 /*return*/, result];
            case 2:
                err_1 = _b.sent();
                return [2 /*return*/, false];
            case 3: return [2 /*return*/];
        }
    });
}); };
var verifyHeader = function (headerParts, body, public_key) { return __awaiter(void 0, void 0, void 0, function () {
    var signing_string, verified;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, exports.createSigningString)(JSON.stringify(body), headerParts['created'], headerParts['expires'])];
            case 1:
                signing_string = (_a.sent()).signing_string;
                return [4 /*yield*/, verifyMessage(headerParts['signature'], signing_string, public_key)];
            case 2:
                verified = _a.sent();
                return [2 /*return*/, verified];
        }
    });
}); };
var getProviderPublicKey = function (providers, keyId) { return __awaiter(void 0, void 0, void 0, function () {
    var provider;
    return __generator(this, function (_a) {
        try {
            return [2 /*return*/, providers[0].signing_public_key
                // console.log(providers)
            ];
            provider = lodash_1.default.find(providers, function (obj) { return obj.ukId == keyId && obj; });
            // console.log(provider)
            return [2 /*return*/, (provider === null || provider === void 0 ? void 0 : provider.signing_public_key) || false];
        }
        catch (err) {
            return [2 /*return*/, false];
        }
        return [2 /*return*/];
    });
}); };
var lookupRegistry = function (subscriber_id, unique_key_id, domain) { return __awaiter(void 0, void 0, void 0, function () {
    var body, response, public_key, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                body = { subscriber_id: subscriber_id, domain: "ONDC:FIS10" };
                return [4 /*yield*/, axios_1.default.post(process.env.GATEWAY_LOOKUP_URL || '', body)];
            case 1:
                response = _a.sent();
                if (!response)
                    return [2 /*return*/, false];
                console.log(response.data);
                return [4 /*yield*/, getProviderPublicKey(response.data, unique_key_id)];
            case 2:
                public_key = _a.sent();
                if (!public_key) {
                    postgres_backend_1.log.debug("No public key found", 'lookup registry', { domain: domain, subscriber_id: subscriber_id, unique_key_id: unique_key_id });
                    return [2 /*return*/, false];
                }
                return [2 /*return*/, public_key];
            case 3:
                err_2 = _a.sent();
                postgres_backend_1.log.error("Error in lookup", 'lookupRegistry', err_2, { subscriber_id: subscriber_id, unique_key_id: unique_key_id, domain: domain });
                return [2 /*return*/, false];
            case 4: return [2 /*return*/];
        }
    });
}); };
var remove_quotes = function (a) {
    return a.replace(/^["'](.+(?=["']$))["']$/, '$1');
};
var split_auth_header = function (auth_header) {
    var header = auth_header.replace('Signature ', '');
    var re = /\s*([^=]+)=([^,]+)[,]?/g;
    var m;
    var parts = {};
    while ((m = re.exec(header)) !== null) {
        if (m) {
            parts[m[1]] = remove_quotes(m[2]);
        }
    }
    return parts;
};
var verifySignature = function (header, body) { return __awaiter(void 0, void 0, void 0, function () {
    var isValid, domain, headerParts, keyIdSplit, subscriber_id, unique_key_id, algorithm, public_key, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                isValid = false;
                domain = body.context.domain;
                postgres_backend_1.log.debug("Verify Domain", 'verifySignature', { header: header, body: body });
                headerParts = split_auth_header(header);
                postgres_backend_1.log.debug('headerParts', 'verifySignature', { headerParts: headerParts });
                keyIdSplit = headerParts['keyId'].split('|');
                subscriber_id = keyIdSplit[0];
                unique_key_id = keyIdSplit[1];
                algorithm = keyIdSplit[2];
                if (!(algorithm === headerParts.algorithm)) return [3 /*break*/, 3];
                return [4 /*yield*/, lookupRegistry(subscriber_id, unique_key_id, domain)];
            case 1:
                public_key = _a.sent();
                if (!public_key) return [3 /*break*/, 3];
                return [4 /*yield*/, verifyHeader(headerParts, body, public_key)];
            case 2:
                isValid = _a.sent();
                _a.label = 3;
            case 3: return [2 /*return*/, isValid];
            case 4:
                err_3 = _a.sent();
                postgres_backend_1.log.error('Error in verify signature', 'verifySignature', err_3, { header: header, body: body });
                return [2 /*return*/, false];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.verifySignature = verifySignature;
//# sourceMappingURL=verifySignature.js.map