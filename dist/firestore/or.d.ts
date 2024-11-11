import { RulesExpression } from "../core/RulesExpression.js";
import { RulesValue } from "../core/RulesValue.js";
import { RulesBoolean } from "./RulesBoolean.js";
export declare function or(...parts: Array<RulesExpression | RulesValue | boolean>): RulesBoolean;
