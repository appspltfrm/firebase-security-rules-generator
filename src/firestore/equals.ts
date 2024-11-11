import {RulesBoolean} from "./RulesBoolean.js";
import {equals as $equals} from "../core/equals.js";

export function equals(left: any, right: any, not?: boolean) {
    return new RulesBoolean($equals(left, right, not));
}
