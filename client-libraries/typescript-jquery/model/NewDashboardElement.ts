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

import * as models from './models';

/**
 * (Schema options: { title: \'NewDashboardElement\', exclude: [ \'id\', \'position\' ] })
 */
export interface NewDashboardElement {
    /**
     * ID of Asset that Dashboard Element belongs to
     */
    assetId: number;

    /**
     * ID of User that Dashboard Element belongs to
     */
    userId: number;

    /**
     * Device Category
     */
    deviceCategory: string;

    /**
     * Channel Category
     */
    channelCategory: string;

    /**
     * Element Type
     */
    elementType: string;

    /**
     * Element Location: mainDashboard / assetDashboard
     */
    location: string;

    /**
     * Time Window
     */
    timeWindow: number;

    /**
     * Data Operation
     */
    operation: string;

    /**
     * Data group by
     */
    groupBy: string;

    /**
     * Element Title
     */
    title?: string;

    /**
     * Element X Label
     */
    xLabel?: string;

    /**
     * Element Y Label
     */
    yLabel?: string;

}
