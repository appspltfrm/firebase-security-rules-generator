/**
 * Dekorator definiujący regułę `allow` dla określonych operacji.
 *
 * @param operation Lista operacji (np. "read", "write", "create")
 */
export function allow(...operation) {
    return function (targetClass, propertyKey, descriptor) {
        allowImpl(targetClass, propertyKey, descriptor, operation, false);
    };
}
/**
 * Dekorator definiujący regułę `allow` z negacją (not) - obecnie implementacja
 * w `allowImpl` używa flagi `negate`, co w `RulesService.writeAllow` skutkuje dodaniem `!()`.
 *
 * @param operation Lista operacji
 */
export function deny(...operation) {
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