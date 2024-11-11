"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.equals = equals;
const RulesBoolean_js_1 = require("./RulesBoolean.js");
const equals_js_1 = require("../core/equals.js");
function equals(left, right, not) {
    return new RulesBoolean_js_1.RulesBoolean((0, equals_js_1.equals)(left, right, not));
}
//# sourceMappingURL=equals.js.map