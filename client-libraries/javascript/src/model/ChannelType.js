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
 * The ChannelType model module.
 * @module model/ChannelType
 * @version 3.0.1
 */
class ChannelType {
    /**
     * Constructs a new <code>ChannelType</code>.
     * @alias module:model/ChannelType
     * @param name {String} ChannelType name
     * @param channelType {String} Type of data: UNDEFINED / SPOT_VALUE / COUNTER / TEXT
     * @param deviceTypeId {Number} ID of DeviceType that ChannelType belongs to
     */
    constructor(name, channelType, deviceTypeId) { 
        
        ChannelType.initialize(this, name, channelType, deviceTypeId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, channelType, deviceTypeId) { 
        obj['name'] = name;
        obj['channelType'] = channelType;
        obj['deviceTypeId'] = deviceTypeId;
    }

    /**
     * Constructs a <code>ChannelType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChannelType} obj Optional instance to populate.
     * @return {module:model/ChannelType} The populated <code>ChannelType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ChannelType();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('category')) {
                obj['category'] = ApiClient.convertToType(data['category'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('unit')) {
                obj['unit'] = ApiClient.convertToType(data['unit'], 'String');
            }
            if (data.hasOwnProperty('channelType')) {
                obj['channelType'] = ApiClient.convertToType(data['channelType'], 'String');
            }
            if (data.hasOwnProperty('deviceTypeId')) {
                obj['deviceTypeId'] = ApiClient.convertToType(data['deviceTypeId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Automatically generated ID
 * @member {Number} id
 */
ChannelType.prototype['id'] = undefined;

/**
 * ChannelType name
 * @member {String} name
 */
ChannelType.prototype['name'] = undefined;

/**
 * ChannelType category
 * @member {String} category
 */
ChannelType.prototype['category'] = undefined;

/**
 * ChannelType description
 * @member {String} description
 */
ChannelType.prototype['description'] = undefined;

/**
 * Unit of measurement
 * @member {String} unit
 */
ChannelType.prototype['unit'] = undefined;

/**
 * Type of data: UNDEFINED / SPOT_VALUE / COUNTER / TEXT
 * @member {String} channelType
 */
ChannelType.prototype['channelType'] = undefined;

/**
 * ID of DeviceType that ChannelType belongs to
 * @member {Number} deviceTypeId
 */
ChannelType.prototype['deviceTypeId'] = undefined;






export default ChannelType;

