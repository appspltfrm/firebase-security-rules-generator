import {request} from "./request.js";
import {RulesMap} from "./RulesMap.js";
import {RulesResourceKnownData, RulesResourceUnknownData} from "./RulesResource.js";

export function requestResource(): RulesResourceUnknownData;

export function requestResource<D extends RulesMap>(resourceData: D): RulesResourceKnownData<D>;

export function requestResource<D extends RulesMap>(resourceData?: D) {
    return request(resourceData).resource;
}
