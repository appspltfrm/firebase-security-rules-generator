/**
 * Dekorator definiujący blok `match` w regułach Firebase.
 * Klasa udekorowana tym dekoratorem reprezentuje ścieżkę (path) w regułach.
 *
 * @param path Ścieżka reguł, np. "users/{userId}"
 */
export declare function match<C extends {
    new (...args: any[]): {};
}>(path: string): (classConstructor: C) => any;
