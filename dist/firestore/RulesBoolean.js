"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulesBoolean = void 0;
const RulesExpression_js_1 = require("../core/RulesExpression.js");
const not_js_1 = require("./not.js");
const RulesValue_js_1 = require("./RulesValue.js");
/**
 *  Type representing a boolean value, true or false.
 *
 *  @link https://firebase.google.com/docs/reference/rules/rules.Boolean
 */
class RulesBoolean extends RulesValue_js_1.RulesValue {
    /**
     * Negative value of this boolean.
     */
    not() {
        return (0, not_js_1.not)(this);
    }
}
exports.RulesBoolean = RulesBoolean;
(function (RulesBoolean) {
    /**
     * Convert string into boolean.
     */
    function value(value) {
        return new RulesBoolean(new RulesExpression_js_1.RulesExpression(RulesExpression_js_1.RulesExpression.l `bool(`, value, RulesExpression_js_1.RulesExpression.l `)`));
    }
    RulesBoolean.value = value;
})(RulesBoolean || (exports.RulesBoolean = RulesBoolean = {}));
//# sourceMappingURL=RulesBoolean.js.map