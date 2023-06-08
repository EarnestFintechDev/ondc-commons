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
exports.getHeader = void 0;
var postgres_backend_1 = require("@smoke-trees/postgres-backend");
var verifySignature_1 = require("./verifySignature");
var libsodium_wrappers_1 = __importDefault(require("libsodium-wrappers"));
var getHeader = function (body) { return __awaiter(void 0, void 0, void 0, function () {
    var sodium, _a, created, expires, signing_string, subscriber_id, UKID, algorithm, signingKey, signature, header;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, libsodium_wrappers_1.default.ready];
            case 1:
                _c.sent();
                sodium = libsodium_wrappers_1.default;
                postgres_backend_1.log.debug('Looking for body in utility/header.ts -> ', body);
                return [4 /*yield*/, (0, verifySignature_1.createSigningString)(body, '', '')];
            case 2:
                _a = _c.sent(), created = _a.created, expires = _a.expires, signing_string = _a.signing_string;
                postgres_backend_1.log.debug('Looking for digest after calling createSigningString in utility/header.ts -> ', 'getHeader', {
                    signatureString: signing_string,
                    created: created,
                    expires: expires
                });
                subscriber_id = process.env.SUBSCRIBERID;
                UKID = process.env.UNIQUEKEYID;
                algorithm = process.env.ALGORITHM;
                signingKey = (_b = process.env.SIGNING_KEY) !== null && _b !== void 0 ? _b : '';
                signature = sodium.to_base64(sodium.crypto_sign_detached(signing_string, sodium.from_base64(signingKey, sodium.base64_variants.ORIGINAL)), sodium.base64_variants.ORIGINAL);
                header = {
                    "accept": "application/json",
                    "authorization": "Signature keyId=\"".concat(subscriber_id, "|").concat(UKID, "|").concat(algorithm, "\",algorithm=\"ed25519\",created=\"").concat(created, "\",expires=\"").concat(expires, "\",headers=\"(created) (expires) digest\",signature=\"").concat(signature, "\""),
                    'content-type': 'application/json',
                };
                postgres_backend_1.log.debug("Looking for header  before return in utility/header.ts -> ", "getHeader()", { header: header });
                return [2 /*return*/, header];
        }
    });
}); };
exports.getHeader = getHeader;
//# sourceMappingURL=Header.js.map