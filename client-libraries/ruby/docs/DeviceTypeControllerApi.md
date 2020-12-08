# OpenapiClient::DeviceTypeControllerApi

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**device_type_controller_count**](DeviceTypeControllerApi.md#device_type_controller_count) | **GET** /device-type/count | 
[**device_type_controller_create**](DeviceTypeControllerApi.md#device_type_controller_create) | **POST** /device-type | 
[**device_type_controller_find**](DeviceTypeControllerApi.md#device_type_controller_find) | **GET** /device-type/get-all/page/{page}/count/{count} | 
[**device_type_controller_get_asset_device_categories**](DeviceTypeControllerApi.md#device_type_controller_get_asset_device_categories) | **GET** /device-type/device-categories-in-asset/{assetId} | 
[**device_type_controller_update_by_id**](DeviceTypeControllerApi.md#device_type_controller_update_by_id) | **PATCH** /device-type/{id} | 



## device_type_controller_count

> LoopbackCount device_type_controller_count



### Example

```ruby
# load the gem
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::DeviceTypeControllerApi.new

begin
  result = api_instance.device_type_controller_count
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling DeviceTypeControllerApi->device_type_controller_count: #{e}"
end
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**LoopbackCount**](LoopbackCount.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## device_type_controller_create

> DeviceType device_type_controller_create(opts)



### Example

```ruby
# load the gem
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::DeviceTypeControllerApi.new
opts = {
  device_type: OpenapiClient::DeviceType.new # DeviceType | 
}

begin
  result = api_instance.device_type_controller_create(opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling DeviceTypeControllerApi->device_type_controller_create: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_type** | [**DeviceType**](DeviceType.md)|  | [optional] 

### Return type

[**DeviceType**](DeviceType.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## device_type_controller_find

> Array&lt;DeviceType&gt; device_type_controller_find(page, count)



### Example

```ruby
# load the gem
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::DeviceTypeControllerApi.new
page = 3.4 # Float | 
count = 3.4 # Float | 

begin
  result = api_instance.device_type_controller_find(page, count)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling DeviceTypeControllerApi->device_type_controller_find: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Float**|  | 
 **count** | **Float**|  | 

### Return type

[**Array&lt;DeviceType&gt;**](DeviceType.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## device_type_controller_get_asset_device_categories

> Array&lt;DeviceTypeExcludingModelDescriptionManufacturer&gt; device_type_controller_get_asset_device_categories(asset_id)



### Example

```ruby
# load the gem
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::DeviceTypeControllerApi.new
asset_id = 3.4 # Float | 

begin
  result = api_instance.device_type_controller_get_asset_device_categories(asset_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling DeviceTypeControllerApi->device_type_controller_get_asset_device_categories: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset_id** | **Float**|  | 

### Return type

[**Array&lt;DeviceTypeExcludingModelDescriptionManufacturer&gt;**](DeviceTypeExcludingModelDescriptionManufacturer.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## device_type_controller_update_by_id

> device_type_controller_update_by_id(id, opts)



### Example

```ruby
# load the gem
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::DeviceTypeControllerApi.new
id = 3.4 # Float | 
opts = {
  device_type_excluding_id_model_manufacturer: OpenapiClient::DeviceTypeExcludingIdModelManufacturer.new # DeviceTypeExcludingIdModelManufacturer | 
}

begin
  api_instance.device_type_controller_update_by_id(id, opts)
rescue OpenapiClient::ApiError => e
  puts "Exception when calling DeviceTypeControllerApi->device_type_controller_update_by_id: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Float**|  | 
 **device_type_excluding_id_model_manufacturer** | [**DeviceTypeExcludingIdModelManufacturer**](DeviceTypeExcludingIdModelManufacturer.md)|  | [optional] 

### Return type

nil (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

