"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ifElse = ifElse;
const RulesExpression_js_1 = require("../core/RulesExpression.js");
const RulesBoolean_js_1 = require("./RulesBoolean.js");
const RulesString_js_1 = require("./RulesString.js");
const RulesValue_js_1 = require("./RulesValue.js");
function ifElse(trueExpression, whenTrueValue, elseValue) {
    if (typeof whenTrueValue === "string") {
        whenTrueValue = new RulesString_js_1.RulesString(new RulesExpression_js_1.RulesExpression(whenTrueValue));
    }
    else if (typeof whenTrueValue === "boolean") {
        whenTrueValue = new RulesBoolean_js_1.RulesBoolean(new RulesExpression_js_1.RulesExpression(whenTrueValue));
    }
    if (typeof elseValue === "string") {
        elseValue = new RulesString_js_1.RulesString(new RulesExpression_js_1.RulesExpression(elseValue));
    }
    else if (typeof elseValue === "boolean") {
        elseValue = new RulesBoolean_js_1.RulesBoolean(new RulesExpression_js_1.RulesExpression(elseValue));
    }
    const expression = new RulesExpression_js_1.RulesExpression(RulesExpression_js_1.RulesExpression.l `((`, trueExpression, RulesExpression_js_1.RulesExpression.l `) ? (`, whenTrueValue, RulesExpression_js_1.RulesExpression.l `) : (`, elseValue || RulesExpression_js_1.RulesExpression.l `null`, RulesExpression_js_1.RulesExpression.l `))`);
    if ((elseValue === undefined && whenTrueValue instanceof RulesValue_js_1.RulesValue) || (whenTrueValue === undefined && elseValue instanceof RulesValue_js_1.RulesValue) || (elseValue && whenTrueValue && whenTrueValue.constructor === elseValue.constructor)) {
        const valueType = (whenTrueValue || elseValue).constructor;
        return new valueType(expression);
    }
    else {
        return new RulesValue_js_1.RulesValue(expression);
    }
}
//# sourceMappingURL=ifElse.js.map