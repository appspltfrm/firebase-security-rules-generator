"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulesString = void 0;
const RulesExpression_js_1 = require("../core/RulesExpression.js");
const concatExpression_js_1 = require("../core/string/concatExpression.js");
const matchesExpression_js_1 = require("../core/string/matchesExpression.js");
const sizeExpression_js_1 = require("../core/string/sizeExpression.js");
const splitExpression_js_1 = require("../core/string/splitExpression.js");
const substringExpression_js_1 = require("../core/string/substringExpression.js");
const trimExpression_js_1 = require("../core/string/trimExpression.js");
const RulesBoolean_js_1 = require("./RulesBoolean.js");
const RulesInteger_js_1 = require("./RulesInteger.js");
const RulesList_js_1 = require("./RulesList.js");
const RulesValue_js_1 = require("./RulesValue.js");
class RulesString extends RulesValue_js_1.RulesValue {
    static is(value) {
        return new RulesBoolean_js_1.RulesBoolean(new RulesExpression_js_1.RulesExpression(value, RulesExpression_js_1.RulesExpression.l ` is string`));
    }
    split(re) {
        return new RulesList_js_1.RulesList((0, splitExpression_js_1.splitExpression)(this, re));
    }
    matches(re) {
        return new RulesBoolean_js_1.RulesBoolean((0, matchesExpression_js_1.matchesExpression)(this, re));
    }
    trim() {
        return new RulesString((0, trimExpression_js_1.trimExpression)(this));
    }
    size() {
        return new RulesInteger_js_1.RulesInteger((0, sizeExpression_js_1.sizeExpression)(this));
    }
    concat(...strings) {
        return new RulesString((0, concatExpression_js_1.concatExpression)(this, ...strings));
    }
    substring(start, end) {
        return new RulesString((0, substringExpression_js_1.substringExpression)(this, start, end));
    }
}
exports.RulesString = RulesString;
(function (RulesString) {
    function l(strings, ...expr) {
        return new RulesString(new class extends RulesExpression_js_1.RulesExpression {
            write(writer) {
                writer.write("\"");
                for (let i = 0; i < strings.length; i++) {
                    writer.write(strings[i]);
                    if (expr.length > i) {
                        if (expr[i] instanceof RulesValue_js_1.RulesValue || expr[i] instanceof RulesExpression_js_1.RulesExpression) {
                            writer.write(`" + `);
                            (expr[i] instanceof RulesValue_js_1.RulesValue ? expr[i].__rulesValueAsExpression() : expr[i]).write(writer);
                            writer.write(` + "`);
                        }
                        else {
                            writer.write(expr[i] + "");
                        }
                    }
                }
                writer.write("\"");
            }
        });
    }
    RulesString.l = l;
})(RulesString || (exports.RulesString = RulesString = {}));
//# sourceMappingURL=RulesString.js.map