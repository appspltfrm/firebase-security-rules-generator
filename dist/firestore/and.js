"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.and = and;
const andExpression_js_1 = require("../core/andExpression.js");
const RulesBoolean_js_1 = require("./RulesBoolean.js");
function and(...parts) {
    return new RulesBoolean_js_1.RulesBoolean((0, andExpression_js_1.andExpression)(...parts));
}
//# sourceMappingURL=and.js.map