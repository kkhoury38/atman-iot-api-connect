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
 * @interface DataText
 */
export interface DataText {
    /**
     * Automatically generated ID
     * @type {number}
     * @memberof DataText
     */
    id?: number;
    /**
     * Recording period - seconds
     * @type {number}
     * @memberof DataText
     */
    period: number;
    /**
     * Recorded data
     * @type {string}
     * @memberof DataText
     */
    measurement: string;
    /**
     * Timestamp
     * @type {string}
     * @memberof DataText
     */
    timestamp: string;
    /**
     * ID of Channel that DataFloat belongs to
     * @type {number}
     * @memberof DataText
     */
    channelId: number;
}
