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
exports.generateKeyPair = void 0;
var postgres_backend_1 = require("@smoke-trees/postgres-backend");
var libsodium_wrappers_1 = __importDefault(require("libsodium-wrappers"));
var generateKeyPair = function () { return __awaiter(void 0, void 0, void 0, function () {
    var sodium, signingKeyPair, signingPublicKey, signingPrivateKey, encryptionKeyPair, encryptionPublicKey, encryptionPrivateKey, validFrom, validTo, keyPair, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, libsodium_wrappers_1.default.ready];
            case 1:
                _a.sent();
                sodium = libsodium_wrappers_1.default;
                signingKeyPair = sodium.crypto_sign_keypair();
                signingPublicKey = sodium.to_base64(signingKeyPair.publicKey, libsodium_wrappers_1.default.base64_variants.ORIGINAL);
                signingPrivateKey = sodium.to_base64(signingKeyPair.privateKey, libsodium_wrappers_1.default.base64_variants.ORIGINAL);
                encryptionKeyPair = sodium.crypto_box_keypair();
                encryptionPublicKey = sodium.to_base64(encryptionKeyPair.publicKey, libsodium_wrappers_1.default.base64_variants.ORIGINAL);
                encryptionPrivateKey = sodium.to_base64(encryptionKeyPair.privateKey, libsodium_wrappers_1.default.base64_variants.ORIGINAL);
                validFrom = new Date();
                validTo = new Date(validFrom.getTime() + 2 * 365 * 24 * 60 * 60 * 1000);
                keyPair = {
                    signing_public_key: signingPublicKey,
                    signing_private_key: signingPrivateKey,
                    encryption_public_key: encryptionPublicKey,
                    encryption_private_key: encryptionPrivateKey,
                    valid_from: validFrom,
                    valid_to: validTo
                };
                return [2 /*return*/, keyPair];
            case 2:
                err_1 = _a.sent();
                postgres_backend_1.log.error('Error generating key pair', 'generateKeyPair', err_1);
                return [2 /*return*/, Promise.reject(false)];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.generateKeyPair = generateKeyPair;
//# sourceMappingURL=generateKeyPair.js.map