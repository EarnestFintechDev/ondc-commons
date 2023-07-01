"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContext = void 0;
var smoke_context_1 = require("@smoke-trees/smoke-context");
var context_1 = require("../context");
function getContext() {
    var _a, _b, _c, _d;
    var values = smoke_context_1.ContextProvider.getContext().values;
    if (!values) {
        throw new Error("Error in getting the context");
    }
    var context = new context_1.Context(values.ttl, {
        city: { code: values.location_city },
        country: { code: values.location_country }
    }, new Date().toISOString(), values.message_id, values.transaction_id, (_b = (_a = values.bpp_uri) !== null && _a !== void 0 ? _a : process.env['BPP_URI']) !== null && _b !== void 0 ? _b : 'https://ondc.vistar.solutions/v1/bpp', (_d = (_c = values.bpp_id) !== null && _c !== void 0 ? _c : process.env['BPP_ID']) !== null && _d !== void 0 ? _d : 'ondc.vistar.solutions', values.version, values.action, values.domain, values.bap_id, values.bap_uri);
    return context;
}
exports.getContext = getContext;
//# sourceMappingURL=context.js.map