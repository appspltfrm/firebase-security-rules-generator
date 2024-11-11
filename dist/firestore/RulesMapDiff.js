"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulesMapDiff = void 0;
const RulesExpression_js_1 = require("../core/RulesExpression.js");
const RulesSet_js_1 = require("./RulesSet.js");
const RulesString_js_1 = require("./RulesString.js");
const RulesValue_js_1 = require("./RulesValue.js");
/**
 * Map type, used for simple key-value mappings.
 *
 * {@link https://firebase.google.com/docs/reference/rules/rules.MapDiff}
 */
class RulesMapDiff extends RulesValue_js_1.RulesValue {
    addedKeys() {
        return new RulesSet_js_1.RulesSet(new RulesExpression_js_1.RulesExpression(this, RulesExpression_js_1.RulesExpression.l `.addedKeys()`), RulesString_js_1.RulesString);
    }
    affectedKeys() {
        return new RulesSet_js_1.RulesSet(new RulesExpression_js_1.RulesExpression(this, RulesExpression_js_1.RulesExpression.l `.affectedKeys()`), RulesString_js_1.RulesString);
    }
    changedKeys() {
        return new RulesSet_js_1.RulesSet(new RulesExpression_js_1.RulesExpression(this, RulesExpression_js_1.RulesExpression.l `.changedKeys()`), RulesString_js_1.RulesString);
    }
    addedOrChangedKeys() {
        return new RulesSet_js_1.RulesSet(new RulesExpression_js_1.RulesExpression(RulesExpression_js_1.RulesExpression.l `__MapDiff_addedOrChangedKeys(`, this, RulesExpression_js_1.RulesExpression.l `)`), RulesString_js_1.RulesString);
    }
    removedKeys() {
        return new RulesSet_js_1.RulesSet(new RulesExpression_js_1.RulesExpression(this, RulesExpression_js_1.RulesExpression.l `.removedKeys()`), RulesString_js_1.RulesString);
    }
    unchangedKeys() {
        return new RulesSet_js_1.RulesSet(new RulesExpression_js_1.RulesExpression(this, RulesExpression_js_1.RulesExpression.l `.unchangedKeys()`), RulesString_js_1.RulesString);
    }
}
exports.RulesMapDiff = RulesMapDiff;
//# sourceMappingURL=RulesMapDiff.js.map