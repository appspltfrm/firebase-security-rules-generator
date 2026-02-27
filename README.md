# Firebase Security Rules Generator

Narzędzie do generowania reguł bezpieczeństwa Firebase (Cloud Firestore oraz Firebase Storage) przy użyciu klas TypeScript i dekoratorów. Dzięki temu reguły są czytelne, łatwe w utrzymaniu i pozwalają na wykorzystanie pełnej mocy systemów typów.

## Główne zalety
- **Struktura klas**: Mapowanie ścieżek reguł na klasy TypeScript.
- **Typowanie**: Wykorzystanie silnych typów dla danych wewnątrz reguł.
- **Wielokrotne użycie**: Łatwe współdzielenie logiki (funkcji) między blokami reguł.
- **Dokumentacja**: Możliwość dodawania JSDoc do reguł, co ułatwia pracę programistom i agentom AI.

## Instalacja

```bash
pnpm add github:appspltfrm/firebase-security-rules-generator
```

## Podstawowe użycie

### 1. Definicja modelu danych (klas match)

Każdy blok `match` jest reprezentowany przez klasę z dekoratorem `@match`.

```ts
import { match, RulesMap, RulesString, allow, request, equals, func } from "firebase-security-rules-generator/firestore";

@match("users/{userId}")
export class User extends RulesMap<User> {
    
    // Definicja pól dokumentu
    displayName = new RulesString;
    role = new RulesString;

    @func()
    private isAdmin() {
        return equals(this.role, "admin");
    }

    @allow("read")
    private canRead() {
        // request(this) daje dostęp do silnie typowanego obiektu request
        return equals(request(this).auth.uid, "some-id") || this.isAdmin();
    }
}
```

### 2. Generowanie pliku reguł

Użyj funkcji `firestore()` (lub `storage()`), aby wygenerować wynikowy tekst reguł.

```ts
import { firestore } from "firebase-security-rules-generator/firestore";
import { User } from "./User";

const rules = firestore(User).toString();
console.log(rules);
```

## Szczegóły techniczne

### Jak działają reguły i ich konwersja (TypeScript -> Security Rules)?

Generator przekształca kod TypeScript w deklaratywną składnię reguł Firebase. Należy pamiętać, że **Security Rules to nie JavaScript/TypeScript** – mają one wiele ograniczeń, które musisz uwzględnić podczas pisania logiki:

#### 1. Brak tradycyjnych instrukcji sterujących (`if`, `for`, `while`, `switch`)

Wewnątrz metod reguł (np. `@allow` lub `@func`) nie możesz używać standardowych instrukcji `if` czy pętli. Cała logika musi opierać się na wyrażeniach (expressions), które zwracają `RulesBoolean`.

*   **Zamiast `if`**: Użyj funkcji `ifElse(warunek, wartośćGdyPrawda, wartośćGdyFałsz)`. Generator zamieni to na operator trójargumentowy `(a ? b : c)` w pliku `.rules`.
    ```ts
    // ŹLE (nie zadziała):
    if (this.isAdmin) { return true; } else { return false; }

    // DOBRZE:
    return ifElse(this.isAdmin(), true, false);
    ```
*   **Brak pętli**: Firebase Security Rules nie obsługuje pętli. Operacje na listach wykonuje się za pomocą wbudowanych metod takich jak `.hasAll()`, `.hasAny()`, `.hasOnly()`.

#### 2. Operatory logiczne i porównania

Chociaż TypeScript pozwala na używanie `&&`, `||`, `==`, zaleca się korzystanie z funkcji pomocniczych generatora, aby zapewnić poprawną budowę drzewa wyrażeń `RulesExpression`:

*   `and(a, b, c)` -> `(a && b && c)`
*   `or(a, b, c)` -> `(a || b || c)`
*   `equals(a, b)` -> `a == b`
*   `this.pole.isNotNull()` -> `resource.data.pole != null`

#### 3. Zmienne lokalne wewnątrz funkcji (`variable`)

Jeśli chcesz zapisać wynik pośredni wyrażenia w zmiennej (aby nie powtarzać długiego wywołania), użyj funkcji `variable(this, wyrażenie)`.

```ts
@func()
private checkAccess() {
    // Tworzy zmienną pomocniczą w wygenerowanym kodzie reguł: let __var_1 = request.auth.uid;
    const uid = variable(this, request(this).auth.uid);
    return equals(uid, "admin-id");
}
```

#### 4. Dlaczego to tak działa?

Każda operacja w Twojej klasie (np. `this.pole.trim()`) nie wykonuje się w momencie generowania, lecz tworzy obiekt `RulesExpression`. Te obiekty są następnie "sklejane" przez `RulesService`. 
Standardowe `if` w TS wykonałoby się w momencie generowania pliku reguł (na Twoim komputerze), a nie podczas sprawdzania uprawnień przez Firebase. Dlatego musimy używać `ifElse`, które przetrwa proces konwersji i trafi do pliku `.rules`.

### Dekoratory

- `@match(path: string)`: Definiuje ścieżkę dla bloku reguł.
- `@allow(...operations: AllowDenyOperation[])`: Definiuje regułę zezwalającą dla podanych operacji (np. `read`, `write`, `create`, `update`, `delete`, `list`, `get`).
- `@func(options?: {exportedName?: string})`: Definiuje funkcję wewnątrz reguł. Funkcje mogą być prywatne (dostępne tylko w klasie) lub globalne.

### Typy danych

Pakiet udostępnia klasy odpowiadające typom Firebase:
- `RulesString`: Operacje na ciągach znaków (`trim`, `size`, `matches`, `split`).
- `RulesInteger`, `RulesNumber`: Operacje matematyczne i porównania.
- `RulesBoolean`: Logika boolowska.
- `RulesTimestamp`: Operacje na czasie.
- `RulesMap`, `RulesList`: Operacje na kolekcjach.

### Praca z żądaniem i zasobem

- `request(schema?)`: Dostęp do danych żądania (`request.auth`, `request.resource.data`). Jeśli podasz schemat (klasę), dane będą typowane.
- `resource(schema?)`: Dostęp do istniejącego zasobu w bazie danych.
- `get(path)` / `exists(path)`: Funkcje dostępowe do innych dokumentów.

## Przykłady

Więcej przykładów znajdziesz w katalogu [test/firestore](test/firestore).

## Dokumentacja dla AI

Klasy i metody posiadają bogatą dokumentację JSDoc, co pozwala agentom AI na lepsze zrozumienie struktury reguł i sugerowanie poprawnych rozwiązań podczas tworzenia logiki bezpieczeństwa.

---

## Linki pomocnicze
- [Firebase Security Rules Documentation](https://firebase.google.com/docs/rules)
- [Firestore Reference](https://firebase.google.com/docs/reference/rules/rules.firestore)
- [Storage Reference](https://firebase.google.com/docs/reference/security/storage)
