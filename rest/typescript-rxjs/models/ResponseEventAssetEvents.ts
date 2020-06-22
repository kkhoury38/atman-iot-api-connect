// tslint:disable
/**
 * Atman IoT
 * Atman IoT Server
 *
 * The version of the OpenAPI document: 0.2.3
 * Contact: k.khoury@k-ren.gr
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
    Event,
    EventRelatedDevice,
} from './';

/**
 * @export
 * @interface ResponseEventAssetEvents
 */
export interface ResponseEventAssetEvents {
    /**
     * @type {Event}
     * @memberof ResponseEventAssetEvents
     */
    event: Event;
    /**
     * @type {Array<EventRelatedDevice>}
     * @memberof ResponseEventAssetEvents
     */
    eventRelatedDevice: Array<EventRelatedDevice>;
}
