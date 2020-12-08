# OpenapiClient::UserControllerApi

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**user_controller_create**](UserControllerApi.md#user_controller_create) | **POST** /user/register/{referenceCode} | 
[**user_controller_create_virtual**](UserControllerApi.md#user_controller_create_virtual) | **POST** /user/register/virtual | 
[**user_controller_delete_virtual_user_by_id**](UserControllerApi.md#user_controller_delete_virtual_user_by_id) | **DELETE** /users/virtualUser/{id} | 
[**user_controller_get_virtual_users**](UserControllerApi.md#user_controller_get_virtual_users) | **GET** /user/getVirtualUsers | 
[**user_controller_login**](UserControllerApi.md#user_controller_login) | **POST** /user/login | 



## user_controller_create

> User user_controller_create(reference_code, opts)



Used for registering a new <b>User</b>.<br><br><i><b>References:</b> <a href=\"/documentation.html#tocsuser\" target=\"_blank\">UserModel</a></i>

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::UserControllerApi.new
reference_code = 'reference_code_example' # String | 
opts = {
  user_excluding_id_username_is_virtual_roles_subscription_reference_code: OpenapiClient::UserExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode.new # UserExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode | 
}

begin
  result = api_instance.user_controller_create(reference_code, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling UserControllerApi->user_controller_create: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reference_code** | **String**|  | 
 **user_excluding_id_username_is_virtual_roles_subscription_reference_code** | [**UserExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode**](UserExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode.md)|  | [optional] 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## user_controller_create_virtual

> User user_controller_create_virtual(opts)



Used for registering a new <b>Virtual User</b> by a <b>User</b>, identified by the provided <i>token.</i><br><br><i><b>References:</b> <a href=\"/documentation.html#tocsuser\" target=\"_blank\">UserModel</a></i>

### Example

```ruby
# load the gem
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::UserControllerApi.new
opts = {
  user_excluding_id_username_is_virtual_roles_subscription_reference_code: OpenapiClient::UserExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode.new # UserExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode | 
}

begin
  result = api_instance.user_controller_create_virtual(opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling UserControllerApi->user_controller_create_virtual: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_excluding_id_username_is_virtual_roles_subscription_reference_code** | [**UserExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode**](UserExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode.md)|  | [optional] 

### Return type

[**User**](User.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## user_controller_delete_virtual_user_by_id

> user_controller_delete_virtual_user_by_id(id)



Deletes Virtual User by Id

### Example

```ruby
# load the gem
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::UserControllerApi.new
id = 3.4 # Float | 

begin
  api_instance.user_controller_delete_virtual_user_by_id(id)
rescue OpenapiClient::ApiError => e
  puts "Exception when calling UserControllerApi->user_controller_delete_virtual_user_by_id: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Float**|  | 

### Return type

nil (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## user_controller_get_virtual_users

> Array&lt;UserExcludingPasswdEmailRolesIsVirtualSubscriptionReferenceCode&gt; user_controller_get_virtual_users



Returns users under administrator account

### Example

```ruby
# load the gem
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::UserControllerApi.new

begin
  result = api_instance.user_controller_get_virtual_users
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling UserControllerApi->user_controller_get_virtual_users: #{e}"
end
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;UserExcludingPasswdEmailRolesIsVirtualSubscriptionReferenceCode&gt;**](UserExcludingPasswdEmailRolesIsVirtualSubscriptionReferenceCode.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## user_controller_login

> Token user_controller_login(opts)



Used for <b>User</b> and <b>Virtual User</b> login. Exchanges <i>username/password</i> with an authorization <i>token</i>. Please enter the email provided durring registration in the username field.<br><br><i><b>References:</b> <a href=\"/documentation.html#tocsuser\" target=\"_blank\">UserModel</a></i>

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::UserControllerApi.new
opts = {
  user_excluding_id_email_is_virtual_roles_subscription_reference_code: OpenapiClient::UserExcludingIdEmailIsVirtualRolesSubscriptionReferenceCode.new # UserExcludingIdEmailIsVirtualRolesSubscriptionReferenceCode | 
}

begin
  result = api_instance.user_controller_login(opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling UserControllerApi->user_controller_login: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_excluding_id_email_is_virtual_roles_subscription_reference_code** | [**UserExcludingIdEmailIsVirtualRolesSubscriptionReferenceCode**](UserExcludingIdEmailIsVirtualRolesSubscriptionReferenceCode.md)|  | [optional] 

### Return type

[**Token**](Token.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

