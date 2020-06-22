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
    RequestDataLoggerSetupCsv2DataHeaderLocationKeysArray,
    RequestDataLoggerSetupCsv2DataHeaderLocationKeysArrayFromJSON,
    RequestDataLoggerSetupCsv2DataHeaderLocationKeysArrayToJSON,
    RequestDataLoggerSetupCsv2DataHeaderLocationKeysNumber,
    RequestDataLoggerSetupCsv2DataHeaderLocationKeysNumberFromJSON,
    RequestDataLoggerSetupCsv2DataHeaderLocationKeysNumberToJSON,
    RequestDataLoggerSetupCsv2DataHeaderLocationKeysStrArray,
    RequestDataLoggerSetupCsv2DataHeaderLocationKeysStrArrayFromJSON,
    RequestDataLoggerSetupCsv2DataHeaderLocationKeysStrArrayToJSON,
} from './';

/**
 * (Schema options: { exclude: [ \'fileFormat\' ] })
 * @export
 * @interface RequestDataLoggerSetupCsv2DataHeaderLocation
 */
export interface RequestDataLoggerSetupCsv2DataHeaderLocation  {
    /**
     * First column of header
     * @type {number}
     * @memberof RequestDataLoggerSetupCsv2DataHeaderLocation
     */
    firstItemCol: number;
    /**
     * Relevant row location of next item
     * @type {number}
     * @memberof RequestDataLoggerSetupCsv2DataHeaderLocation
     */
    nextItemIteration: number;
    /**
     * 
     * @type {RequestDataLoggerSetupCsv2DataHeaderLocationKeysArray}
     * @memberof RequestDataLoggerSetupCsv2DataHeaderLocation
     */
    model: RequestDataLoggerSetupCsv2DataHeaderLocationKeysArray;
    /**
     * 
     * @type {RequestDataLoggerSetupCsv2DataHeaderLocationKeysArray}
     * @memberof RequestDataLoggerSetupCsv2DataHeaderLocation
     */
    serialNo: RequestDataLoggerSetupCsv2DataHeaderLocationKeysArray;
    /**
     * 
     * @type {RequestDataLoggerSetupCsv2DataHeaderLocationKeysStrArray}
     * @memberof RequestDataLoggerSetupCsv2DataHeaderLocation
     */
    channelName: RequestDataLoggerSetupCsv2DataHeaderLocationKeysStrArray;
    /**
     * 
     * @type {RequestDataLoggerSetupCsv2DataHeaderLocationKeysStrArray}
     * @memberof RequestDataLoggerSetupCsv2DataHeaderLocation
     */
    channelUnit: RequestDataLoggerSetupCsv2DataHeaderLocationKeysStrArray;
    /**
     * 
     * @type {RequestDataLoggerSetupCsv2DataHeaderLocationKeysNumber}
     * @memberof RequestDataLoggerSetupCsv2DataHeaderLocation
     */
    period: RequestDataLoggerSetupCsv2DataHeaderLocationKeysNumber;
}

export function RequestDataLoggerSetupCsv2DataHeaderLocationFromJSON(json: any): RequestDataLoggerSetupCsv2DataHeaderLocation {
    return {
        'firstItemCol': json['firstItemCol'],
        'nextItemIteration': json['nextItemIteration'],
        'model': RequestDataLoggerSetupCsv2DataHeaderLocationKeysArrayFromJSON(json['model']),
        'serialNo': RequestDataLoggerSetupCsv2DataHeaderLocationKeysArrayFromJSON(json['serialNo']),
        'channelName': RequestDataLoggerSetupCsv2DataHeaderLocationKeysStrArrayFromJSON(json['channelName']),
        'channelUnit': RequestDataLoggerSetupCsv2DataHeaderLocationKeysStrArrayFromJSON(json['channelUnit']),
        'period': RequestDataLoggerSetupCsv2DataHeaderLocationKeysNumberFromJSON(json['period']),
    };
}

export function RequestDataLoggerSetupCsv2DataHeaderLocationToJSON(value?: RequestDataLoggerSetupCsv2DataHeaderLocation): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'firstItemCol': value.firstItemCol,
        'nextItemIteration': value.nextItemIteration,
        'model': RequestDataLoggerSetupCsv2DataHeaderLocationKeysArrayToJSON(value.model),
        'serialNo': RequestDataLoggerSetupCsv2DataHeaderLocationKeysArrayToJSON(value.serialNo),
        'channelName': RequestDataLoggerSetupCsv2DataHeaderLocationKeysStrArrayToJSON(value.channelName),
        'channelUnit': RequestDataLoggerSetupCsv2DataHeaderLocationKeysStrArrayToJSON(value.channelUnit),
        'period': RequestDataLoggerSetupCsv2DataHeaderLocationKeysNumberToJSON(value.period),
    };
}

