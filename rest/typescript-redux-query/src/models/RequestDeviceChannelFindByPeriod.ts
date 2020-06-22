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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface RequestDeviceChannelFindByPeriod
 */
export interface RequestDeviceChannelFindByPeriod  {
    /**
     * The period data is requested for. Acceptable values: day / week / month / year
     * @type {string}
     * @memberof RequestDeviceChannelFindByPeriod
     */
    period: string;
    /**
     * Number of periods data is requested for.
     * @type {number}
     * @memberof RequestDeviceChannelFindByPeriod
     */
    depth: number;
    /**
     * Offset, calculated in periodes.
     * @type {number}
     * @memberof RequestDeviceChannelFindByPeriod
     */
    offset: number;
}

export function RequestDeviceChannelFindByPeriodFromJSON(json: any): RequestDeviceChannelFindByPeriod {
    return {
        'period': json['period'],
        'depth': json['depth'],
        'offset': json['offset'],
    };
}

export function RequestDeviceChannelFindByPeriodToJSON(value?: RequestDeviceChannelFindByPeriod): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'period': value.period,
        'depth': value.depth,
        'offset': value.offset,
    };
}


