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
    RequestDeviceChannelFindByPeriod,
    RequestDeviceChannelFindByPeriodFromJSON,
    RequestDeviceChannelFindByPeriodToJSON,
    ResponseDeviceChannelData,
    ResponseDeviceChannelDataFromJSON,
    ResponseDeviceChannelDataToJSON,
    Timestamp,
    TimestampFromJSON,
    TimestampToJSON,
} from '../models';

export interface DeviceChannelControllerFindByPeriodRequest {
    deviceId: number;
    channelId: number;
    requestDeviceChannelFindByPeriod?: RequestDeviceChannelFindByPeriod;
}

export interface DeviceChannelControllerFindDeviceAllLastRecordedTSRequest {
    deviceId: number;
}

export interface DeviceChannelControllerFindDeviceAllLastTSRequest {
    deviceId: number;
}

export interface DeviceChannelControllerFindDeviceChannelLastTSRequest {
    deviceId: number;
    channelId: number;
}

export interface DeviceChannelControllerFindDeviceChannelLastTSSnChNameRequest {
    serialNo: string;
    channelName: string;
}


/**
 */
function deviceChannelControllerFindByPeriodRaw<T>(requestParameters: DeviceChannelControllerFindByPeriodRequest, requestConfig: runtime.TypedQueryConfig<T, ResponseDeviceChannelData> = {}): QueryConfig<T> {
    if (requestParameters.deviceId === null || requestParameters.deviceId === undefined) {
        throw new runtime.RequiredError('deviceId','Required parameter requestParameters.deviceId was null or undefined when calling deviceChannelControllerFindByPeriod.');
    }

    if (requestParameters.channelId === null || requestParameters.channelId === undefined) {
        throw new runtime.RequiredError('channelId','Required parameter requestParameters.channelId was null or undefined when calling deviceChannelControllerFindByPeriod.');
    }

    let queryParameters = null;


    const headerParameters = {};

    headerParameters['Content-Type'] = 'application/json';


    const { meta = {} } = requestConfig;

    meta.authType = ['bearer'];
    const config: QueryConfig<T> = {
        url: `/device-channel/data-by-period/{deviceId}/{channelId}`.replace(`{${"deviceId"}}`, encodeURIComponent(String(requestParameters.deviceId))).replace(`{${"channelId"}}`, encodeURIComponent(String(requestParameters.channelId))),
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
        body: queryParameters || RequestDeviceChannelFindByPeriodToJSON(requestParameters.requestDeviceChannelFindByPeriod),
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(ResponseDeviceChannelDataFromJSON(body), text);
    }

    return config;
}

/**
*/
export function deviceChannelControllerFindByPeriod<T>(requestParameters: DeviceChannelControllerFindByPeriodRequest, requestConfig?: runtime.TypedQueryConfig<T, ResponseDeviceChannelData>): QueryConfig<T> {
    return deviceChannelControllerFindByPeriodRaw(requestParameters, requestConfig);
}

/**
 */
function deviceChannelControllerFindDeviceAllLastRecordedTSRaw<T>(requestParameters: DeviceChannelControllerFindDeviceAllLastRecordedTSRequest, requestConfig: runtime.TypedQueryConfig<T, Timestamp> = {}): QueryConfig<T> {
    if (requestParameters.deviceId === null || requestParameters.deviceId === undefined) {
        throw new runtime.RequiredError('deviceId','Required parameter requestParameters.deviceId was null or undefined when calling deviceChannelControllerFindDeviceAllLastRecordedTS.');
    }

    let queryParameters = null;


    const headerParameters = {};


    const { meta = {} } = requestConfig;

    meta.authType = ['bearer'];
    const config: QueryConfig<T> = {
        url: `/device-channel/last-timestamp-in-device/{deviceId}`.replace(`{${"deviceId"}}`, encodeURIComponent(String(requestParameters.deviceId))),
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
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(TimestampFromJSON(body), text);
    }

    return config;
}

/**
*/
export function deviceChannelControllerFindDeviceAllLastRecordedTS<T>(requestParameters: DeviceChannelControllerFindDeviceAllLastRecordedTSRequest, requestConfig?: runtime.TypedQueryConfig<T, Timestamp>): QueryConfig<T> {
    return deviceChannelControllerFindDeviceAllLastRecordedTSRaw(requestParameters, requestConfig);
}

/**
 */
function deviceChannelControllerFindDeviceAllLastTSRaw<T>(requestParameters: DeviceChannelControllerFindDeviceAllLastTSRequest, requestConfig: runtime.TypedQueryConfig<T, Array<ResponseDeviceChannelData>> = {}): QueryConfig<T> {
    if (requestParameters.deviceId === null || requestParameters.deviceId === undefined) {
        throw new runtime.RequiredError('deviceId','Required parameter requestParameters.deviceId was null or undefined when calling deviceChannelControllerFindDeviceAllLastTS.');
    }

    let queryParameters = null;


    const headerParameters = {};


    const { meta = {} } = requestConfig;

    meta.authType = ['bearer'];
    const config: QueryConfig<T> = {
        url: `/device-channel/data-last-timestamp/all-channels/{deviceId}`.replace(`{${"deviceId"}}`, encodeURIComponent(String(requestParameters.deviceId))),
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
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(body.map(ResponseDeviceChannelDataFromJSON), text);
    }

    return config;
}

/**
*/
export function deviceChannelControllerFindDeviceAllLastTS<T>(requestParameters: DeviceChannelControllerFindDeviceAllLastTSRequest, requestConfig?: runtime.TypedQueryConfig<T, Array<ResponseDeviceChannelData>>): QueryConfig<T> {
    return deviceChannelControllerFindDeviceAllLastTSRaw(requestParameters, requestConfig);
}

/**
 */
function deviceChannelControllerFindDeviceChannelLastTSRaw<T>(requestParameters: DeviceChannelControllerFindDeviceChannelLastTSRequest, requestConfig: runtime.TypedQueryConfig<T, ResponseDeviceChannelData> = {}): QueryConfig<T> {
    if (requestParameters.deviceId === null || requestParameters.deviceId === undefined) {
        throw new runtime.RequiredError('deviceId','Required parameter requestParameters.deviceId was null or undefined when calling deviceChannelControllerFindDeviceChannelLastTS.');
    }

    if (requestParameters.channelId === null || requestParameters.channelId === undefined) {
        throw new runtime.RequiredError('channelId','Required parameter requestParameters.channelId was null or undefined when calling deviceChannelControllerFindDeviceChannelLastTS.');
    }

    let queryParameters = null;


    const headerParameters = {};


    const { meta = {} } = requestConfig;

    meta.authType = ['bearer'];
    const config: QueryConfig<T> = {
        url: `/device-channel/data-last-timestamp/{deviceId}/{channelId}`.replace(`{${"deviceId"}}`, encodeURIComponent(String(requestParameters.deviceId))).replace(`{${"channelId"}}`, encodeURIComponent(String(requestParameters.channelId))),
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
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(ResponseDeviceChannelDataFromJSON(body), text);
    }

    return config;
}

/**
*/
export function deviceChannelControllerFindDeviceChannelLastTS<T>(requestParameters: DeviceChannelControllerFindDeviceChannelLastTSRequest, requestConfig?: runtime.TypedQueryConfig<T, ResponseDeviceChannelData>): QueryConfig<T> {
    return deviceChannelControllerFindDeviceChannelLastTSRaw(requestParameters, requestConfig);
}

/**
 */
function deviceChannelControllerFindDeviceChannelLastTSSnChNameRaw<T>(requestParameters: DeviceChannelControllerFindDeviceChannelLastTSSnChNameRequest, requestConfig: runtime.TypedQueryConfig<T, ResponseDeviceChannelData> = {}): QueryConfig<T> {
    if (requestParameters.serialNo === null || requestParameters.serialNo === undefined) {
        throw new runtime.RequiredError('serialNo','Required parameter requestParameters.serialNo was null or undefined when calling deviceChannelControllerFindDeviceChannelLastTSSnChName.');
    }

    if (requestParameters.channelName === null || requestParameters.channelName === undefined) {
        throw new runtime.RequiredError('channelName','Required parameter requestParameters.channelName was null or undefined when calling deviceChannelControllerFindDeviceChannelLastTSSnChName.');
    }

    let queryParameters = null;


    const headerParameters = {};


    const { meta = {} } = requestConfig;

    meta.authType = ['bearer'];
    const config: QueryConfig<T> = {
        url: `/device-channel/data-last-timestamp-by-name/{serialNo}/{channelName}`.replace(`{${"serialNo"}}`, encodeURIComponent(String(requestParameters.serialNo))).replace(`{${"channelName"}}`, encodeURIComponent(String(requestParameters.channelName))),
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
        body: queryParameters,
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(ResponseDeviceChannelDataFromJSON(body), text);
    }

    return config;
}

/**
*/
export function deviceChannelControllerFindDeviceChannelLastTSSnChName<T>(requestParameters: DeviceChannelControllerFindDeviceChannelLastTSSnChNameRequest, requestConfig?: runtime.TypedQueryConfig<T, ResponseDeviceChannelData>): QueryConfig<T> {
    return deviceChannelControllerFindDeviceChannelLastTSSnChNameRaw(requestParameters, requestConfig);
}
