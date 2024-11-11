import { RulesRequest as $Request } from "../core/RulesRequest.js";
import { RulesMap } from "./RulesMap.js";
import { RulesRequestAuth } from "./RulesRequestAuth.js";
import { RulesResource, RulesResourceKnownData, RulesResourceUnknownData } from "./RulesResource.js";
import { RulesString } from "./RulesString.js";
import { RulesTimestamp } from "./RulesTimestamp.js";
import { RulesValue } from "./RulesValue.js";
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
export declare class RulesRequestImpl<R extends RulesResource> extends RulesValue implements RulesRequest {
    readonly resource: R;
    constructor(resource: R);
    readonly auth: any;
    readonly time: RulesTimestamp;
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
    readonly method: RulesString;
}
