import {request} from "./request.js";
import {RulesMap} from "./RulesMap.js";

export function requestData(): RulesMap;

export function requestData<D extends RulesMap>(resourceData: D): D;

export function requestData<D extends RulesMap>(resourceData?: D) {
    if (resourceData) {
        return request(resourceData).resource.data();
    } else {
        return request().resource.data();
    }
}
