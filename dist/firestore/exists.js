"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exists = exists;
const RulesExpression_js_1 = require("../core/RulesExpression.js");
const RulesBoolean_js_1 = require("./RulesBoolean.js");
const RulesPath_js_1 = require("./RulesPath.js");
/**
 * Check if a document exists.
 *
 * @param path The path. Value must not be null.
 * @see https://firebase.google.com/docs/reference/rules/rules.firestore#.exists
 */
function exists(path) {
    return new RulesBoolean_js_1.RulesBoolean(new RulesExpression_js_1.RulesExpression(RulesExpression_js_1.RulesExpression.l `exists(`, typeof path === "string" ? RulesPath_js_1.RulesPath.value(path) : path, RulesExpression_js_1.RulesExpression.l `)`));
}
//# sourceMappingURL=exists.js.map