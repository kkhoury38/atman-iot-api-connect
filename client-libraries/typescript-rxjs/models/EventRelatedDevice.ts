// tslint:disable
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
 */

/**
 * @export
 * @interface EventRelatedDevice
 */
export interface EventRelatedDevice {
    /**
     * Automatically generated ID
     * @type {number}
     * @memberof EventRelatedDevice
     */
    id?: number;
    /**
     * ID of Device associated with Event
     * @type {number}
     * @memberof EventRelatedDevice
     */
    deviceId: number;
    /**
     * ID of Event
     * @type {number}
     * @memberof EventRelatedDevice
     */
    eventId: number;
}
