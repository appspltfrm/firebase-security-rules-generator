import {RulesExpression} from "../core/RulesExpression.js";
import {RulesSet} from "./RulesSet.js";
import {RulesString} from "./RulesString.js";
import {RulesValue} from "./RulesValue.js";

/**
 * Map type, used for simple key-value mappings.
 *
 * {@link https://firebase.google.com/docs/reference/rules/rules.MapDiff}
 */
export class RulesMapDiff extends RulesValue {

    addedKeys(): RulesSet<RulesString> {
        return new RulesSet(new RulesExpression(this, RulesExpression.l`.addedKeys()`), RulesString);
    }

    affectedKeys(): RulesSet<RulesString> {
        return new RulesSet(new RulesExpression(this, RulesExpression.l`.affectedKeys()`), RulesString);
    }

    changedKeys(): RulesSet<RulesString> {
        return new RulesSet(new RulesExpression(this, RulesExpression.l`.changedKeys()`), RulesString);
    }

    addedOrChangedKeys(): RulesSet<RulesString> {
        return new RulesSet(new RulesExpression(RulesExpression.l`__MapDiff_addedOrChangedKeys(`, this, RulesExpression.l`)`), RulesString);
    }

    removedKeys(): RulesSet<RulesString> {
        return new RulesSet(new RulesExpression(this, RulesExpression.l`.removedKeys()`), RulesString);
    }

    unchangedKeys(): RulesSet<RulesString> {
        return new RulesSet(new RulesExpression(this, RulesExpression.l`.unchangedKeys()`), RulesString);
    }

}
