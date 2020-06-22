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
import {
    RequestDataLoggerSetupCsv2Data,
    RequestDataLoggerSetupCsv2DataFromJSON,
    RequestDataLoggerSetupCsv2DataToJSON,
    RequestDataLoggerSetupCsv2TimeData,
    RequestDataLoggerSetupCsv2TimeDataFromJSON,
    RequestDataLoggerSetupCsv2TimeDataToJSON,
} from './';

/**
 * 
 * @export
 * @interface RequestDataLoggerSetupCsv2
 */
export interface RequestDataLoggerSetupCsv2  {
    /**
     * Delimiter used in CSV file
     * @type {string}
     * @memberof RequestDataLoggerSetupCsv2
     */
    delimiter: string;
    /**
     * Decimal Point of values in CSV file
     * @type {string}
     * @memberof RequestDataLoggerSetupCsv2
     */
    decimalPoint: string;
    /**
     * 
     * @type {RequestDataLoggerSetupCsv2TimeData}
     * @memberof RequestDataLoggerSetupCsv2
     */
    timeData: RequestDataLoggerSetupCsv2TimeData;
    /**
     * 
     * @type {RequestDataLoggerSetupCsv2Data}
     * @memberof RequestDataLoggerSetupCsv2
     */
    data: RequestDataLoggerSetupCsv2Data;
    /**
     * Provided Configuration Confirmation. Set to true to save current configuration
     * @type {boolean}
     * @memberof RequestDataLoggerSetupCsv2
     */
    confirm: boolean;
    /**
     * Data File Format
     * @type {string}
     * @memberof RequestDataLoggerSetupCsv2
     */
    fileFormat: string;
}

export function RequestDataLoggerSetupCsv2FromJSON(json: any): RequestDataLoggerSetupCsv2 {
    return {
        'delimiter': json['delimiter'],
        'decimalPoint': json['decimalPoint'],
        'timeData': RequestDataLoggerSetupCsv2TimeDataFromJSON(json['timeData']),
        'data': RequestDataLoggerSetupCsv2DataFromJSON(json['data']),
        'confirm': json['confirm'],
        'fileFormat': json['fileFormat'],
    };
}

export function RequestDataLoggerSetupCsv2ToJSON(value?: RequestDataLoggerSetupCsv2): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'delimiter': value.delimiter,
        'decimalPoint': value.decimalPoint,
        'timeData': RequestDataLoggerSetupCsv2TimeDataToJSON(value.timeData),
        'data': RequestDataLoggerSetupCsv2DataToJSON(value.data),
        'confirm': value.confirm,
        'fileFormat': value.fileFormat,
    };
}

