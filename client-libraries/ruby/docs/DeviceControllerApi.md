# OpenapiClient::DeviceControllerApi

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**device_controller_create**](DeviceControllerApi.md#device_controller_create) | **POST** /device/{dataLoggerId} | 
[**device_controller_create_channel**](DeviceControllerApi.md#device_controller_create_channel) | **POST** /device/{deviceId}/channel | 
[**device_controller_disable_channel_monitoring**](DeviceControllerApi.md#device_controller_disable_channel_monitoring) | **GET** /device/{deviceId}/channel/{channelId}/disable-monitoring/all/{all} | 
[**device_controller_enable_channel_monitoring**](DeviceControllerApi.md#device_controller_enable_channel_monitoring) | **GET** /device/{deviceId}/channel/{channelId}/enable-monitoring/all/{all} | 
[**device_controller_find**](DeviceControllerApi.md#device_controller_find) | **GET** /devices/{dataLoggerId} | 
[**device_controller_find_channel_types**](DeviceControllerApi.md#device_controller_find_channel_types) | **GET** /device/{deviceId}/channelTypes | 
[**device_controller_find_channels**](DeviceControllerApi.md#device_controller_find_channels) | **GET** /device/{deviceId}/channels | 
[**device_controller_get_devices_with_type**](DeviceControllerApi.md#device_controller_get_devices_with_type) | **POST** /devices/with-device-type | 
[**device_controller_update_by_id**](DeviceControllerApi.md#device_controller_update_by_id) | **PATCH** /device/{id} | 



## device_controller_create

> Device device_controller_create(data_logger_id, opts)



Used for creating a new <b>Device</b>, belonging to a <b>DataLogger</b> with id <i>dataLoggerId</i> by an authorized <b>User</b> identified by the provided <i>token</i>.<br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-dataloggercontroller\" target=\"_blank\">DataLoggerController</a>, <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocsdevice\" target=\"_blank\">DeviceModel</a></i>

### Example

```ruby
# load the gem
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::DeviceControllerApi.new
data_logger_id = 3.4 # Float | 
opts = {
  device_excluding_id_data_logger_id: OpenapiClient::DeviceExcludingIdDataLoggerId.new # DeviceExcludingIdDataLoggerId | 
}

begin
  result = api_instance.device_controller_create(data_logger_id, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling DeviceControllerApi->device_controller_create: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_logger_id** | **Float**|  | 
 **device_excluding_id_data_logger_id** | [**DeviceExcludingIdDataLoggerId**](DeviceExcludingIdDataLoggerId.md)|  | [optional] 

### Return type

[**Device**](Device.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## device_controller_create_channel

> Channel device_controller_create_channel(device_id, opts)



Used for creating a new <b>Channel</b>, belonging to a <b>Device</b> with id <i>deviceId</i> by an authorized <b>User</b> identified by the provided <i>token</i>.<br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocschannel\" target=\"_blank\">ChannelModel</a>, <a href=\"/documentation.html#tocsdevice\" target=\"_blank\">DeviceModel</a></i>

### Example

```ruby
# load the gem
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::DeviceControllerApi.new
device_id = 3.4 # Float | 
opts = {
  channel_excluding_id_device_id: OpenapiClient::ChannelExcludingIdDeviceId.new # ChannelExcludingIdDeviceId | 
}

begin
  result = api_instance.device_controller_create_channel(device_id, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling DeviceControllerApi->device_controller_create_channel: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_id** | **Float**|  | 
 **channel_excluding_id_device_id** | [**ChannelExcludingIdDeviceId**](ChannelExcludingIdDeviceId.md)|  | [optional] 

### Return type

[**Channel**](Channel.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## device_controller_disable_channel_monitoring

> device_controller_disable_channel_monitoring(device_id, channel_id, all)



Disable monitoring of <b>Channel</b> identified by <i>channelId</i>, in <b>Device</b> identified by <i>deviceId</i>, owned by <b>User</b> authorized by <i>token</i>.<br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocschannel\" target=\"_blank\">ChannelModel</a>, <a href=\"/documentation.html#tocsdevice\" target=\"_blank\">DeviceModel</a></i>

### Example

```ruby
# load the gem
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::DeviceControllerApi.new
device_id = 3.4 # Float | 
channel_id = 3.4 # Float | 
all = true # Boolean | 

begin
  api_instance.device_controller_disable_channel_monitoring(device_id, channel_id, all)
rescue OpenapiClient::ApiError => e
  puts "Exception when calling DeviceControllerApi->device_controller_disable_channel_monitoring: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_id** | **Float**|  | 
 **channel_id** | **Float**|  | 
 **all** | **Boolean**|  | 

### Return type

nil (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## device_controller_enable_channel_monitoring

> device_controller_enable_channel_monitoring(device_id, channel_id, all)



Enable monitoring of <b>Channel</b> identified by <i>channelId</i>, in <b>Device</b> identified by <i>deviceId</i>, owned by <b>User</b> authorized by <i>token</i>.<br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocschannel\" target=\"_blank\">ChannelModel</a>, <a href=\"/documentation.html#tocsdevice\" target=\"_blank\">DeviceModel</a></i>

### Example

```ruby
# load the gem
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::DeviceControllerApi.new
device_id = 3.4 # Float | 
channel_id = 3.4 # Float | 
all = true # Boolean | 

begin
  api_instance.device_controller_enable_channel_monitoring(device_id, channel_id, all)
rescue OpenapiClient::ApiError => e
  puts "Exception when calling DeviceControllerApi->device_controller_enable_channel_monitoring: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_id** | **Float**|  | 
 **channel_id** | **Float**|  | 
 **all** | **Boolean**|  | 

### Return type

nil (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## device_controller_find

> Array&lt;Device&gt; device_controller_find(data_logger_id)



Used for getting the <b>Devices</b>, belonging to a <b>DataLogger</b> with id <i>dataLoggerId</i> by an authorized <b>User</b> identified by the provided <i>token</i>.<br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-dataloggercontroller\" target=\"_blank\">DataLoggerController</a>, <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocsdevice\" target=\"_blank\">DeviceModel</a></i>

### Example

```ruby
# load the gem
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::DeviceControllerApi.new
data_logger_id = 3.4 # Float | 

begin
  result = api_instance.device_controller_find(data_logger_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling DeviceControllerApi->device_controller_find: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_logger_id** | **Float**|  | 

### Return type

[**Array&lt;Device&gt;**](Device.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## device_controller_find_channel_types

> Array&lt;ChannelType&gt; device_controller_find_channel_types(device_id)



Used for getting the  <b>Channel</b><b>Types</b> of <b>Channels</b> belonging to a <b>Device</b> with id <i>deviceId</i>, by an authorized <b>User</b> identified by the provided <i>token</i>.<br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocschannel\" target=\"_blank\">ChannelModel</a>, <a href=\"/documentation.html#tocschanneltype\" target=\"_blank\">ChannelTypeModel</a>, <a href=\"/documentation.html#tocsdevice\" target=\"_blank\">DeviceModel</a></i>

### Example

```ruby
# load the gem
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::DeviceControllerApi.new
device_id = 3.4 # Float | 

begin
  result = api_instance.device_controller_find_channel_types(device_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling DeviceControllerApi->device_controller_find_channel_types: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_id** | **Float**|  | 

### Return type

[**Array&lt;ChannelType&gt;**](ChannelType.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## device_controller_find_channels

> Array&lt;Channel&gt; device_controller_find_channels(device_id)



Used for getting <b>Channel</b><b>s</b>, belonging to a <b>Device</b> with id <i>deviceId</i>, by an authorized <b>User</b> identified by the provided <i>token</i>.<br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocschannel\" target=\"_blank\">ChannelModel</a>, <a href=\"/documentation.html#tocsdevice\" target=\"_blank\">DeviceModel</a></i>

### Example

```ruby
# load the gem
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::DeviceControllerApi.new
device_id = 3.4 # Float | 

begin
  result = api_instance.device_controller_find_channels(device_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling DeviceControllerApi->device_controller_find_channels: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_id** | **Float**|  | 

### Return type

[**Array&lt;Channel&gt;**](Channel.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## device_controller_get_devices_with_type

> Array&lt;DeviceWithType&gt; device_controller_get_devices_with_type(opts)



Returns array of devices with their device types

### Example

```ruby
# load the gem
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::DeviceControllerApi.new
opts = {
  device_excluding_description_serial_no_data_logger_id_device_type_id: [OpenapiClient::DeviceExcludingDescriptionSerialNoDataLoggerIdDeviceTypeId.new] # Array<DeviceExcludingDescriptionSerialNoDataLoggerIdDeviceTypeId> | 
}

begin
  result = api_instance.device_controller_get_devices_with_type(opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling DeviceControllerApi->device_controller_get_devices_with_type: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_excluding_description_serial_no_data_logger_id_device_type_id** | [**Array&lt;DeviceExcludingDescriptionSerialNoDataLoggerIdDeviceTypeId&gt;**](DeviceExcludingDescriptionSerialNoDataLoggerIdDeviceTypeId.md)|  | [optional] 

### Return type

[**Array&lt;DeviceWithType&gt;**](DeviceWithType.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## device_controller_update_by_id

> device_controller_update_by_id(id, opts)



### Example

```ruby
# load the gem
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::DeviceControllerApi.new
id = 3.4 # Float | 
opts = {
  device_excluding_id_serial_no_data_logger_id_device_type_id: OpenapiClient::DeviceExcludingIdSerialNoDataLoggerIdDeviceTypeId.new # DeviceExcludingIdSerialNoDataLoggerIdDeviceTypeId | 
}

begin
  api_instance.device_controller_update_by_id(id, opts)
rescue OpenapiClient::ApiError => e
  puts "Exception when calling DeviceControllerApi->device_controller_update_by_id: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Float**|  | 
 **device_excluding_id_serial_no_data_logger_id_device_type_id** | [**DeviceExcludingIdSerialNoDataLoggerIdDeviceTypeId**](DeviceExcludingIdSerialNoDataLoggerIdDeviceTypeId.md)|  | [optional] 

### Return type

nil (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

