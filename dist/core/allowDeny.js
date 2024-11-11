"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allow = allow;
exports.deny = deny;
function allow(...operation) {
    return function (targetClass, propertyKey, descriptor) {
        allowImpl(targetClass, propertyKey, descriptor, operation, false);
    };
}
function deny(...operation) {
    return function (targetClass, propertyKey, descriptor) {
        allowImpl(targetClass, propertyKey, descriptor, operation, true);
    };
}
function allowImpl(targetClass, propertyKey, descriptor, operations, negate) {
    const classConstructor = targetClass.constructor;
    const originalFunction = descriptor.value;
    if (!classConstructor.hasOwnProperty("__rulesMatchAllows") && !classConstructor.__rulesMatchAllows) {
        classConstructor.__rulesMatchAllows = [];
    }
    classConstructor.__rulesMatchAllows.push({
        operations,
        negate,
        body: (thiz) => originalFunction.apply(thiz)
    });
}
//# sourceMappingURL=allowDeny.js.map