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

/**
 * @export
 * @interface EventRule
 */
export interface EventRule {
    /**
     * Automatically generated ID
     * @type {number}
     * @memberof EventRule
     */
    id?: number;
    /**
     * Rule description
     * @type {string}
     * @memberof EventRule
     */
    description?: string;
    /**
     * Rule scope
     * @type {string}
     * @memberof EventRule
     */
    scope: string;
    /**
     * Rule action
     * @type {string}
     * @memberof EventRule
     */
    action: string;
    /**
     * Rule action parameters
     * @type {string}
     * @memberof EventRule
     */
    actionParameters?: string;
}