import { RulesExpression } from "../core/RulesExpression.js";
import { RulesValue } from "./RulesValue.js";
export declare function variable<T extends RulesValue | RulesExpression | string | boolean | number>(thiz: any, value: T): T;
