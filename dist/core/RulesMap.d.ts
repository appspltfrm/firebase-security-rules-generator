import { RulesList } from "./RulesList.js";
/**
 * Map type, used for simple key-value mappings.
 *
 */
export interface RulesMap {
    [key: string]: any;
    keys(): RulesList;
}
