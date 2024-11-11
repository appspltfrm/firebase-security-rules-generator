import { RulesPath } from "./RulesPath.js";
import { RulesResourceUnknownData } from "./RulesResource.js";
/**
 * Get the contents of a firestore document.
 *
 * @see https://firebase.google.com/docs/reference/rules/rules.firestore#.get
 */
export declare function get(path: RulesPath | string): RulesResourceUnknownData;
