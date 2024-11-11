import { RulesExpression } from "../core/RulesExpression.js";
export function assertResourceDataNotChanged(dataNotToBeChanged) {
    const fieldNames = [];
    for (const data of dataNotToBeChanged) {
        const name = typeof data === "string" ? data : data.__rulesAccessorName;
        if (!name) {
            throw new Error("Nie można określić nazwy pola danych");
        }
        fieldNames.push(name);
    }
    return RulesExpression.l `!request.resource.data.diff(resource.data).affectedKeys().hasAny(${JSON.stringify(fieldNames)})`;
}
//# sourceMappingURL=assertResourceDataNotChanged.js.map