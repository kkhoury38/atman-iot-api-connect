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
import DashboardElement from './DashboardElement';

/**
 * The DashboardElementWithScope model module.
 * @module model/DashboardElementWithScope
 * @version 3.0.1
 */
class DashboardElementWithScope {
    /**
     * Constructs a new <code>DashboardElementWithScope</code>.
     * @alias module:model/DashboardElementWithScope
     * @param dashboardElement {module:model/DashboardElement} 
     * @param scope {Array.<Object>} 
     */
    constructor(dashboardElement, scope) { 
        
        DashboardElementWithScope.initialize(this, dashboardElement, scope);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, dashboardElement, scope) { 
        obj['dashboardElement'] = dashboardElement;
        obj['scope'] = scope;
    }

    /**
     * Constructs a <code>DashboardElementWithScope</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DashboardElementWithScope} obj Optional instance to populate.
     * @return {module:model/DashboardElementWithScope} The populated <code>DashboardElementWithScope</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DashboardElementWithScope();

            if (data.hasOwnProperty('dashboardElement')) {
                obj['dashboardElement'] = DashboardElement.constructFromObject(data['dashboardElement']);
            }
            if (data.hasOwnProperty('scope')) {
                obj['scope'] = ApiClient.convertToType(data['scope'], [Object]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/DashboardElement} dashboardElement
 */
DashboardElementWithScope.prototype['dashboardElement'] = undefined;

/**
 * @member {Array.<Object>} scope
 */
DashboardElementWithScope.prototype['scope'] = undefined;






export default DashboardElementWithScope;

