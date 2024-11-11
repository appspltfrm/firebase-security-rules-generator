"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitExpression = splitExpression;
const RulesExpression_js_1 = require("../RulesExpression.js");
/**
 * @see https://firebase.google.com/docs/reference/rules/rules.String#split
 */
function splitExpression(str, re) {
    return new RulesExpression_js_1.RulesExpression(str, RulesExpression_js_1.RulesExpression.l `.split(`, re, RulesExpression_js_1.RulesExpression.l `)`);
}
//# sourceMappingURL=splitExpression.js.map