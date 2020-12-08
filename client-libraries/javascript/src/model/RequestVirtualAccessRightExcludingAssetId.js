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
 * The RequestVirtualAccessRightExcludingAssetId model module.
 * @module model/RequestVirtualAccessRightExcludingAssetId
 * @version 3.0.1
 */
class RequestVirtualAccessRightExcludingAssetId {
    /**
     * Constructs a new <code>RequestVirtualAccessRightExcludingAssetId</code>.
     * (Schema options: { exclude: [ &#39;assetId&#39; ] })
     * @alias module:model/RequestVirtualAccessRightExcludingAssetId
     * @param userId {Number} Id of user to grant access to asset
     */
    constructor(userId) { 
        
        RequestVirtualAccessRightExcludingAssetId.initialize(this, userId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, userId) { 
        obj['userId'] = userId;
    }

    /**
     * Constructs a <code>RequestVirtualAccessRightExcludingAssetId</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RequestVirtualAccessRightExcludingAssetId} obj Optional instance to populate.
     * @return {module:model/RequestVirtualAccessRightExcludingAssetId} The populated <code>RequestVirtualAccessRightExcludingAssetId</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RequestVirtualAccessRightExcludingAssetId();

            if (data.hasOwnProperty('userId')) {
                obj['userId'] = ApiClient.convertToType(data['userId'], 'Number');
            }
            if (data.hasOwnProperty('assetGroupId')) {
                obj['assetGroupId'] = ApiClient.convertToType(data['assetGroupId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Id of user to grant access to asset
 * @member {Number} userId
 */
RequestVirtualAccessRightExcludingAssetId.prototype['userId'] = undefined;

/**
 * Id of asset group
 * @member {Number} assetGroupId
 */
RequestVirtualAccessRightExcludingAssetId.prototype['assetGroupId'] = undefined;






export default RequestVirtualAccessRightExcludingAssetId;

