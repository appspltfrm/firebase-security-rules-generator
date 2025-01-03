import {InternalAllowDescriptor} from "../internal/InternalAllowDescriptor.js";
import {InternalFunctionDescriptor} from "../internal/InternalFunctionDescriptor.js";
import {InternalMatchConstructor} from "../internal/InternalMatchConstructor.js";
import {StringWriter} from "../utils/StringWriter.js";
import {RulesExpression} from "./RulesExpression.js";

export class RulesService {

    constructor(protected readonly name: "firebase.storage" | "cloud.firestore", protected readonly version: 1 | 2, protected readonly blocksAndDeclarations: Array<any & InternalMatchConstructor>) {
    }

    protected writeMatch(writer: StringWriter, matchConstructor: InternalMatchConstructor) {

        for (const func of matchConstructor.__rulesMatchFunctions || []) {
            if (func.global) {
                this.writeFunction(writer, func, matchConstructor, matchConstructor);
            }
        }

        let hasInner = false;

        function writeMatchStart() {
            if (!hasInner) {
                writer.writeLine("match ", matchConstructor.__rulesMatchPath, " {")
                writer.indentUp();
                writer.line();
                hasInner = true;
            }
        }

        const matchInstance = new matchConstructor();

        for (const func of matchConstructor.__rulesMatchFunctions || []) {
            if (!func.global) {
                writeMatchStart();
                this.writeFunction(writer, func, matchConstructor, matchInstance);
            }
        }

        for (const allow of matchConstructor.__rulesMatchAllows || []) {
            writeMatchStart();
            this.writeAllow(writer, allow, matchConstructor, matchInstance);
        }

        if (hasInner) {
            writer.indentDown();
            writer.writeLine("}");
        }
    }

    protected writeAllow(writer: StringWriter, allow: InternalAllowDescriptor, matchConstructor?: InternalMatchConstructor, matchInstance?: any) {
        writer.writeLine("allow ", allow.operations.join(", "), ": if ");

        if (allow.negate) {
            writer.write("!(");
        }

        this.toExpression(allow.body(matchInstance)).write(writer);

        if (allow.negate) {
            writer.write(")");
        }

        writer.write(";");
        writer.writeLine();
    }

    protected writeFunction(writer: StringWriter, func: InternalFunctionDescriptor, matchConstructor?: InternalMatchConstructor, matchInstance?: any) {
        writer.writeLine("function ", func.name, "(");

        for (let i = 0; i < (func.args || []).length; i++) {

            if (i > 0) {
                writer.write(", ");
            }

            writer.write(func.args[i]);
        }

        writer.write(") {");
        writer.indentUp();
        writer.line();

        const result = func.body(matchInstance);
        if (result.vars) {
            for (const varName in result.vars) {
                writer.write("let ", varName, " = ");
                this.toExpression(result.vars[varName]).write(writer);
                writer.write(";");
                writer.line(2);
            }
        }

        writer.write("return ");

        this.toExpression(result.result).write(writer);

        writer.write(";");

        writer.indentDown();

        writer.writeLine("}");
        writer.writeLine();
    }

    protected toExpression(value: any) {

        if (value instanceof RulesExpression) {
            return value;
        } else {
            return new RulesExpression(value);
        }

    }

    protected writeServiceStart(writer: StringWriter) {
    }

    protected writeServiceEnd(writer: StringWriter) {
    }

    toString() {

        const writer = new StringWriter();

        writer.write("rules_version = '2';").line();

        writer.write(`service ${this.name} {`);

        this.writeServiceStart(writer);

        for (const blockOrDeclaration of this.blocksAndDeclarations || []) {

            if (blockOrDeclaration.__rulesMatchPath && typeof blockOrDeclaration === "function") {
                writer.line();
                writer.indentUp();
                this.writeMatch(writer, blockOrDeclaration);
                writer.indentDown();

            } else if (blockOrDeclaration instanceof RulesExpression) {
                writer.indentUp();
                writer.line();
                blockOrDeclaration.write(writer);
                writer.indentDown();
            }
        }

        this.writeServiceEnd(writer);

        writer.writeLine("}")

        return writer.toString();
    }
}
