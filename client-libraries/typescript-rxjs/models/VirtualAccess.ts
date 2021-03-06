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
 * @interface VirtualAccess
 */
export interface VirtualAccess {
    /**
     * Automatically generated ID
     * @type {number}
     * @memberof VirtualAccess
     */
    id?: number;
    /**
     * ID of VirtualRelation
     * @type {number}
     * @memberof VirtualAccess
     */
    virtualRelationId: number;
    /**
     * ID of Asset associated with VirtualRelation
     * @type {number}
     * @memberof VirtualAccess
     */
    assetId: number;
}
