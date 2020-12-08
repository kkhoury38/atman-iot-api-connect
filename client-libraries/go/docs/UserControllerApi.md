# \UserControllerApi

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**UserControllerCreate**](UserControllerApi.md#UserControllerCreate) | **Post** /user/register/{referenceCode} | 
[**UserControllerCreateVirtual**](UserControllerApi.md#UserControllerCreateVirtual) | **Post** /user/register/virtual | 
[**UserControllerDeleteVirtualUserById**](UserControllerApi.md#UserControllerDeleteVirtualUserById) | **Delete** /users/virtualUser/{id} | 
[**UserControllerGetVirtualUsers**](UserControllerApi.md#UserControllerGetVirtualUsers) | **Get** /user/getVirtualUsers | 
[**UserControllerLogin**](UserControllerApi.md#UserControllerLogin) | **Post** /user/login | 



## UserControllerCreate

> User UserControllerCreate(ctx, referenceCode, optional)



Used for registering a new <b>User</b>.<br><br><i><b>References:</b> <a href=\"/documentation.html#tocsuser\" target=\"_blank\">UserModel</a></i>

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**referenceCode** | **string**|  | 
 **optional** | ***UserControllerCreateOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a UserControllerCreateOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **userExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode** | [**optional.Interface of UserExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode**](UserExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode.md)|  | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UserControllerCreateVirtual

> User UserControllerCreateVirtual(ctx, optional)



Used for registering a new <b>Virtual User</b> by a <b>User</b>, identified by the provided <i>token.</i><br><br><i><b>References:</b> <a href=\"/documentation.html#tocsuser\" target=\"_blank\">UserModel</a></i>

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***UserControllerCreateVirtualOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a UserControllerCreateVirtualOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode** | [**optional.Interface of UserExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode**](UserExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode.md)|  | 

### Return type

[**User**](User.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UserControllerDeleteVirtualUserById

> UserControllerDeleteVirtualUserById(ctx, id)



Deletes Virtual User by Id

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


## UserControllerGetVirtualUsers

> []UserExcludingPasswdEmailRolesIsVirtualSubscriptionReferenceCode UserControllerGetVirtualUsers(ctx, )



Returns users under administrator account

### Required Parameters

This endpoint does not need any parameter.

### Return type

[**[]UserExcludingPasswdEmailRolesIsVirtualSubscriptionReferenceCode**](UserExcluding_passwd-email-roles-isVirtual-subscriptionReferenceCode_.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UserControllerLogin

> Token UserControllerLogin(ctx, optional)



Used for <b>User</b> and <b>Virtual User</b> login. Exchanges <i>username/password</i> with an authorization <i>token</i>. Please enter the email provided durring registration in the username field.<br><br><i><b>References:</b> <a href=\"/documentation.html#tocsuser\" target=\"_blank\">UserModel</a></i>

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***UserControllerLoginOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a UserControllerLoginOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userExcludingIdEmailIsVirtualRolesSubscriptionReferenceCode** | [**optional.Interface of UserExcludingIdEmailIsVirtualRolesSubscriptionReferenceCode**](UserExcludingIdEmailIsVirtualRolesSubscriptionReferenceCode.md)|  | 

### Return type

[**Token**](Token.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

