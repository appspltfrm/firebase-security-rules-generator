import {RulesExpression} from "../core/RulesExpression.js";

export interface InternalAllowDescriptor {
    operations: string[];
    negate?: boolean;
    body: (thiz: any) => RulesExpression;
}
