"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.internalRequest = void 0;
var postgres_backend_1 = require("@smoke-trees/postgres-backend");
var smoke_context_1 = require("@smoke-trees/smoke-context");
var internalRequest = function (url, method, body, options) { return __awaiter(void 0, void 0, void 0, function () {
    var context, option;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    return __generator(this, function (_m) {
        switch (_m.label) {
            case 0:
                postgres_backend_1.log.debug("Looking for body in utility/fetchRequest.ts -> ", body);
                context = smoke_context_1.ContextProvider.getContext();
                option = {
                    method: method,
                    body: body,
                    headers: __assign(__assign({}, options === null || options === void 0 ? void 0 : options.headers), { 'ondc-bap-uri': (_a = context.values) === null || _a === void 0 ? void 0 : _a.bap_uri, 'ondc-domain': (_b = context.values) === null || _b === void 0 ? void 0 : _b.domain, 'ondc-action': (_c = context.values) === null || _c === void 0 ? void 0 : _c.action, 'ondc-protocol-version': (_d = context.values) === null || _d === void 0 ? void 0 : _d.version, 'ondc-bap-id': (_e = context.values) === null || _e === void 0 ? void 0 : _e.bap_id, 'ondc-transaction-id': (_f = context.values) === null || _f === void 0 ? void 0 : _f.transaction_id, 'ondc-message-id': (_g = context.values) === null || _g === void 0 ? void 0 : _g.message_id, 'ondc-timestamp': (_h = context.values) === null || _h === void 0 ? void 0 : _h.timestamp, 'ondc-ttl': (_j = context.values) === null || _j === void 0 ? void 0 : _j.ttl, 'ondc-location-city': (_k = context.values) === null || _k === void 0 ? void 0 : _k.location_city, 'ondc-location-country': (_l = context.values) === null || _l === void 0 ? void 0 : _l.location_country })
                };
                return [4 /*yield*/, (0, smoke_context_1.fetch)(url, undefined, option)
                        .then(function (response) {
                        postgres_backend_1.log.debug("Looking for response coming from ".concat(url, " after calling FetchRequest function, this function available in utility/fetchRequest.ts -> "));
                        return response.json();
                    })
                        .catch(function (err) {
                        postgres_backend_1.log.error("Error coming from ".concat(url, " after calling FetchRequest function, this function available in utility/fetchRequest.ts -> "), JSON.stringify(err));
                        return err;
                    })];
            case 1: return [2 /*return*/, _m.sent()];
        }
    });
}); };
exports.internalRequest = internalRequest;
//# sourceMappingURL=internalRequest.js.map