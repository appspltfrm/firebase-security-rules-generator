import {orExpression} from "../core/orExpression.js";
import {RulesExpression} from "../core/RulesExpression.js";
import {RulesValue} from "../core/RulesValue.js";
import {RulesBoolean} from "./RulesBoolean.js";

export function or(...parts: Array<RulesExpression | RulesValue | boolean>): RulesBoolean {
    return new RulesBoolean(orExpression(...parts));
}
