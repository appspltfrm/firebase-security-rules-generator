import { RulesExpression } from "../RulesExpression.js";
import { RulesString } from "./RulesString.js";
/**
 * @see https://firebase.google.com/docs/reference/rules/rules.String#split
 */
export declare function splitExpression(str: RulesString | string, re: RulesString | string): RulesExpression;
