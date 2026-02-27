import {InternalRulesValue} from "../internal/InternalRulesValue.js";
import {StringWriter} from "../utils/StringWriter.js";

/**
 * Reprezentuje wyrażenie w regułach bezpieczeństwa Firebase.
 * Może zawierać ciągi znaków, liczby, inne wyrażenia lub instancje RulesValue.
 */
export class RulesExpression {

    constructor(...expression: any[]) {
        this.expression = expression;
    }

    /**
     * Elementy składające się na wyrażenie.
     */
    protected expression: any[];

    /**
     * Implementacja zapisu poszczególnych elementów wyrażenia do StringWriter.
     */
    protected writeImpl(writer: StringWriter, expression: any) {

        if (expression === null || expression === undefined) {
            return writer.write("null");

        } else if (Array.isArray(expression)) {

            for (const e of expression) {
                this.writeImpl(writer, e);
            }

        } else if (expression instanceof RulesExpression) {
            return expression.write(writer);

        } else if ((expression as any as InternalRulesValue).__rulesValue) {
            return this.writeImpl(writer, (expression as any as InternalRulesValue).__rulesValueAsExpression());

        } else if (typeof expression === "string") {
            return writer.write(`"${expression}"`);

        } else {
            return writer.write(expression.toString());
        }
    }

    /**
     * Zapisuje całe wyrażenie do StringWriter.
     */
    write(writer: StringWriter) {
        this.writeImpl(writer, this.expression);
    }

    /**
     * Tworzy tekstową reprezentację wyrażenia dla celów debugowania.
     */
    toString() {
        const writer = new StringWriter();
        this.write(writer);
        return `RulesExpression(${writer.toString()})`
    }

}

export namespace RulesExpression {

    /**
     * Tworzy wyrażenie literalne na podstawie szablonu tekstowego (template literal).
     */
    export function l(strings: TemplateStringsArray, ...expr: string[]): RulesExpression {
        return new class extends RulesExpression {
            write(writer) {
                for (let i = 0; i < strings.length; i++) {
                    writer.write(strings[i] + (expr[i] || ""));
                }
            }
        }
    }

    /**
     * Tworzy wyrażenie reprezentujące nową linię.
     */
    export function newLine(): RulesExpression {
        return new class extends RulesExpression {
            write(writer: StringWriter) {
                writer.line();
            }
        }
    }

    /**
     * Tworzy wyrażenie zwiększające wcięcie.
     */
    export function identUp(): RulesExpression {
        return new class extends RulesExpression {
            write(writer: StringWriter) {
                writer.indentUp();
            }
        }
    }

    /**
     * Tworzy wyrażenie zmniejszające wcięcie.
     */
    export function identDown(): RulesExpression {
        return new class extends RulesExpression {
            write(writer: StringWriter) {
                writer.indentDown();
            }
        }
    }
}
