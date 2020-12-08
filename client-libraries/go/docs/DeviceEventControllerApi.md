# \DeviceEventControllerApi

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DeviceEventControllerCountNotViewed**](DeviceEventControllerApi.md#DeviceEventControllerCountNotViewed) | **Get** /device-events/by-asset/count-not-viewed/{assetId} | 
[**DeviceEventControllerFind**](DeviceEventControllerApi.md#DeviceEventControllerFind) | **Get** /device-events/assetId/{assetId}/page/{page}/count/{count} | 
[**DeviceEventControllerUpdateViewedBy**](DeviceEventControllerApi.md#DeviceEventControllerUpdateViewedBy) | **Get** /device-events/mark-read/{eventId} | 



## DeviceEventControllerCountNotViewed

> LoopbackCount DeviceEventControllerCountNotViewed(ctx, assetId)



### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**assetId** | **float32**|  | 

### Return type

[**LoopbackCount**](loopback_Count.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeviceEventControllerFind

> []DeviceEventWithRelations DeviceEventControllerFind(ctx, assetId, page, count)



### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**assetId** | **float32**|  | 
**page** | **float32**|  | 
**count** | **float32**|  | 

### Return type

[**[]DeviceEventWithRelations**](DeviceEventWithRelations.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeviceEventControllerUpdateViewedBy

> DeviceEventControllerUpdateViewedBy(ctx, eventId)



### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**eventId** | **float32**|  | 

### Return type

 (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

