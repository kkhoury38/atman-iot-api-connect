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
 * @interface RequestVirtualAccessRight
 */
export interface RequestVirtualAccessRight {
    /**
     * Id of user to grant access to asset
     * @type {number}
     * @memberof RequestVirtualAccessRight
     */
    userId: number;
    /**
     * Id of asset
     * @type {number}
     * @memberof RequestVirtualAccessRight
     */
    assetId?: number;
    /**
     * Id of asset group
     * @type {number}
     * @memberof RequestVirtualAccessRight
     */
    assetGroupId?: number;
}