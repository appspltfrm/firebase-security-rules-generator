import { RulesExpression } from "../core/RulesExpression.js";
import { RulesBoolean } from "./RulesBoolean.js";
import { RulesString } from "./RulesString.js";
import { RulesValue } from "./RulesValue.js";
export function ifElse(trueExpression, whenTrueValue, elseValue) {
    if (typeof whenTrueValue === "string") {
        whenTrueValue = new RulesString(new RulesExpression(whenTrueValue));
    }
    else if (typeof whenTrueValue === "boolean") {
        whenTrueValue = new RulesBoolean(new RulesExpression(whenTrueValue));
    }
    if (typeof elseValue === "string") {
        elseValue = new RulesString(new RulesExpression(elseValue));
    }
    else if (typeof elseValue === "boolean") {
        elseValue = new RulesBoolean(new RulesExpression(elseValue));
    }
    const expression = new RulesExpression(RulesExpression.l `((`, trueExpression, RulesExpression.l `) ? (`, whenTrueValue, RulesExpression.l `) : (`, elseValue || RulesExpression.l `null`, RulesExpression.l `))`);
    if ((elseValue === undefined && whenTrueValue instanceof RulesValue) || (whenTrueValue === undefined && elseValue instanceof RulesValue) || (elseValue && whenTrueValue && whenTrueValue.constructor === elseValue.constructor)) {
        const valueType = (whenTrueValue || elseValue).constructor;
        return new valueType(expression);
    }
    else {
        return new RulesValue(expression);
    }
}
//# sourceMappingURL=ifElse.js.map