import { RulesValue } from "./RulesValue.js";
/**
 * Dekorator definiujący blok `match` w regułach Firebase.
 * Klasa udekorowana tym dekoratorem reprezentuje ścieżkę (path) w regułach.
 *
 * @param path Ścieżka reguł, np. "users/{userId}"
 */
export function match(path) {
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
                    else if (propertyValue instanceof RulesValue) {
                        propertyValue.__rulesAccessorName = propertyName;
                        propertyValue.__rulesAccessorContext = "resource.data";
                    }
                }
            }
        };
    };
}
//# sourceMappingURL=match.js.map