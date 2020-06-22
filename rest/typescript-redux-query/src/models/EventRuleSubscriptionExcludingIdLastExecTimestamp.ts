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
 * (Schema options: { exclude: [ \'id\', \'lastExecTimestamp\' ] })
 * @export
 * @interface EventRuleSubscriptionExcludingIdLastExecTimestamp
 */
export interface EventRuleSubscriptionExcludingIdLastExecTimestamp  {
    /**
     * EventRule execution period - seconds
     * @type {number}
     * @memberof EventRuleSubscriptionExcludingIdLastExecTimestamp
     */
    executionPeriod: number;
    /**
     * ID of Asset subscribed to EventRule
     * @type {number}
     * @memberof EventRuleSubscriptionExcludingIdLastExecTimestamp
     */
    assetId: number;
    /**
     * ID of associated EventRule
     * @type {number}
     * @memberof EventRuleSubscriptionExcludingIdLastExecTimestamp
     */
    eventRuleId: number;
    /**
     * Is set to true when EventRule has been activated
     * @type {boolean}
     * @memberof EventRuleSubscriptionExcludingIdLastExecTimestamp
     */
    ruleActivated: boolean;
}

export function EventRuleSubscriptionExcludingIdLastExecTimestampFromJSON(json: any): EventRuleSubscriptionExcludingIdLastExecTimestamp {
    return {
        'executionPeriod': json['executionPeriod'],
        'assetId': json['assetId'],
        'eventRuleId': json['eventRuleId'],
        'ruleActivated': json['ruleActivated'],
    };
}

export function EventRuleSubscriptionExcludingIdLastExecTimestampToJSON(value?: EventRuleSubscriptionExcludingIdLastExecTimestamp): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'executionPeriod': value.executionPeriod,
        'assetId': value.assetId,
        'eventRuleId': value.eventRuleId,
        'ruleActivated': value.ruleActivated,
    };
}


