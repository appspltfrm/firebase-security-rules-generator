"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulesNumber = void 0;
const gteExpression_js_1 = require("../core/number/gteExpression.js");
const gtExpression_js_1 = require("../core/number/gtExpression.js");
const lteExpression_js_1 = require("../core/number/lteExpression.js");
const ltExpression_js_1 = require("../core/number/ltExpression.js");
const minusExpression_js_1 = require("../core/number/minusExpression.js");
const plusExpression_js_1 = require("../core/number/plusExpression.js");
const RulesExpression_js_1 = require("../core/RulesExpression.js");
const RulesBoolean_js_1 = require("./RulesBoolean.js");
const RulesValue_js_1 = require("./RulesValue.js");
class RulesNumber extends RulesValue_js_1.RulesValue {
    gt(other) {
        return new RulesBoolean_js_1.RulesBoolean((0, gtExpression_js_1.gtExpression)(this, other));
    }
    gte(other) {
        return new RulesBoolean_js_1.RulesBoolean((0, gteExpression_js_1.gteExpression)(this, other));
    }
    lt(other) {
        return new RulesBoolean_js_1.RulesBoolean((0, ltExpression_js_1.ltExpression)(this, other));
    }
    lte(other) {
        return new RulesBoolean_js_1.RulesBoolean((0, lteExpression_js_1.lteExpression)(this, other));
    }
    minus(other) {
        return new RulesNumber((0, minusExpression_js_1.minusExpression)(this, other));
    }
    plus(other) {
        return new RulesNumber((0, plusExpression_js_1.plusExpression)(this, other));
    }
    abs() {
        return new RulesNumber(new RulesExpression_js_1.RulesExpression(RulesExpression_js_1.RulesExpression.l `math.abs(`, this, RulesExpression_js_1.RulesExpression.l `)`));
    }
}
exports.RulesNumber = RulesNumber;
//# sourceMappingURL=RulesNumber.js.map