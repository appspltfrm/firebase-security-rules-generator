import { RulesExpression } from "./RulesExpression.js";
export function equals(left, right, not) {
    return new RulesExpression(left, RulesExpression.l ` ${not ? '!' : '='}= `, right);
}
//# sourceMappingURL=equals.js.map