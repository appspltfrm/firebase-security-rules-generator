import { RulesExpression } from "../core/RulesExpression.js";
import { not } from "./not.js";
import { RulesValue } from "./RulesValue.js";
/**
 *  Type representing a boolean value, true or false.
 *
 *  @link https://firebase.google.com/docs/reference/rules/rules.Boolean
 */
export class RulesBoolean extends RulesValue {
    /**
     * Negative value of this boolean.
     */
    not() {
        return not(this);
    }
}
(function (RulesBoolean) {
    /**
     * Convert string into boolean.
     */
    function value(value) {
        return new RulesBoolean(new RulesExpression(RulesExpression.l `bool(`, value, RulesExpression.l `)`));
    }
    RulesBoolean.value = value;
})(RulesBoolean || (RulesBoolean = {}));
//# sourceMappingURL=RulesBoolean.js.map