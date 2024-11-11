import { RulesMap } from "./RulesMap.js";
import { RulesString } from "./string/RulesString.js";
export interface RulesRequestAuth {
    readonly uid: RulesString;
    readonly token: RulesMap;
}
