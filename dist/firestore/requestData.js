"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestData = requestData;
const request_js_1 = require("./request.js");
function requestData(resourceData) {
    if (resourceData) {
        return (0, request_js_1.request)(resourceData).resource.data();
    }
    else {
        return (0, request_js_1.request)().resource.data();
    }
}
//# sourceMappingURL=requestData.js.map