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
* (Schema options: { exclude: [ \'id\', \'name\', \'deviceTypeId\' ] })
*/
export class ChannelTypeExcludingIdNameDeviceTypeId {
    /**
    * ChannelType category
    */
    'category'?: string;
    /**
    * ChannelType description
    */
    'description'?: string;
    /**
    * Unit of measurement
    */
    'unit'?: string;
    /**
    * Type of data: UNDEFINED / SPOT_VALUE / COUNTER / TEXT
    */
    'channelType': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "category",
            "baseName": "category",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "unit",
            "baseName": "unit",
            "type": "string"
        },
        {
            "name": "channelType",
            "baseName": "channelType",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ChannelTypeExcludingIdNameDeviceTypeId.attributeTypeMap;
    }
}

