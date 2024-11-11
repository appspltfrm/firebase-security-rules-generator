import { RulesExpression } from "../core/RulesExpression.js";
import { RulesPath } from "./RulesPath.js";
import { RulesResourceUnknownData } from "./RulesResource.js";
/**
 * Get the contents of a firestore document.
 *
 * @see https://firebase.google.com/docs/reference/rules/rules.firestore#.getAfter
 */
export function getAfter(path) {
    const resource = new RulesResourceUnknownData();
    resource.__rulesExpression = new RulesExpression(RulesExpression.l `getAfter(`, typeof path === "string" ? RulesPath.value(path) : path, RulesExpression.l `)`);
    return resource;
}
//# sourceMappingURL=getAfter.js.map