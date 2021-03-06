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
 * The ChannelTypeExcludingNameDescriptionUnitChannelTypeDeviceTypeId model module.
 * @module model/ChannelTypeExcludingNameDescriptionUnitChannelTypeDeviceTypeId
 * @version 3.0.1
 */
class ChannelTypeExcludingNameDescriptionUnitChannelTypeDeviceTypeId {
    /**
     * Constructs a new <code>ChannelTypeExcludingNameDescriptionUnitChannelTypeDeviceTypeId</code>.
     * (Schema options: { exclude: [ &#39;name&#39;, &#39;description&#39;, &#39;unit&#39;, &#39;channelType&#39;, &#39;deviceTypeId&#39; ] })
     * @alias module:model/ChannelTypeExcludingNameDescriptionUnitChannelTypeDeviceTypeId
     */
    constructor() { 
        
        ChannelTypeExcludingNameDescriptionUnitChannelTypeDeviceTypeId.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ChannelTypeExcludingNameDescriptionUnitChannelTypeDeviceTypeId</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChannelTypeExcludingNameDescriptionUnitChannelTypeDeviceTypeId} obj Optional instance to populate.
     * @return {module:model/ChannelTypeExcludingNameDescriptionUnitChannelTypeDeviceTypeId} The populated <code>ChannelTypeExcludingNameDescriptionUnitChannelTypeDeviceTypeId</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ChannelTypeExcludingNameDescriptionUnitChannelTypeDeviceTypeId();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('category')) {
                obj['category'] = ApiClient.convertToType(data['category'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Automatically generated ID
 * @member {Number} id
 */
ChannelTypeExcludingNameDescriptionUnitChannelTypeDeviceTypeId.prototype['id'] = undefined;

/**
 * ChannelType category
 * @member {String} category
 */
ChannelTypeExcludingNameDescriptionUnitChannelTypeDeviceTypeId.prototype['category'] = undefined;






export default ChannelTypeExcludingNameDescriptionUnitChannelTypeDeviceTypeId;

