import {RulesExpression} from "../RulesExpression.js";
import {RulesString} from "./RulesString.js";

export function substringExpression(baseString: RulesString | string, start: number, end: number) {
    return new RulesExpression(baseString, RulesExpression.l`[`, start, RulesExpression.l`:`, end, RulesExpression.l`]`);
}
