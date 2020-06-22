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
 * (Schema options: { exclude: [ \'assetGroupId\' ] })
 * @export
 * @interface RequestVirtualAccessRightExcludingAssetGroupId
 */
export interface RequestVirtualAccessRightExcludingAssetGroupId  {
    /**
     * Id of user to grant access to asset
     * @type {number}
     * @memberof RequestVirtualAccessRightExcludingAssetGroupId
     */
    userId: number;
    /**
     * Id of asset
     * @type {number}
     * @memberof RequestVirtualAccessRightExcludingAssetGroupId
     */
    assetId?: number;
}

export function RequestVirtualAccessRightExcludingAssetGroupIdFromJSON(json: any): RequestVirtualAccessRightExcludingAssetGroupId {
    return {
        'userId': json['userId'],
        'assetId': !exists(json, 'assetId') ? undefined : json['assetId'],
    };
}

export function RequestVirtualAccessRightExcludingAssetGroupIdToJSON(value?: RequestVirtualAccessRightExcludingAssetGroupId): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'userId': value.userId,
        'assetId': value.assetId,
    };
}


