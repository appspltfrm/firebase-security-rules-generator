import { RulesService } from "../core/RulesService.js";
import { getResourceDataNative } from "./getResourceDataNative.js";
import { addedOrChangedKeysMapDiffNative } from "./addedOrChangedKeysMapDiffNative.js";
export function firestore(...declarations) {
    return new class extends RulesService {
        constructor() {
            super("cloud.firestore", 2, [getResourceDataNative, addedOrChangedKeysMapDiffNative, ...declarations]);
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