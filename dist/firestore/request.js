"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.request = request;
const RulesRequest_js_1 = require("./RulesRequest.js");
const RulesResource_js_1 = require("./RulesResource.js");
function request(resourceData) {
    let resource;
    if (resourceData) {
        resource = new RulesResource_js_1.RulesResourceKnownData(resourceData);
    }
    else {
        resource = new RulesResource_js_1.RulesResourceUnknownData();
    }
    return new RulesRequest_js_1.RulesRequestImpl(resource);
}
//# sourceMappingURL=request.js.map