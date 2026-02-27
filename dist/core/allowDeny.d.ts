export type AllowDenyOperation = "get" | "list" | "read" | "delete" | "update" | "create" | "write";
/**
 * Dekorator definiujący regułę `allow` dla określonych operacji.
 *
 * @param operation Lista operacji (np. "read", "write", "create")
 */
export declare function allow(...operation: AllowDenyOperation[]): (targetClass: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
/**
 * Dekorator definiujący regułę `allow` z negacją (not) - obecnie implementacja
 * w `allowImpl` używa flagi `negate`, co w `RulesService.writeAllow` skutkuje dodaniem `!()`.
 *
 * @param operation Lista operacji
 */
export declare function deny(...operation: AllowDenyOperation[]): (targetClass: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
