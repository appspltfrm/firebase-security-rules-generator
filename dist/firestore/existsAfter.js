import { RulesExpression } from "../core/RulesExpression.js";
import { RulesBoolean } from "./RulesBoolean.js";
import { RulesPath } from "./RulesPath.js";
/**
 * @see https://firebase.google.com/docs/reference/rules/rules.firestore#.existsAfter
 */
export function existsAfter(path) {
    return new RulesBoolean(new RulesExpression(RulesExpression.l `existsAfter(`, typeof path === "string" ? RulesPath.value(path) : path, RulesExpression.l `)`));
}
//# sourceMappingURL=existsAfter.js.map