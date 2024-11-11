import { RulesMap } from "./RulesMap.js";
import { RulesResourceKnownData, RulesResourceUnknownData } from "./RulesResource.js";
export declare function resource<D extends RulesMap>(): RulesResourceUnknownData;
export declare function resource<D extends RulesMap>(data: D): RulesResourceKnownData<D>;
