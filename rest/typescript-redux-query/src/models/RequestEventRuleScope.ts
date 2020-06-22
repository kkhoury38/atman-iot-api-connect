// tslint:disable
/**
 * Atman IoT
 * Atman IoT Server
 *
 * The version of the OpenAPI document: 0.2.3
 * Contact: k.khoury@k-ren.gr
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface RequestEventRuleScope
 */
export interface RequestEventRuleScope  {
    /**
     * deviceType.Category that rule aplies to
     * @type {string}
     * @memberof RequestEventRuleScope
     */
    deviceTypeCategory: string;
    /**
     * channelType.Categoy that rule aplies to
     * @type {string}
     * @memberof RequestEventRuleScope
     */
    channelTypeCategory: string;
}

export function RequestEventRuleScopeFromJSON(json: any): RequestEventRuleScope {
    return {
        'deviceTypeCategory': json['deviceTypeCategory'],
        'channelTypeCategory': json['channelTypeCategory'],
    };
}

export function RequestEventRuleScopeToJSON(value?: RequestEventRuleScope): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'deviceTypeCategory': value.deviceTypeCategory,
        'channelTypeCategory': value.channelTypeCategory,
    };
}


