"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gteExpression = gteExpression;
const RulesExpression_js_1 = require("../RulesExpression.js");
function gteExpression(left, right) {
    return new RulesExpression_js_1.RulesExpression(left, RulesExpression_js_1.RulesExpression.l ` >= `, right);
}
//# sourceMappingURL=gteExpression.js.map