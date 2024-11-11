"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.or = or;
const orExpression_js_1 = require("../core/orExpression.js");
const RulesBoolean_js_1 = require("./RulesBoolean.js");
function or(...parts) {
    return new RulesBoolean_js_1.RulesBoolean((0, orExpression_js_1.orExpression)(...parts));
}
//# sourceMappingURL=or.js.map