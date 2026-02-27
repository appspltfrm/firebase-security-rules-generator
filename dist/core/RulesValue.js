import { RulesExpression } from "./RulesExpression.js";
/**
 * Bazowa klasa dla wszystkich wartości w regułach bezpieczeństwa Firebase.
 * Zarządza dostępem do właściwości, generowaniem wyrażeń i klonowaniem obiektów.
 */
export class RulesValue {
    constructor(expression) {
        this.__rulesValue = true;
        if (expression) {
            this.__rulesExpression = expression;
        }
    }
    /**
     * Bezpośrednie wyrażenie reprezentujące tę wartość.
     */
    __rulesExpression;
    /**
     * Identyfikator zmiennej, jeśli wartość jest przypisana do zmiennej wewnątrz funkcji.
     */
    __rulesVarId;
    /**
     * Nazwa właściwości/akcesora (np. "data", "uid").
     */
    __rulesAccessorName;
    /**
     * Kontekst akcesora (np. "request", "resource", lub inna instancja RulesValue).
     */
    __rulesAccessorContext;
    /**
     * Konwertuje wartość na wyrażenie reguł (RulesExpression).
     */
    __rulesValueAsExpression() {
        if (this.__rulesVarId) {
            return new RulesExpression(RulesExpression.l `${this.__rulesVarId}`);
        }
        else if (this.__rulesExpression) {
            return this.__rulesExpression;
        }
        else if (typeof this.__rulesAccessorContext === "string") {
            return RulesExpression.l `${this.__rulesAccessorContext}${accessorExpression(this.__rulesAccessorName)}`;
        }
        else if (this.__rulesAccessorContext) {
            return new RulesExpression(this.__rulesAccessorContext, RulesExpression.l `${accessorExpression(this.__rulesAccessorName)}`);
        }
        else {
            return new RulesExpression(RulesExpression.l `${this.__rulesAccessorName}`);
        }
    }
    /**
     * Inicjalizuje właściwości obiektu jako instancje RulesValue, ustawiając ich kontekst.
     */
    __rulesInitProperties() {
        for (const propertyName in this) {
            const propertyValue = this[propertyName];
            if (propertyValue instanceof RulesValue && !propertyName.startsWith("__rules")) {
                propertyValue.__rulesAccessorName = propertyName;
                propertyValue.__rulesAccessorContext = this;
                propertyValue.__rulesInitProperties();
            }
        }
    }
    /**
     * Tworzy kopię obiektu z zachowaniem struktury właściwości.
     */
    __rulesClone() {
        const niu = new this["constructor"];
        niu.__rulesInitProperties();
        return niu;
    }
}
function accessorExpression(name) {
    if (name.match(/^(?![0-9])[a-zA-Z0-9$_]+$/)) {
        return `.${name}`;
    }
    else {
        return `["${name}"]`;
    }
}
//# sourceMappingURL=RulesValue.js.map