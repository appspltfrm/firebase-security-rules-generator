import { RulesExpression } from "../core/RulesExpression.js";
export function isNotNull(value) {
    return new RulesExpression(RulesExpression.l `(`, value, RulesExpression.l ` != null`, RulesExpression.l `)`);
}
//# sourceMappingURL=isNotNull.js.map