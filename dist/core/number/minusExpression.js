"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.minusExpression = minusExpression;
const RulesExpression_js_1 = require("../RulesExpression.js");
function minusExpression(left, right) {
    return new RulesExpression_js_1.RulesExpression(left, RulesExpression_js_1.RulesExpression.l ` - `, right);
}
//# sourceMappingURL=minusExpression.js.map