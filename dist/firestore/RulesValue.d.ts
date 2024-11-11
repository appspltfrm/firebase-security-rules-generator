import { RulesValue as $RulesValue } from "../core/RulesValue.js";
import { RulesBoolean } from "./RulesBoolean.js";
export declare class RulesValue extends $RulesValue {
    isNotNull(): RulesBoolean;
    isNull(): RulesBoolean;
    equals(other: any, not?: boolean): RulesBoolean;
    notEquals(other: any): RulesBoolean;
}
