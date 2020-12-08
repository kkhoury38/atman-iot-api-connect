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
 * (Schema options: { title: \'NewDashboardElement\', exclude: [ \'id\', \'position\' ] })
 * @export
 * @interface NewDashboardElement
 */
export interface NewDashboardElement {
    /**
     * ID of Asset that Dashboard Element belongs to
     * @type {number}
     * @memberof NewDashboardElement
     */
    assetId: number;
    /**
     * ID of User that Dashboard Element belongs to
     * @type {number}
     * @memberof NewDashboardElement
     */
    userId: number;
    /**
     * Device Category
     * @type {string}
     * @memberof NewDashboardElement
     */
    deviceCategory: string;
    /**
     * Channel Category
     * @type {string}
     * @memberof NewDashboardElement
     */
    channelCategory: string;
    /**
     * Element Type
     * @type {string}
     * @memberof NewDashboardElement
     */
    elementType: string;
    /**
     * Element Location: mainDashboard / assetDashboard
     * @type {string}
     * @memberof NewDashboardElement
     */
    location: string;
    /**
     * Time Window
     * @type {number}
     * @memberof NewDashboardElement
     */
    timeWindow: number;
    /**
     * Data Operation
     * @type {string}
     * @memberof NewDashboardElement
     */
    operation: string;
    /**
     * Data group by
     * @type {string}
     * @memberof NewDashboardElement
     */
    groupBy: string;
    /**
     * Element Title
     * @type {string}
     * @memberof NewDashboardElement
     */
    title?: string;
    /**
     * Element X Label
     * @type {string}
     * @memberof NewDashboardElement
     */
    xLabel?: string;
    /**
     * Element Y Label
     * @type {string}
     * @memberof NewDashboardElement
     */
    yLabel?: string;
}
