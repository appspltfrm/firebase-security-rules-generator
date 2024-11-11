"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.match = match;
const RulesValue_js_1 = require("./RulesValue.js");
function match(path) {
    return function (classConstructor) {
        const internalConstructor = classConstructor;
        internalConstructor.__rulesMatchPath = path;
        return class extends classConstructor {
            constructor(...args) {
                super();
                const thiz = this;
                thiz.__rulesAccessorName = "resource.data";
                for (const propertyName in thiz) {
                    const propertyValue = thiz[propertyName];
                    if (!propertyValue) {
                        continue;
                    }
                    if (propertyValue.__rulesPathVar) {
                        if (!propertyValue.__rulesAccessorName) {
                            thiz[propertyName].__rulesAccessorName = propertyName;
                        }
                    }
                    else if (propertyValue instanceof RulesValue_js_1.RulesValue) {
                        propertyValue.__rulesAccessorName = propertyName;
                        propertyValue.__rulesAccessorContext = "resource.data";
                    }
                }
            }
        };
    };
}
//# sourceMappingURL=match.js.map