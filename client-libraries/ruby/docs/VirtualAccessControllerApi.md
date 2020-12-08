# OpenapiClient::VirtualAccessControllerApi

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**virtual_access_controller_create_access_by_group**](VirtualAccessControllerApi.md#virtual_access_controller_create_access_by_group) | **POST** /virtual-access/by-asset-group | 
[**virtual_access_controller_create_access_by_right**](VirtualAccessControllerApi.md#virtual_access_controller_create_access_by_right) | **POST** /virtual-access/by-asset | 
[**virtual_access_controller_delete_by_id**](VirtualAccessControllerApi.md#virtual_access_controller_delete_by_id) | **DELETE** /virtual-access/{id} | 
[**virtual_access_controller_find_by_user_id**](VirtualAccessControllerApi.md#virtual_access_controller_find_by_user_id) | **GET** /virtual-access/by-userId/{userId} | 



## virtual_access_controller_create_access_by_group

> Array&lt;VirtualAccess&gt; virtual_access_controller_create_access_by_group(opts)



### Example

```ruby
# load the gem
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::VirtualAccessControllerApi.new
opts = {
  request_virtual_access_right_excluding_asset_id: OpenapiClient::RequestVirtualAccessRightExcludingAssetId.new # RequestVirtualAccessRightExcludingAssetId | 
}

begin
  result = api_instance.virtual_access_controller_create_access_by_group(opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling VirtualAccessControllerApi->virtual_access_controller_create_access_by_group: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request_virtual_access_right_excluding_asset_id** | [**RequestVirtualAccessRightExcludingAssetId**](RequestVirtualAccessRightExcludingAssetId.md)|  | [optional] 

### Return type

[**Array&lt;VirtualAccess&gt;**](VirtualAccess.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## virtual_access_controller_create_access_by_right

> VirtualAccess virtual_access_controller_create_access_by_right(opts)



### Example

```ruby
# load the gem
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::VirtualAccessControllerApi.new
opts = {
  request_virtual_access_right_excluding_asset_group_id: OpenapiClient::RequestVirtualAccessRightExcludingAssetGroupId.new # RequestVirtualAccessRightExcludingAssetGroupId | 
}

begin
  result = api_instance.virtual_access_controller_create_access_by_right(opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling VirtualAccessControllerApi->virtual_access_controller_create_access_by_right: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request_virtual_access_right_excluding_asset_group_id** | [**RequestVirtualAccessRightExcludingAssetGroupId**](RequestVirtualAccessRightExcludingAssetGroupId.md)|  | [optional] 

### Return type

[**VirtualAccess**](VirtualAccess.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## virtual_access_controller_delete_by_id

> virtual_access_controller_delete_by_id(id)



### Example

```ruby
# load the gem
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::VirtualAccessControllerApi.new
id = 3.4 # Float | 

begin
  api_instance.virtual_access_controller_delete_by_id(id)
rescue OpenapiClient::ApiError => e
  puts "Exception when calling VirtualAccessControllerApi->virtual_access_controller_delete_by_id: #{e}"
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


## virtual_access_controller_find_by_user_id

> Array&lt;VirtualAccess&gt; virtual_access_controller_find_by_user_id(user_id)



### Example

```ruby
# load the gem
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::VirtualAccessControllerApi.new
user_id = 3.4 # Float | 

begin
  result = api_instance.virtual_access_controller_find_by_user_id(user_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling VirtualAccessControllerApi->virtual_access_controller_find_by_user_id: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **Float**|  | 

### Return type

[**Array&lt;VirtualAccess&gt;**](VirtualAccess.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

