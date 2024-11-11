import { RulesTimestamp as $RulesTimestamp } from "../core/RulesTimestamp.js";
import { RulesInteger } from "./RulesInteger.js";
import { RulesValue } from "./RulesValue.js";
/**
 * A timestamp in UTC with nanosecond accuracy.
 *
 * @see https://firebase.google.com/docs/reference/rules/rules.Timestamp
 */
export declare class RulesTimestamp extends RulesValue implements $RulesTimestamp {
    date(): RulesTimestamp;
    day(): RulesInteger;
    dayOfWeek(): RulesInteger;
    dayOfYear(): RulesInteger;
    hours(): RulesInteger;
    minutes(): RulesInteger;
    month(): RulesInteger;
    nanos(): RulesInteger;
    seconds(): RulesInteger;
    toMillis(): RulesInteger;
    year(): RulesInteger;
    private integerMethodExpression;
}
