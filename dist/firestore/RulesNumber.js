import { gteExpression } from "../core/number/gteExpression.js";
import { gtExpression } from "../core/number/gtExpression.js";
import { lteExpression } from "../core/number/lteExpression.js";
import { ltExpression } from "../core/number/ltExpression.js";
import { minusExpression } from "../core/number/minusExpression.js";
import { plusExpression } from "../core/number/plusExpression.js";
import { RulesExpression } from "../core/RulesExpression.js";
import { RulesBoolean } from "./RulesBoolean.js";
import { RulesValue } from "./RulesValue.js";
export class RulesNumber extends RulesValue {
    gt(other) {
        return new RulesBoolean(gtExpression(this, other));
    }
    gte(other) {
        return new RulesBoolean(gteExpression(this, other));
    }
    lt(other) {
        return new RulesBoolean(ltExpression(this, other));
    }
    lte(other) {
        return new RulesBoolean(lteExpression(this, other));
    }
    minus(other) {
        return new RulesNumber(minusExpression(this, other));
    }
    plus(other) {
        return new RulesNumber(plusExpression(this, other));
    }
    abs() {
        return new RulesNumber(new RulesExpression(RulesExpression.l `math.abs(`, this, RulesExpression.l `)`));
    }
}
//# sourceMappingURL=RulesNumber.js.map