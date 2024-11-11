"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orExpression = orExpression;
const RulesExpression_js_1 = require("./RulesExpression.js");
function orExpression(...parts) {
    const expression = [];
    if (parts.length > 1) {
        expression.push(RulesExpression_js_1.RulesExpression.l `(`);
        if (parts.length > 2) {
            expression.push(RulesExpression_js_1.RulesExpression.identUp(), RulesExpression_js_1.RulesExpression.newLine());
        }
    }
    for (let i = 0; i < parts.length; i++) {
        if (i > 0) {
            expression.push(RulesExpression_js_1.RulesExpression.l ` || `);
            if (parts.length > 2) {
                expression.push(RulesExpression_js_1.RulesExpression.newLine());
            }
        }
        expression.push(parts[i]);
    }
    if (parts.length > 1) {
        if (parts.length > 2) {
            expression.push(RulesExpression_js_1.RulesExpression.identDown(), RulesExpression_js_1.RulesExpression.newLine());
        }
        expression.push(RulesExpression_js_1.RulesExpression.l `)`);
    }
    return new RulesExpression_js_1.RulesExpression(...expression);
}
//# sourceMappingURL=orExpression.js.map