import { RulesExpression } from "../core/RulesExpression.js";
import { RulesResourceKnownData, RulesResourceUnknownData } from "./RulesResource.js";
export function resource(data) {
    const resource = data ? new RulesResourceKnownData(data) : new RulesResourceUnknownData();
    resource.__rulesExpression = RulesExpression.l `resource`;
    return resource;
}
//# sourceMappingURL=resource.js.map