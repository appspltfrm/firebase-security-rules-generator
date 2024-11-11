import { orExpression } from "../core/orExpression.js";
import { RulesBoolean } from "./RulesBoolean.js";
export function or(...parts) {
    return new RulesBoolean(orExpression(...parts));
}
//# sourceMappingURL=or.js.map