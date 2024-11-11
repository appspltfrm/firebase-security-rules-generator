import { RulesExpression } from "../core/RulesExpression.js";
import { RulesMap } from "./RulesMap.js";
import { RulesValue } from "./RulesValue.js";
import { RulesString } from "./RulesString.js";
export function auth() {
    // @ts-ignore
    const auth = new RulesRequestAuth();
    auth.__rulesInitProperties();
    return auth;
}
export class RulesRequestAuth extends RulesValue {
    constructor() {
        super();
        this.__rulesExpression = RulesExpression.l `request.auth`;
    }
    uid = new RulesString;
    /**
     * A map of JWT token claims.
     * @see https://firebase.google.com/docs/reference/rules/rules.firestore.Request#auth
     */
    token = new RulesMap;
}
//# sourceMappingURL=RulesRequestAuth.js.map