# \UserSubscriptionControllerApi

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**UserSubscriptionControllerCreate**](UserSubscriptionControllerApi.md#UserSubscriptionControllerCreate) | **Post** /user-subscriptions/paypal/callback | 
[**UserSubscriptionControllerCreateUserSubscriptionBySubId**](UserSubscriptionControllerApi.md#UserSubscriptionControllerCreateUserSubscriptionBySubId) | **Get** /user-subscription/get-new/{subscriptionId} | 
[**UserSubscriptionControllerFindSubscriptionsByCategory**](UserSubscriptionControllerApi.md#UserSubscriptionControllerFindSubscriptionsByCategory) | **Get** /user-subscription/subscriptions/{product} | 
[**UserSubscriptionControllerGetByRefferenceCode**](UserSubscriptionControllerApi.md#UserSubscriptionControllerGetByRefferenceCode) | **Get** /user-subscription/get-by-reference-code/{referenceCode} | 
[**UserSubscriptionControllerVerifyCode**](UserSubscriptionControllerApi.md#UserSubscriptionControllerVerifyCode) | **Post** /user-subscriptions/verify-reference-code | 



## UserSubscriptionControllerCreate

> UserSubscriptionControllerCreate(ctx, optional)



### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***UserSubscriptionControllerCreateOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a UserSubscriptionControllerCreateOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **optional.Map[string]interface{}**|  | 

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UserSubscriptionControllerCreateUserSubscriptionBySubId

> UserSubscription UserSubscriptionControllerCreateUserSubscriptionBySubId(ctx, subscriptionId)



### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**subscriptionId** | **float32**|  | 

### Return type

[**UserSubscription**](UserSubscription.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UserSubscriptionControllerFindSubscriptionsByCategory

> []Subscription UserSubscriptionControllerFindSubscriptionsByCategory(ctx, product)



### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**product** | **string**|  | 

### Return type

[**[]Subscription**](Subscription.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UserSubscriptionControllerGetByRefferenceCode

> UserSubscriptionWithRelations UserSubscriptionControllerGetByRefferenceCode(ctx, referenceCode)



### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**referenceCode** | **string**|  | 

### Return type

[**UserSubscriptionWithRelations**](UserSubscriptionWithRelations.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UserSubscriptionControllerVerifyCode

> UserSubscription UserSubscriptionControllerVerifyCode(ctx, optional)



### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***UserSubscriptionControllerVerifyCodeOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a UserSubscriptionControllerVerifyCodeOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **codeVerificationRequest** | [**optional.Interface of CodeVerificationRequest**](CodeVerificationRequest.md)|  | 

### Return type

[**UserSubscription**](UserSubscription.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

