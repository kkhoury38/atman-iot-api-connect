# OpenapiClient::AssetGroupControllerApi

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**asset_group_controller_create_asset_group**](AssetGroupControllerApi.md#asset_group_controller_create_asset_group) | **POST** /asset-group/user | 
[**asset_group_controller_delete_by_id**](AssetGroupControllerApi.md#asset_group_controller_delete_by_id) | **DELETE** /asset-group/{id} | 
[**asset_group_controller_find_user_asset_groups**](AssetGroupControllerApi.md#asset_group_controller_find_user_asset_groups) | **GET** /asset-groups/user | 
[**asset_group_controller_update_by_id**](AssetGroupControllerApi.md#asset_group_controller_update_by_id) | **PATCH** /asset-group/{id} | 



## asset_group_controller_create_asset_group

> AssetGroup asset_group_controller_create_asset_group(opts)



### Example

```ruby
# load the gem
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::AssetGroupControllerApi.new
opts = {
  asset_group_excluding_id_user_id: OpenapiClient::AssetGroupExcludingIdUserId.new # AssetGroupExcludingIdUserId | 
}

begin
  result = api_instance.asset_group_controller_create_asset_group(opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling AssetGroupControllerApi->asset_group_controller_create_asset_group: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset_group_excluding_id_user_id** | [**AssetGroupExcludingIdUserId**](AssetGroupExcludingIdUserId.md)|  | [optional] 

### Return type

[**AssetGroup**](AssetGroup.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## asset_group_controller_delete_by_id

> asset_group_controller_delete_by_id(id)



### Example

```ruby
# load the gem
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::AssetGroupControllerApi.new
id = 3.4 # Float | 

begin
  api_instance.asset_group_controller_delete_by_id(id)
rescue OpenapiClient::ApiError => e
  puts "Exception when calling AssetGroupControllerApi->asset_group_controller_delete_by_id: #{e}"
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


## asset_group_controller_find_user_asset_groups

> Array&lt;AssetGroup&gt; asset_group_controller_find_user_asset_groups



### Example

```ruby
# load the gem
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::AssetGroupControllerApi.new

begin
  result = api_instance.asset_group_controller_find_user_asset_groups
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling AssetGroupControllerApi->asset_group_controller_find_user_asset_groups: #{e}"
end
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;AssetGroup&gt;**](AssetGroup.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## asset_group_controller_update_by_id

> asset_group_controller_update_by_id(id, opts)



Edit (PATCH) AssetGroup

### Example

```ruby
# load the gem
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::AssetGroupControllerApi.new
id = 3.4 # Float | 
opts = {
  asset_group_excluding_id_user_id: OpenapiClient::AssetGroupExcludingIdUserId.new # AssetGroupExcludingIdUserId | 
}

begin
  api_instance.asset_group_controller_update_by_id(id, opts)
rescue OpenapiClient::ApiError => e
  puts "Exception when calling AssetGroupControllerApi->asset_group_controller_update_by_id: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Float**|  | 
 **asset_group_excluding_id_user_id** | [**AssetGroupExcludingIdUserId**](AssetGroupExcludingIdUserId.md)|  | [optional] 

### Return type

nil (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

