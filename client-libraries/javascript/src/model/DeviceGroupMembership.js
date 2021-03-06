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
 * The DeviceGroupMembership model module.
 * @module model/DeviceGroupMembership
 * @version 3.0.1
 */
class DeviceGroupMembership {
    /**
     * Constructs a new <code>DeviceGroupMembership</code>.
     * @alias module:model/DeviceGroupMembership
     * @param assetId {Number} ID of Device associated with Asset
     * @param deviceId {Number} ID of Device associated with Asset
     */
    constructor(assetId, deviceId) { 
        
        DeviceGroupMembership.initialize(this, assetId, deviceId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, assetId, deviceId) { 
        obj['assetId'] = assetId;
        obj['deviceId'] = deviceId;
    }

    /**
     * Constructs a <code>DeviceGroupMembership</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeviceGroupMembership} obj Optional instance to populate.
     * @return {module:model/DeviceGroupMembership} The populated <code>DeviceGroupMembership</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeviceGroupMembership();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('assetId')) {
                obj['assetId'] = ApiClient.convertToType(data['assetId'], 'Number');
            }
            if (data.hasOwnProperty('deviceId')) {
                obj['deviceId'] = ApiClient.convertToType(data['deviceId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Automatically generated ID
 * @member {Number} id
 */
DeviceGroupMembership.prototype['id'] = undefined;

/**
 * ID of Device associated with Asset
 * @member {Number} assetId
 */
DeviceGroupMembership.prototype['assetId'] = undefined;

/**
 * ID of Device associated with Asset
 * @member {Number} deviceId
 */
DeviceGroupMembership.prototype['deviceId'] = undefined;






export default DeviceGroupMembership;

