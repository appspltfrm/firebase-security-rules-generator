import {RulesExpression} from "../core/RulesExpression.js";
import {RulesMap as $Map} from "../core/RulesMap.js";
import {InternalRulesValue} from "../internal/InternalRulesValue.js";
import {AssignableType} from "../utils/Type.js";
import {RulesBoolean} from "./RulesBoolean.js";
import {RulesList} from "./RulesList.js";
import {RulesMapDiff} from "./RulesMapDiff.js";
import {RulesString} from "./RulesString.js";
import {RulesValue} from "./RulesValue.js";

/**
 * Map type, used for simple key-value mappings.
 *
 * {@link https://firebase.google.com/docs/reference/rules/rules.Map}
 */
export class RulesMap extends RulesValue implements $Map {

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
    get<T extends RulesValue = RulesValue>(key: RulesString | string | RulesList<RulesString>, valueType?: AssignableType<T>, defaultValue?: T): T {
        const type = new (valueType || RulesValue);
        (type as any as InternalRulesValue).__rulesExpression = new RulesExpression(RulesExpression.l`(`, this, RulesExpression.l`)`, RulesExpression.l`.get(`, key, RulesExpression.l`, `, (defaultValue !== undefined ? defaultValue : RulesExpression.l`null`), RulesExpression.l`)`);
        return type as T;
    }

    diff(map: RulesMap): RulesMapDiff {
        return new RulesMapDiff(new RulesExpression(this, RulesExpression.l`.diff(`, map, RulesExpression.l`)`));
    }

    keys(): RulesList {
        return new RulesList(new RulesExpression(this, RulesExpression.l`.keys()`));
    }

    hasKey(key: string) {
        return new RulesBoolean(new RulesExpression(RulesExpression.l`(`, key, RulesExpression.l` in `, this, RulesExpression.l`)`));
    }

}
