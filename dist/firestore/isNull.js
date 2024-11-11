"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNull = isNull;
const RulesExpression_js_1 = require("../core/RulesExpression.js");
function isNull(value) {
    return new RulesExpression_js_1.RulesExpression(RulesExpression_js_1.RulesExpression.l `(`, value, RulesExpression_js_1.RulesExpression.l ` == null`, RulesExpression_js_1.RulesExpression.l `)`);
}
//# sourceMappingURL=isNull.js.map