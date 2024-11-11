import { RulesExpression } from "../core/RulesExpression.js";
export function isNull(value) {
    return new RulesExpression(RulesExpression.l `(`, value, RulesExpression.l ` == null`, RulesExpression.l `)`);
}
//# sourceMappingURL=isNull.js.map