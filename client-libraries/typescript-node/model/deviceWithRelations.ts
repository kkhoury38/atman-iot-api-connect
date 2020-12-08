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
import { DataLoggerWithRelations } from './dataLoggerWithRelations';
import { DeviceTypeWithRelations } from './deviceTypeWithRelations';

/**
* (Schema options: { includeRelations: true })
*/
export class DeviceWithRelations {
    /**
    * Automatically generated ID
    */
    'id'?: number;
    /**
    * Device description
    */
    'description'?: string;
    /**
    * Device serial number
    */
    'serialNo': string;
    /**
    * ID of DataLogger that Device belongs to
    */
    'dataLoggerId': number;
    'deviceTypeId'?: number;
    'dataLogger'?: DataLoggerWithRelations;
    'deviceType'?: DeviceTypeWithRelations;

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
            "name": "serialNo",
            "baseName": "serialNo",
            "type": "string"
        },
        {
            "name": "dataLoggerId",
            "baseName": "dataLoggerId",
            "type": "number"
        },
        {
            "name": "deviceTypeId",
            "baseName": "deviceTypeId",
            "type": "number"
        },
        {
            "name": "dataLogger",
            "baseName": "dataLogger",
            "type": "DataLoggerWithRelations"
        },
        {
            "name": "deviceType",
            "baseName": "deviceType",
            "type": "DeviceTypeWithRelations"
        }    ];

    static getAttributeTypeMap() {
        return DeviceWithRelations.attributeTypeMap;
    }
}

