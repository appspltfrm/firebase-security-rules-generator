import { RulesExpression } from "./RulesExpression.js";
import { RulesValue } from "./RulesValue.js";
export declare function orExpression(...parts: Array<RulesExpression | RulesValue | boolean>): RulesExpression;
