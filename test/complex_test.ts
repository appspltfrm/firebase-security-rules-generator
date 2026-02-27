import {
    match,
    RulesMap,
    RulesString,
    allow,
    request,
    equals,
    func,
    firestore,
    auth,
    and,
    or,
    exists,
    RulesPath, requestResource, requestData
} from "../src/firestore/index.js";

/**
 * Przykładowa klasa reprezentująca dokument posta.
 */
@match("posts/{postId}")
export class Post extends RulesMap {
    /** Tytuł posta */
    title = new RulesString;
    /** ID autora */
    authorId = new RulesString;
    /** Status posta (np. "draft", "published") */
    status = new RulesString;

    /**
     * Sprawdza, czy użytkownik jest autorem posta.
     */
    @func()
    isAuthor() {
        return equals(this.authorId, auth().uid);
    }

    /**
     * Sprawdza, czy użytkownik jest adminem (na podstawie innego dokumentu).
     */
    @func()
    static isAdmin() {
        return exists(RulesPath.l`/databases/$(database)/documents/admins/$(request.auth.uid)`);
    }

    @allow("read")
    canRead() {
        return or(
            equals(this.status, "published"),
            this.isAuthor(),
            Post.isAdmin()
        );
    }

    @allow("create")
    canCreate() {
        return and(
            auth().uid.isNotNull(),
            equals(requestData(this).authorId, auth().uid)
        );
    }

    @allow("update", "delete")
    canModify() {
        return or(
            this.isAuthor(),
            Post.isAdmin()
        );
    }
}

// Generowanie i wyświetlanie reguł
const output = firestore(Post).toString();
console.log("--- GENERATED FIRESTORE RULES ---");
console.log(output);
console.log("--- END ---");
