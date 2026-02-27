import {RulesMap} from "./RulesMap.js";
import {RulesRequest, RulesRequestImpl, RulesRequestKnownResourceData, RulesRequestUnknownResourceData} from "./RulesRequest.js";
import {RulesResource, RulesResourceKnownData, RulesResourceUnknownData} from "./RulesResource.js";

/**
 * Zwraca obiekt żądania (request).
 * 
 * @param resourceData Opcjonalny schemat danych zasobu, dla którego tworzone jest żądanie.
 * @see https://firebase.google.com/docs/reference/rules/rules.firestore#.request
 */
export function request<D extends RulesMap>(resourceData: D): RulesRequestKnownResourceData<D>;

/**
 * Zwraca obiekt żądania (request) bez określonego schematu danych.
 */
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
