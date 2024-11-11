import {InternalRulesValue} from "../internal/InternalRulesValue.js";
import {RulesExpression} from "../core/RulesExpression.js";
import {RulesRequestAuth as $RequestAuth} from "../core/RulesRequestAuth.js";
import {RulesMap} from "./RulesMap.js";
import {RulesValue} from "./RulesValue.js";
import {RulesString} from "./RulesString.js";

export function auth() {
    // @ts-ignore
    const auth = new RulesRequestAuth();
    (auth as any as InternalRulesValue).__rulesInitProperties();
    return auth;
}

export class RulesRequestAuth extends RulesValue implements $RequestAuth {

    private constructor() {
        super();

        (this as any as InternalRulesValue).__rulesExpression = RulesExpression.l`request.auth`;
    }

    readonly uid = new RulesString;

    /**
     * A map of JWT token claims.
     * @see https://firebase.google.com/docs/reference/rules/rules.firestore.Request#auth
     */
    readonly token = new RulesMap;
}
