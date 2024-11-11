import { InternalAllowDescriptor } from "./InternalAllowDescriptor.js";
import { InternalFunctionDescriptor } from "./InternalFunctionDescriptor.js";
export interface InternalMatchConstructor {
    new (): any;
    __rulesMatchPath?: string;
    __rulesMatchFunctions?: InternalFunctionDescriptor[];
    __rulesMatchAllows?: InternalAllowDescriptor[];
}
