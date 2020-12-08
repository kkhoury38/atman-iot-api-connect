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
import { Device } from './device';
import { DeviceTypeExtended } from './deviceTypeExtended';
import { MeasurementSample } from './measurementSample';

export class ResponseDataLoggerSetupStep2 {
    'deviceTypes': Array<DeviceTypeExtended>;
    'devices': Array<Device>;
    'sample'?: MeasurementSample;
    /**
    * Sample Value
    */
    'errorCount': number;
    'errors'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "deviceTypes",
            "baseName": "deviceTypes",
            "type": "Array<DeviceTypeExtended>"
        },
        {
            "name": "devices",
            "baseName": "devices",
            "type": "Array<Device>"
        },
        {
            "name": "sample",
            "baseName": "sample",
            "type": "MeasurementSample"
        },
        {
            "name": "errorCount",
            "baseName": "errorCount",
            "type": "number"
        },
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return ResponseDataLoggerSetupStep2.attributeTypeMap;
    }
}

