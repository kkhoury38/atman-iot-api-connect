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
import Event from './Event';
import EventRelatedDevice from './EventRelatedDevice';

/**
 * The ResponseEventAssetEvents model module.
 * @module model/ResponseEventAssetEvents
 * @version 3.0.1
 */
class ResponseEventAssetEvents {
    /**
     * Constructs a new <code>ResponseEventAssetEvents</code>.
     * @alias module:model/ResponseEventAssetEvents
     * @param event {module:model/Event} 
     * @param eventRelatedDevice {Array.<module:model/EventRelatedDevice>} 
     */
    constructor(event, eventRelatedDevice) { 
        
        ResponseEventAssetEvents.initialize(this, event, eventRelatedDevice);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, event, eventRelatedDevice) { 
        obj['event'] = event;
        obj['eventRelatedDevice'] = eventRelatedDevice;
    }

    /**
     * Constructs a <code>ResponseEventAssetEvents</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResponseEventAssetEvents} obj Optional instance to populate.
     * @return {module:model/ResponseEventAssetEvents} The populated <code>ResponseEventAssetEvents</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ResponseEventAssetEvents();

            if (data.hasOwnProperty('event')) {
                obj['event'] = Event.constructFromObject(data['event']);
            }
            if (data.hasOwnProperty('eventRelatedDevice')) {
                obj['eventRelatedDevice'] = ApiClient.convertToType(data['eventRelatedDevice'], [EventRelatedDevice]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Event} event
 */
ResponseEventAssetEvents.prototype['event'] = undefined;

/**
 * @member {Array.<module:model/EventRelatedDevice>} eventRelatedDevice
 */
ResponseEventAssetEvents.prototype['eventRelatedDevice'] = undefined;






export default ResponseEventAssetEvents;

