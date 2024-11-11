import { RulesMap } from "./RulesMap.js";
import { RulesRequestKnownResourceData, RulesRequestUnknownResourceData } from "./RulesRequest.js";
export declare function request<D extends RulesMap>(resourceData: D): RulesRequestKnownResourceData<D>;
export declare function request(): RulesRequestUnknownResourceData;
