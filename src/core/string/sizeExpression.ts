import {RulesExpression} from "../RulesExpression.js";
import {RulesString} from "./RulesString.js";

export function sizeExpression(str: RulesString | string) {
    return new RulesExpression(str, RulesExpression.l`.size()`);
}
