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

import * as models from './models';

/**
 * (Schema options: { exclude: [ \'fileFormat\' ] })
 */
export interface RequestDataLoggerSetupCsv2DataHeaderLocation {
    /**
     * First column of header
     */
    firstItemCol: number;

    /**
     * Relevant row location of next item
     */
    nextItemIteration: number;

    model: models.RequestDataLoggerSetupCsv2DataHeaderLocationKeysArray;

    serialNo: models.RequestDataLoggerSetupCsv2DataHeaderLocationKeysArray;

    channelName: models.RequestDataLoggerSetupCsv2DataHeaderLocationKeysStrArray;

    channelUnit: models.RequestDataLoggerSetupCsv2DataHeaderLocationKeysStrArray;

    period: models.RequestDataLoggerSetupCsv2DataHeaderLocationKeysNumber;

}
