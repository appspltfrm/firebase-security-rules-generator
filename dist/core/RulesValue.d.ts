import { RulesExpression } from "./RulesExpression.js";
/**
 * Bazowa klasa dla wszystkich wartości w regułach bezpieczeństwa Firebase.
 * Zarządza dostępem do właściwości, generowaniem wyrażeń i klonowaniem obiektów.
 */
export declare class RulesValue {
    constructor(expression?: RulesExpression);
    /**
     * Bezpośrednie wyrażenie reprezentujące tę wartość.
     */
    private __rulesExpression?;
    /**
     * Identyfikator zmiennej, jeśli wartość jest przypisana do zmiennej wewnątrz funkcji.
     */
    private __rulesVarId?;
    /**
     * Nazwa właściwości/akcesora (np. "data", "uid").
     */
    private __rulesAccessorName?;
    /**
     * Kontekst akcesora (np. "request", "resource", lub inna instancja RulesValue).
     */
    private __rulesAccessorContext?;
    /**
     * Konwertuje wartość na wyrażenie reguł (RulesExpression).
     */
    private __rulesValueAsExpression;
    /**
     * Inicjalizuje właściwości obiektu jako instancje RulesValue, ustawiając ich kontekst.
     */
    private __rulesInitProperties;
    /**
     * Tworzy kopię obiektu z zachowaniem struktury właściwości.
     */
    private __rulesClone;
}
