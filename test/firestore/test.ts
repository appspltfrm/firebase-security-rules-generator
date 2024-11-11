import {firestore} from "firebase-security-rules-generator/firestore/index.js";
import {Admin} from "./Admin.js";
import {User} from "./User.js";


const start = Date.now();

const output = firestore(
    User,
    Admin
).toString();

console.log(output);

console.log("\x1b[32mFinished in", `${Date.now() - start}ms`);
