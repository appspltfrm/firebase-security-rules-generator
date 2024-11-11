"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulesValue = void 0;
const RulesExpression_js_1 = require("../core/RulesExpression.js");
const RulesValue_js_1 = require("../core/RulesValue.js");
const equals_js_1 = require("./equals.js");
const RulesBoolean_js_1 = require("./RulesBoolean.js");
class RulesValue extends RulesValue_js_1.RulesValue {
    isNotNull() {
        return new RulesBoolean_js_1.RulesBoolean(new RulesExpression_js_1.RulesExpression(this, RulesExpression_js_1.RulesExpression.l ` != null`));
    }
    isNull() {
        return new RulesBoolean_js_1.RulesBoolean(new RulesExpression_js_1.RulesExpression(this, RulesExpression_js_1.RulesExpression.l ` == null`));
    }
    equals(other, not) {
        return (0, equals_js_1.equals)(this, other, not);
    }
    notEquals(other) {
        return (0, equals_js_1.equals)(this, other, true);
    }
}
exports.RulesValue = RulesValue;
//# sourceMappingURL=RulesValue.js.map