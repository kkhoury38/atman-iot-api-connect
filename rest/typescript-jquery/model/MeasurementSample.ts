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

import * as models from './models';

export interface MeasurementSample {
    /**
     * measurement: string / number
     */
    value: object;

    period: number;

    timestamp: models.Timestamp;

    /**
     * Scope
     */
    scope: string;

}
