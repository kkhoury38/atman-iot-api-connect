# \AssetGroupControllerApi

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**AssetGroupControllerCreateAssetGroup**](AssetGroupControllerApi.md#AssetGroupControllerCreateAssetGroup) | **Post** /asset-group/user | 
[**AssetGroupControllerDeleteById**](AssetGroupControllerApi.md#AssetGroupControllerDeleteById) | **Delete** /asset-group/{id} | 
[**AssetGroupControllerFindUserAssetGroups**](AssetGroupControllerApi.md#AssetGroupControllerFindUserAssetGroups) | **Get** /asset-groups/user | 
[**AssetGroupControllerUpdateById**](AssetGroupControllerApi.md#AssetGroupControllerUpdateById) | **Patch** /asset-group/{id} | 



## AssetGroupControllerCreateAssetGroup

> AssetGroup AssetGroupControllerCreateAssetGroup(ctx, optional)



### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***AssetGroupControllerCreateAssetGroupOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a AssetGroupControllerCreateAssetGroupOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetGroupExcludingIdUserId** | [**optional.Interface of AssetGroupExcludingIdUserId**](AssetGroupExcludingIdUserId.md)|  | 

### Return type

[**AssetGroup**](AssetGroup.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## AssetGroupControllerDeleteById

> AssetGroupControllerDeleteById(ctx, id)



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


## AssetGroupControllerFindUserAssetGroups

> []AssetGroup AssetGroupControllerFindUserAssetGroups(ctx, )



### Required Parameters

This endpoint does not need any parameter.

### Return type

[**[]AssetGroup**](AssetGroup.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## AssetGroupControllerUpdateById

> AssetGroupControllerUpdateById(ctx, id, optional)



Edit (PATCH) AssetGroup

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **float32**|  | 
 **optional** | ***AssetGroupControllerUpdateByIdOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a AssetGroupControllerUpdateByIdOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **assetGroupExcludingIdUserId** | [**optional.Interface of AssetGroupExcludingIdUserId**](AssetGroupExcludingIdUserId.md)|  | 

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

