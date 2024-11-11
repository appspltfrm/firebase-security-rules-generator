"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulesList = void 0;
const RulesExpression_js_1 = require("../core/RulesExpression.js");
const RulesBoolean_js_1 = require("./RulesBoolean.js");
const RulesInteger_js_1 = require("./RulesInteger.js");
const RulesValue_js_1 = require("./RulesValue.js");
/**
 * List type. Items are not necessarily homogenous.
 *
 * {@link https://firebase.google.com/docs/reference/rules/rules.List}
 */
class RulesList extends RulesValue_js_1.RulesValue {
    constructor(arrayOrExpression) {
        if (Array.isArray(arrayOrExpression)) {
            super(new RulesExpression_js_1.RulesExpression(RulesExpression_js_1.RulesExpression.l `[`, arrayOrExpression, RulesExpression_js_1.RulesExpression.l `]`));
        }
        else if (arrayOrExpression) {
            super(arrayOrExpression);
        }
        else {
            super();
        }
    }
    get(index, valueType) {
        const type = new (valueType || RulesValue_js_1.RulesValue);
        type.__rulesExpression = new RulesExpression_js_1.RulesExpression(RulesExpression_js_1.RulesExpression.l `(`, this, RulesExpression_js_1.RulesExpression.l `)`, RulesExpression_js_1.RulesExpression.l `[`, index, RulesExpression_js_1.RulesExpression.l `]`);
        return type;
    }
    /**
     * Get the number of values in the list.
     */
    size() {
        return new RulesInteger_js_1.RulesInteger(new RulesExpression_js_1.RulesExpression(this, RulesExpression_js_1.RulesExpression.l `.size()`));
    }
    /**
     * Determine whether the list contains all elements in another list.
     */
    hasAll(list) {
        return this.buildHasExpression("hasAll", list);
    }
    /**
     * Determine whether the list contains any element in another list.
     */
    hasAny(list) {
        return this.buildHasExpression("hasAny", list);
    }
    /**
     * Determine whether all elements in the list are present in another list.
     */
    hasOnly(list) {
        return this.buildHasExpression("hasOnly", list);
    }
    buildHasExpression(method, list) {
        const expression = [this, RulesExpression_js_1.RulesExpression.l `.${method}(`];
        if (list instanceof Array) {
            expression.push(RulesExpression_js_1.RulesExpression.l `[`);
            for (let i = 0; i < list.length; i++) {
                if (i > 0) {
                    expression.push(RulesExpression_js_1.RulesExpression.l `, `);
                }
                expression.push(list[i]);
            }
            expression.push(RulesExpression_js_1.RulesExpression.l `]`);
        }
        else {
            expression.push(list);
        }
        expression.push(RulesExpression_js_1.RulesExpression.l `)`);
        return new RulesBoolean_js_1.RulesBoolean(new RulesExpression_js_1.RulesExpression(expression));
    }
}
exports.RulesList = RulesList;
//# sourceMappingURL=RulesList.js.map