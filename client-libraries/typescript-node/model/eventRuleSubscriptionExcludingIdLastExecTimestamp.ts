/**
 * Atman IoT
 * Atman IoT Server
 *
 * The version of the OpenAPI document: 3.0.1
 * Contact: k.khoury@k-ren.gr
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';

/**
* (Schema options: { exclude: [ \'id\', \'lastExecTimestamp\' ] })
*/
export class EventRuleSubscriptionExcludingIdLastExecTimestamp {
    /**
    * EventRule execution period - seconds
    */
    'executionPeriod': number;
    /**
    * ID of Asset subscribed to EventRule
    */
    'assetId': number;
    /**
    * ID of associated EventRule
    */
    'eventRuleId': number;
    /**
    * Is set to true when EventRule has been activated
    */
    'ruleActivated': boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "executionPeriod",
            "baseName": "executionPeriod",
            "type": "number"
        },
        {
            "name": "assetId",
            "baseName": "assetId",
            "type": "number"
        },
        {
            "name": "eventRuleId",
            "baseName": "eventRuleId",
            "type": "number"
        },
        {
            "name": "ruleActivated",
            "baseName": "ruleActivated",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return EventRuleSubscriptionExcludingIdLastExecTimestamp.attributeTypeMap;
    }
}

