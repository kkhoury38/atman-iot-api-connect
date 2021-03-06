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
* (Schema options: { exclude: [ \'description\', \'serialNo\', \'dataLoggerId\', \'deviceTypeId\' ] })
*/
export class DeviceExcludingDescriptionSerialNoDataLoggerIdDeviceTypeId {
    /**
    * Automatically generated ID
    */
    'id'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return DeviceExcludingDescriptionSerialNoDataLoggerIdDeviceTypeId.attributeTypeMap;
    }
}

