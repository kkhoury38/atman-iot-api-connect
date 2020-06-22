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
import { RequestDataLoggerSetupCsv2Data } from './requestDataLoggerSetupCsv2Data';
import { RequestDataLoggerSetupCsv2TimeData } from './requestDataLoggerSetupCsv2TimeData';


/**
 * (Schema options: { exclude: [ \'fileFormat\' ] })
 */
export interface RequestDataLoggerSetupCsv2ExcludingFileFormat { 
    /**
     * Delimiter used in CSV file
     */
    delimiter: string;
    /**
     * Decimal Point of values in CSV file
     */
    decimalPoint: string;
    timeData: RequestDataLoggerSetupCsv2TimeData;
    data: RequestDataLoggerSetupCsv2Data;
    /**
     * Provided Configuration Confirmation. Set to true to save current configuration
     */
    confirm: boolean;
}

