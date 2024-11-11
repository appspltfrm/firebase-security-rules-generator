"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulesPath = void 0;
exports.path = path;
const RulesExpression_js_1 = require("../core/RulesExpression.js");
const RulesValue_js_1 = require("./RulesValue.js");
/**
 * Directory-like pattern for the location of a resource.
 *
 * {@link https://firebase.google.com/docs/reference/rules/rules.Path}
 */
class RulesPath extends RulesValue_js_1.RulesValue {
    bind(map) {
        return new RulesPath(new RulesExpression_js_1.RulesExpression(RulesExpression_js_1.RulesExpression.l `(`, this, RulesExpression_js_1.RulesExpression.l `).bind(`, map, RulesExpression_js_1.RulesExpression.l `)`));
    }
}
exports.RulesPath = RulesPath;
function path(path) {
    return new RulesPath(new RulesExpression_js_1.RulesExpression(RulesExpression_js_1.RulesExpression.l `path(`, path, RulesExpression_js_1.RulesExpression.l `)`));
}
(function (RulesPath) {
    function value(stringPath) {
        return path(stringPath);
    }
    RulesPath.value = value;
    function l(strings, ...expr) {
        return new RulesPath(new class extends RulesExpression_js_1.RulesExpression {
            write(writer) {
                writer.write("/databases/$(database)/documents");
                let braceOpened = false;
                for (let i = 0; i < strings.length; i++) {
                    if (strings[i].includes("/") && braceOpened) {
                        writer.write("\")");
                        braceOpened = false;
                    }
                    writer.write(strings[i]);
                    if (expr.length > i) {
                        if (!braceOpened) {
                            writer.write("$(\"");
                            braceOpened = true;
                        }
                        if (expr[i] instanceof RulesValue_js_1.RulesValue || expr[i] instanceof RulesExpression_js_1.RulesExpression) {
                            writer.write(`" + `);
                            (expr[i] instanceof RulesValue_js_1.RulesValue ? expr[i].__rulesValueAsExpression() : expr[i]).write(writer);
                            writer.write(` + "`);
                        }
                        else {
                            writer.write(expr[i] || "");
                        }
                    }
                }
                if (braceOpened) {
                    writer.write("\")");
                }
            }
        });
    }
    RulesPath.l = l;
})(RulesPath || (exports.RulesPath = RulesPath = {}));
//# sourceMappingURL=RulesPath.js.map