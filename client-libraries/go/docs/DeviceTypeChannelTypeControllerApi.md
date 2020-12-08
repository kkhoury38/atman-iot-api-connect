# \DeviceTypeChannelTypeControllerApi

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DeviceTypeChannelTypeControllerCount**](DeviceTypeChannelTypeControllerApi.md#DeviceTypeChannelTypeControllerCount) | **Get** /device-type-channel-type/{deviceTypeId}/count | 
[**DeviceTypeChannelTypeControllerCreate**](DeviceTypeChannelTypeControllerApi.md#DeviceTypeChannelTypeControllerCreate) | **Post** /device-type-channel-type/{deviceTypeId} | 
[**DeviceTypeChannelTypeControllerDeviceTypeChannelCategories**](DeviceTypeChannelTypeControllerApi.md#DeviceTypeChannelTypeControllerDeviceTypeChannelCategories) | **Get** /device-type-channel-type/{deviceTypeId}/channel-categories | 
[**DeviceTypeChannelTypeControllerFind**](DeviceTypeChannelTypeControllerApi.md#DeviceTypeChannelTypeControllerFind) | **Get** /device-type-channel-type/{deviceTypeId}/page/{page}/count/{count} | 
[**DeviceTypeChannelTypeControllerUpdateById**](DeviceTypeChannelTypeControllerApi.md#DeviceTypeChannelTypeControllerUpdateById) | **Patch** /device-type-channel-type/channel-type/{channelTypeId} | 



## DeviceTypeChannelTypeControllerCount

> LoopbackCount DeviceTypeChannelTypeControllerCount(ctx, deviceTypeId)



### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**deviceTypeId** | **float32**|  | 

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


## DeviceTypeChannelTypeControllerCreate

> ChannelType DeviceTypeChannelTypeControllerCreate(ctx, deviceTypeId, optional)



### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**deviceTypeId** | **float32**|  | 
 **optional** | ***DeviceTypeChannelTypeControllerCreateOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a DeviceTypeChannelTypeControllerCreateOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **channelTypeExcludingIdDeviceTypeId** | [**optional.Interface of ChannelTypeExcludingIdDeviceTypeId**](ChannelTypeExcludingIdDeviceTypeId.md)|  | 

### Return type

[**ChannelType**](ChannelType.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeviceTypeChannelTypeControllerDeviceTypeChannelCategories

> []ChannelTypeExcludingNameDescriptionUnitChannelTypeDeviceTypeId DeviceTypeChannelTypeControllerDeviceTypeChannelCategories(ctx, deviceTypeId)



### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**deviceTypeId** | **float32**|  | 

### Return type

[**[]ChannelTypeExcludingNameDescriptionUnitChannelTypeDeviceTypeId**](ChannelTypeExcluding_name-description-unit-channelType-deviceTypeId_.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeviceTypeChannelTypeControllerFind

> []ChannelType DeviceTypeChannelTypeControllerFind(ctx, deviceTypeId, page, count)



### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**deviceTypeId** | **float32**|  | 
**page** | **float32**|  | 
**count** | **float32**|  | 

### Return type

[**[]ChannelType**](ChannelType.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeviceTypeChannelTypeControllerUpdateById

> DeviceTypeChannelTypeControllerUpdateById(ctx, channelTypeId, optional)



### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**channelTypeId** | **float32**|  | 
 **optional** | ***DeviceTypeChannelTypeControllerUpdateByIdOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a DeviceTypeChannelTypeControllerUpdateByIdOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **channelTypeExcludingIdNameDeviceTypeId** | [**optional.Interface of ChannelTypeExcludingIdNameDeviceTypeId**](ChannelTypeExcludingIdNameDeviceTypeId.md)|  | 

### Return type

 (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

