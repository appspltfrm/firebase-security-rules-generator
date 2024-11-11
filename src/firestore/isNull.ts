import {RulesExpression} from "../core/RulesExpression.js";
import {RulesValue} from "./RulesValue.js";

export function isNull(value: RulesValue | RulesExpression | string | boolean | number) {
    return new RulesExpression(RulesExpression.l`(`, value, RulesExpression.l` == null`, RulesExpression.l`)`);
}
