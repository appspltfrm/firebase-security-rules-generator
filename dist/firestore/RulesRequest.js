import { RulesExpression } from "../core/RulesExpression.js";
import { RulesRequestAuth } from "./RulesRequestAuth.js";
import { RulesString } from "./RulesString.js";
import { RulesTimestamp } from "./RulesTimestamp.js";
import { RulesValue } from "./RulesValue.js";
export class RulesRequestImpl extends RulesValue {
    resource;
    constructor(resource) {
        super();
        this.resource = resource;
        this.__rulesInitProperties();
        this.__rulesExpression = RulesExpression.l `request`;
    }
    // @ts-ignore
    auth = new RulesRequestAuth;
    time = new RulesTimestamp;
    /**
     * The request method. One of:
     * - get
     * - list
     * - create
     * - update
     * - delete
     *
     * @see https://firebase.google.com/docs/reference/rules/rules.firestore.Request#method
     */
    method = new RulesString;
}
//# sourceMappingURL=RulesRequest.js.map