"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lteExpression = lteExpression;
const RulesExpression_js_1 = require("../RulesExpression.js");
function lteExpression(left, right) {
    return new RulesExpression_js_1.RulesExpression(left, RulesExpression_js_1.RulesExpression.l ` <= `, right);
}
//# sourceMappingURL=lteExpression.js.map