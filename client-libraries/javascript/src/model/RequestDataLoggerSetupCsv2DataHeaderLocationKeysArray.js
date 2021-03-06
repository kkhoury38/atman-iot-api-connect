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

/**
 * The RequestDataLoggerSetupCsv2DataHeaderLocationKeysArray model module.
 * @module model/RequestDataLoggerSetupCsv2DataHeaderLocationKeysArray
 * @version 3.0.1
 */
class RequestDataLoggerSetupCsv2DataHeaderLocationKeysArray {
    /**
     * Constructs a new <code>RequestDataLoggerSetupCsv2DataHeaderLocationKeysArray</code>.
     * (Schema options: { exclude: [ &#39;fileFormat&#39; ] })
     * @alias module:model/RequestDataLoggerSetupCsv2DataHeaderLocationKeysArray
     * @param firstItemRow {Number} First row containing parent
     */
    constructor(firstItemRow) { 
        
        RequestDataLoggerSetupCsv2DataHeaderLocationKeysArray.initialize(this, firstItemRow);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, firstItemRow) { 
        obj['firstItemRow'] = firstItemRow;
    }

    /**
     * Constructs a <code>RequestDataLoggerSetupCsv2DataHeaderLocationKeysArray</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RequestDataLoggerSetupCsv2DataHeaderLocationKeysArray} obj Optional instance to populate.
     * @return {module:model/RequestDataLoggerSetupCsv2DataHeaderLocationKeysArray} The populated <code>RequestDataLoggerSetupCsv2DataHeaderLocationKeysArray</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RequestDataLoggerSetupCsv2DataHeaderLocationKeysArray();

            if (data.hasOwnProperty('firstItemRow')) {
                obj['firstItemRow'] = ApiClient.convertToType(data['firstItemRow'], 'Number');
            }
            if (data.hasOwnProperty('setManually')) {
                obj['setManually'] = ApiClient.convertToType(data['setManually'], 'Boolean');
            }
            if (data.hasOwnProperty('manualValue')) {
                obj['manualValue'] = ApiClient.convertToType(data['manualValue'], 'String');
            }
        }
        return obj;
    }


}

/**
 * First row containing parent
 * @member {Number} firstItemRow
 */
RequestDataLoggerSetupCsv2DataHeaderLocationKeysArray.prototype['firstItemRow'] = undefined;

/**
 * Flag to enable setting parent manually
 * @member {Boolean} setManually
 */
RequestDataLoggerSetupCsv2DataHeaderLocationKeysArray.prototype['setManually'] = undefined;

/**
 * Manual value for parent (string)
 * @member {String} manualValue
 */
RequestDataLoggerSetupCsv2DataHeaderLocationKeysArray.prototype['manualValue'] = undefined;






export default RequestDataLoggerSetupCsv2DataHeaderLocationKeysArray;

