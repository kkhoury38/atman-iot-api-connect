# OpenapiClient::DeviceTypeChannelTypeControllerApi

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**device_type_channel_type_controller_count**](DeviceTypeChannelTypeControllerApi.md#device_type_channel_type_controller_count) | **GET** /device-type-channel-type/{deviceTypeId}/count | 
[**device_type_channel_type_controller_create**](DeviceTypeChannelTypeControllerApi.md#device_type_channel_type_controller_create) | **POST** /device-type-channel-type/{deviceTypeId} | 
[**device_type_channel_type_controller_device_type_channel_categories**](DeviceTypeChannelTypeControllerApi.md#device_type_channel_type_controller_device_type_channel_categories) | **GET** /device-type-channel-type/{deviceTypeId}/channel-categories | 
[**device_type_channel_type_controller_find**](DeviceTypeChannelTypeControllerApi.md#device_type_channel_type_controller_find) | **GET** /device-type-channel-type/{deviceTypeId}/page/{page}/count/{count} | 
[**device_type_channel_type_controller_update_by_id**](DeviceTypeChannelTypeControllerApi.md#device_type_channel_type_controller_update_by_id) | **PATCH** /device-type-channel-type/channel-type/{channelTypeId} | 



## device_type_channel_type_controller_count

> LoopbackCount device_type_channel_type_controller_count(device_type_id)



### Example

```ruby
# load the gem
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::DeviceTypeChannelTypeControllerApi.new
device_type_id = 3.4 # Float | 

begin
  result = api_instance.device_type_channel_type_controller_count(device_type_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling DeviceTypeChannelTypeControllerApi->device_type_channel_type_controller_count: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_type_id** | **Float**|  | 

### Return type

[**LoopbackCount**](LoopbackCount.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## device_type_channel_type_controller_create

> ChannelType device_type_channel_type_controller_create(device_type_id, opts)



### Example

```ruby
# load the gem
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::DeviceTypeChannelTypeControllerApi.new
device_type_id = 3.4 # Float | 
opts = {
  channel_type_excluding_id_device_type_id: OpenapiClient::ChannelTypeExcludingIdDeviceTypeId.new # ChannelTypeExcludingIdDeviceTypeId | 
}

begin
  result = api_instance.device_type_channel_type_controller_create(device_type_id, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling DeviceTypeChannelTypeControllerApi->device_type_channel_type_controller_create: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_type_id** | **Float**|  | 
 **channel_type_excluding_id_device_type_id** | [**ChannelTypeExcludingIdDeviceTypeId**](ChannelTypeExcludingIdDeviceTypeId.md)|  | [optional] 

### Return type

[**ChannelType**](ChannelType.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## device_type_channel_type_controller_device_type_channel_categories

> Array&lt;ChannelTypeExcludingNameDescriptionUnitChannelTypeDeviceTypeId&gt; device_type_channel_type_controller_device_type_channel_categories(device_type_id)



### Example

```ruby
# load the gem
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::DeviceTypeChannelTypeControllerApi.new
device_type_id = 3.4 # Float | 

begin
  result = api_instance.device_type_channel_type_controller_device_type_channel_categories(device_type_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling DeviceTypeChannelTypeControllerApi->device_type_channel_type_controller_device_type_channel_categories: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_type_id** | **Float**|  | 

### Return type

[**Array&lt;ChannelTypeExcludingNameDescriptionUnitChannelTypeDeviceTypeId&gt;**](ChannelTypeExcludingNameDescriptionUnitChannelTypeDeviceTypeId.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## device_type_channel_type_controller_find

> Array&lt;ChannelType&gt; device_type_channel_type_controller_find(device_type_id, page, count)



### Example

```ruby
# load the gem
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::DeviceTypeChannelTypeControllerApi.new
device_type_id = 3.4 # Float | 
page = 3.4 # Float | 
count = 3.4 # Float | 

begin
  result = api_instance.device_type_channel_type_controller_find(device_type_id, page, count)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling DeviceTypeChannelTypeControllerApi->device_type_channel_type_controller_find: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_type_id** | **Float**|  | 
 **page** | **Float**|  | 
 **count** | **Float**|  | 

### Return type

[**Array&lt;ChannelType&gt;**](ChannelType.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## device_type_channel_type_controller_update_by_id

> device_type_channel_type_controller_update_by_id(channel_type_id, opts)



### Example

```ruby
# load the gem
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::DeviceTypeChannelTypeControllerApi.new
channel_type_id = 3.4 # Float | 
opts = {
  channel_type_excluding_id_name_device_type_id: OpenapiClient::ChannelTypeExcludingIdNameDeviceTypeId.new # ChannelTypeExcludingIdNameDeviceTypeId | 
}

begin
  api_instance.device_type_channel_type_controller_update_by_id(channel_type_id, opts)
rescue OpenapiClient::ApiError => e
  puts "Exception when calling DeviceTypeChannelTypeControllerApi->device_type_channel_type_controller_update_by_id: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channel_type_id** | **Float**|  | 
 **channel_type_excluding_id_name_device_type_id** | [**ChannelTypeExcludingIdNameDeviceTypeId**](ChannelTypeExcludingIdNameDeviceTypeId.md)|  | [optional] 

### Return type

nil (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

