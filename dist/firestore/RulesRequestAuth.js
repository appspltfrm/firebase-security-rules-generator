"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulesRequestAuth = void 0;
exports.auth = auth;
const RulesExpression_js_1 = require("../core/RulesExpression.js");
const RulesMap_js_1 = require("./RulesMap.js");
const RulesValue_js_1 = require("./RulesValue.js");
const RulesString_js_1 = require("./RulesString.js");
function auth() {
    // @ts-ignore
    const auth = new RulesRequestAuth();
    auth.__rulesInitProperties();
    return auth;
}
class RulesRequestAuth extends RulesValue_js_1.RulesValue {
    constructor() {
        super();
        this.__rulesExpression = RulesExpression_js_1.RulesExpression.l `request.auth`;
    }
    uid = new RulesString_js_1.RulesString;
    /**
     * A map of JWT token claims.
     * @see https://firebase.google.com/docs/reference/rules/rules.firestore.Request#auth
     */
    token = new RulesMap_js_1.RulesMap;
}
exports.RulesRequestAuth = RulesRequestAuth;
//# sourceMappingURL=RulesRequestAuth.js.map