import {RulesExpression} from "../core/RulesExpression.js";
import {RulesList as $RulesList} from "../core/RulesList.js";
import {InternalRulesValue} from "../internal/InternalRulesValue.js";
import {AssignableType} from "../utils/Type.js";
import {RulesBoolean} from "./RulesBoolean.js";
import {RulesInteger} from "./RulesInteger.js";
import {RulesValue} from "./RulesValue.js";

/**
 * List type. Items are not necessarily homogenous.
 *
 * {@link https://firebase.google.com/docs/reference/rules/rules.List}
 */
export class RulesList<T extends RulesValue = RulesValue> extends RulesValue implements $RulesList {

    constructor();

    constructor(array: Array<string | number>);

    constructor(expression: RulesExpression);

    constructor(arrayOrExpression?: Array<string | number> | RulesExpression) {
        if (Array.isArray(arrayOrExpression)) {
            super(new RulesExpression(RulesExpression.l`[`, arrayOrExpression.map((v, i) => i > 0 ? [RulesExpression.l`, `, v] : [v]).flat(), RulesExpression.l`]`));
        } else if (arrayOrExpression) {
            super(arrayOrExpression);
        } else {
            super();
        }
    }

    get<V extends RulesValue = RulesValue>(index: number, valueType?: AssignableType<V>) {
        const type = new (valueType || RulesValue);
        (type as any as InternalRulesValue).__rulesExpression = new RulesExpression(RulesExpression.l`(`, this, RulesExpression.l`)`, RulesExpression.l`[`, index, RulesExpression.l`]`);
        return type as V;
    }

    /**
     * Get the number of values in the list.
     */
    size() {
        return new RulesInteger(new RulesExpression(this, RulesExpression.l`.size()`));
    }

    includes(value: RulesValue): RulesExpression {
        return new RulesExpression(value, RulesExpression.l` in `, this);
    }

    /**
     * Determine whether the list contains all elements in another list.
     */
    hasAll(list: RulesList | Array<RulesValue | string | number | boolean>) {
        return this.buildHasExpression("hasAll", list);
    }

    /**
     * Determine whether the list contains any element in another list.
     */
    hasAny(list: RulesList | Array<RulesValue | string | number | boolean>) {
        return this.buildHasExpression("hasAny", list);
    }

    /**
     * Determine whether all elements in the list are present in another list.
     */
    hasOnly(list: RulesList | Array<RulesValue | string | number | boolean>) {
        return this.buildHasExpression("hasOnly", list);
    }

    private buildHasExpression(method: "hasOnly" | "hasAny" | "hasAll", list: RulesList | Array<RulesValue | string | number | boolean>) {

        const expression: any[] = [this, RulesExpression.l`.${method}(`];

        if (list instanceof Array) {
            expression.push(RulesExpression.l`[`);

            for (let i = 0; i < list.length; i++) {

                if (i > 0) {
                    expression.push(RulesExpression.l`, `);
                }

                expression.push(list[i]);
            }

            expression.push(RulesExpression.l`]`);
        } else {
            expression.push(list);
        }

        expression.push(RulesExpression.l`)`);

        return new RulesBoolean(new RulesExpression(expression));
    }

}
