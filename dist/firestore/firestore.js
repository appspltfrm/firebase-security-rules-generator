"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firestore = firestore;
const RulesService_js_1 = require("../core/RulesService.js");
const getResourceDataNative_js_1 = require("./getResourceDataNative.js");
const addedOrChangedKeysMapDiffNative_js_1 = require("./addedOrChangedKeysMapDiffNative.js");
function firestore(...declarations) {
    return new class extends RulesService_js_1.RulesService {
        constructor() {
            super("cloud.firestore", 2, [getResourceDataNative_js_1.getResourceDataNative, addedOrChangedKeysMapDiffNative_js_1.addedOrChangedKeysMapDiffNative, ...declarations]);
        }
        writeServiceStart(writer) {
            writer
                .indentUp()
                .writeLine("match /databases/{database}/documents {")
                .line();
        }
        writeServiceEnd(writer) {
            writer
                .line()
                .writeLine("}")
                .indentDown();
        }
    };
}
//# sourceMappingURL=firestore.js.map