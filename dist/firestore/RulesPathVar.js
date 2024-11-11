import { RulesExpression } from "../core/RulesExpression.js";
import { RulesString } from "./RulesString.js";
export class RulesPathVar extends RulesString {
    constructor(varName) {
        super();
        this.__rulesPathVar = true;
        if (varName) {
            this.__rulesAccessorName = varName;
        }
        this.__rulesValueAsExpression = () => RulesExpression.l `${this.__rulesAccessorName}`;
    }
}
//# sourceMappingURL=RulesPathVar.js.map