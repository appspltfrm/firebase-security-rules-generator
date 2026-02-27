import { StringWriter } from "../utils/StringWriter.js";
/**
 * Reprezentuje wyrażenie w regułach bezpieczeństwa Firebase.
 * Może zawierać ciągi znaków, liczby, inne wyrażenia lub instancje RulesValue.
 */
export class RulesExpression {
    constructor(...expression) {
        this.expression = expression;
    }
    /**
     * Elementy składające się na wyrażenie.
     */
    expression;
    /**
     * Implementacja zapisu poszczególnych elementów wyrażenia do StringWriter.
     */
    writeImpl(writer, expression) {
        if (expression === null || expression === undefined) {
            return writer.write("null");
        }
        else if (Array.isArray(expression)) {
            for (const e of expression) {
                this.writeImpl(writer, e);
            }
        }
        else if (expression instanceof RulesExpression) {
            return expression.write(writer);
        }
        else if (expression.__rulesValue) {
            return this.writeImpl(writer, expression.__rulesValueAsExpression());
        }
        else if (typeof expression === "string") {
            return writer.write(`"${expression}"`);
        }
        else {
            return writer.write(expression.toString());
        }
    }
    /**
     * Zapisuje całe wyrażenie do StringWriter.
     */
    write(writer) {
        this.writeImpl(writer, this.expression);
    }
    /**
     * Tworzy tekstową reprezentację wyrażenia dla celów debugowania.
     */
    toString() {
        const writer = new StringWriter();
        this.write(writer);
        return `RulesExpression(${writer.toString()})`;
    }
}
(function (RulesExpression) {
    /**
     * Tworzy wyrażenie literalne na podstawie szablonu tekstowego (template literal).
     */
    function l(strings, ...expr) {
        return new class extends RulesExpression {
            write(writer) {
                for (let i = 0; i < strings.length; i++) {
                    writer.write(strings[i] + (expr[i] || ""));
                }
            }
        };
    }
    RulesExpression.l = l;
    /**
     * Tworzy wyrażenie reprezentujące nową linię.
     */
    function newLine() {
        return new class extends RulesExpression {
            write(writer) {
                writer.line();
            }
        };
    }
    RulesExpression.newLine = newLine;
    /**
     * Tworzy wyrażenie zwiększające wcięcie.
     */
    function identUp() {
        return new class extends RulesExpression {
            write(writer) {
                writer.indentUp();
            }
        };
    }
    RulesExpression.identUp = identUp;
    /**
     * Tworzy wyrażenie zmniejszające wcięcie.
     */
    function identDown() {
        return new class extends RulesExpression {
            write(writer) {
                writer.indentDown();
            }
        };
    }
    RulesExpression.identDown = identDown;
})(RulesExpression || (RulesExpression = {}));
//# sourceMappingURL=RulesExpression.js.map