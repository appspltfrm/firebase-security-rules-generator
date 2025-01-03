import { RulesExpression } from "../core/RulesExpression.js";
import { RulesList as $RulesList } from "../core/RulesList.js";
import { AssignableType } from "../utils/Type.js";
import { RulesBoolean } from "./RulesBoolean.js";
import { RulesInteger } from "./RulesInteger.js";
import { RulesValue } from "./RulesValue.js";
/**
 * List type. Items are not necessarily homogenous.
 *
 * {@link https://firebase.google.com/docs/reference/rules/rules.List}
 */
export declare class RulesList<T extends RulesValue = RulesValue> extends RulesValue implements $RulesList {
    constructor();
    constructor(array: Array<string | number>);
    constructor(expression: RulesExpression);
    get<V extends RulesValue = RulesValue>(index: number, valueType?: AssignableType<V>): V;
    /**
     * Get the number of values in the list.
     */
    size(): RulesInteger;
    includes(value: RulesValue): RulesExpression;
    /**
     * Determine whether the list contains all elements in another list.
     */
    hasAll(list: RulesList | Array<RulesValue | string | number | boolean>): RulesBoolean;
    /**
     * Determine whether the list contains any element in another list.
     */
    hasAny(list: RulesList | Array<RulesValue | string | number | boolean>): RulesBoolean;
    /**
     * Determine whether all elements in the list are present in another list.
     */
    hasOnly(list: RulesList | Array<RulesValue | string | number | boolean>): RulesBoolean;
    private buildHasExpression;
}
