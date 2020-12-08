# OpenapiClient::EventControllerApi

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**event_controller_create_now**](EventControllerApi.md#event_controller_create_now) | **POST** /event | 
[**event_controller_create_related_dev**](EventControllerApi.md#event_controller_create_related_dev) | **POST** /event/related-device | 
[**event_controller_create_rule**](EventControllerApi.md#event_controller_create_rule) | **POST** /event/rule | 
[**event_controller_create_rule_subscription**](EventControllerApi.md#event_controller_create_rule_subscription) | **POST** /event/rule/subscription | 
[**event_controller_find**](EventControllerApi.md#event_controller_find) | **GET** /events/all/{assetId} | 
[**event_controller_find_unresolved**](EventControllerApi.md#event_controller_find_unresolved) | **GET** /events/unresolved/{assetId} | 
[**event_controller_process_subscriptions**](EventControllerApi.md#event_controller_process_subscriptions) | **GET** /event/process | 
[**event_controller_update_by_id**](EventControllerApi.md#event_controller_update_by_id) | **PATCH** /event/resolve/{id} | 



## event_controller_create_now

> Event event_controller_create_now(opts)



### Example

```ruby
# load the gem
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::EventControllerApi.new
opts = {
  event_excluding_id_resolved_timestamp_resolution_timestamp: OpenapiClient::EventExcludingIdResolvedTimestampResolutionTimestamp.new # EventExcludingIdResolvedTimestampResolutionTimestamp | 
}

begin
  result = api_instance.event_controller_create_now(opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling EventControllerApi->event_controller_create_now: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **event_excluding_id_resolved_timestamp_resolution_timestamp** | [**EventExcludingIdResolvedTimestampResolutionTimestamp**](EventExcludingIdResolvedTimestampResolutionTimestamp.md)|  | [optional] 

### Return type

[**Event**](Event.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## event_controller_create_related_dev

> EventRelatedDevice event_controller_create_related_dev(opts)



### Example

```ruby
# load the gem
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::EventControllerApi.new
opts = {
  event_related_device_excluding_id: OpenapiClient::EventRelatedDeviceExcludingId.new # EventRelatedDeviceExcludingId | 
}

begin
  result = api_instance.event_controller_create_related_dev(opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling EventControllerApi->event_controller_create_related_dev: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **event_related_device_excluding_id** | [**EventRelatedDeviceExcludingId**](EventRelatedDeviceExcludingId.md)|  | [optional] 

### Return type

[**EventRelatedDevice**](EventRelatedDevice.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## event_controller_create_rule

> EventRule event_controller_create_rule(opts)



### Example

```ruby
# load the gem
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::EventControllerApi.new
opts = {
  request_event_create_rule: OpenapiClient::RequestEventCreateRule.new # RequestEventCreateRule | 
}

begin
  result = api_instance.event_controller_create_rule(opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling EventControllerApi->event_controller_create_rule: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request_event_create_rule** | [**RequestEventCreateRule**](RequestEventCreateRule.md)|  | [optional] 

### Return type

[**EventRule**](EventRule.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## event_controller_create_rule_subscription

> EventRuleSubscription event_controller_create_rule_subscription(opts)



### Example

```ruby
# load the gem
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::EventControllerApi.new
opts = {
  event_rule_subscription_excluding_id_last_exec_timestamp: OpenapiClient::EventRuleSubscriptionExcludingIdLastExecTimestamp.new # EventRuleSubscriptionExcludingIdLastExecTimestamp | 
}

begin
  result = api_instance.event_controller_create_rule_subscription(opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling EventControllerApi->event_controller_create_rule_subscription: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **event_rule_subscription_excluding_id_last_exec_timestamp** | [**EventRuleSubscriptionExcludingIdLastExecTimestamp**](EventRuleSubscriptionExcludingIdLastExecTimestamp.md)|  | [optional] 

### Return type

[**EventRuleSubscription**](EventRuleSubscription.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## event_controller_find

> Array&lt;ResponseEventAssetEvents&gt; event_controller_find(asset_id)



### Example

```ruby
# load the gem
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::EventControllerApi.new
asset_id = 3.4 # Float | 

begin
  result = api_instance.event_controller_find(asset_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling EventControllerApi->event_controller_find: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset_id** | **Float**|  | 

### Return type

[**Array&lt;ResponseEventAssetEvents&gt;**](ResponseEventAssetEvents.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## event_controller_find_unresolved

> Array&lt;ResponseEventAssetEvents&gt; event_controller_find_unresolved(asset_id)



### Example

```ruby
# load the gem
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::EventControllerApi.new
asset_id = 3.4 # Float | 

begin
  result = api_instance.event_controller_find_unresolved(asset_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling EventControllerApi->event_controller_find_unresolved: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset_id** | **Float**|  | 

### Return type

[**Array&lt;ResponseEventAssetEvents&gt;**](ResponseEventAssetEvents.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## event_controller_process_subscriptions

> event_controller_process_subscriptions



### Example

```ruby
# load the gem
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::EventControllerApi.new

begin
  api_instance.event_controller_process_subscriptions
rescue OpenapiClient::ApiError => e
  puts "Exception when calling EventControllerApi->event_controller_process_subscriptions: #{e}"
end
```

### Parameters

This endpoint does not need any parameter.

### Return type

nil (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## event_controller_update_by_id

> event_controller_update_by_id(id)



### Example

```ruby
# load the gem
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::EventControllerApi.new
id = 3.4 # Float | 

begin
  api_instance.event_controller_update_by_id(id)
rescue OpenapiClient::ApiError => e
  puts "Exception when calling EventControllerApi->event_controller_update_by_id: #{e}"
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

