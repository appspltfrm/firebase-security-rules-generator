import { RulesExpression } from "./RulesExpression.js";
export function notExpression(value) {
    return new RulesExpression(RulesExpression.l `!(`, value, RulesExpression.l `)`);
}
//# sourceMappingURL=notExpression.js.map