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
import { RequestDataLoggerSetupCsv2Data } from './requestDataLoggerSetupCsv2Data';
import { RequestDataLoggerSetupCsv2TimeData } from './requestDataLoggerSetupCsv2TimeData';

/**
* (Schema options: { exclude: [ \'fileFormat\' ] })
*/
export class RequestDataLoggerSetupCsv2ExcludingFileFormat {
    /**
    * Delimiter used in CSV file
    */
    'delimiter': string;
    /**
    * Decimal Point of values in CSV file
    */
    'decimalPoint': string;
    'timeData': RequestDataLoggerSetupCsv2TimeData;
    'data': RequestDataLoggerSetupCsv2Data;
    /**
    * Provided Configuration Confirmation. Set to true to save current configuration
    */
    'confirm': boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "delimiter",
            "baseName": "delimiter",
            "type": "string"
        },
        {
            "name": "decimalPoint",
            "baseName": "decimalPoint",
            "type": "string"
        },
        {
            "name": "timeData",
            "baseName": "timeData",
            "type": "RequestDataLoggerSetupCsv2TimeData"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "RequestDataLoggerSetupCsv2Data"
        },
        {
            "name": "confirm",
            "baseName": "confirm",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return RequestDataLoggerSetupCsv2ExcludingFileFormat.attributeTypeMap;
    }
}

