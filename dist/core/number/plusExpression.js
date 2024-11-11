"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.plusExpression = plusExpression;
const RulesExpression_js_1 = require("../RulesExpression.js");
function plusExpression(left, right) {
    return new RulesExpression_js_1.RulesExpression(left, RulesExpression_js_1.RulesExpression.l ` + `, right);
}
//# sourceMappingURL=plusExpression.js.map