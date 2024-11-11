import { notExpression } from "../core/notExpression.js";
import { RulesBoolean } from "./RulesBoolean.js";
export function not(value) {
    return new RulesBoolean(notExpression(value));
}
//# sourceMappingURL=not.js.map