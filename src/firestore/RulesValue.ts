import {RulesExpression} from "../core/RulesExpression.js";
import {RulesValue as $RulesValue} from "../core/RulesValue.js";
import {equals} from "./equals.js";
import {RulesBoolean} from "./RulesBoolean.js";

export class RulesValue extends $RulesValue {

    isNotNull() {
        return new RulesBoolean(new RulesExpression(this, RulesExpression.l` != null`));
    }

    isNull() {
        return new RulesBoolean(new RulesExpression(this, RulesExpression.l` == null`));
    }

    equals(other: any, not?: boolean): RulesBoolean {
        return equals(this, other, not);
    }

    notEquals(other: any): RulesBoolean {
        return equals(this, other, true);
    }
}
