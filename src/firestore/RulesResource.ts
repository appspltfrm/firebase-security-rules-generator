import {RulesExpression} from "../core/RulesExpression.js";
import {RulesValue} from "./RulesValue.js";
import {InternalRulesValue} from "../internal/InternalRulesValue.js";
import {AssignableType} from "../utils/Type.js";
import {RulesMap} from "./RulesMap.js";
import {RulesPath} from "./RulesPath.js";
import {RulesString} from "./RulesString.js";

export interface RulesResource {
    readonly id: RulesString;
    readonly __name__: RulesPath;
    data(): RulesMap;
}

export class RulesResourceKnownData<D extends RulesMap> extends RulesValue {

    constructor(data: D) {
        super();
        this.$data = (data as unknown as InternalRulesValue).__rulesClone();
        (this.$data as any as InternalRulesValue).__rulesAccessorName = "data";
        (this.$data as any as InternalRulesValue).__rulesExpression = new RulesExpression(this, RulesExpression.l`.data`);
    }

    private readonly $data: D;

    readonly id = new RulesString;

    readonly __name__ = new RulesPath;

    data(): D {
        return this.$data;
    }

}

export class RulesResourceUnknownData extends RulesValue {

    constructor() {
        super();
    }

    readonly id = new RulesString;

    readonly __name__ = new RulesPath;

    data<T extends RulesMap = RulesMap>(dataType?: AssignableType<T>): T {
        const data = dataType ? new dataType() : new RulesMap;
        (data as any as InternalRulesValue).__rulesAccessorName = "data";
        (data as any as InternalRulesValue).__rulesExpression = new RulesExpression(this, RulesExpression.l`.data`);
        (data as any as InternalRulesValue).__rulesInitProperties();
        return data as T;
    }

}
