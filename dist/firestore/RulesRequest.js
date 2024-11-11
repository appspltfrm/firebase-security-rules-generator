"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulesRequestImpl = void 0;
const RulesExpression_js_1 = require("../core/RulesExpression.js");
const RulesRequestAuth_js_1 = require("./RulesRequestAuth.js");
const RulesString_js_1 = require("./RulesString.js");
const RulesTimestamp_js_1 = require("./RulesTimestamp.js");
const RulesValue_js_1 = require("./RulesValue.js");
class RulesRequestImpl extends RulesValue_js_1.RulesValue {
    resource;
    constructor(resource) {
        super();
        this.resource = resource;
        this.__rulesInitProperties();
        this.__rulesExpression = RulesExpression_js_1.RulesExpression.l `request`;
    }
    // @ts-ignore
    auth = new RulesRequestAuth_js_1.RulesRequestAuth;
    time = new RulesTimestamp_js_1.RulesTimestamp;
    /**
     * The request method. One of:
     * - get
     * - list
     * - create
     * - update
     * - delete
     *
     * @see https://firebase.google.com/docs/reference/rules/rules.firestore.Request#method
     */
    method = new RulesString_js_1.RulesString;
}
exports.RulesRequestImpl = RulesRequestImpl;
//# sourceMappingURL=RulesRequest.js.map