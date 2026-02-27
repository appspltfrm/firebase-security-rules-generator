import {InternalRulesValue} from "../internal/InternalRulesValue.js";
import {RulesExpression} from "./RulesExpression.js";

/**
 * Bazowa klasa dla wszystkich wartości w regułach bezpieczeństwa Firebase.
 * Zarządza dostępem do właściwości, generowaniem wyrażeń i klonowaniem obiektów.
 */
export class RulesValue {

    constructor(expression?: RulesExpression) {
        (this as any as InternalRulesValue).__rulesValue = true;

        if (expression) {
            this.__rulesExpression = expression;
        }
    }

    /**
     * Bezpośrednie wyrażenie reprezentujące tę wartość.
     */
    private __rulesExpression?: RulesExpression;

    /**
     * Identyfikator zmiennej, jeśli wartość jest przypisana do zmiennej wewnątrz funkcji.
     */
    private __rulesVarId?: string;

    /**
     * Nazwa właściwości/akcesora (np. "data", "uid").
     */
    private __rulesAccessorName?: string;

    /**
     * Kontekst akcesora (np. "request", "resource", lub inna instancja RulesValue).
     */
    private __rulesAccessorContext?: string | RulesValue;

    /**
     * Konwertuje wartość na wyrażenie reguł (RulesExpression).
     */
    private __rulesValueAsExpression() {

        if (this.__rulesVarId) {
            return new RulesExpression(RulesExpression.l`${this.__rulesVarId}`);

        } else if (this.__rulesExpression) {
            return this.__rulesExpression;

        } else if (typeof this.__rulesAccessorContext === "string") {
            return RulesExpression.l`${this.__rulesAccessorContext}${accessorExpression(this.__rulesAccessorName)}`;
        } else if (this.__rulesAccessorContext) {
            return new RulesExpression(this.__rulesAccessorContext, RulesExpression.l`${accessorExpression(this.__rulesAccessorName)}`);
        } else {
            return new RulesExpression(RulesExpression.l`${this.__rulesAccessorName}`);
        }
    }

    /**
     * Inicjalizuje właściwości obiektu jako instancje RulesValue, ustawiając ich kontekst.
     */
    private __rulesInitProperties() {

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
    private __rulesClone() {
        const niu = new (this["constructor"] as any as {new(): RulesValue});
        niu.__rulesInitProperties();
        return niu;
    }
}

function accessorExpression(name: string) {
    if (name.match(/^(?![0-9])[a-zA-Z0-9$_]+$/)) {
        return `.${name}`;
    } else {
        return `["${name}"]`
    }
}
