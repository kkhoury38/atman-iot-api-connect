# \DeviceGroupMembershipControllerApi

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DeviceGroupMembershipControllerCreate**](DeviceGroupMembershipControllerApi.md#DeviceGroupMembershipControllerCreate) | **Post** /device-group-memberships | 
[**DeviceGroupMembershipControllerDeleteById**](DeviceGroupMembershipControllerApi.md#DeviceGroupMembershipControllerDeleteById) | **Delete** /device-group-memberships/{id} | 
[**DeviceGroupMembershipControllerFindByAssetId**](DeviceGroupMembershipControllerApi.md#DeviceGroupMembershipControllerFindByAssetId) | **Get** /device-group-memberships/by-asset/{assetId} | 
[**DeviceGroupMembershipControllerFindByDeviceId**](DeviceGroupMembershipControllerApi.md#DeviceGroupMembershipControllerFindByDeviceId) | **Get** /device-group-memberships/by-device/{deviceId} | 



## DeviceGroupMembershipControllerCreate

> DeviceGroupMembership DeviceGroupMembershipControllerCreate(ctx, optional)



### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***DeviceGroupMembershipControllerCreateOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a DeviceGroupMembershipControllerCreateOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceGroupMembershipExcludingId** | [**optional.Interface of DeviceGroupMembershipExcludingId**](DeviceGroupMembershipExcludingId.md)|  | 

### Return type

[**DeviceGroupMembership**](DeviceGroupMembership.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeviceGroupMembershipControllerDeleteById

> DeviceGroupMembershipControllerDeleteById(ctx, id)



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


## DeviceGroupMembershipControllerFindByAssetId

> []DeviceGroupMembership DeviceGroupMembershipControllerFindByAssetId(ctx, assetId)



### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**assetId** | **float32**|  | 

### Return type

[**[]DeviceGroupMembership**](DeviceGroupMembership.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeviceGroupMembershipControllerFindByDeviceId

> []DeviceGroupMembership DeviceGroupMembershipControllerFindByDeviceId(ctx, deviceId)



### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**deviceId** | **float32**|  | 

### Return type

[**[]DeviceGroupMembership**](DeviceGroupMembership.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

