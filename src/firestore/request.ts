import {RulesMap} from "./RulesMap.js";
import {RulesRequest, RulesRequestImpl, RulesRequestKnownResourceData, RulesRequestUnknownResourceData} from "./RulesRequest.js";
import {RulesResource, RulesResourceKnownData, RulesResourceUnknownData} from "./RulesResource.js";

export function request<D extends RulesMap>(resourceData: D): RulesRequestKnownResourceData<D>;

export function request(): RulesRequestUnknownResourceData;

export function request<D extends RulesMap>(resourceData?: D): RulesRequest {

    let resource: RulesResource;
    if (resourceData) {
        resource = new RulesResourceKnownData(resourceData);
    } else {
        resource = new RulesResourceUnknownData();
    }

    return new RulesRequestImpl(resource);
}
