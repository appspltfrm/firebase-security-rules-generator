import { RulesSet } from "./RulesSet.js";
import { RulesString } from "./RulesString.js";
import { RulesValue } from "./RulesValue.js";
/**
 * Map type, used for simple key-value mappings.
 *
 * {@link https://firebase.google.com/docs/reference/rules/rules.MapDiff}
 */
export declare class RulesMapDiff extends RulesValue {
    addedKeys(): RulesSet<RulesString>;
    affectedKeys(): RulesSet<RulesString>;
    changedKeys(): RulesSet<RulesString>;
    addedOrChangedKeys(): RulesSet<RulesString>;
    removedKeys(): RulesSet<RulesString>;
    unchangedKeys(): RulesSet<RulesString>;
}
