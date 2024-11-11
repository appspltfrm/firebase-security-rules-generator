"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.not = not;
const notExpression_js_1 = require("../core/notExpression.js");
const RulesBoolean_js_1 = require("./RulesBoolean.js");
function not(value) {
    return new RulesBoolean_js_1.RulesBoolean((0, notExpression_js_1.notExpression)(value));
}
//# sourceMappingURL=not.js.map