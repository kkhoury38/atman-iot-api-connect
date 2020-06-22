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


import { HttpMethods, QueryConfig, ResponseBody, ResponseText } from 'redux-query';
import * as runtime from '../runtime';

import {
    DeviceType,
    DeviceTypeFromJSON,
    DeviceTypeToJSON,
    DeviceTypeWithRelations,
    DeviceTypeWithRelationsFromJSON,
    DeviceTypeWithRelationsToJSON,
    LoopbackCount,
    LoopbackCountFromJSON,
    LoopbackCountToJSON,
} from '../models';

export interface DeviceTypeControllerCreateRequest {
    deviceType?: DeviceType;
}

export interface DeviceTypeControllerFindRequest {
    page: number;
    count: number;
}


/**
 */
function deviceTypeControllerCountRaw<T>( requestConfig: runtime.TypedQueryConfig<T, LoopbackCount> = {}): QueryConfig<T> {
    let queryParameters = null;


    const headerParameters = {};


    const { meta = {} } = requestConfig;

    meta.authType = ['bearer'];
    const config: QueryConfig<T> = {
        url: `/device-type/count`,
        meta,
        update: requestConfig.update,
        queryKey: requestConfig.queryKey,
        optimisticUpdate: requestConfig.optimisticUpdate,
        force: requestConfig.force,
        rollback: requestConfig.rollback,
        options: {
            method: 'GET',
            headers: headerParameters,
        },
        body: queryParameters,
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(LoopbackCountFromJSON(body), text);
    }

    return config;
}

/**
*/
export function deviceTypeControllerCount<T>( requestConfig?: runtime.TypedQueryConfig<T, LoopbackCount>): QueryConfig<T> {
    return deviceTypeControllerCountRaw( requestConfig);
}

/**
 */
function deviceTypeControllerCreateRaw<T>(requestParameters: DeviceTypeControllerCreateRequest, requestConfig: runtime.TypedQueryConfig<T, DeviceType> = {}): QueryConfig<T> {
    let queryParameters = null;


    const headerParameters = {};

    headerParameters['Content-Type'] = 'application/json';


    const { meta = {} } = requestConfig;

    meta.authType = ['bearer'];
    const config: QueryConfig<T> = {
        url: `/device-type`,
        meta,
        update: requestConfig.update,
        queryKey: requestConfig.queryKey,
        optimisticUpdate: requestConfig.optimisticUpdate,
        force: requestConfig.force,
        rollback: requestConfig.rollback,
        options: {
            method: 'POST',
            headers: headerParameters,
        },
        body: queryParameters || DeviceTypeToJSON(requestParameters.deviceType),
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(DeviceTypeFromJSON(body), text);
    }

    return config;
}

/**
*/
export function deviceTypeControllerCreate<T>(requestParameters: DeviceTypeControllerCreateRequest, requestConfig?: runtime.TypedQueryConfig<T, DeviceType>): QueryConfig<T> {
    return deviceTypeControllerCreateRaw(requestParameters, requestConfig);
}

/**
 */
function deviceTypeControllerFindRaw<T>(requestParameters: DeviceTypeControllerFindRequest, requestConfig: runtime.TypedQueryConfig<T, Array<DeviceTypeWithRelations>> = {}): QueryConfig<T> {
    if (requestParameters.page === null || requestParameters.page === undefined) {
        throw new runtime.RequiredError('page','Required parameter requestParameters.page was null or undefined when calling deviceTypeControllerFind.');
    }

    if (requestParameters.count === null || requestParameters.count === undefined) {
        throw new runtime.RequiredError('count','Required parameter requestParameters.count was null or undefined when calling deviceTypeControllerFind.');
    }

    let queryParameters = null;


    const headerParameters = {};


    const { meta = {} } = requestConfig;

    meta.authType = ['bearer'];
    const config: QueryConfig<T> = {
        url: `/device-type/list-all/{page}/{count}`.replace(`{${"page"}}`, encodeURIComponent(String(requestParameters.page))).replace(`{${"count"}}`, encodeURIComponent(String(requestParameters.count))),
        meta,
        update: requestConfig.update,
        queryKey: requestConfig.queryKey,
        optimisticUpdate: requestConfig.optimisticUpdate,
        force: requestConfig.force,
        rollback: requestConfig.rollback,
        options: {
            method: 'GET',
            headers: headerParameters,
        },
        body: queryParameters,
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(body.map(DeviceTypeWithRelationsFromJSON), text);
    }

    return config;
}

/**
*/
export function deviceTypeControllerFind<T>(requestParameters: DeviceTypeControllerFindRequest, requestConfig?: runtime.TypedQueryConfig<T, Array<DeviceTypeWithRelations>>): QueryConfig<T> {
    return deviceTypeControllerFindRaw(requestParameters, requestConfig);
}

