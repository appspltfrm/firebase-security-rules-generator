import { RulesExpression } from "../RulesExpression.js";
import { RulesString } from "./RulesString.js";
/**
 * @see https://firebase.google.com/docs/reference/rules/rules.String#matches
 */
export declare function matchesExpression(str: RulesString | string, re: RulesString | string): RulesExpression;
