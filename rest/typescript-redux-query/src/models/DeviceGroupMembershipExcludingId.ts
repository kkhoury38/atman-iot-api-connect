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
 * (Schema options: { exclude: [ \'id\' ] })
 * @export
 * @interface DeviceGroupMembershipExcludingId
 */
export interface DeviceGroupMembershipExcludingId  {
    /**
     * ID of Device associated with Asset
     * @type {number}
     * @memberof DeviceGroupMembershipExcludingId
     */
    assetId: number;
    /**
     * ID of Device associated with Asset
     * @type {number}
     * @memberof DeviceGroupMembershipExcludingId
     */
    deviceId: number;
}

export function DeviceGroupMembershipExcludingIdFromJSON(json: any): DeviceGroupMembershipExcludingId {
    return {
        'assetId': json['assetId'],
        'deviceId': json['deviceId'],
    };
}

export function DeviceGroupMembershipExcludingIdToJSON(value?: DeviceGroupMembershipExcludingId): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'assetId': value.assetId,
        'deviceId': value.deviceId,
    };
}

