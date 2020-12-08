# \DeviceTypeControllerApi

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DeviceTypeControllerCount**](DeviceTypeControllerApi.md#DeviceTypeControllerCount) | **Get** /device-type/count | 
[**DeviceTypeControllerCreate**](DeviceTypeControllerApi.md#DeviceTypeControllerCreate) | **Post** /device-type | 
[**DeviceTypeControllerFind**](DeviceTypeControllerApi.md#DeviceTypeControllerFind) | **Get** /device-type/get-all/page/{page}/count/{count} | 
[**DeviceTypeControllerGetAssetDeviceCategories**](DeviceTypeControllerApi.md#DeviceTypeControllerGetAssetDeviceCategories) | **Get** /device-type/device-categories-in-asset/{assetId} | 
[**DeviceTypeControllerUpdateById**](DeviceTypeControllerApi.md#DeviceTypeControllerUpdateById) | **Patch** /device-type/{id} | 



## DeviceTypeControllerCount

> LoopbackCount DeviceTypeControllerCount(ctx, )



### Required Parameters

This endpoint does not need any parameter.

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


## DeviceTypeControllerCreate

> DeviceType DeviceTypeControllerCreate(ctx, optional)



### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***DeviceTypeControllerCreateOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a DeviceTypeControllerCreateOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceType** | [**optional.Interface of DeviceType**](DeviceType.md)|  | 

### Return type

[**DeviceType**](DeviceType.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeviceTypeControllerFind

> []DeviceType DeviceTypeControllerFind(ctx, page, count)



### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**page** | **float32**|  | 
**count** | **float32**|  | 

### Return type

[**[]DeviceType**](DeviceType.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeviceTypeControllerGetAssetDeviceCategories

> []DeviceTypeExcludingModelDescriptionManufacturer DeviceTypeControllerGetAssetDeviceCategories(ctx, assetId)



### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**assetId** | **float32**|  | 

### Return type

[**[]DeviceTypeExcludingModelDescriptionManufacturer**](DeviceTypeExcluding_model-description-manufacturer_.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeviceTypeControllerUpdateById

> DeviceTypeControllerUpdateById(ctx, id, optional)



### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **float32**|  | 
 **optional** | ***DeviceTypeControllerUpdateByIdOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a DeviceTypeControllerUpdateByIdOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **deviceTypeExcludingIdModelManufacturer** | [**optional.Interface of DeviceTypeExcludingIdModelManufacturer**](DeviceTypeExcludingIdModelManufacturer.md)|  | 

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

