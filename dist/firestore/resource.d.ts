import { RulesMap } from "./RulesMap.js";
import { RulesResourceKnownData, RulesResourceUnknownData } from "./RulesResource.js";
/**
 * Zwraca aktualny zasób (resource) będący przedmiotem reguły.
 */
export declare function resource<D extends RulesMap>(): RulesResourceUnknownData;
/**
 * Zwraca aktualny zasób (resource) z określonym schematem danych.
 *
 * @param data Instancja klasy schematu danych.
 */
export declare function resource<D extends RulesMap>(data: D): RulesResourceKnownData<D>;
