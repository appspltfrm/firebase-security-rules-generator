import {gteExpression} from "../core/number/gteExpression.js";
import {gtExpression} from "../core/number/gtExpression.js";
import {lteExpression} from "../core/number/lteExpression.js";
import {ltExpression} from "../core/number/ltExpression.js";
import {minusExpression} from "../core/number/minusExpression.js";
import {plusExpression} from "../core/number/plusExpression.js";
import {RulesNumber as $RulesNumber} from "../core/number/RulesNumber.js";
import {RulesExpression} from "../core/RulesExpression.js";
import {RulesBoolean} from "./RulesBoolean.js";
import {RulesValue} from "./RulesValue.js";

export class RulesNumber extends RulesValue implements $RulesNumber {

    gt(other: RulesNumber | number): RulesBoolean {
        return new RulesBoolean(gtExpression(this, other));
    }

    gte(other: RulesNumber | number): RulesBoolean {
        return new RulesBoolean(gteExpression(this, other));
    }

    lt(other: RulesNumber | number): RulesBoolean {
        return new RulesBoolean(ltExpression(this, other));
    }

    lte(other: RulesNumber | number): RulesBoolean {
        return new RulesBoolean(lteExpression(this, other));
    }

    minus(other: RulesNumber | number): RulesNumber {
        return new RulesNumber(minusExpression(this, other));
    }

    plus(other: RulesNumber | number): RulesNumber {
        return new RulesNumber(plusExpression(this, other));
    }

    abs(): RulesNumber {
        return new RulesNumber(new RulesExpression(RulesExpression.l`math.abs(`, this, RulesExpression.l`)`))
    }

}
