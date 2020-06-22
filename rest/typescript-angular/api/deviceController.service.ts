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
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent, HttpParameterCodec }       from '@angular/common/http';
import { CustomHttpParameterCodec }                          from '../encoder';
import { Observable }                                        from 'rxjs';

import { Channel } from '../model/models';
import { ChannelExcludingIdDeviceId } from '../model/models';
import { ChannelType } from '../model/models';
import { Device } from '../model/models';
import { DeviceExcludingIdDataLoggerId } from '../model/models';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';



@Injectable({
  providedIn: 'root'
})
export class DeviceControllerService {

    protected basePath = 'http://atman-iot.com:3000';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();
    public encoder: HttpParameterCodec;

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
    }



    private addToHttpParams(httpParams: HttpParams, value: any, key?: string): HttpParams {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        } else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }

    private addToHttpParamsRecursive(httpParams: HttpParams, value?: any, key?: string): HttpParams {
        if (value == null) {
            return httpParams;
        }

        if (typeof value === "object") {
            if (Array.isArray(value)) {
                (value as any[]).forEach( elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            } else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key,
                        (value as Date).toISOString().substr(0, 10));
                } else {
                   throw Error("key may not be null if value is Date");
                }
            } else {
                Object.keys(value).forEach( k => httpParams = this.addToHttpParamsRecursive(
                    httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        } else if (key != null) {
            httpParams = httpParams.append(key, value);
        } else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }

    /**
     * Used for creating a new &lt;b&gt;Device&lt;/b&gt;, belonging to a &lt;b&gt;DataLogger&lt;/b&gt; with id &lt;i&gt;dataLoggerId&lt;/i&gt; by an authorized &lt;b&gt;User&lt;/b&gt; identified by the provided &lt;i&gt;token&lt;/i&gt;.&lt;br&gt;&lt;br&gt;&lt;i&gt;&lt;b&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-dataloggercontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DataLoggerController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-usercontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;UserController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocsdevice\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DeviceModel&lt;/a&gt;&lt;/i&gt;
     * @param dataLoggerId 
     * @param deviceExcludingIdDataLoggerId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deviceControllerCreate(dataLoggerId: number, deviceExcludingIdDataLoggerId?: DeviceExcludingIdDataLoggerId, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<Device>;
    public deviceControllerCreate(dataLoggerId: number, deviceExcludingIdDataLoggerId?: DeviceExcludingIdDataLoggerId, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<Device>>;
    public deviceControllerCreate(dataLoggerId: number, deviceExcludingIdDataLoggerId?: DeviceExcludingIdDataLoggerId, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<Device>>;
    public deviceControllerCreate(dataLoggerId: number, deviceExcludingIdDataLoggerId?: DeviceExcludingIdDataLoggerId, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (dataLoggerId === null || dataLoggerId === undefined) {
            throw new Error('Required parameter dataLoggerId was null or undefined when calling deviceControllerCreate.');
        }

        let headers = this.defaultHeaders;

        // authentication (bearerAuth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        let responseType: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }

        return this.httpClient.post<Device>(`${this.configuration.basePath}/device/${encodeURIComponent(String(dataLoggerId))}`,
            deviceExcludingIdDataLoggerId,
            {
                responseType: <any>responseType,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Used for creating a new &lt;b&gt;Channel&lt;/b&gt;, belonging to a &lt;b&gt;Device&lt;/b&gt; with id &lt;i&gt;deviceId&lt;/i&gt; by an authorized &lt;b&gt;User&lt;/b&gt; identified by the provided &lt;i&gt;token&lt;/i&gt;.&lt;br&gt;&lt;br&gt;&lt;i&gt;&lt;b&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-usercontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;UserController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocschannel\&quot; target&#x3D;\&quot;_blank\&quot;&gt;ChannelModel&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocsdevice\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DeviceModel&lt;/a&gt;&lt;/i&gt;
     * @param deviceId 
     * @param channelExcludingIdDeviceId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deviceControllerCreateChannel(deviceId: number, channelExcludingIdDeviceId?: ChannelExcludingIdDeviceId, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<Channel>;
    public deviceControllerCreateChannel(deviceId: number, channelExcludingIdDeviceId?: ChannelExcludingIdDeviceId, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<Channel>>;
    public deviceControllerCreateChannel(deviceId: number, channelExcludingIdDeviceId?: ChannelExcludingIdDeviceId, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<Channel>>;
    public deviceControllerCreateChannel(deviceId: number, channelExcludingIdDeviceId?: ChannelExcludingIdDeviceId, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (deviceId === null || deviceId === undefined) {
            throw new Error('Required parameter deviceId was null or undefined when calling deviceControllerCreateChannel.');
        }

        let headers = this.defaultHeaders;

        // authentication (bearerAuth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        let responseType: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }

        return this.httpClient.post<Channel>(`${this.configuration.basePath}/device/${encodeURIComponent(String(deviceId))}/channel`,
            channelExcludingIdDeviceId,
            {
                responseType: <any>responseType,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Disable monitoring of &lt;b&gt;Channel&lt;/b&gt; identified by &lt;i&gt;channelId&lt;/i&gt;, in &lt;b&gt;Device&lt;/b&gt; identified by &lt;i&gt;deviceId&lt;/i&gt;, owned by &lt;b&gt;User&lt;/b&gt; authorized by &lt;i&gt;token&lt;/i&gt;.&lt;br&gt;&lt;br&gt;&lt;i&gt;&lt;b&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-usercontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;UserController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocschannel\&quot; target&#x3D;\&quot;_blank\&quot;&gt;ChannelModel&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocsdevice\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DeviceModel&lt;/a&gt;&lt;/i&gt;
     * @param deviceId 
     * @param channelId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deviceControllerDisableChannelMonitoring(deviceId: number, channelId: number, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined}): Observable<any>;
    public deviceControllerDisableChannelMonitoring(deviceId: number, channelId: number, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined}): Observable<HttpResponse<any>>;
    public deviceControllerDisableChannelMonitoring(deviceId: number, channelId: number, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined}): Observable<HttpEvent<any>>;
    public deviceControllerDisableChannelMonitoring(deviceId: number, channelId: number, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: undefined}): Observable<any> {
        if (deviceId === null || deviceId === undefined) {
            throw new Error('Required parameter deviceId was null or undefined when calling deviceControllerDisableChannelMonitoring.');
        }
        if (channelId === null || channelId === undefined) {
            throw new Error('Required parameter channelId was null or undefined when calling deviceControllerDisableChannelMonitoring.');
        }

        let headers = this.defaultHeaders;

        // authentication (bearerAuth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        let responseType: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }

        return this.httpClient.get<any>(`${this.configuration.basePath}/device/${encodeURIComponent(String(deviceId))}/channel/${encodeURIComponent(String(channelId))}/disable-monitoring`,
            {
                responseType: <any>responseType,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Enable monitoring of &lt;b&gt;Channel&lt;/b&gt; identified by &lt;i&gt;channelId&lt;/i&gt;, in &lt;b&gt;Device&lt;/b&gt; identified by &lt;i&gt;deviceId&lt;/i&gt;, owned by &lt;b&gt;User&lt;/b&gt; authorized by &lt;i&gt;token&lt;/i&gt;.&lt;br&gt;&lt;br&gt;&lt;i&gt;&lt;b&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-usercontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;UserController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocschannel\&quot; target&#x3D;\&quot;_blank\&quot;&gt;ChannelModel&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocsdevice\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DeviceModel&lt;/a&gt;&lt;/i&gt;
     * @param deviceId 
     * @param channelId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deviceControllerEnableChannelMonitoring(deviceId: number, channelId: number, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined}): Observable<any>;
    public deviceControllerEnableChannelMonitoring(deviceId: number, channelId: number, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined}): Observable<HttpResponse<any>>;
    public deviceControllerEnableChannelMonitoring(deviceId: number, channelId: number, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined}): Observable<HttpEvent<any>>;
    public deviceControllerEnableChannelMonitoring(deviceId: number, channelId: number, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: undefined}): Observable<any> {
        if (deviceId === null || deviceId === undefined) {
            throw new Error('Required parameter deviceId was null or undefined when calling deviceControllerEnableChannelMonitoring.');
        }
        if (channelId === null || channelId === undefined) {
            throw new Error('Required parameter channelId was null or undefined when calling deviceControllerEnableChannelMonitoring.');
        }

        let headers = this.defaultHeaders;

        // authentication (bearerAuth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        let responseType: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }

        return this.httpClient.get<any>(`${this.configuration.basePath}/device/${encodeURIComponent(String(deviceId))}/channel/${encodeURIComponent(String(channelId))}/enable-monitoring`,
            {
                responseType: <any>responseType,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Used for getting the &lt;b&gt;Devices&lt;/b&gt;, belonging to a &lt;b&gt;DataLogger&lt;/b&gt; with id &lt;i&gt;dataLoggerId&lt;/i&gt; by an authorized &lt;b&gt;User&lt;/b&gt; identified by the provided &lt;i&gt;token&lt;/i&gt;.&lt;br&gt;&lt;br&gt;&lt;i&gt;&lt;b&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-dataloggercontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DataLoggerController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-usercontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;UserController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocsdevice\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DeviceModel&lt;/a&gt;&lt;/i&gt;
     * @param dataLoggerId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deviceControllerFind(dataLoggerId: number, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<Array<Device>>;
    public deviceControllerFind(dataLoggerId: number, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<Array<Device>>>;
    public deviceControllerFind(dataLoggerId: number, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<Array<Device>>>;
    public deviceControllerFind(dataLoggerId: number, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (dataLoggerId === null || dataLoggerId === undefined) {
            throw new Error('Required parameter dataLoggerId was null or undefined when calling deviceControllerFind.');
        }

        let headers = this.defaultHeaders;

        // authentication (bearerAuth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        let responseType: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }

        return this.httpClient.get<Array<Device>>(`${this.configuration.basePath}/devices/${encodeURIComponent(String(dataLoggerId))}`,
            {
                responseType: <any>responseType,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Used for getting the  &lt;b&gt;Channel&lt;/b&gt;&lt;b&gt;Types&lt;/b&gt; of &lt;b&gt;Channels&lt;/b&gt; belonging to a &lt;b&gt;Device&lt;/b&gt; with id &lt;i&gt;deviceId&lt;/i&gt;, by an authorized &lt;b&gt;User&lt;/b&gt; identified by the provided &lt;i&gt;token&lt;/i&gt;.&lt;br&gt;&lt;br&gt;&lt;i&gt;&lt;b&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-usercontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;UserController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocschannel\&quot; target&#x3D;\&quot;_blank\&quot;&gt;ChannelModel&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocschanneltype\&quot; target&#x3D;\&quot;_blank\&quot;&gt;ChannelTypeModel&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocsdevice\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DeviceModel&lt;/a&gt;&lt;/i&gt;
     * @param deviceId 
     * @param token 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deviceControllerFindChannelTypes(deviceId: number, token?: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<Array<ChannelType>>;
    public deviceControllerFindChannelTypes(deviceId: number, token?: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<Array<ChannelType>>>;
    public deviceControllerFindChannelTypes(deviceId: number, token?: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<Array<ChannelType>>>;
    public deviceControllerFindChannelTypes(deviceId: number, token?: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (deviceId === null || deviceId === undefined) {
            throw new Error('Required parameter deviceId was null or undefined when calling deviceControllerFindChannelTypes.');
        }

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (token !== undefined && token !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>token, 'token');
        }

        let headers = this.defaultHeaders;

        // authentication (bearerAuth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        let responseType: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }

        return this.httpClient.get<Array<ChannelType>>(`${this.configuration.basePath}/device/${encodeURIComponent(String(deviceId))}/channelTypes`,
            {
                params: queryParameters,
                responseType: <any>responseType,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Used for getting &lt;b&gt;Channel&lt;/b&gt;&lt;b&gt;s&lt;/b&gt;, belonging to a &lt;b&gt;Device&lt;/b&gt; with id &lt;i&gt;deviceId&lt;/i&gt;, by an authorized &lt;b&gt;User&lt;/b&gt; identified by the provided &lt;i&gt;token&lt;/i&gt;.&lt;br&gt;&lt;br&gt;&lt;i&gt;&lt;b&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-usercontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;UserController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocschannel\&quot; target&#x3D;\&quot;_blank\&quot;&gt;ChannelModel&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocsdevice\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DeviceModel&lt;/a&gt;&lt;/i&gt;
     * @param deviceId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deviceControllerFindChannels(deviceId: number, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<Array<Channel>>;
    public deviceControllerFindChannels(deviceId: number, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<Array<Channel>>>;
    public deviceControllerFindChannels(deviceId: number, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<Array<Channel>>>;
    public deviceControllerFindChannels(deviceId: number, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (deviceId === null || deviceId === undefined) {
            throw new Error('Required parameter deviceId was null or undefined when calling deviceControllerFindChannels.');
        }

        let headers = this.defaultHeaders;

        // authentication (bearerAuth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        let responseType: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }

        return this.httpClient.get<Array<Channel>>(`${this.configuration.basePath}/device/${encodeURIComponent(String(deviceId))}/channels`,
            {
                responseType: <any>responseType,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}