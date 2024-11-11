import { RulesMap } from "./RulesMap.js";
import { RulesResourceKnownData, RulesResourceUnknownData } from "./RulesResource.js";
export declare function requestResource(): RulesResourceUnknownData;
export declare function requestResource<D extends RulesMap>(resourceData: D): RulesResourceKnownData<D>;
