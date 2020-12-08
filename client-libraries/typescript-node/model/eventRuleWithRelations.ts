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
* (Schema options: { includeRelations: true })
*/
export class EventRuleWithRelations {
    /**
    * Automatically generated ID
    */
    'id'?: number;
    /**
    * Rule description
    */
    'description'?: string;
    /**
    * Rule scope
    */
    'scope': string;
    /**
    * Event Detection Algorithm
    */
    'algorithm'?: string;
    /**
    * Rule action
    */
    'action': string;
    /**
    * Rule action parameters
    */
    'actionParameters'?: string;
    /**
    * JSON Rule
    */
    'rule'?: string;
    /**
    * EventRule execution period - seconds
    */
    'executionPeriod'?: number;
    /**
    * Last execution timestamp
    */
    'lastExecTimestamp'?: Date;
    /**
    * Is set to true when EventRule has been activated
    */
    'activated'?: boolean;
    /**
    * Is automaticaly set to true when EventRule is being processed
    */
    'inProgress'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "scope",
            "baseName": "scope",
            "type": "string"
        },
        {
            "name": "algorithm",
            "baseName": "algorithm",
            "type": "string"
        },
        {
            "name": "action",
            "baseName": "action",
            "type": "string"
        },
        {
            "name": "actionParameters",
            "baseName": "actionParameters",
            "type": "string"
        },
        {
            "name": "rule",
            "baseName": "rule",
            "type": "string"
        },
        {
            "name": "executionPeriod",
            "baseName": "executionPeriod",
            "type": "number"
        },
        {
            "name": "lastExecTimestamp",
            "baseName": "lastExecTimestamp",
            "type": "Date"
        },
        {
            "name": "activated",
            "baseName": "activated",
            "type": "boolean"
        },
        {
            "name": "inProgress",
            "baseName": "inProgress",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return EventRuleWithRelations.attributeTypeMap;
    }
}

