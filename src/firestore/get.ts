import {RulesExpression} from "../core/RulesExpression.js";
import {InternalRulesValue} from "../internal/InternalRulesValue.js";
import {RulesPath} from "./RulesPath.js";
import {RulesResourceUnknownData} from "./RulesResource.js";

/**
 * Get the contents of a firestore document.
 *
 * @see https://firebase.google.com/docs/reference/rules/rules.firestore#.get
 */
export function get(path: RulesPath | string): RulesResourceUnknownData {
    const resource = new RulesResourceUnknownData();
    (resource as any as InternalRulesValue).__rulesExpression = new RulesExpression(RulesExpression.l`get(`, typeof path === "string" ? RulesPath.value(path) : path, RulesExpression.l`)`);
    return resource;
}
