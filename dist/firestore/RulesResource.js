"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulesResourceUnknownData = exports.RulesResourceKnownData = void 0;
const RulesExpression_js_1 = require("../core/RulesExpression.js");
const RulesValue_js_1 = require("./RulesValue.js");
const RulesMap_js_1 = require("./RulesMap.js");
const RulesPath_js_1 = require("./RulesPath.js");
const RulesString_js_1 = require("./RulesString.js");
class RulesResourceKnownData extends RulesValue_js_1.RulesValue {
    constructor(data) {
        super();
        this.$data = data.__rulesClone();
        this.$data.__rulesAccessorName = "data";
        this.$data.__rulesExpression = new RulesExpression_js_1.RulesExpression(this, RulesExpression_js_1.RulesExpression.l `.data`);
    }
    $data;
    id = new RulesString_js_1.RulesString;
    __name__ = new RulesPath_js_1.RulesPath;
    data() {
        return this.$data;
    }
}
exports.RulesResourceKnownData = RulesResourceKnownData;
class RulesResourceUnknownData extends RulesValue_js_1.RulesValue {
    constructor() {
        super();
    }
    id = new RulesString_js_1.RulesString;
    __name__ = new RulesPath_js_1.RulesPath;
    data(dataType) {
        const data = dataType ? new dataType() : new RulesMap_js_1.RulesMap;
        data.__rulesAccessorName = "data";
        data.__rulesExpression = new RulesExpression_js_1.RulesExpression(this, RulesExpression_js_1.RulesExpression.l `.data`);
        data.__rulesInitProperties();
        return data;
    }
}
exports.RulesResourceUnknownData = RulesResourceUnknownData;
//# sourceMappingURL=RulesResource.js.map