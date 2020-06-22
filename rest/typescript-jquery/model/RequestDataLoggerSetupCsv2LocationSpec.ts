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

import * as models from './models';

/**
 * (Schema options: { exclude: [ \'fileFormat\' ] })
 */
export interface RequestDataLoggerSetupCsv2LocationSpec {
    /**
     * Row containing parent info
     */
    row: number;

    /**
     * Row containing parent info
     */
    column: number;

    /**
     * Flag to enable setting parent manually
     */
    setManually: boolean;

    /**
     * Manual value for parent
     */
    manualValue: string;

}
