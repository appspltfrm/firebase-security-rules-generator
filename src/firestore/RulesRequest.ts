import {RulesExpression} from "../core/RulesExpression.js";
import {RulesRequest as $Request} from "../core/RulesRequest.js";
import {InternalRulesValue} from "../internal/InternalRulesValue.js";
import {RulesMap} from "./RulesMap.js";
import {RulesRequestAuth} from "./RulesRequestAuth.js";
import {RulesResource, RulesResourceKnownData, RulesResourceUnknownData} from "./RulesResource.js";
import {RulesString} from "./RulesString.js";
import {RulesTimestamp} from "./RulesTimestamp.js";
import {RulesValue} from "./RulesValue.js";

export interface RulesRequest extends $Request {
    readonly resource: RulesResource;
    readonly method: RulesString;
    readonly time: RulesTimestamp;
    readonly auth: RulesRequestAuth;
}

export interface RulesRequestKnownResourceData<D extends RulesMap> extends RulesRequest {
    readonly resource: RulesResourceKnownData<D>;
}

export interface RulesRequestUnknownResourceData extends RulesRequest {
    readonly resource: RulesResourceUnknownData;
}

export class RulesRequestImpl<R extends RulesResource> extends RulesValue implements RulesRequest {

    constructor(public readonly resource: R) {
        super();

        (this as any as InternalRulesValue).__rulesInitProperties();
        (this as any as InternalRulesValue).__rulesExpression = RulesExpression.l`request`;
    }

    // @ts-ignore
    readonly auth = new RulesRequestAuth;

    readonly time = new RulesTimestamp;

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
    readonly method = new RulesString;

}
