"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulesMap = void 0;
const RulesExpression_js_1 = require("../core/RulesExpression.js");
const RulesBoolean_js_1 = require("./RulesBoolean.js");
const RulesList_js_1 = require("./RulesList.js");
const RulesMapDiff_js_1 = require("./RulesMapDiff.js");
const RulesValue_js_1 = require("./RulesValue.js");
/**
 * Map type, used for simple key-value mappings.
 *
 * {@link https://firebase.google.com/docs/reference/rules/rules.Map}
 */
class RulesMap extends RulesValue_js_1.RulesValue {
    /**
     * Returns the value associated with a given search key string.
     *
     * For nested Maps, involving keys and sub-keys, returns the value associated
     * with a given sub-key string. The sub-key is identified using a list, the first item of
     * which is a top-level key and the last item the sub-key whose
     * value is to be looked up and returned. See the nested Map example below.
     *
     * The function requires a default value to return if no match to the given search key is found.
     *
     * @param key Either a key specified as a string, or for nested Maps, a sub-key specified using list syntax.
     * @param valueType Type of returned value.
     * @param defaultValue Value to return if the map does not contain the given search key.
     */
    get(key, valueType, defaultValue) {
        const type = new (valueType || RulesValue_js_1.RulesValue);
        type.__rulesExpression = new RulesExpression_js_1.RulesExpression(RulesExpression_js_1.RulesExpression.l `(`, this, RulesExpression_js_1.RulesExpression.l `)`, RulesExpression_js_1.RulesExpression.l `.get(`, key, RulesExpression_js_1.RulesExpression.l `, `, (defaultValue !== undefined ? defaultValue : RulesExpression_js_1.RulesExpression.l `null`), RulesExpression_js_1.RulesExpression.l `)`);
        return type;
    }
    diff(map) {
        return new RulesMapDiff_js_1.RulesMapDiff(new RulesExpression_js_1.RulesExpression(this, RulesExpression_js_1.RulesExpression.l `.diff(`, map, RulesExpression_js_1.RulesExpression.l `)`));
    }
    keys() {
        return new RulesList_js_1.RulesList(new RulesExpression_js_1.RulesExpression(this, RulesExpression_js_1.RulesExpression.l `.keys()`));
    }
    hasKey(key) {
        return new RulesBoolean_js_1.RulesBoolean(new RulesExpression_js_1.RulesExpression(RulesExpression_js_1.RulesExpression.l `(`, key, RulesExpression_js_1.RulesExpression.l ` in `, this, RulesExpression_js_1.RulesExpression.l `)`));
    }
}
exports.RulesMap = RulesMap;
//# sourceMappingURL=RulesMap.js.map