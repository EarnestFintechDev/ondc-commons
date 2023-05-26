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
exports.FetchRequest = void 0;
var postgres_backend_1 = require("@smoke-trees/postgres-backend");
var node_fetch_1 = __importDefault(require("node-fetch"));
var Header_1 = require("./Header");
var FetchRequest = function (url, method, body) { return __awaiter(void 0, void 0, void 0, function () {
    var dummyBody, Header, option;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                postgres_backend_1.log.debug("Looking for body in utility/fetchRequest.ts -> ", body);
                dummyBody = {
                    context: {
                        domain: "nic2004:52110",
                        country: "IND",
                        city: "std:080",
                        action: "search",
                        core_version: "1.0.0",
                        bap_id: "buyer-app.ondc.org",
                        bap_uri: "https://buyer-app.ondc.org/protocol/v1",
                        transaction_id: "e594b216-7ea2-4ddd-baba-caf6074344b4",
                        message_id: "cc468d26-71b2-4a08-b5f4-156843e98240",
                        timestamp: "2022-11-16T08:27:05.022Z",
                        ttl: "PT30S",
                    },
                    message: {
                        intent: {
                            item: { descriptor: { name: "milk" } },
                            fulfillment: {
                                type: "Delivery",
                                end: { location: { gps: "12.96774,77.588913" } },
                            },
                            payment: {
                                "@ondc/org/buyer_app_finder_fee_type": "Percent",
                                "@ondc/org/buyer_app_finder_fee_amount": "3.0",
                            },
                        },
                    },
                };
                return [4 /*yield*/, (0, Header_1.getHeader)(body)];
            case 1:
                Header = _a.sent();
                postgres_backend_1.log.debug("Looking for header after calling getHeader in utility/fetchRequest.ts -> ", "getHeader()", { Header: Header });
                console.log(body);
                option = {
                    method: method,
                    headers: Header,
                    body: JSON.stringify(body),
                };
                return [4 /*yield*/, (0, node_fetch_1.default)(url, option)
                        .then(function (response) {
                        postgres_backend_1.log.debug("Looking for response coming from ".concat(url, " after calling FetchRequest function, this function available in utility/fetchRequest.ts -> "), "node-fetch", { response: response });
                        return response.json();
                    })
                        .catch(function (err) {
                        postgres_backend_1.log.error("Error coming from ".concat(url, " after calling FetchRequest function, this function available in utility/fetchRequest.ts -> "), JSON.stringify(err));
                        return err;
                    })];
            case 2: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.FetchRequest = FetchRequest;
//# sourceMappingURL=fethRequest.js.map