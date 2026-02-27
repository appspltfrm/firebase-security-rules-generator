import { RulesExpression } from "../core/RulesExpression.js";
export function assertResourceDataOnlyAffectedKeys(affectedKeys) {
    const fieldNames = [];
    for (const data of affectedKeys) {
        const name = typeof data === "string" ? data : data.__rulesAccessorName;
        if (!name) {
            throw new Error("Nie można określić nazwy pola danych");
        }
        fieldNames.push(name);
    }
    return RulesExpression.l `!request.resource.data.diff(resource.data).affectedKeys().hasOnly(${JSON.stringify(fieldNames)})`;
}
//# sourceMappingURL=assertResourceDataOnlyAffectedKeys.js.map