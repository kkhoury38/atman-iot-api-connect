# \EventControllerApi

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**EventControllerCreateNow**](EventControllerApi.md#EventControllerCreateNow) | **Post** /event | 
[**EventControllerCreateRelatedDev**](EventControllerApi.md#EventControllerCreateRelatedDev) | **Post** /event/related-device | 
[**EventControllerCreateRule**](EventControllerApi.md#EventControllerCreateRule) | **Post** /event/rule | 
[**EventControllerCreateRuleSubscription**](EventControllerApi.md#EventControllerCreateRuleSubscription) | **Post** /event/rule/subscription | 
[**EventControllerFind**](EventControllerApi.md#EventControllerFind) | **Get** /events/all/{assetId} | 
[**EventControllerFindUnresolved**](EventControllerApi.md#EventControllerFindUnresolved) | **Get** /events/unresolved/{assetId} | 
[**EventControllerProcessSubscriptions**](EventControllerApi.md#EventControllerProcessSubscriptions) | **Get** /event/process | 
[**EventControllerUpdateById**](EventControllerApi.md#EventControllerUpdateById) | **Patch** /event/resolve/{id} | 



## EventControllerCreateNow

> Event EventControllerCreateNow(ctx, optional)



### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***EventControllerCreateNowOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a EventControllerCreateNowOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventExcludingIdResolvedTimestampResolutionTimestamp** | [**optional.Interface of EventExcludingIdResolvedTimestampResolutionTimestamp**](EventExcludingIdResolvedTimestampResolutionTimestamp.md)|  | 

### Return type

[**Event**](Event.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## EventControllerCreateRelatedDev

> EventRelatedDevice EventControllerCreateRelatedDev(ctx, optional)



### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***EventControllerCreateRelatedDevOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a EventControllerCreateRelatedDevOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventRelatedDeviceExcludingId** | [**optional.Interface of EventRelatedDeviceExcludingId**](EventRelatedDeviceExcludingId.md)|  | 

### Return type

[**EventRelatedDevice**](EventRelatedDevice.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## EventControllerCreateRule

> EventRule EventControllerCreateRule(ctx, optional)



### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***EventControllerCreateRuleOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a EventControllerCreateRuleOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestEventCreateRule** | [**optional.Interface of RequestEventCreateRule**](RequestEventCreateRule.md)|  | 

### Return type

[**EventRule**](EventRule.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## EventControllerCreateRuleSubscription

> EventRuleSubscription EventControllerCreateRuleSubscription(ctx, optional)



### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***EventControllerCreateRuleSubscriptionOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a EventControllerCreateRuleSubscriptionOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventRuleSubscriptionExcludingIdLastExecTimestamp** | [**optional.Interface of EventRuleSubscriptionExcludingIdLastExecTimestamp**](EventRuleSubscriptionExcludingIdLastExecTimestamp.md)|  | 

### Return type

[**EventRuleSubscription**](EventRuleSubscription.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## EventControllerFind

> []ResponseEventAssetEvents EventControllerFind(ctx, assetId)



### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**assetId** | **float32**|  | 

### Return type

[**[]ResponseEventAssetEvents**](ResponseEventAssetEvents.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## EventControllerFindUnresolved

> []ResponseEventAssetEvents EventControllerFindUnresolved(ctx, assetId)



### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**assetId** | **float32**|  | 

### Return type

[**[]ResponseEventAssetEvents**](ResponseEventAssetEvents.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## EventControllerProcessSubscriptions

> EventControllerProcessSubscriptions(ctx, )



### Required Parameters

This endpoint does not need any parameter.

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


## EventControllerUpdateById

> EventControllerUpdateById(ctx, id)



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

