# OpenapiClient::DeviceChannelControllerApi

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**device_channel_controller_find_by_period**](DeviceChannelControllerApi.md#device_channel_controller_find_by_period) | **GET** /device-channel/data-by-period/{deviceId}/{channelId}/from/{fromTS}/to/{toTs}/page/{page}/count/{count}/groupBy/{groupBy}/operation/{operation} | 
[**device_channel_controller_find_device_all_last_recorded_ts**](DeviceChannelControllerApi.md#device_channel_controller_find_device_all_last_recorded_ts) | **GET** /device-channel/last-timestamp-in-device/{deviceId} | 
[**device_channel_controller_find_device_all_last_ts**](DeviceChannelControllerApi.md#device_channel_controller_find_device_all_last_ts) | **GET** /device-channel/data-last-timestamp/all-channels/{deviceId} | 
[**device_channel_controller_find_device_channel_last_ts**](DeviceChannelControllerApi.md#device_channel_controller_find_device_channel_last_ts) | **GET** /device-channel/data-last-timestamp/{deviceId}/{channelId} | 
[**device_channel_controller_find_device_channel_last_ts_sn_ch_name**](DeviceChannelControllerApi.md#device_channel_controller_find_device_channel_last_ts_sn_ch_name) | **POST** /device-channel/data-last-timestamp-by-name/{serialNo}/{channelName} | 



## device_channel_controller_find_by_period

> ResponseDeviceChannelData device_channel_controller_find_by_period(device_id, channel_id, from_ts, to_ts, page, count, group_by, operation)



### Example

```ruby
# load the gem
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::DeviceChannelControllerApi.new
device_id = 3.4 # Float | 
channel_id = 3.4 # Float | 
from_ts = 'from_ts_example' # String | 
to_ts = 'to_ts_example' # String | 
page = 3.4 # Float | 
count = 3.4 # Float | 
group_by = 'group_by_example' # String | 
operation = 'operation_example' # String | 

begin
  result = api_instance.device_channel_controller_find_by_period(device_id, channel_id, from_ts, to_ts, page, count, group_by, operation)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling DeviceChannelControllerApi->device_channel_controller_find_by_period: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_id** | **Float**|  | 
 **channel_id** | **Float**|  | 
 **from_ts** | **String**|  | 
 **to_ts** | **String**|  | 
 **page** | **Float**|  | 
 **count** | **Float**|  | 
 **group_by** | **String**|  | 
 **operation** | **String**|  | 

### Return type

[**ResponseDeviceChannelData**](ResponseDeviceChannelData.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## device_channel_controller_find_device_all_last_recorded_ts

> Timestamp device_channel_controller_find_device_all_last_recorded_ts(device_id)



### Example

```ruby
# load the gem
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::DeviceChannelControllerApi.new
device_id = 3.4 # Float | 

begin
  result = api_instance.device_channel_controller_find_device_all_last_recorded_ts(device_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling DeviceChannelControllerApi->device_channel_controller_find_device_all_last_recorded_ts: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_id** | **Float**|  | 

### Return type

[**Timestamp**](Timestamp.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## device_channel_controller_find_device_all_last_ts

> Array&lt;ResponseDeviceChannelData&gt; device_channel_controller_find_device_all_last_ts(device_id)



### Example

```ruby
# load the gem
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::DeviceChannelControllerApi.new
device_id = 3.4 # Float | 

begin
  result = api_instance.device_channel_controller_find_device_all_last_ts(device_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling DeviceChannelControllerApi->device_channel_controller_find_device_all_last_ts: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_id** | **Float**|  | 

### Return type

[**Array&lt;ResponseDeviceChannelData&gt;**](ResponseDeviceChannelData.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## device_channel_controller_find_device_channel_last_ts

> ResponseDeviceChannelData device_channel_controller_find_device_channel_last_ts(device_id, channel_id)



### Example

```ruby
# load the gem
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::DeviceChannelControllerApi.new
device_id = 3.4 # Float | 
channel_id = 3.4 # Float | 

begin
  result = api_instance.device_channel_controller_find_device_channel_last_ts(device_id, channel_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling DeviceChannelControllerApi->device_channel_controller_find_device_channel_last_ts: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_id** | **Float**|  | 
 **channel_id** | **Float**|  | 

### Return type

[**ResponseDeviceChannelData**](ResponseDeviceChannelData.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## device_channel_controller_find_device_channel_last_ts_sn_ch_name

> ResponseDeviceChannelData device_channel_controller_find_device_channel_last_ts_sn_ch_name(serial_no, channel_name)



### Example

```ruby
# load the gem
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::DeviceChannelControllerApi.new
serial_no = 'serial_no_example' # String | 
channel_name = 'channel_name_example' # String | 

begin
  result = api_instance.device_channel_controller_find_device_channel_last_ts_sn_ch_name(serial_no, channel_name)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling DeviceChannelControllerApi->device_channel_controller_find_device_channel_last_ts_sn_ch_name: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial_no** | **String**|  | 
 **channel_name** | **String**|  | 

### Return type

[**ResponseDeviceChannelData**](ResponseDeviceChannelData.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

