import {andExpression} from "../core/andExpression.js";
import {RulesExpression} from "../core/RulesExpression.js";
import {RulesValue} from "../core/RulesValue.js";
import {RulesBoolean} from "./RulesBoolean.js";

export function and(...parts: Array<RulesExpression | RulesValue | boolean>) {
    return new RulesBoolean(andExpression(...parts));
}
