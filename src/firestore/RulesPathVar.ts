import {RulesExpression} from "../core/RulesExpression.js";
import {InternalRulesPathVar} from "../internal/InternalRulesPathVar.js";
import {InternalRulesValue} from "../internal/InternalRulesValue.js";
import {RulesString} from "./RulesString.js";

export class RulesPathVar extends RulesString {

    constructor(varName?: string) {
        super();

        (this as any as InternalRulesPathVar).__rulesPathVar = true;

        if (varName) {
            (this as any as InternalRulesValue).__rulesAccessorName = varName;
        }

        (this as any as InternalRulesValue).__rulesValueAsExpression = () => RulesExpression.l`${(this as any as InternalRulesValue).__rulesAccessorName}`;
    }

}
