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
var postgres_backend_1 = require("@smoke-trees/postgres-backend");
var crypto_1 = __importDefault(require("crypto"));
function challengeDecrypt(cryptoPrivateKey, cryptoPublicKey, cipherstring) {
    return __awaiter(this, void 0, void 0, function () {
        var privateKeyBuffer, publicKeyBuffer, publicPrefix, publicPostfix, privatePrefix, privatePostfix, pemPublicKey, pemPrivateKey, sharedKey, cipher, ciphertxt, decrypted;
        return __generator(this, function (_a) {
            privateKeyBuffer = Buffer.from(cryptoPrivateKey, 'base64');
            publicKeyBuffer = Buffer.from(cryptoPublicKey, 'base64');
            postgres_backend_1.log.debug('Buffers', 'utils/challengeDecrypt', { privateKeyBuffer: privateKeyBuffer, publicKeyBuffer: publicKeyBuffer });
            publicPrefix = '-----BEGIN PUBLIC KEY-----\n';
            publicPostfix = '-----END PUBLIC KEY-----';
            privatePrefix = '-----BEGIN PRIVATE KEY-----\n';
            privatePostfix = '-----END PRIVATE KEY-----';
            if (!publicKeyBuffer || !privateKeyBuffer) {
                postgres_backend_1.log.error('No public or private key found', 'utils/challengeDecrypt', {
                    cryptoPrivateKey: cryptoPrivateKey,
                    cryptoPublicKey: cryptoPublicKey,
                    cipherstring: cipherstring,
                    publicKeyBuffer: publicKeyBuffer,
                    privateKeyBuffer: privateKeyBuffer
                });
                throw new Error('No public or private key found');
            }
            pemPublicKey = publicPrefix +
                publicKeyBuffer
                    .toString('base64')
                    .match(/.{0,64}/g)
                    .join('\n') +
                publicPostfix;
            pemPrivateKey = privatePrefix +
                privateKeyBuffer
                    .toString('base64')
                    .match(/.{0,64}/g)
                    .join('\n') +
                privatePostfix;
            postgres_backend_1.log.debug('PEM Keys', 'utils/challengeDecrypt', { pemPublicKey: pemPublicKey, pemPrivateKey: pemPrivateKey });
            sharedKey = crypto_1.default.diffieHellman({
                privateKey: crypto_1.default.createPrivateKey({
                    key: pemPrivateKey
                }),
                publicKey: crypto_1.default.createPublicKey({
                    key: pemPublicKey
                })
            });
            postgres_backend_1.log.debug('Shared Key', 'utils/challengeDecrypt', { sharedKey: sharedKey });
            cipher = crypto_1.default.createDecipheriv('aes-256-ecb', sharedKey, '');
            ciphertxt = Buffer.from(cipherstring, 'base64');
            decrypted = cipher.update(ciphertxt);
            decrypted = Buffer.concat([decrypted, cipher.final()]);
            return [2 /*return*/, decrypted.toString('utf-8')];
        });
    });
}
exports.default = challengeDecrypt;
// console.log(
//   encrypt(
//     'MC4CAQAwBQYDK2VuBCIEIOgl3rf3arbk1PvIe0C9TZp7ImR71NSQdvuSu+zzY6xo',
//     'MCowBQYDK2VuAyEAi801MjVpgFOXHjliyT6Nb14HkS5dj1p41qbeyU6/SC8='
//   )
// );
//* Testing
// const plainText = decrypt(
//   'MC4CAQAwBQYDK2VuBCIEIOgl3rf3arbk1PvIe0C9TZp7ImR71NSQdvuSu+zzY6xo',
//   'MCowBQYDK2VuAyEAi801MjVpgFOXHjliyT6Nb14HkS5dj1p41qbeyU6/SC8=',
//   'CrwN248HS4CIYsUvxtrK0pWCBaoyZh4LnWtGqeH7Mpc='
// );
//# sourceMappingURL=challengeDecryption.js.map