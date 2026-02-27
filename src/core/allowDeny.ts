import {InternalMatchConstructor} from "../internal/InternalMatchConstructor.js";

export type AllowDenyOperation = "get" | "list" | "read" | "delete" | "update" | "create" | "write";

/**
 * Dekorator definiujący regułę `allow` dla określonych operacji.
 * 
 * @param operation Lista operacji (np. "read", "write", "create")
 */
export function allow(...operation: AllowDenyOperation[]) {
    return function (targetClass: any, propertyKey: string, descriptor: PropertyDescriptor) {
        allowImpl(targetClass, propertyKey, descriptor, operation, false);
    }
}

/**
 * Dekorator definiujący regułę `allow` z negacją (not) - obecnie implementacja
 * w `allowImpl` używa flagi `negate`, co w `RulesService.writeAllow` skutkuje dodaniem `!()`.
 * 
 * @param operation Lista operacji
 */
export function deny(...operation: AllowDenyOperation[]) {
    return function (targetClass: any, propertyKey: string, descriptor: PropertyDescriptor) {
        allowImpl(targetClass, propertyKey, descriptor, operation, true);
    }
}

function allowImpl(targetClass: any, propertyKey: string, descriptor: PropertyDescriptor, operations: AllowDenyOperation[], negate?: boolean) {

    const classConstructor: InternalMatchConstructor = targetClass.constructor;
    const originalFunction: Function = descriptor.value;

    if (!classConstructor.hasOwnProperty("__rulesMatchAllows") && !classConstructor.__rulesMatchAllows) {
        classConstructor.__rulesMatchAllows = [];
    }

    classConstructor.__rulesMatchAllows.push({
        operations,
        negate,
        body: (thiz) => originalFunction.apply(thiz)
    });
}
