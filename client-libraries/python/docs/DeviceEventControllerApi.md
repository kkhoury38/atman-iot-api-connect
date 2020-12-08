# openapi_client.DeviceEventControllerApi

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**device_event_controller_count_not_viewed**](DeviceEventControllerApi.md#device_event_controller_count_not_viewed) | **GET** /device-events/by-asset/count-not-viewed/{assetId} | 
[**device_event_controller_find**](DeviceEventControllerApi.md#device_event_controller_find) | **GET** /device-events/assetId/{assetId}/page/{page}/count/{count} | 
[**device_event_controller_update_viewed_by**](DeviceEventControllerApi.md#device_event_controller_update_viewed_by) | **GET** /device-events/mark-read/{eventId} | 


# **device_event_controller_count_not_viewed**
> LoopbackCount device_event_controller_count_not_viewed(asset_id)



### Example

* Bearer (JWT) Authentication (bearerAuth):
```python
from __future__ import print_function
import time
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to https://atman-iot.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://atman-iot.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = openapi_client.Configuration(
    access_token = 'YOUR_BEARER_TOKEN'
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DeviceEventControllerApi(api_client)
    asset_id = 3.4 # float | 

    try:
        api_response = api_instance.device_event_controller_count_not_viewed(asset_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling DeviceEventControllerApi->device_event_controller_count_not_viewed: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset_id** | **float**|  | 

### Return type

[**LoopbackCount**](LoopbackCount.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Count of not viewed Device Events in asset |  -  |
**401** | User is not authorized |  -  |
**406** | Request is not acceptable. Check response for help |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **device_event_controller_find**
> list[DeviceEventWithRelations] device_event_controller_find(asset_id, page, count)



### Example

* Bearer (JWT) Authentication (bearerAuth):
```python
from __future__ import print_function
import time
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to https://atman-iot.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://atman-iot.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = openapi_client.Configuration(
    access_token = 'YOUR_BEARER_TOKEN'
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DeviceEventControllerApi(api_client)
    asset_id = 3.4 # float | 
page = 3.4 # float | 
count = 3.4 # float | 

    try:
        api_response = api_instance.device_event_controller_find(asset_id, page, count)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling DeviceEventControllerApi->device_event_controller_find: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset_id** | **float**|  | 
 **page** | **float**|  | 
 **count** | **float**|  | 

### Return type

[**list[DeviceEventWithRelations]**](DeviceEventWithRelations.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of DeviceEvents in asset |  -  |
**401** | User is not authorized |  -  |
**406** | Request is not acceptable. Check response for help |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **device_event_controller_update_viewed_by**
> device_event_controller_update_viewed_by(event_id)



### Example

* Bearer (JWT) Authentication (bearerAuth):
```python
from __future__ import print_function
import time
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to https://atman-iot.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://atman-iot.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = openapi_client.Configuration(
    access_token = 'YOUR_BEARER_TOKEN'
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DeviceEventControllerApi(api_client)
    event_id = 3.4 # float | 

    try:
        api_instance.device_event_controller_update_viewed_by(event_id)
    except ApiException as e:
        print("Exception when calling DeviceEventControllerApi->device_event_controller_update_viewed_by: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **event_id** | **float**|  | 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | DeviceEvent updated |  -  |
**401** | User is not authorized |  -  |
**406** | Request is not acceptable. Check response for help |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

