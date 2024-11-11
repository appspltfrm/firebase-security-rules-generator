import { RulesMap as $Map } from "../core/RulesMap.js";
import { AssignableType } from "../utils/Type.js";
import { RulesBoolean } from "./RulesBoolean.js";
import { RulesList } from "./RulesList.js";
import { RulesMapDiff } from "./RulesMapDiff.js";
import { RulesString } from "./RulesString.js";
import { RulesValue } from "./RulesValue.js";
/**
 * Map type, used for simple key-value mappings.
 *
 * {@link https://firebase.google.com/docs/reference/rules/rules.Map}
 */
export declare class RulesMap extends RulesValue implements $Map {
    /**
     * Returns the value associated with a given search key string.
     *
     * For nested Maps, involving keys and sub-keys, returns the value associated
     * with a given sub-key string. The sub-key is identified using a list, the first item of
     * which is a top-level key and the last item the sub-key whose
     * value is to be looked up and returned. See the nested Map example below.
     *
     * The function requires a default value to return if no match to the given search key is found.
     *
     * @param key Either a key specified as a string, or for nested Maps, a sub-key specified using list syntax.
     * @param valueType Type of returned value.
     * @param defaultValue Value to return if the map does not contain the given search key.
     */
    get<T extends RulesValue = RulesValue>(key: RulesString | string | RulesList<RulesString>, valueType?: AssignableType<T>, defaultValue?: T): T;
    diff(map: RulesMap): RulesMapDiff;
    keys(): RulesList;
    hasKey(key: string): RulesBoolean;
}
