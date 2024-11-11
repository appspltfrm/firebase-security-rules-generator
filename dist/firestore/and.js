import { andExpression } from "../core/andExpression.js";
import { RulesBoolean } from "./RulesBoolean.js";
export function and(...parts) {
    return new RulesBoolean(andExpression(...parts));
}
//# sourceMappingURL=and.js.map