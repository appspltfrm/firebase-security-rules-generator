"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.variable = variable;
const RulesValue_js_1 = require("./RulesValue.js");
function variable(thiz, value) {
    if (value instanceof RulesValue_js_1.RulesValue) {
        const varId = "__var_" + (Object.keys(thiz.__rulesFunctionVars).length + 1);
        thiz.__rulesFunctionVars[varId] = value.__rulesValueAsExpression();
        value = value.__rulesClone();
        value.__rulesVarId = varId;
    }
    return value;
}
//# sourceMappingURL=variable.js.map