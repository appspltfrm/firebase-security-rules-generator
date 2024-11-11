import { RulesExpression } from "../core/RulesExpression.js";
import { RulesService } from "../core/RulesService.js";
import { Type } from "../utils/Type.js";
export declare function firestore(...declarations: Array<Type<any> | RulesExpression>): RulesService;
