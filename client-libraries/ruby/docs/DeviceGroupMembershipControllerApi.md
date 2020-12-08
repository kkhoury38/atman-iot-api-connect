# OpenapiClient::DeviceGroupMembershipControllerApi

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**device_group_membership_controller_create**](DeviceGroupMembershipControllerApi.md#device_group_membership_controller_create) | **POST** /device-group-memberships | 
[**device_group_membership_controller_delete_by_id**](DeviceGroupMembershipControllerApi.md#device_group_membership_controller_delete_by_id) | **DELETE** /device-group-memberships/{id} | 
[**device_group_membership_controller_find_by_asset_id**](DeviceGroupMembershipControllerApi.md#device_group_membership_controller_find_by_asset_id) | **GET** /device-group-memberships/by-asset/{assetId} | 
[**device_group_membership_controller_find_by_device_id**](DeviceGroupMembershipControllerApi.md#device_group_membership_controller_find_by_device_id) | **GET** /device-group-memberships/by-device/{deviceId} | 



## device_group_membership_controller_create

> DeviceGroupMembership device_group_membership_controller_create(opts)



### Example

```ruby
# load the gem
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::DeviceGroupMembershipControllerApi.new
opts = {
  device_group_membership_excluding_id: OpenapiClient::DeviceGroupMembershipExcludingId.new # DeviceGroupMembershipExcludingId | 
}

begin
  result = api_instance.device_group_membership_controller_create(opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling DeviceGroupMembershipControllerApi->device_group_membership_controller_create: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_group_membership_excluding_id** | [**DeviceGroupMembershipExcludingId**](DeviceGroupMembershipExcludingId.md)|  | [optional] 

### Return type

[**DeviceGroupMembership**](DeviceGroupMembership.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## device_group_membership_controller_delete_by_id

> device_group_membership_controller_delete_by_id(id)



### Example

```ruby
# load the gem
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::DeviceGroupMembershipControllerApi.new
id = 3.4 # Float | 

begin
  api_instance.device_group_membership_controller_delete_by_id(id)
rescue OpenapiClient::ApiError => e
  puts "Exception when calling DeviceGroupMembershipControllerApi->device_group_membership_controller_delete_by_id: #{e}"
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


## device_group_membership_controller_find_by_asset_id

> Array&lt;DeviceGroupMembership&gt; device_group_membership_controller_find_by_asset_id(asset_id)



### Example

```ruby
# load the gem
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::DeviceGroupMembershipControllerApi.new
asset_id = 3.4 # Float | 

begin
  result = api_instance.device_group_membership_controller_find_by_asset_id(asset_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling DeviceGroupMembershipControllerApi->device_group_membership_controller_find_by_asset_id: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset_id** | **Float**|  | 

### Return type

[**Array&lt;DeviceGroupMembership&gt;**](DeviceGroupMembership.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## device_group_membership_controller_find_by_device_id

> Array&lt;DeviceGroupMembership&gt; device_group_membership_controller_find_by_device_id(device_id)



### Example

```ruby
# load the gem
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::DeviceGroupMembershipControllerApi.new
device_id = 3.4 # Float | 

begin
  result = api_instance.device_group_membership_controller_find_by_device_id(device_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling DeviceGroupMembershipControllerApi->device_group_membership_controller_find_by_device_id: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_id** | **Float**|  | 

### Return type

[**Array&lt;DeviceGroupMembership&gt;**](DeviceGroupMembership.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

