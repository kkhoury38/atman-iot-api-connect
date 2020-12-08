# \DeviceChannelControllerApi

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DeviceChannelControllerFindByPeriod**](DeviceChannelControllerApi.md#DeviceChannelControllerFindByPeriod) | **Get** /device-channel/data-by-period/{deviceId}/{channelId}/from/{fromTS}/to/{toTs}/page/{page}/count/{count}/groupBy/{groupBy}/operation/{operation} | 
[**DeviceChannelControllerFindDeviceAllLastRecordedTS**](DeviceChannelControllerApi.md#DeviceChannelControllerFindDeviceAllLastRecordedTS) | **Get** /device-channel/last-timestamp-in-device/{deviceId} | 
[**DeviceChannelControllerFindDeviceAllLastTS**](DeviceChannelControllerApi.md#DeviceChannelControllerFindDeviceAllLastTS) | **Get** /device-channel/data-last-timestamp/all-channels/{deviceId} | 
[**DeviceChannelControllerFindDeviceChannelLastTS**](DeviceChannelControllerApi.md#DeviceChannelControllerFindDeviceChannelLastTS) | **Get** /device-channel/data-last-timestamp/{deviceId}/{channelId} | 
[**DeviceChannelControllerFindDeviceChannelLastTSSnChName**](DeviceChannelControllerApi.md#DeviceChannelControllerFindDeviceChannelLastTSSnChName) | **Post** /device-channel/data-last-timestamp-by-name/{serialNo}/{channelName} | 



## DeviceChannelControllerFindByPeriod

> ResponseDeviceChannelData DeviceChannelControllerFindByPeriod(ctx, deviceId, channelId, fromTS, toTs, page, count, groupBy, operation)



### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**deviceId** | **float32**|  | 
**channelId** | **float32**|  | 
**fromTS** | **string**|  | 
**toTs** | **string**|  | 
**page** | **float32**|  | 
**count** | **float32**|  | 
**groupBy** | **string**|  | 
**operation** | **string**|  | 

### Return type

[**ResponseDeviceChannelData**](ResponseDeviceChannelData.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeviceChannelControllerFindDeviceAllLastRecordedTS

> Timestamp DeviceChannelControllerFindDeviceAllLastRecordedTS(ctx, deviceId)



### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**deviceId** | **float32**|  | 

### Return type

[**Timestamp**](Timestamp.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeviceChannelControllerFindDeviceAllLastTS

> []ResponseDeviceChannelData DeviceChannelControllerFindDeviceAllLastTS(ctx, deviceId)



### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**deviceId** | **float32**|  | 

### Return type

[**[]ResponseDeviceChannelData**](ResponseDeviceChannelData.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeviceChannelControllerFindDeviceChannelLastTS

> ResponseDeviceChannelData DeviceChannelControllerFindDeviceChannelLastTS(ctx, deviceId, channelId)



### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**deviceId** | **float32**|  | 
**channelId** | **float32**|  | 

### Return type

[**ResponseDeviceChannelData**](ResponseDeviceChannelData.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeviceChannelControllerFindDeviceChannelLastTSSnChName

> ResponseDeviceChannelData DeviceChannelControllerFindDeviceChannelLastTSSnChName(ctx, serialNo, channelName)



### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**serialNo** | **string**|  | 
**channelName** | **string**|  | 

### Return type

[**ResponseDeviceChannelData**](ResponseDeviceChannelData.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

