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

import {
    RequestDataLoggerSetupCsv2DataHeaderLocationKeysArray,
    RequestDataLoggerSetupCsv2DataHeaderLocationKeysNumber,
    RequestDataLoggerSetupCsv2DataHeaderLocationKeysStrArray,
} from './';

/**
 * (Schema options: { exclude: [ \'fileFormat\' ] })
 * @export
 * @interface RequestDataLoggerSetupCsv2DataHeaderLocation
 */
export interface RequestDataLoggerSetupCsv2DataHeaderLocation {
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
     * @type {RequestDataLoggerSetupCsv2DataHeaderLocationKeysArray}
     * @memberof RequestDataLoggerSetupCsv2DataHeaderLocation
     */
    model: RequestDataLoggerSetupCsv2DataHeaderLocationKeysArray;
    /**
     * @type {RequestDataLoggerSetupCsv2DataHeaderLocationKeysArray}
     * @memberof RequestDataLoggerSetupCsv2DataHeaderLocation
     */
    serialNo: RequestDataLoggerSetupCsv2DataHeaderLocationKeysArray;
    /**
     * @type {RequestDataLoggerSetupCsv2DataHeaderLocationKeysStrArray}
     * @memberof RequestDataLoggerSetupCsv2DataHeaderLocation
     */
    channelName: RequestDataLoggerSetupCsv2DataHeaderLocationKeysStrArray;
    /**
     * @type {RequestDataLoggerSetupCsv2DataHeaderLocationKeysStrArray}
     * @memberof RequestDataLoggerSetupCsv2DataHeaderLocation
     */
    channelUnit: RequestDataLoggerSetupCsv2DataHeaderLocationKeysStrArray;
    /**
     * @type {RequestDataLoggerSetupCsv2DataHeaderLocationKeysNumber}
     * @memberof RequestDataLoggerSetupCsv2DataHeaderLocation
     */
    period: RequestDataLoggerSetupCsv2DataHeaderLocationKeysNumber;
}
