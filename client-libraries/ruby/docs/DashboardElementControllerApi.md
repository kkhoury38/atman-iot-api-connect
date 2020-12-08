# OpenapiClient::DashboardElementControllerApi

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dashboard_element_controller_create**](DashboardElementControllerApi.md#dashboard_element_controller_create) | **POST** /dashboard-element | 
[**dashboard_element_controller_delete_by_id**](DashboardElementControllerApi.md#dashboard_element_controller_delete_by_id) | **DELETE** /dashboard-element/{id} | 
[**dashboard_element_controller_find_by_user_id_asset_id_location**](DashboardElementControllerApi.md#dashboard_element_controller_find_by_user_id_asset_id_location) | **GET** /dashboard-elements/asset-id/{assetId}/user-id/{userId}/location/{location} | 
[**dashboard_element_controller_move_element_down**](DashboardElementControllerApi.md#dashboard_element_controller_move_element_down) | **PATCH** /dashboard-element/{id}/move-down | 
[**dashboard_element_controller_move_element_up**](DashboardElementControllerApi.md#dashboard_element_controller_move_element_up) | **PATCH** /dashboard-element/{id}/move-up | 



## dashboard_element_controller_create

> DashboardElement dashboard_element_controller_create(opts)



### Example

```ruby
# load the gem
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::DashboardElementControllerApi.new
opts = {
  new_dashboard_element: OpenapiClient::NewDashboardElement.new # NewDashboardElement | 
}

begin
  result = api_instance.dashboard_element_controller_create(opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling DashboardElementControllerApi->dashboard_element_controller_create: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **new_dashboard_element** | [**NewDashboardElement**](NewDashboardElement.md)|  | [optional] 

### Return type

[**DashboardElement**](DashboardElement.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## dashboard_element_controller_delete_by_id

> dashboard_element_controller_delete_by_id(id)



### Example

```ruby
# load the gem
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::DashboardElementControllerApi.new
id = 3.4 # Float | 

begin
  api_instance.dashboard_element_controller_delete_by_id(id)
rescue OpenapiClient::ApiError => e
  puts "Exception when calling DashboardElementControllerApi->dashboard_element_controller_delete_by_id: #{e}"
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


## dashboard_element_controller_find_by_user_id_asset_id_location

> Array&lt;DashboardElementWithScope&gt; dashboard_element_controller_find_by_user_id_asset_id_location(asset_id, user_id, location)



### Example

```ruby
# load the gem
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::DashboardElementControllerApi.new
asset_id = 3.4 # Float | 
user_id = 3.4 # Float | 
location = 'location_example' # String | 

begin
  result = api_instance.dashboard_element_controller_find_by_user_id_asset_id_location(asset_id, user_id, location)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling DashboardElementControllerApi->dashboard_element_controller_find_by_user_id_asset_id_location: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset_id** | **Float**|  | 
 **user_id** | **Float**|  | 
 **location** | **String**|  | 

### Return type

[**Array&lt;DashboardElementWithScope&gt;**](DashboardElementWithScope.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## dashboard_element_controller_move_element_down

> dashboard_element_controller_move_element_down(id)



### Example

```ruby
# load the gem
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::DashboardElementControllerApi.new
id = 3.4 # Float | 

begin
  api_instance.dashboard_element_controller_move_element_down(id)
rescue OpenapiClient::ApiError => e
  puts "Exception when calling DashboardElementControllerApi->dashboard_element_controller_move_element_down: #{e}"
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


## dashboard_element_controller_move_element_up

> dashboard_element_controller_move_element_up(id)



### Example

```ruby
# load the gem
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::DashboardElementControllerApi.new
id = 3.4 # Float | 

begin
  api_instance.dashboard_element_controller_move_element_up(id)
rescue OpenapiClient::ApiError => e
  puts "Exception when calling DashboardElementControllerApi->dashboard_element_controller_move_element_up: #{e}"
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

