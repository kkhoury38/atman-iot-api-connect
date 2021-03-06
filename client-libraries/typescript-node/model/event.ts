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

export class Event {
    /**
    * Automatically generated ID
    */
    'id'?: number;
    /**
    * ID of Asset associated with Event
    */
    'assetId': number;
    /**
    * ID of EventRule triggered
    */
    'eventRuleId': number;
    /**
    * Event severity - Can be  LOW / MEDIUM / HIGH
    */
    'severity': string;
    /**
    * Event description
    */
    'description'?: string;
    /**
    * Set to true if Event has been resolved
    */
    'resolved': boolean;
    /**
    * Event creation timestamp
    */
    'timestamp': Date;
    /**
    * Event resolution timestamp
    */
    'resolutionTimestamp'?: Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
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
            "name": "severity",
            "baseName": "severity",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "resolved",
            "baseName": "resolved",
            "type": "boolean"
        },
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "Date"
        },
        {
            "name": "resolutionTimestamp",
            "baseName": "resolutionTimestamp",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return Event.attributeTypeMap;
    }
}

