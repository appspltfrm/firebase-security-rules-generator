"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.equals = equals;
const RulesExpression_js_1 = require("./RulesExpression.js");
function equals(left, right, not) {
    return new RulesExpression_js_1.RulesExpression(left, RulesExpression_js_1.RulesExpression.l ` ${not ? '!' : '='}= `, right);
}
//# sourceMappingURL=equals.js.map