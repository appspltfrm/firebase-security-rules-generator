import { RulesBoolean } from "./RulesBoolean.js";
import { RulesPath } from "./RulesPath.js";
/**
 * Check if a document exists.
 *
 * @param path The path. Value must not be null.
 * @see https://firebase.google.com/docs/reference/rules/rules.firestore#.exists
 */
export declare function exists(path: RulesPath | string): RulesBoolean;
