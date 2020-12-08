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
 *
 */

import ApiClient from '../ApiClient';
import RequestDataLoggerSetupCsv2Data from './RequestDataLoggerSetupCsv2Data';
import RequestDataLoggerSetupCsv2TimeData from './RequestDataLoggerSetupCsv2TimeData';

/**
 * The RequestDataLoggerSetupCsv2 model module.
 * @module model/RequestDataLoggerSetupCsv2
 * @version 3.0.1
 */
class RequestDataLoggerSetupCsv2 {
    /**
     * Constructs a new <code>RequestDataLoggerSetupCsv2</code>.
     * @alias module:model/RequestDataLoggerSetupCsv2
     * @param delimiter {String} Delimiter used in CSV file
     * @param decimalPoint {String} Decimal Point of values in CSV file
     * @param timeData {module:model/RequestDataLoggerSetupCsv2TimeData} 
     * @param data {module:model/RequestDataLoggerSetupCsv2Data} 
     * @param confirm {Boolean} Provided Configuration Confirmation. Set to true to save current configuration
     * @param fileFormat {String} Data File Format
     */
    constructor(delimiter, decimalPoint, timeData, data, confirm, fileFormat) { 
        
        RequestDataLoggerSetupCsv2.initialize(this, delimiter, decimalPoint, timeData, data, confirm, fileFormat);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, delimiter, decimalPoint, timeData, data, confirm, fileFormat) { 
        obj['delimiter'] = delimiter;
        obj['decimalPoint'] = decimalPoint;
        obj['timeData'] = timeData;
        obj['data'] = data;
        obj['confirm'] = confirm;
        obj['fileFormat'] = fileFormat;
    }

    /**
     * Constructs a <code>RequestDataLoggerSetupCsv2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RequestDataLoggerSetupCsv2} obj Optional instance to populate.
     * @return {module:model/RequestDataLoggerSetupCsv2} The populated <code>RequestDataLoggerSetupCsv2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RequestDataLoggerSetupCsv2();

            if (data.hasOwnProperty('delimiter')) {
                obj['delimiter'] = ApiClient.convertToType(data['delimiter'], 'String');
            }
            if (data.hasOwnProperty('decimalPoint')) {
                obj['decimalPoint'] = ApiClient.convertToType(data['decimalPoint'], 'String');
            }
            if (data.hasOwnProperty('timeData')) {
                obj['timeData'] = RequestDataLoggerSetupCsv2TimeData.constructFromObject(data['timeData']);
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = RequestDataLoggerSetupCsv2Data.constructFromObject(data['data']);
            }
            if (data.hasOwnProperty('confirm')) {
                obj['confirm'] = ApiClient.convertToType(data['confirm'], 'Boolean');
            }
            if (data.hasOwnProperty('fileFormat')) {
                obj['fileFormat'] = ApiClient.convertToType(data['fileFormat'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Delimiter used in CSV file
 * @member {String} delimiter
 */
RequestDataLoggerSetupCsv2.prototype['delimiter'] = undefined;

/**
 * Decimal Point of values in CSV file
 * @member {String} decimalPoint
 */
RequestDataLoggerSetupCsv2.prototype['decimalPoint'] = undefined;

/**
 * @member {module:model/RequestDataLoggerSetupCsv2TimeData} timeData
 */
RequestDataLoggerSetupCsv2.prototype['timeData'] = undefined;

/**
 * @member {module:model/RequestDataLoggerSetupCsv2Data} data
 */
RequestDataLoggerSetupCsv2.prototype['data'] = undefined;

/**
 * Provided Configuration Confirmation. Set to true to save current configuration
 * @member {Boolean} confirm
 */
RequestDataLoggerSetupCsv2.prototype['confirm'] = undefined;

/**
 * Data File Format
 * @member {String} fileFormat
 */
RequestDataLoggerSetupCsv2.prototype['fileFormat'] = undefined;






export default RequestDataLoggerSetupCsv2;

