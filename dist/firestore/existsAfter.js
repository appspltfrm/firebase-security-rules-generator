"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.existsAfter = existsAfter;
const RulesExpression_js_1 = require("../core/RulesExpression.js");
const RulesBoolean_js_1 = require("./RulesBoolean.js");
const RulesPath_js_1 = require("./RulesPath.js");
/**
 * @see https://firebase.google.com/docs/reference/rules/rules.firestore#.existsAfter
 */
function existsAfter(path) {
    return new RulesBoolean_js_1.RulesBoolean(new RulesExpression_js_1.RulesExpression(RulesExpression_js_1.RulesExpression.l `existsAfter(`, typeof path === "string" ? RulesPath_js_1.RulesPath.value(path) : path, RulesExpression_js_1.RulesExpression.l `)`));
}
//# sourceMappingURL=existsAfter.js.map