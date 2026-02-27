import { RulesMap } from "./RulesMap.js";
import { RulesRequestKnownResourceData, RulesRequestUnknownResourceData } from "./RulesRequest.js";
/**
 * Zwraca obiekt żądania (request).
 *
 * @param resourceData Opcjonalny schemat danych zasobu, dla którego tworzone jest żądanie.
 * @see https://firebase.google.com/docs/reference/rules/rules.firestore#.request
 */
export declare function request<D extends RulesMap>(resourceData: D): RulesRequestKnownResourceData<D>;
/**
 * Zwraca obiekt żądania (request) bez określonego schematu danych.
 */
export declare function request(): RulesRequestUnknownResourceData;
