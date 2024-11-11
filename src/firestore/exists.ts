import {RulesExpression} from "../core/RulesExpression.js";
import {RulesBoolean} from "./RulesBoolean.js";
import {RulesPath} from "./RulesPath.js";

/**
 * Check if a document exists.
 *
 * @param path The path. Value must not be null.
 * @see https://firebase.google.com/docs/reference/rules/rules.firestore#.exists
 */
export function exists(path: RulesPath | string) {
    return new RulesBoolean(new RulesExpression(RulesExpression.l`exists(`, typeof path === "string" ? RulesPath.value(path) : path, RulesExpression.l`)`));
}
