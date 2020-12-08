# OpenapiClient::SchedulerControllerApi

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**scheduler_controller_process_events**](SchedulerControllerApi.md#scheduler_controller_process_events) | **GET** /scheduler/process/events/{attempt}/{serverKey} | 
[**scheduler_controller_process_ftp_rejected**](SchedulerControllerApi.md#scheduler_controller_process_ftp_rejected) | **GET** /scheduler/process/ftp-rejected/{serverKey} | 



## scheduler_controller_process_events

> scheduler_controller_process_events(attempt, server_key)



### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::SchedulerControllerApi.new
attempt = 3.4 # Float | 
server_key = 'server_key_example' # String | 

begin
  api_instance.scheduler_controller_process_events(attempt, server_key)
rescue OpenapiClient::ApiError => e
  puts "Exception when calling SchedulerControllerApi->scheduler_controller_process_events: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attempt** | **Float**|  | 
 **server_key** | **String**|  | 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## scheduler_controller_process_ftp_rejected

> scheduler_controller_process_ftp_rejected(server_key)



### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::SchedulerControllerApi.new
server_key = 'server_key_example' # String | 

begin
  api_instance.scheduler_controller_process_ftp_rejected(server_key)
rescue OpenapiClient::ApiError => e
  puts "Exception when calling SchedulerControllerApi->scheduler_controller_process_ftp_rejected: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **server_key** | **String**|  | 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

