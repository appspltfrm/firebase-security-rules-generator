"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAfter = getAfter;
const RulesExpression_js_1 = require("../core/RulesExpression.js");
const RulesPath_js_1 = require("./RulesPath.js");
const RulesResource_js_1 = require("./RulesResource.js");
/**
 * Get the contents of a firestore document.
 *
 * @see https://firebase.google.com/docs/reference/rules/rules.firestore#.getAfter
 */
function getAfter(path) {
    const resource = new RulesResource_js_1.RulesResourceUnknownData();
    resource.__rulesExpression = new RulesExpression_js_1.RulesExpression(RulesExpression_js_1.RulesExpression.l `getAfter(`, typeof path === "string" ? RulesPath_js_1.RulesPath.value(path) : path, RulesExpression_js_1.RulesExpression.l `)`);
    return resource;
}
//# sourceMappingURL=getAfter.js.map