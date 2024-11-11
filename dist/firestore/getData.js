"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getData = getData;
const RulesExpression_js_1 = require("../core/RulesExpression.js");
const get_js_1 = require("./get.js");
/**
 * Get data of resource denoted by given path. Inside it's using {@link get} to access a resource.
 *
 * @param path Path to a resource.
 * @param dataType Type of data, that is contained within given resource.
 * @return Data or null if resource not exists.
 *
 * @see https://firebase.google.com/docs/reference/rules/rules.firestore#.get
 */
function getData(path, dataType) {
    const data = new dataType();
    data.__rulesExpression = new RulesExpression_js_1.RulesExpression(RulesExpression_js_1.RulesExpression.l `__getResourceData(`, (0, get_js_1.get)(path), RulesExpression_js_1.RulesExpression.l `)`);
    data.__rulesInitProperties();
    return data;
}
//# sourceMappingURL=getData.js.map