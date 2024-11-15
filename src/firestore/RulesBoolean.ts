import {RulesBoolean as $RulesBoolean} from "../core/RulesBoolean.js";
import {RulesExpression} from "../core/RulesExpression.js";
import {not} from "./not.js";
import {RulesValue} from "./RulesValue.js";

/**
 *  Type representing a boolean value, true or false.
 *
 *  @link https://firebase.google.com/docs/reference/rules/rules.Boolean
 */
export class RulesBoolean extends RulesValue implements $RulesBoolean {

    /**
     * Negative value of this boolean.
     */
    not() {
        return not(this);
    }

}

export namespace RulesBoolean {

    /**
     * Convert string into boolean.
     */
    export function value(value: string) {
        return new RulesBoolean(new RulesExpression(RulesExpression.l`bool(`, value, RulesExpression.l`)`));
    }

}
