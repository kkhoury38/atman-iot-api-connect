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
 * @interface EventRelatedDevice
 */
export interface EventRelatedDevice  {
    /**
     * Automatically generated ID
     * @type {number}
     * @memberof EventRelatedDevice
     */
    id?: number;
    /**
     * ID of Device associated with Event
     * @type {number}
     * @memberof EventRelatedDevice
     */
    deviceId: number;
    /**
     * ID of Event
     * @type {number}
     * @memberof EventRelatedDevice
     */
    eventId: number;
}

export function EventRelatedDeviceFromJSON(json: any): EventRelatedDevice {
    return {
        'id': !exists(json, 'id') ? undefined : json['id'],
        'deviceId': json['deviceId'],
        'eventId': json['eventId'],
    };
}

export function EventRelatedDeviceToJSON(value?: EventRelatedDevice): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'id': value.id,
        'deviceId': value.deviceId,
        'eventId': value.eventId,
    };
}


