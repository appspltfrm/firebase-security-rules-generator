import { RulesExpression } from "./RulesExpression.js";
export function andExpression(...parts) {
    const expression = [];
    if (parts.length > 1) {
        expression.push(RulesExpression.l `(`);
        if (parts.length > 2) {
            expression.push(RulesExpression.identUp(), RulesExpression.newLine());
        }
    }
    for (let i = 0; i < parts.length; i++) {
        if (i > 0) {
            expression.push(RulesExpression.l ` && `);
            if (parts.length > 2) {
                expression.push(RulesExpression.newLine());
            }
        }
        expression.push(parts[i]);
    }
    if (parts.length > 1) {
        if (parts.length > 2) {
            expression.push(RulesExpression.identDown(), RulesExpression.newLine());
        }
        expression.push(RulesExpression.l `)`);
    }
    return new RulesExpression(...expression);
}
//# sourceMappingURL=andExpression.js.map