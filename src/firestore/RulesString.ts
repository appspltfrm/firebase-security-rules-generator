import {RulesExpression} from "../core/RulesExpression.js";
import {concatExpression} from "../core/string/concatExpression.js";
import {RulesString as $RulesString} from "../core/string/RulesString.js";
import {matchesExpression} from "../core/string/matchesExpression.js";
import {sizeExpression} from "../core/string/sizeExpression.js";
import {splitExpression} from "../core/string/splitExpression.js";
import {substringExpression} from "../core/string/substringExpression.js";
import {trimExpression} from "../core/string/trimExpression.js";
import {InternalRulesValue} from "../internal/InternalRulesValue.js";
import {RulesBoolean} from "./RulesBoolean.js";
import {RulesInteger} from "./RulesInteger.js";
import {RulesList} from "./RulesList.js";
import {RulesValue} from "./RulesValue.js";

export class RulesString extends RulesValue implements $RulesString {

    static is(value: RulesValue) {
        return new RulesBoolean(new RulesExpression(value, RulesExpression.l` is string`))
    }

    split(re: RulesString | string): RulesList<RulesString> {
        return new RulesList<RulesString>(splitExpression(this, re));
    }

    matches(re: RulesString | string): RulesBoolean {
        return new RulesBoolean(matchesExpression(this, re));
    }

    trim(): RulesString {
        return new RulesString(trimExpression(this));
    }

    size(): RulesInteger {
        return new RulesInteger(sizeExpression(this));
    }

    concat(...strings: Array<RulesString | string>): RulesString {
        return new RulesString(concatExpression(this, ...strings));
    }

    substring(start: number, end: number): RulesString {
        return new RulesString(substringExpression(this, start, end));
    }


}

export namespace RulesString {

    export function l(strings: TemplateStringsArray, ...expr: any[]): RulesString {
        return new RulesString(new class extends RulesExpression {
            write(writer) {

                writer.write("\"");

                for (let i = 0; i < strings.length; i++) {
                    writer.write(strings[i]);
                    if (expr.length > i) {
                        if (expr[i] instanceof RulesValue || expr[i] instanceof RulesExpression) {
                            writer.write(`" + `);
                            ((expr[i] instanceof RulesValue ? (expr[i] as InternalRulesValue).__rulesValueAsExpression() : expr[i]) as RulesExpression).write(writer);
                            writer.write(` + "`);
                        } else {
                            writer.write(expr[i] + "");
                        }
                    }
                }

                writer.write("\"");
            }
        });
    }
}
