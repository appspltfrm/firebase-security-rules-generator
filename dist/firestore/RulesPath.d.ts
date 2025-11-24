import { RulesMap } from "./RulesMap.js";
import { RulesString } from "./RulesString.js";
import { RulesValue } from "./RulesValue.js";
/**
 * Directory-like pattern for the location of a resource.
 *
 * {@link https://firebase.google.com/docs/reference/rules/rules.Path}
 */
export declare class RulesPath extends RulesValue {
    bind(map: RulesMap | {
        [key: string]: any;
    }): RulesPath;
}
export declare function path(path: string | RulesString): RulesPath;
export declare namespace RulesPath {
    function value(stringPath: string | RulesString): RulesPath;
    function l(strings: TemplateStringsArray, ...expr: any[]): RulesPath;
}
