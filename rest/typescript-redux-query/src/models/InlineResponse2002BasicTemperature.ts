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
 * @interface InlineResponse2002BasicTemperature
 */
export interface InlineResponse2002BasicTemperature  {
    /**
     * 
     * @type {number}
     * @memberof InlineResponse2002BasicTemperature
     */
    measurement?: number;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse2002BasicTemperature
     */
    unit?: number;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2002BasicTemperature
     */
    timestamp?: string;
}

export function InlineResponse2002BasicTemperatureFromJSON(json: any): InlineResponse2002BasicTemperature {
    return {
        'measurement': !exists(json, 'measurement') ? undefined : json['measurement'],
        'unit': !exists(json, 'unit') ? undefined : json['unit'],
        'timestamp': !exists(json, 'timestamp') ? undefined : json['timestamp'],
    };
}

export function InlineResponse2002BasicTemperatureToJSON(value?: InlineResponse2002BasicTemperature): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'measurement': value.measurement,
        'unit': value.unit,
        'timestamp': value.timestamp,
    };
}

