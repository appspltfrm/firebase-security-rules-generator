import {RulesExpression} from "../RulesExpression.js";
import {RulesNumber} from "./RulesNumber.js";

export function plusExpression(left: RulesNumber | number, right: RulesNumber | number) {
    return new RulesExpression(left, RulesExpression.l` + `, right);
}
