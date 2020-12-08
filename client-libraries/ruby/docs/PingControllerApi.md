# OpenapiClient::PingControllerApi

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ping_controller_ping**](PingControllerApi.md#ping_controller_ping) | **GET** /ping | 



## ping_controller_ping

> InlineResponse200 ping_controller_ping



Ping the server

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::PingControllerApi.new

begin
  result = api_instance.ping_controller_ping
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling PingControllerApi->ping_controller_ping: #{e}"
end
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

