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
Object.defineProperty(exports, "__esModule", { value: true });
exports.on_confirm = exports.on_cancel = exports.on_init = exports.on_support = exports.on_update = exports.on_track = exports.on_rating = exports.on_status = exports.on_search = exports.on_select = void 0;
var fethRequest_1 = require("./fethRequest");
var on_select = function (method, baseUrl, body) { return __awaiter(void 0, void 0, void 0, function () {
    var url;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = baseUrl + "/on_select";
                return [4 /*yield*/, (0, fethRequest_1.FetchRequest)(url, method, JSON.stringify(body))];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.on_select = on_select;
var on_search = function (method, baseUrl, body) { return __awaiter(void 0, void 0, void 0, function () {
    var url;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = baseUrl + "/on_search";
                return [4 /*yield*/, (0, fethRequest_1.FetchRequest)(url, method, JSON.stringify(body))];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.on_search = on_search;
var on_status = function (method, baseUrl, body) { return __awaiter(void 0, void 0, void 0, function () {
    var url;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = baseUrl + "/on_status";
                return [4 /*yield*/, (0, fethRequest_1.FetchRequest)(url, method, JSON.stringify(body))];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.on_status = on_status;
var on_rating = function (method, baseUrl, body) { return __awaiter(void 0, void 0, void 0, function () {
    var url;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = baseUrl + "/on_rating";
                return [4 /*yield*/, (0, fethRequest_1.FetchRequest)(url, method, JSON.stringify(body))];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.on_rating = on_rating;
var on_track = function (method, baseUrl, body) { return __awaiter(void 0, void 0, void 0, function () {
    var url;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = baseUrl + "/on_track";
                return [4 /*yield*/, (0, fethRequest_1.FetchRequest)(url, method, JSON.stringify(body))];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.on_track = on_track;
var on_update = function (method, baseUrl, body) { return __awaiter(void 0, void 0, void 0, function () {
    var url;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = baseUrl + "/on_update";
                return [4 /*yield*/, (0, fethRequest_1.FetchRequest)(url, method, JSON.stringify(body))];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.on_update = on_update;
var on_support = function (method, baseUrl, body) { return __awaiter(void 0, void 0, void 0, function () {
    var url;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = baseUrl + "/on_update";
                return [4 /*yield*/, (0, fethRequest_1.FetchRequest)(url, method, JSON.stringify(body))];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.on_support = on_support;
var on_init = function (method, baseUrl, body) { return __awaiter(void 0, void 0, void 0, function () {
    var url;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = baseUrl + "/on_init";
                return [4 /*yield*/, (0, fethRequest_1.FetchRequest)(url, method, JSON.stringify(body))];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.on_init = on_init;
var on_cancel = function (method, baseUrl, body) { return __awaiter(void 0, void 0, void 0, function () {
    var url;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = baseUrl + "/on_cancel";
                return [4 /*yield*/, (0, fethRequest_1.FetchRequest)(url, method, JSON.stringify(body))];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.on_cancel = on_cancel;
var on_confirm = function (method, baseUrl, body) { return __awaiter(void 0, void 0, void 0, function () {
    var url;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = baseUrl + "/on_confirm";
                return [4 /*yield*/, (0, fethRequest_1.FetchRequest)(url, method, JSON.stringify(body))];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.on_confirm = on_confirm;
//# sourceMappingURL=response.js.map