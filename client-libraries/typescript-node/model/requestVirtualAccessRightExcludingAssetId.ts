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
* (Schema options: { exclude: [ \'assetId\' ] })
*/
export class RequestVirtualAccessRightExcludingAssetId {
    /**
    * Id of user to grant access to asset
    */
    'userId': number;
    /**
    * Id of asset group
    */
    'assetGroupId'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "userId",
            "baseName": "userId",
            "type": "number"
        },
        {
            "name": "assetGroupId",
            "baseName": "assetGroupId",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return RequestVirtualAccessRightExcludingAssetId.attributeTypeMap;
    }
}

