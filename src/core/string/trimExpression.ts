import {RulesExpression} from "../RulesExpression.js";
import {RulesString} from "./RulesString.js";

export function trimExpression(str: RulesString | string) {
    return new RulesExpression(str, RulesExpression.l`.trim()`);
}
