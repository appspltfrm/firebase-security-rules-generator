"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestResource = requestResource;
const request_js_1 = require("./request.js");
function requestResource(resourceData) {
    return (0, request_js_1.request)(resourceData).resource;
}
//# sourceMappingURL=requestResource.js.map