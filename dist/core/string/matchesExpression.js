"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matchesExpression = matchesExpression;
const RulesExpression_js_1 = require("../RulesExpression.js");
/**
 * @see https://firebase.google.com/docs/reference/rules/rules.String#matches
 */
function matchesExpression(str, re) {
    return new RulesExpression_js_1.RulesExpression(str, RulesExpression_js_1.RulesExpression.l `.matches(`, re, RulesExpression_js_1.RulesExpression.l `)`);
}
//# sourceMappingURL=matchesExpression.js.map