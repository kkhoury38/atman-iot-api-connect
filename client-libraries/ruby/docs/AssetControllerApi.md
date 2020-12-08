# OpenapiClient::AssetControllerApi

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**asset_controller_create**](AssetControllerApi.md#asset_controller_create) | **POST** /asset | 
[**asset_controller_delete_by_id**](AssetControllerApi.md#asset_controller_delete_by_id) | **DELETE** /asset/{id} | 
[**asset_controller_find**](AssetControllerApi.md#asset_controller_find) | **GET** /assets/{assetGroupId} | 
[**asset_controller_find_by_name**](AssetControllerApi.md#asset_controller_find_by_name) | **GET** /asset/by-name/{assetName} | 
[**asset_controller_find_by_user_id**](AssetControllerApi.md#asset_controller_find_by_user_id) | **GET** /assets/by-user/{userId} | 
[**asset_controller_update_by_id**](AssetControllerApi.md#asset_controller_update_by_id) | **PATCH** /asset/{id} | 



## asset_controller_create

> Asset asset_controller_create(opts)



Used for creating a new <b>Asset</b>, by an authorized <b>User</b>, identified by the provided <i>token</i>. An <b>Asset</b> is a way of logical grouping of <b>Devices</b>. One <b>Asset</b> can contain many <b>Devices</b> and can belong to one <b>AssetGroup</b>. <br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-assetgroupcontroller\" target=\"_blank\">AssetGroupController</a>, <a href=\"/documentation.html#atman-iot-devicecontroller\" target=\"_blank\">DeviceController</a>, <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocsasset\" target=\"_blank\">AssetModel</a></i>

### Example

```ruby
# load the gem
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::AssetControllerApi.new
opts = {
  asset_excluding_id: OpenapiClient::AssetExcludingId.new # AssetExcludingId | 
}

begin
  result = api_instance.asset_controller_create(opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling AssetControllerApi->asset_controller_create: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset_excluding_id** | [**AssetExcludingId**](AssetExcludingId.md)|  | [optional] 

### Return type

[**Asset**](Asset.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## asset_controller_delete_by_id

> asset_controller_delete_by_id(id)



Used for deleting an <b>Asset</b>, identified by <i>id</i> by an authorized <b>User</b> identified by the provided <i>token</i>. <br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocsasset\" target=\"_blank\">AssetModel</a></i>

### Example

```ruby
# load the gem
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::AssetControllerApi.new
id = 3.4 # Float | 

begin
  api_instance.asset_controller_delete_by_id(id)
rescue OpenapiClient::ApiError => e
  puts "Exception when calling AssetControllerApi->asset_controller_delete_by_id: #{e}"
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


## asset_controller_find

> Array&lt;Asset&gt; asset_controller_find(asset_group_id)



Used for getting the <b>Assets</b> belonging to an <b>AssetGroup</b>, in turn belonging to an authorized <b>User</b> or <b>Virtual User</b>.  An <b>Asset</b> is a way of logical grouping of <b>Devices</b>. One <b>Asset</b> can contain many <b>Devices</b> and can belong to the <b>AssetGroup</b> with the provided <i>assetGroupId</i>. An <b>AssetGroup</b> can have many <b>Assets</b>. <i><b>. <br><br>References:</b> <a href=\"/documentation.html#atman-iot-assetgroupcontroller\" target=\"_blank\">AssetGroupController</a>, <a href=\"/documentation.html#atman-iot-devicecontroller\" target=\"_blank\">DeviceController</a>, <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocsasset\" target=\"_blank\">AssetModel</a></i>

### Example

```ruby
# load the gem
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::AssetControllerApi.new
asset_group_id = 3.4 # Float | 

begin
  result = api_instance.asset_controller_find(asset_group_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling AssetControllerApi->asset_controller_find: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset_group_id** | **Float**|  | 

### Return type

[**Array&lt;Asset&gt;**](Asset.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## asset_controller_find_by_name

> Asset asset_controller_find_by_name(asset_name)



Used for getting the <b>Asset</b> identified by <i>assetName</i>, by an authorized <b>User</b> or <b>Virtual User</b> identified by the provided <i>token</i>. An <b>Asset</b> is a way of logical grouping of <b>Devices</b>. One <b>Asset</b> can contain many <b>Devices</b> and can belong to one <b>AssetGroup</b>.<br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-assetgroupcontroller\" target=\"_blank\">AssetGroupController</a>, <a href=\"/documentation.html#atman-iot-devicecontroller\" target=\"_blank\">DeviceController</a>, <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocsasset\" target=\"_blank\">AssetModel</a></i>

### Example

```ruby
# load the gem
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::AssetControllerApi.new
asset_name = 'asset_name_example' # String | 

begin
  result = api_instance.asset_controller_find_by_name(asset_name)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling AssetControllerApi->asset_controller_find_by_name: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset_name** | **String**|  | 

### Return type

[**Asset**](Asset.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## asset_controller_find_by_user_id

> Array&lt;Asset&gt; asset_controller_find_by_user_id(user_id)



Used for getting the <b>Assets</b> of an authorized <b>User</b> identified by the provided <i>userId</i>, by an authorized <b>Admin</b>. An <b>Asset</b> is a way of logical grouping of <b>Devices</b>. One <b>Asset</b> can contain many <b>Devices</b> and can belong to one <b>AssetGroup</b>.<br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-assetgroupcontroller\" target=\"_blank\">AssetGroupController</a>, <a href=\"/documentation.html#atman-iot-devicecontroller\" target=\"_blank\">DeviceController</a>, <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocsasset\" target=\"_blank\">AssetModel</a></i>

### Example

```ruby
# load the gem
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::AssetControllerApi.new
user_id = 3.4 # Float | 

begin
  result = api_instance.asset_controller_find_by_user_id(user_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling AssetControllerApi->asset_controller_find_by_user_id: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **Float**|  | 

### Return type

[**Array&lt;Asset&gt;**](Asset.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## asset_controller_update_by_id

> asset_controller_update_by_id(id, opts)



Edit (Patch) Asset by Id

### Example

```ruby
# load the gem
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::AssetControllerApi.new
id = 3.4 # Float | 
opts = {
  asset_excluding_id_asset_group_id: OpenapiClient::AssetExcludingIdAssetGroupId.new # AssetExcludingIdAssetGroupId | 
}

begin
  api_instance.asset_controller_update_by_id(id, opts)
rescue OpenapiClient::ApiError => e
  puts "Exception when calling AssetControllerApi->asset_controller_update_by_id: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Float**|  | 
 **asset_excluding_id_asset_group_id** | [**AssetExcludingIdAssetGroupId**](AssetExcludingIdAssetGroupId.md)|  | [optional] 

### Return type

nil (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

