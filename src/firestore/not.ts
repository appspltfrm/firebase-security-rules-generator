import {notExpression} from "../core/notExpression.js";
import {RulesExpression} from "../core/RulesExpression.js";
import {RulesValue} from "../core/RulesValue.js";
import {RulesBoolean} from "./RulesBoolean.js";

export function not(value: RulesExpression | RulesValue | boolean) {
    return new RulesBoolean(notExpression(value));
}
