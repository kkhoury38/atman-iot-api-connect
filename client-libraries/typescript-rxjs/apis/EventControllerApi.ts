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

import { Observable } from 'rxjs';
import { BaseAPI, HttpHeaders, throwIfNullOrUndefined, encodeURI } from '../runtime';
import {
    Event,
    EventExcludingIdResolvedTimestampResolutionTimestamp,
    EventRelatedDevice,
    EventRelatedDeviceExcludingId,
    EventRule,
    EventRuleSubscription,
    EventRuleSubscriptionExcludingIdLastExecTimestamp,
    RequestEventCreateRule,
    ResponseEventAssetEvents,
} from '../models';

export interface EventControllerCreateNowRequest {
    eventExcludingIdResolvedTimestampResolutionTimestamp?: EventExcludingIdResolvedTimestampResolutionTimestamp;
}

export interface EventControllerCreateRelatedDevRequest {
    eventRelatedDeviceExcludingId?: EventRelatedDeviceExcludingId;
}

export interface EventControllerCreateRuleRequest {
    requestEventCreateRule?: RequestEventCreateRule;
}

export interface EventControllerCreateRuleSubscriptionRequest {
    eventRuleSubscriptionExcludingIdLastExecTimestamp?: EventRuleSubscriptionExcludingIdLastExecTimestamp;
}

export interface EventControllerFindRequest {
    assetId: number;
}

export interface EventControllerFindUnresolvedRequest {
    assetId: number;
}

export interface EventControllerUpdateByIdRequest {
    id: number;
}

/**
 * no description
 */
export class EventControllerApi extends BaseAPI {

    /**
     */
    eventControllerCreateNow = ({ eventExcludingIdResolvedTimestampResolutionTimestamp }: EventControllerCreateNowRequest): Observable<Event> => {

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<Event>({
            path: '/event',
            method: 'POST',
            headers,
            body: eventExcludingIdResolvedTimestampResolutionTimestamp,
        });
    };

    /**
     */
    eventControllerCreateRelatedDev = ({ eventRelatedDeviceExcludingId }: EventControllerCreateRelatedDevRequest): Observable<EventRelatedDevice> => {

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<EventRelatedDevice>({
            path: '/event/related-device',
            method: 'POST',
            headers,
            body: eventRelatedDeviceExcludingId,
        });
    };

    /**
     */
    eventControllerCreateRule = ({ requestEventCreateRule }: EventControllerCreateRuleRequest): Observable<EventRule> => {

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<EventRule>({
            path: '/event/rule',
            method: 'POST',
            headers,
            body: requestEventCreateRule,
        });
    };

    /**
     */
    eventControllerCreateRuleSubscription = ({ eventRuleSubscriptionExcludingIdLastExecTimestamp }: EventControllerCreateRuleSubscriptionRequest): Observable<EventRuleSubscription> => {

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<EventRuleSubscription>({
            path: '/event/rule/subscription',
            method: 'POST',
            headers,
            body: eventRuleSubscriptionExcludingIdLastExecTimestamp,
        });
    };

    /**
     */
    eventControllerFind = ({ assetId }: EventControllerFindRequest): Observable<Array<ResponseEventAssetEvents>> => {
        throwIfNullOrUndefined(assetId, 'eventControllerFind');

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<Array<ResponseEventAssetEvents>>({
            path: '/events/all/{assetId}'.replace('{assetId}', encodeURI(assetId)),
            method: 'GET',
            headers,
        });
    };

    /**
     */
    eventControllerFindUnresolved = ({ assetId }: EventControllerFindUnresolvedRequest): Observable<Array<ResponseEventAssetEvents>> => {
        throwIfNullOrUndefined(assetId, 'eventControllerFindUnresolved');

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<Array<ResponseEventAssetEvents>>({
            path: '/events/unresolved/{assetId}'.replace('{assetId}', encodeURI(assetId)),
            method: 'GET',
            headers,
        });
    };

    /**
     */
    eventControllerProcessSubscriptions = (): Observable<void> => {
        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<void>({
            path: '/event/process',
            method: 'GET',
            headers,
        });
    };

    /**
     */
    eventControllerUpdateById = ({ id }: EventControllerUpdateByIdRequest): Observable<void> => {
        throwIfNullOrUndefined(id, 'eventControllerUpdateById');

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<void>({
            path: '/event/resolve/{id}'.replace('{id}', encodeURI(id)),
            method: 'PATCH',
            headers,
        });
    };

}
