import { RulesExpression } from "./RulesExpression.js";
import { RulesValue } from "./RulesValue.js";
export declare function andExpression(...parts: Array<RulesExpression | RulesValue | boolean>): RulesExpression;
