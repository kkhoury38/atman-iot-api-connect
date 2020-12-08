# \VirtualAccessControllerApi

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**VirtualAccessControllerCreateAccessByGroup**](VirtualAccessControllerApi.md#VirtualAccessControllerCreateAccessByGroup) | **Post** /virtual-access/by-asset-group | 
[**VirtualAccessControllerCreateAccessByRight**](VirtualAccessControllerApi.md#VirtualAccessControllerCreateAccessByRight) | **Post** /virtual-access/by-asset | 
[**VirtualAccessControllerDeleteById**](VirtualAccessControllerApi.md#VirtualAccessControllerDeleteById) | **Delete** /virtual-access/{id} | 
[**VirtualAccessControllerFindByUserId**](VirtualAccessControllerApi.md#VirtualAccessControllerFindByUserId) | **Get** /virtual-access/by-userId/{userId} | 



## VirtualAccessControllerCreateAccessByGroup

> []VirtualAccess VirtualAccessControllerCreateAccessByGroup(ctx, optional)



### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***VirtualAccessControllerCreateAccessByGroupOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a VirtualAccessControllerCreateAccessByGroupOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestVirtualAccessRightExcludingAssetId** | [**optional.Interface of RequestVirtualAccessRightExcludingAssetId**](RequestVirtualAccessRightExcludingAssetId.md)|  | 

### Return type

[**[]VirtualAccess**](VirtualAccess.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## VirtualAccessControllerCreateAccessByRight

> VirtualAccess VirtualAccessControllerCreateAccessByRight(ctx, optional)



### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***VirtualAccessControllerCreateAccessByRightOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a VirtualAccessControllerCreateAccessByRightOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestVirtualAccessRightExcludingAssetGroupId** | [**optional.Interface of RequestVirtualAccessRightExcludingAssetGroupId**](RequestVirtualAccessRightExcludingAssetGroupId.md)|  | 

### Return type

[**VirtualAccess**](VirtualAccess.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## VirtualAccessControllerDeleteById

> VirtualAccessControllerDeleteById(ctx, id)



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


## VirtualAccessControllerFindByUserId

> []VirtualAccess VirtualAccessControllerFindByUserId(ctx, userId)



### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**userId** | **float32**|  | 

### Return type

[**[]VirtualAccess**](VirtualAccess.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

