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

import {
    RequestDataLoggerSetupXml2SearchStringStructure,
} from './';

/**
 * (Schema options: { exclude: [ \'fileFormat\' ] })
 * @export
 * @interface RequestDataLoggerSetupXml2ExcludingFileFormat
 */
export interface RequestDataLoggerSetupXml2ExcludingFileFormat {
    /**
     * XML key of list containing the the measurements
     * @type {string}
     * @memberof RequestDataLoggerSetupXml2ExcludingFileFormat
     */
    objectListKey: string;
    /**
     * @type {RequestDataLoggerSetupXml2SearchStringStructure}
     * @memberof RequestDataLoggerSetupXml2ExcludingFileFormat
     */
    model: RequestDataLoggerSetupXml2SearchStringStructure;
    /**
     * @type {RequestDataLoggerSetupXml2SearchStringStructure}
     * @memberof RequestDataLoggerSetupXml2ExcludingFileFormat
     */
    serialNo: RequestDataLoggerSetupXml2SearchStringStructure;
    /**
     * @type {RequestDataLoggerSetupXml2SearchStringStructure}
     * @memberof RequestDataLoggerSetupXml2ExcludingFileFormat
     */
    channelName: RequestDataLoggerSetupXml2SearchStringStructure;
    /**
     * @type {RequestDataLoggerSetupXml2SearchStringStructure}
     * @memberof RequestDataLoggerSetupXml2ExcludingFileFormat
     */
    channelUnit: RequestDataLoggerSetupXml2SearchStringStructure;
    /**
     * @type {RequestDataLoggerSetupXml2SearchStringStructure}
     * @memberof RequestDataLoggerSetupXml2ExcludingFileFormat
     */
    value: RequestDataLoggerSetupXml2SearchStringStructure;
    /**
     * @type {RequestDataLoggerSetupXml2SearchStringStructure}
     * @memberof RequestDataLoggerSetupXml2ExcludingFileFormat
     */
    period: RequestDataLoggerSetupXml2SearchStringStructure;
    /**
     * @type {RequestDataLoggerSetupXml2SearchStringStructure}
     * @memberof RequestDataLoggerSetupXml2ExcludingFileFormat
     */
    timestamp: RequestDataLoggerSetupXml2SearchStringStructure;
    /**
     * Provided Configuration Confirmation. Set to true to save current configuration
     * @type {boolean}
     * @memberof RequestDataLoggerSetupXml2ExcludingFileFormat
     */
    confirm: boolean;
}
