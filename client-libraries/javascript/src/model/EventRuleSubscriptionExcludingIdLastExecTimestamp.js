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
 * The EventRuleSubscriptionExcludingIdLastExecTimestamp model module.
 * @module model/EventRuleSubscriptionExcludingIdLastExecTimestamp
 * @version 3.0.1
 */
class EventRuleSubscriptionExcludingIdLastExecTimestamp {
    /**
     * Constructs a new <code>EventRuleSubscriptionExcludingIdLastExecTimestamp</code>.
     * (Schema options: { exclude: [ &#39;id&#39;, &#39;lastExecTimestamp&#39; ] })
     * @alias module:model/EventRuleSubscriptionExcludingIdLastExecTimestamp
     * @param executionPeriod {Number} EventRule execution period - seconds
     * @param assetId {Number} ID of Asset subscribed to EventRule
     * @param eventRuleId {Number} ID of associated EventRule
     * @param ruleActivated {Boolean} Is set to true when EventRule has been activated
     */
    constructor(executionPeriod, assetId, eventRuleId, ruleActivated) { 
        
        EventRuleSubscriptionExcludingIdLastExecTimestamp.initialize(this, executionPeriod, assetId, eventRuleId, ruleActivated);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, executionPeriod, assetId, eventRuleId, ruleActivated) { 
        obj['executionPeriod'] = executionPeriod;
        obj['assetId'] = assetId;
        obj['eventRuleId'] = eventRuleId;
        obj['ruleActivated'] = ruleActivated;
    }

    /**
     * Constructs a <code>EventRuleSubscriptionExcludingIdLastExecTimestamp</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EventRuleSubscriptionExcludingIdLastExecTimestamp} obj Optional instance to populate.
     * @return {module:model/EventRuleSubscriptionExcludingIdLastExecTimestamp} The populated <code>EventRuleSubscriptionExcludingIdLastExecTimestamp</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EventRuleSubscriptionExcludingIdLastExecTimestamp();

            if (data.hasOwnProperty('executionPeriod')) {
                obj['executionPeriod'] = ApiClient.convertToType(data['executionPeriod'], 'Number');
            }
            if (data.hasOwnProperty('assetId')) {
                obj['assetId'] = ApiClient.convertToType(data['assetId'], 'Number');
            }
            if (data.hasOwnProperty('eventRuleId')) {
                obj['eventRuleId'] = ApiClient.convertToType(data['eventRuleId'], 'Number');
            }
            if (data.hasOwnProperty('ruleActivated')) {
                obj['ruleActivated'] = ApiClient.convertToType(data['ruleActivated'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * EventRule execution period - seconds
 * @member {Number} executionPeriod
 */
EventRuleSubscriptionExcludingIdLastExecTimestamp.prototype['executionPeriod'] = undefined;

/**
 * ID of Asset subscribed to EventRule
 * @member {Number} assetId
 */
EventRuleSubscriptionExcludingIdLastExecTimestamp.prototype['assetId'] = undefined;

/**
 * ID of associated EventRule
 * @member {Number} eventRuleId
 */
EventRuleSubscriptionExcludingIdLastExecTimestamp.prototype['eventRuleId'] = undefined;

/**
 * Is set to true when EventRule has been activated
 * @member {Boolean} ruleActivated
 */
EventRuleSubscriptionExcludingIdLastExecTimestamp.prototype['ruleActivated'] = undefined;






export default EventRuleSubscriptionExcludingIdLastExecTimestamp;

