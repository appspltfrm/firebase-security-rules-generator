import { RulesExpression } from "../core/RulesExpression.js";
import { RulesValue } from "./RulesValue.js";
import { RulesMap } from "./RulesMap.js";
import { RulesPath } from "./RulesPath.js";
import { RulesString } from "./RulesString.js";
export class RulesResourceKnownData extends RulesValue {
    constructor(data) {
        super();
        this.$data = data.__rulesClone();
        this.$data.__rulesAccessorName = "data";
        this.$data.__rulesExpression = new RulesExpression(this, RulesExpression.l `.data`);
    }
    $data;
    id = new RulesString;
    __name__ = new RulesPath;
    data() {
        return this.$data;
    }
}
export class RulesResourceUnknownData extends RulesValue {
    constructor() {
        super();
    }
    id = new RulesString;
    __name__ = new RulesPath;
    data(dataType) {
        const data = dataType ? new dataType() : new RulesMap;
        data.__rulesAccessorName = "data";
        data.__rulesExpression = new RulesExpression(this, RulesExpression.l `.data`);
        data.__rulesInitProperties();
        return data;
    }
}
//# sourceMappingURL=RulesResource.js.map