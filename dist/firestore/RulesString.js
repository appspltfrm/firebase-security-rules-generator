import { RulesExpression } from "../core/RulesExpression.js";
import { concatExpression } from "../core/string/concatExpression.js";
import { matchesExpression } from "../core/string/matchesExpression.js";
import { sizeExpression } from "../core/string/sizeExpression.js";
import { splitExpression } from "../core/string/splitExpression.js";
import { substringExpression } from "../core/string/substringExpression.js";
import { trimExpression } from "../core/string/trimExpression.js";
import { RulesBoolean } from "./RulesBoolean.js";
import { RulesInteger } from "./RulesInteger.js";
import { RulesList } from "./RulesList.js";
import { RulesValue } from "./RulesValue.js";
export class RulesString extends RulesValue {
    static is(value) {
        return new RulesBoolean(new RulesExpression(value, RulesExpression.l ` is string`));
    }
    split(re) {
        return new RulesList(splitExpression(this, re));
    }
    matches(re) {
        return new RulesBoolean(matchesExpression(this, re));
    }
    trim() {
        return new RulesString(trimExpression(this));
    }
    size() {
        return new RulesInteger(sizeExpression(this));
    }
    concat(...strings) {
        return new RulesString(concatExpression(this, ...strings));
    }
    substring(start, end) {
        return new RulesString(substringExpression(this, start, end));
    }
}
(function (RulesString) {
    function l(strings, ...expr) {
        return new RulesString(new class extends RulesExpression {
            write(writer) {
                writer.write("\"");
                for (let i = 0; i < strings.length; i++) {
                    writer.write(strings[i]);
                    if (expr.length > i) {
                        if (expr[i] instanceof RulesValue || expr[i] instanceof RulesExpression) {
                            writer.write(`" + `);
                            (expr[i] instanceof RulesValue ? expr[i].__rulesValueAsExpression() : expr[i]).write(writer);
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
})(RulesString || (RulesString = {}));
//# sourceMappingURL=RulesString.js.map