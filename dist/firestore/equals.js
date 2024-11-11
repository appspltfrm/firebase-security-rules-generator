import { RulesBoolean } from "./RulesBoolean.js";
import { equals as $equals } from "../core/equals.js";
export function equals(left, right, not) {
    return new RulesBoolean($equals(left, right, not));
}
//# sourceMappingURL=equals.js.map