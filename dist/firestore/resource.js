"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resource = resource;
const RulesExpression_js_1 = require("../core/RulesExpression.js");
const RulesResource_js_1 = require("./RulesResource.js");
function resource(data) {
    const resource = data ? new RulesResource_js_1.RulesResourceKnownData(data) : new RulesResource_js_1.RulesResourceUnknownData();
    resource.__rulesExpression = RulesExpression_js_1.RulesExpression.l `resource`;
    return resource;
}
//# sourceMappingURL=resource.js.map