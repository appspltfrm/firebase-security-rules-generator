import {RulesExpression} from "../core/RulesExpression.js";
import {RulesService} from "../core/RulesService.js";
import {Type} from "../utils/Type.js";
import {StringWriter} from "../utils/StringWriter.js";
import {getResourceDataNative} from "./getResourceDataNative.js";
import {addedOrChangedKeysMapDiffNative} from "./addedOrChangedKeysMapDiffNative.js";

export function firestore(...declarations: Array<Type<any> | RulesExpression>): RulesService {
    return new class extends RulesService {
        constructor() {
            super("cloud.firestore", 2, [getResourceDataNative, addedOrChangedKeysMapDiffNative, ...declarations]);
        }

        protected writeServiceStart(writer: StringWriter) {
            writer
                .indentUp()
                .writeLine("match /databases/{database}/documents {")
                .line();
        }

        protected writeServiceEnd(writer: StringWriter) {
            writer
                .line()
                .writeLine("}")
                .indentDown();
        }
    }
}
