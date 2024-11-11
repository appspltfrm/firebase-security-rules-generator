"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.concatExpression = concatExpression;
const RulesExpression_js_1 = require("../RulesExpression.js");
function concatExpression(...strings) {
    const expressions = [];
    for (let i = 0; i < strings.length; i++) {
        if (i > 0) {
            expressions.push(RulesExpression_js_1.RulesExpression.l ` + `);
        }
        expressions.push(strings[i]);
    }
    return new RulesExpression_js_1.RulesExpression(RulesExpression_js_1.RulesExpression.l `(`, ...expressions, RulesExpression_js_1.RulesExpression.l `)`);
}
//# sourceMappingURL=concatExpression.js.map