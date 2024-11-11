import {AssignableType} from "../utils/Type.js";
import {RulesInteger} from "./number/RulesInteger.js";
import {RulesValue} from "./RulesValue.js";

/**
 * Map type, used for simple key-value mappings.
 *
 */
export interface RulesList {
    size(): RulesInteger;
    get(index: number, valueType?: AssignableType<RulesValue>): RulesValue;
}
