import { RulesRequestImpl } from "./RulesRequest.js";
import { RulesResourceKnownData, RulesResourceUnknownData } from "./RulesResource.js";
export function request(resourceData) {
    let resource;
    if (resourceData) {
        resource = new RulesResourceKnownData(resourceData);
    }
    else {
        resource = new RulesResourceUnknownData();
    }
    return new RulesRequestImpl(resource);
}
//# sourceMappingURL=request.js.map