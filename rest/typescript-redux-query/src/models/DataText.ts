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
 * @interface DataText
 */
export interface DataText  {
    /**
     * Automatically generated ID
     * @type {number}
     * @memberof DataText
     */
    id?: number;
    /**
     * Recording period - seconds
     * @type {number}
     * @memberof DataText
     */
    period: number;
    /**
     * Recorded data
     * @type {string}
     * @memberof DataText
     */
    measurement: string;
    /**
     * Timestamp
     * @type {Date}
     * @memberof DataText
     */
    timestamp: Date;
    /**
     * ID of Channel that DataFloat belongs to
     * @type {number}
     * @memberof DataText
     */
    channelId: number;
}

export function DataTextFromJSON(json: any): DataText {
    return {
        'id': !exists(json, 'id') ? undefined : json['id'],
        'period': json['period'],
        'measurement': json['measurement'],
        'timestamp': new Date(json['timestamp']),
        'channelId': json['channelId'],
    };
}

export function DataTextToJSON(value?: DataText): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'id': value.id,
        'period': value.period,
        'measurement': value.measurement,
        'timestamp': value.timestamp.toISOString(),
        'channelId': value.channelId,
    };
}


