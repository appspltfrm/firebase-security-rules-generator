import { RulesString as $RulesString } from "../core/string/RulesString.js";
import { RulesBoolean } from "./RulesBoolean.js";
import { RulesInteger } from "./RulesInteger.js";
import { RulesList } from "./RulesList.js";
import { RulesValue } from "./RulesValue.js";
export declare class RulesString extends RulesValue implements $RulesString {
    static is(value: RulesValue): RulesBoolean;
    split(re: RulesString | string): RulesList<RulesString>;
    matches(re: RulesString | string): RulesBoolean;
    trim(): RulesString;
    size(): RulesInteger;
    concat(...strings: Array<RulesString | string>): RulesString;
    substring(start: number, end: number): RulesString;
}
export declare namespace RulesString {
    function l(strings: TemplateStringsArray, ...expr: any[]): RulesString;
}
