"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gtExpression = gtExpression;
const RulesExpression_js_1 = require("../RulesExpression.js");
function gtExpression(left, right) {
    return new RulesExpression_js_1.RulesExpression(left, RulesExpression_js_1.RulesExpression.l ` > `, right);
}
//# sourceMappingURL=gtExpression.js.map