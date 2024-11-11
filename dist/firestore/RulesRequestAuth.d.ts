import { RulesRequestAuth as $RequestAuth } from "../core/RulesRequestAuth.js";
import { RulesMap } from "./RulesMap.js";
import { RulesValue } from "./RulesValue.js";
import { RulesString } from "./RulesString.js";
export declare function auth(): any;
export declare class RulesRequestAuth extends RulesValue implements $RequestAuth {
    private constructor();
    readonly uid: RulesString;
    /**
     * A map of JWT token claims.
     * @see https://firebase.google.com/docs/reference/rules/rules.firestore.Request#auth
     */
    readonly token: RulesMap;
}
