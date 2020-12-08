# \DashboardElementControllerApi

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DashboardElementControllerCreate**](DashboardElementControllerApi.md#DashboardElementControllerCreate) | **Post** /dashboard-element | 
[**DashboardElementControllerDeleteById**](DashboardElementControllerApi.md#DashboardElementControllerDeleteById) | **Delete** /dashboard-element/{id} | 
[**DashboardElementControllerFindByUserIdAssetIdLocation**](DashboardElementControllerApi.md#DashboardElementControllerFindByUserIdAssetIdLocation) | **Get** /dashboard-elements/asset-id/{assetId}/user-id/{userId}/location/{location} | 
[**DashboardElementControllerMoveElementDown**](DashboardElementControllerApi.md#DashboardElementControllerMoveElementDown) | **Patch** /dashboard-element/{id}/move-down | 
[**DashboardElementControllerMoveElementUp**](DashboardElementControllerApi.md#DashboardElementControllerMoveElementUp) | **Patch** /dashboard-element/{id}/move-up | 



## DashboardElementControllerCreate

> DashboardElement DashboardElementControllerCreate(ctx, optional)



### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***DashboardElementControllerCreateOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a DashboardElementControllerCreateOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **newDashboardElement** | [**optional.Interface of NewDashboardElement**](NewDashboardElement.md)|  | 

### Return type

[**DashboardElement**](DashboardElement.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DashboardElementControllerDeleteById

> DashboardElementControllerDeleteById(ctx, id)



### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **float32**|  | 

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


## DashboardElementControllerFindByUserIdAssetIdLocation

> []DashboardElementWithScope DashboardElementControllerFindByUserIdAssetIdLocation(ctx, assetId, userId, location)



### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**assetId** | **float32**|  | 
**userId** | **float32**|  | 
**location** | **string**|  | 

### Return type

[**[]DashboardElementWithScope**](DashboardElementWithScope.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DashboardElementControllerMoveElementDown

> DashboardElementControllerMoveElementDown(ctx, id)



### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **float32**|  | 

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


## DashboardElementControllerMoveElementUp

> DashboardElementControllerMoveElementUp(ctx, id)



### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **float32**|  | 

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

