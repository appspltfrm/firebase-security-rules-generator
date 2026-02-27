import {RulesExpression} from "../core/RulesExpression.js";
import {InternalRulesValue} from "../internal/InternalRulesValue.js";
import {RulesMap} from "./RulesMap.js";
import {RulesResource, RulesResourceKnownData, RulesResourceUnknownData} from "./RulesResource.js";

/**
 * Zwraca aktualny zasób (resource) będący przedmiotem reguły.
 */
export function resource<D extends RulesMap>(): RulesResourceUnknownData;

/**
 * Zwraca aktualny zasób (resource) z określonym schematem danych.
 * 
 * @param data Instancja klasy schematu danych.
 */
export function resource<D extends RulesMap>(data: D): RulesResourceKnownData<D>;

export function resource<D extends RulesMap>(data?: D): RulesResource {
    const resource = data ? new RulesResourceKnownData(data) : new RulesResourceUnknownData();
    (resource as any as InternalRulesValue).__rulesExpression = RulesExpression.l`resource`;
    return resource;
}
