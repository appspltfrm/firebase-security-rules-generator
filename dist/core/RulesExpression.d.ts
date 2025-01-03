import { StringWriter } from "../utils/StringWriter.js";
export declare class RulesExpression {
    constructor(...expression: any[]);
    protected expression: any[];
    protected writeImpl(writer: StringWriter, expression: any): any;
    write(writer: StringWriter): void;
    toString(): string;
}
export declare namespace RulesExpression {
    function l(strings: TemplateStringsArray, ...expr: string[]): RulesExpression;
    function newLine(): RulesExpression;
    function identUp(): RulesExpression;
    function identDown(): RulesExpression;
}
