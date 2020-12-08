# OpenapiClient::UserSubscriptionControllerApi

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**user_subscription_controller_create**](UserSubscriptionControllerApi.md#user_subscription_controller_create) | **POST** /user-subscriptions/paypal/callback | 
[**user_subscription_controller_create_user_subscription_by_sub_id**](UserSubscriptionControllerApi.md#user_subscription_controller_create_user_subscription_by_sub_id) | **GET** /user-subscription/get-new/{subscriptionId} | 
[**user_subscription_controller_find_subscriptions_by_category**](UserSubscriptionControllerApi.md#user_subscription_controller_find_subscriptions_by_category) | **GET** /user-subscription/subscriptions/{product} | 
[**user_subscription_controller_get_by_refference_code**](UserSubscriptionControllerApi.md#user_subscription_controller_get_by_refference_code) | **GET** /user-subscription/get-by-reference-code/{referenceCode} | 
[**user_subscription_controller_verify_code**](UserSubscriptionControllerApi.md#user_subscription_controller_verify_code) | **POST** /user-subscriptions/verify-reference-code | 



## user_subscription_controller_create

> user_subscription_controller_create(opts)



### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::UserSubscriptionControllerApi.new
opts = {
  body: nil # Object | 
}

begin
  api_instance.user_subscription_controller_create(opts)
rescue OpenapiClient::ApiError => e
  puts "Exception when calling UserSubscriptionControllerApi->user_subscription_controller_create: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**|  | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## user_subscription_controller_create_user_subscription_by_sub_id

> UserSubscription user_subscription_controller_create_user_subscription_by_sub_id(subscription_id)



### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::UserSubscriptionControllerApi.new
subscription_id = 3.4 # Float | 

begin
  result = api_instance.user_subscription_controller_create_user_subscription_by_sub_id(subscription_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling UserSubscriptionControllerApi->user_subscription_controller_create_user_subscription_by_sub_id: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **Float**|  | 

### Return type

[**UserSubscription**](UserSubscription.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## user_subscription_controller_find_subscriptions_by_category

> Array&lt;Subscription&gt; user_subscription_controller_find_subscriptions_by_category(product)



### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::UserSubscriptionControllerApi.new
product = 'product_example' # String | 

begin
  result = api_instance.user_subscription_controller_find_subscriptions_by_category(product)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling UserSubscriptionControllerApi->user_subscription_controller_find_subscriptions_by_category: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product** | **String**|  | 

### Return type

[**Array&lt;Subscription&gt;**](Subscription.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## user_subscription_controller_get_by_refference_code

> UserSubscriptionWithRelations user_subscription_controller_get_by_refference_code(reference_code)



### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::UserSubscriptionControllerApi.new
reference_code = 'reference_code_example' # String | 

begin
  result = api_instance.user_subscription_controller_get_by_refference_code(reference_code)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling UserSubscriptionControllerApi->user_subscription_controller_get_by_refference_code: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reference_code** | **String**|  | 

### Return type

[**UserSubscriptionWithRelations**](UserSubscriptionWithRelations.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## user_subscription_controller_verify_code

> UserSubscription user_subscription_controller_verify_code(opts)



### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::UserSubscriptionControllerApi.new
opts = {
  code_verification_request: OpenapiClient::CodeVerificationRequest.new # CodeVerificationRequest | 
}

begin
  result = api_instance.user_subscription_controller_verify_code(opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling UserSubscriptionControllerApi->user_subscription_controller_verify_code: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code_verification_request** | [**CodeVerificationRequest**](CodeVerificationRequest.md)|  | [optional] 

### Return type

[**UserSubscription**](UserSubscription.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

