"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notExpression = notExpression;
const RulesExpression_js_1 = require("./RulesExpression.js");
function notExpression(value) {
    return new RulesExpression_js_1.RulesExpression(RulesExpression_js_1.RulesExpression.l `!(`, value, RulesExpression_js_1.RulesExpression.l `)`);
}
//# sourceMappingURL=notExpression.js.map