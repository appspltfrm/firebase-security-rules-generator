import { StringWriter } from "../utils/StringWriter.js";
/**
 * Reprezentuje wyrażenie w regułach bezpieczeństwa Firebase.
 * Może zawierać ciągi znaków, liczby, inne wyrażenia lub instancje RulesValue.
 */
export declare class RulesExpression {
    constructor(...expression: any[]);
    /**
     * Elementy składające się na wyrażenie.
     */
    protected expression: any[];
    /**
     * Implementacja zapisu poszczególnych elementów wyrażenia do StringWriter.
     */
    protected writeImpl(writer: StringWriter, expression: any): any;
    /**
     * Zapisuje całe wyrażenie do StringWriter.
     */
    write(writer: StringWriter): void;
    /**
     * Tworzy tekstową reprezentację wyrażenia dla celów debugowania.
     */
    toString(): string;
}
export declare namespace RulesExpression {
    /**
     * Tworzy wyrażenie literalne na podstawie szablonu tekstowego (template literal).
     */
    function l(strings: TemplateStringsArray, ...expr: string[]): RulesExpression;
    /**
     * Tworzy wyrażenie reprezentujące nową linię.
     */
    function newLine(): RulesExpression;
    /**
     * Tworzy wyrażenie zwiększające wcięcie.
     */
    function identUp(): RulesExpression;
    /**
     * Tworzy wyrażenie zmniejszające wcięcie.
     */
    function identDown(): RulesExpression;
}
