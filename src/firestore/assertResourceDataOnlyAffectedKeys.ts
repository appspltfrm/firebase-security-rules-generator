import {RulesExpression} from "../core/RulesExpression.js";
import {InternalRulesValue} from "../internal/InternalRulesValue.js";
import {RulesValue} from "./RulesValue.js";

export function assertResourceDataOnlyAffectedKeys(affectedKeys: Array<RulesValue | string>) {

    const fieldNames: string[] = [];

    for (const data of affectedKeys) {
        const name = typeof data === "string" ? data : (data as any as InternalRulesValue).__rulesAccessorName;

        if (!name) {
            throw new Error("Nie można określić nazwy pola danych");
        }

        fieldNames.push(name);
    }

    return RulesExpression.l`!request.resource.data.diff(resource.data).affectedKeys().hasOnly(${JSON.stringify(fieldNames)})`;
}
