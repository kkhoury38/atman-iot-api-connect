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
    RequestDataLoggerSetupXml2SearchStringStructure,
} from './';

/**
 * @export
 * @interface RequestDataLoggerSetupXml2
 */
export interface RequestDataLoggerSetupXml2 {
    /**
     * XML key of list containing the the measurements
     * @type {string}
     * @memberof RequestDataLoggerSetupXml2
     */
    objectListKey: string;
    /**
     * @type {RequestDataLoggerSetupXml2SearchStringStructure}
     * @memberof RequestDataLoggerSetupXml2
     */
    model: RequestDataLoggerSetupXml2SearchStringStructure;
    /**
     * @type {RequestDataLoggerSetupXml2SearchStringStructure}
     * @memberof RequestDataLoggerSetupXml2
     */
    serialNo: RequestDataLoggerSetupXml2SearchStringStructure;
    /**
     * @type {RequestDataLoggerSetupXml2SearchStringStructure}
     * @memberof RequestDataLoggerSetupXml2
     */
    channelName: RequestDataLoggerSetupXml2SearchStringStructure;
    /**
     * @type {RequestDataLoggerSetupXml2SearchStringStructure}
     * @memberof RequestDataLoggerSetupXml2
     */
    channelUnit: RequestDataLoggerSetupXml2SearchStringStructure;
    /**
     * @type {RequestDataLoggerSetupXml2SearchStringStructure}
     * @memberof RequestDataLoggerSetupXml2
     */
    value: RequestDataLoggerSetupXml2SearchStringStructure;
    /**
     * @type {RequestDataLoggerSetupXml2SearchStringStructure}
     * @memberof RequestDataLoggerSetupXml2
     */
    period: RequestDataLoggerSetupXml2SearchStringStructure;
    /**
     * @type {RequestDataLoggerSetupXml2SearchStringStructure}
     * @memberof RequestDataLoggerSetupXml2
     */
    timestamp: RequestDataLoggerSetupXml2SearchStringStructure;
    /**
     * Provided Configuration Confirmation. Set to true to save current configuration
     * @type {boolean}
     * @memberof RequestDataLoggerSetupXml2
     */
    confirm: boolean;
    /**
     * Data File Format
     * @type {string}
     * @memberof RequestDataLoggerSetupXml2
     */
    fileFormat: string;
}