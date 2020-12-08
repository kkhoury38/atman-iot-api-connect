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
import RequestDataLoggerSetupXml2SearchStringStructure from './RequestDataLoggerSetupXml2SearchStringStructure';

/**
 * The RequestDataLoggerSetupXml2ExcludingFileFormat model module.
 * @module model/RequestDataLoggerSetupXml2ExcludingFileFormat
 * @version 3.0.1
 */
class RequestDataLoggerSetupXml2ExcludingFileFormat {
    /**
     * Constructs a new <code>RequestDataLoggerSetupXml2ExcludingFileFormat</code>.
     * (Schema options: { exclude: [ &#39;fileFormat&#39; ] })
     * @alias module:model/RequestDataLoggerSetupXml2ExcludingFileFormat
     * @param objectListKey {String} XML key of list containing the the measurements
     * @param model {module:model/RequestDataLoggerSetupXml2SearchStringStructure} 
     * @param serialNo {module:model/RequestDataLoggerSetupXml2SearchStringStructure} 
     * @param channelName {module:model/RequestDataLoggerSetupXml2SearchStringStructure} 
     * @param channelUnit {module:model/RequestDataLoggerSetupXml2SearchStringStructure} 
     * @param value {module:model/RequestDataLoggerSetupXml2SearchStringStructure} 
     * @param period {module:model/RequestDataLoggerSetupXml2SearchStringStructure} 
     * @param timestamp {module:model/RequestDataLoggerSetupXml2SearchStringStructure} 
     * @param confirm {Boolean} Provided Configuration Confirmation. Set to true to save current configuration
     */
    constructor(objectListKey, model, serialNo, channelName, channelUnit, value, period, timestamp, confirm) { 
        
        RequestDataLoggerSetupXml2ExcludingFileFormat.initialize(this, objectListKey, model, serialNo, channelName, channelUnit, value, period, timestamp, confirm);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, objectListKey, model, serialNo, channelName, channelUnit, value, period, timestamp, confirm) { 
        obj['objectListKey'] = objectListKey;
        obj['model'] = model;
        obj['serialNo'] = serialNo;
        obj['channelName'] = channelName;
        obj['channelUnit'] = channelUnit;
        obj['value'] = value;
        obj['period'] = period;
        obj['timestamp'] = timestamp;
        obj['confirm'] = confirm;
    }

    /**
     * Constructs a <code>RequestDataLoggerSetupXml2ExcludingFileFormat</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RequestDataLoggerSetupXml2ExcludingFileFormat} obj Optional instance to populate.
     * @return {module:model/RequestDataLoggerSetupXml2ExcludingFileFormat} The populated <code>RequestDataLoggerSetupXml2ExcludingFileFormat</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RequestDataLoggerSetupXml2ExcludingFileFormat();

            if (data.hasOwnProperty('objectListKey')) {
                obj['objectListKey'] = ApiClient.convertToType(data['objectListKey'], 'String');
            }
            if (data.hasOwnProperty('model')) {
                obj['model'] = RequestDataLoggerSetupXml2SearchStringStructure.constructFromObject(data['model']);
            }
            if (data.hasOwnProperty('serialNo')) {
                obj['serialNo'] = RequestDataLoggerSetupXml2SearchStringStructure.constructFromObject(data['serialNo']);
            }
            if (data.hasOwnProperty('channelName')) {
                obj['channelName'] = RequestDataLoggerSetupXml2SearchStringStructure.constructFromObject(data['channelName']);
            }
            if (data.hasOwnProperty('channelUnit')) {
                obj['channelUnit'] = RequestDataLoggerSetupXml2SearchStringStructure.constructFromObject(data['channelUnit']);
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = RequestDataLoggerSetupXml2SearchStringStructure.constructFromObject(data['value']);
            }
            if (data.hasOwnProperty('period')) {
                obj['period'] = RequestDataLoggerSetupXml2SearchStringStructure.constructFromObject(data['period']);
            }
            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = RequestDataLoggerSetupXml2SearchStringStructure.constructFromObject(data['timestamp']);
            }
            if (data.hasOwnProperty('confirm')) {
                obj['confirm'] = ApiClient.convertToType(data['confirm'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * XML key of list containing the the measurements
 * @member {String} objectListKey
 */
RequestDataLoggerSetupXml2ExcludingFileFormat.prototype['objectListKey'] = undefined;

/**
 * @member {module:model/RequestDataLoggerSetupXml2SearchStringStructure} model
 */
RequestDataLoggerSetupXml2ExcludingFileFormat.prototype['model'] = undefined;

/**
 * @member {module:model/RequestDataLoggerSetupXml2SearchStringStructure} serialNo
 */
RequestDataLoggerSetupXml2ExcludingFileFormat.prototype['serialNo'] = undefined;

/**
 * @member {module:model/RequestDataLoggerSetupXml2SearchStringStructure} channelName
 */
RequestDataLoggerSetupXml2ExcludingFileFormat.prototype['channelName'] = undefined;

/**
 * @member {module:model/RequestDataLoggerSetupXml2SearchStringStructure} channelUnit
 */
RequestDataLoggerSetupXml2ExcludingFileFormat.prototype['channelUnit'] = undefined;

/**
 * @member {module:model/RequestDataLoggerSetupXml2SearchStringStructure} value
 */
RequestDataLoggerSetupXml2ExcludingFileFormat.prototype['value'] = undefined;

/**
 * @member {module:model/RequestDataLoggerSetupXml2SearchStringStructure} period
 */
RequestDataLoggerSetupXml2ExcludingFileFormat.prototype['period'] = undefined;

/**
 * @member {module:model/RequestDataLoggerSetupXml2SearchStringStructure} timestamp
 */
RequestDataLoggerSetupXml2ExcludingFileFormat.prototype['timestamp'] = undefined;

/**
 * Provided Configuration Confirmation. Set to true to save current configuration
 * @member {Boolean} confirm
 */
RequestDataLoggerSetupXml2ExcludingFileFormat.prototype['confirm'] = undefined;






export default RequestDataLoggerSetupXml2ExcludingFileFormat;

