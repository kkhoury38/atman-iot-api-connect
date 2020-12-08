# OpenapiClient::DeviceEventControllerApi

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**device_event_controller_count_not_viewed**](DeviceEventControllerApi.md#device_event_controller_count_not_viewed) | **GET** /device-events/by-asset/count-not-viewed/{assetId} | 
[**device_event_controller_find**](DeviceEventControllerApi.md#device_event_controller_find) | **GET** /device-events/assetId/{assetId}/page/{page}/count/{count} | 
[**device_event_controller_update_viewed_by**](DeviceEventControllerApi.md#device_event_controller_update_viewed_by) | **GET** /device-events/mark-read/{eventId} | 



## device_event_controller_count_not_viewed

> LoopbackCount device_event_controller_count_not_viewed(asset_id)



### Example

```ruby
# load the gem
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::DeviceEventControllerApi.new
asset_id = 3.4 # Float | 

begin
  result = api_instance.device_event_controller_count_not_viewed(asset_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling DeviceEventControllerApi->device_event_controller_count_not_viewed: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset_id** | **Float**|  | 

### Return type

[**LoopbackCount**](LoopbackCount.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## device_event_controller_find

> Array&lt;DeviceEventWithRelations&gt; device_event_controller_find(asset_id, page, count)



### Example

```ruby
# load the gem
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::DeviceEventControllerApi.new
asset_id = 3.4 # Float | 
page = 3.4 # Float | 
count = 3.4 # Float | 

begin
  result = api_instance.device_event_controller_find(asset_id, page, count)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling DeviceEventControllerApi->device_event_controller_find: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset_id** | **Float**|  | 
 **page** | **Float**|  | 
 **count** | **Float**|  | 

### Return type

[**Array&lt;DeviceEventWithRelations&gt;**](DeviceEventWithRelations.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## device_event_controller_update_viewed_by

> device_event_controller_update_viewed_by(event_id)



### Example

```ruby
# load the gem
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::DeviceEventControllerApi.new
event_id = 3.4 # Float | 

begin
  api_instance.device_event_controller_update_viewed_by(event_id)
rescue OpenapiClient::ApiError => e
  puts "Exception when calling DeviceEventControllerApi->device_event_controller_update_viewed_by: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **event_id** | **Float**|  | 

### Return type

nil (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

