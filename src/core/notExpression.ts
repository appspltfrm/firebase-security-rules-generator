import {RulesExpression} from "./RulesExpression.js";
import {RulesValue} from "./RulesValue.js";

export function notExpression(value: RulesExpression | RulesValue | boolean) {
    return new RulesExpression(RulesExpression.l`!(`, value, RulesExpression.l`)`);
}
