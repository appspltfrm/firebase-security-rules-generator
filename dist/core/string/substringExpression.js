"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.substringExpression = substringExpression;
const RulesExpression_js_1 = require("../RulesExpression.js");
function substringExpression(baseString, start, end) {
    return new RulesExpression_js_1.RulesExpression(baseString, RulesExpression_js_1.RulesExpression.l `[`, start, RulesExpression_js_1.RulesExpression.l `:`, end, RulesExpression_js_1.RulesExpression.l `]`);
}
//# sourceMappingURL=substringExpression.js.map