// tslint:disable
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

/**
 * (Schema options: { exclude: [ \'fileFormat\' ] })
 * @export
 * @interface RequestDataLoggerSetupCsv2DataHeaderLocationKeysStrArray
 */
export interface RequestDataLoggerSetupCsv2DataHeaderLocationKeysStrArray {
    /**
     * First row containing parent
     * @type {number}
     * @memberof RequestDataLoggerSetupCsv2DataHeaderLocationKeysStrArray
     */
    firstItemRow: number;
    /**
     * Flag to enable setting parent manually
     * @type {boolean}
     * @memberof RequestDataLoggerSetupCsv2DataHeaderLocationKeysStrArray
     */
    setManually?: boolean;
    /**
     * @type {Array<string>}
     * @memberof RequestDataLoggerSetupCsv2DataHeaderLocationKeysStrArray
     */
    manualValue?: Array<string>;
}
