# openapi_client.DeviceChannelControllerApi

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**device_channel_controller_find_by_period**](DeviceChannelControllerApi.md#device_channel_controller_find_by_period) | **GET** /device-channel/data-by-period/{deviceId}/{channelId}/from/{fromTS}/to/{toTs}/page/{page}/count/{count}/groupBy/{groupBy}/operation/{operation} | 
[**device_channel_controller_find_device_all_last_recorded_ts**](DeviceChannelControllerApi.md#device_channel_controller_find_device_all_last_recorded_ts) | **GET** /device-channel/last-timestamp-in-device/{deviceId} | 
[**device_channel_controller_find_device_all_last_ts**](DeviceChannelControllerApi.md#device_channel_controller_find_device_all_last_ts) | **GET** /device-channel/data-last-timestamp/all-channels/{deviceId} | 
[**device_channel_controller_find_device_channel_last_ts**](DeviceChannelControllerApi.md#device_channel_controller_find_device_channel_last_ts) | **GET** /device-channel/data-last-timestamp/{deviceId}/{channelId} | 
[**device_channel_controller_find_device_channel_last_ts_sn_ch_name**](DeviceChannelControllerApi.md#device_channel_controller_find_device_channel_last_ts_sn_ch_name) | **POST** /device-channel/data-last-timestamp-by-name/{serialNo}/{channelName} | 


# **device_channel_controller_find_by_period**
> ResponseDeviceChannelData device_channel_controller_find_by_period(device_id, channel_id, from_ts, to_ts, page, count, group_by, operation)



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
    api_instance = openapi_client.DeviceChannelControllerApi(api_client)
    device_id = 3.4 # float | 
channel_id = 3.4 # float | 
from_ts = 'from_ts_example' # str | 
to_ts = 'to_ts_example' # str | 
page = 3.4 # float | 
count = 3.4 # float | 
group_by = 'group_by_example' # str | 
operation = 'operation_example' # str | 

    try:
        api_response = api_instance.device_channel_controller_find_by_period(device_id, channel_id, from_ts, to_ts, page, count, group_by, operation)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling DeviceChannelControllerApi->device_channel_controller_find_by_period: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_id** | **float**|  | 
 **channel_id** | **float**|  | 
 **from_ts** | **str**|  | 
 **to_ts** | **str**|  | 
 **page** | **float**|  | 
 **count** | **float**|  | 
 **group_by** | **str**|  | 
 **operation** | **str**|  | 

### Return type

[**ResponseDeviceChannelData**](ResponseDeviceChannelData.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Device Channel Data by time window. |  -  |
**401** | User is not authorized |  -  |
**406** | Request is not acceptable. Check response for help |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **device_channel_controller_find_device_all_last_recorded_ts**
> Timestamp device_channel_controller_find_device_all_last_recorded_ts(device_id)



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
    api_instance = openapi_client.DeviceChannelControllerApi(api_client)
    device_id = 3.4 # float | 

    try:
        api_response = api_instance.device_channel_controller_find_device_all_last_recorded_ts(device_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling DeviceChannelControllerApi->device_channel_controller_find_device_all_last_recorded_ts: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_id** | **float**|  | 

### Return type

[**Timestamp**](Timestamp.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Last recorded timestamp in device |  -  |
**401** | User is not authorized |  -  |
**406** | Request is not acceptable. Check response for help |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **device_channel_controller_find_device_all_last_ts**
> list[ResponseDeviceChannelData] device_channel_controller_find_device_all_last_ts(device_id)



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
    api_instance = openapi_client.DeviceChannelControllerApi(api_client)
    device_id = 3.4 # float | 

    try:
        api_response = api_instance.device_channel_controller_find_device_all_last_ts(device_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling DeviceChannelControllerApi->device_channel_controller_find_device_all_last_ts: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_id** | **float**|  | 

### Return type

[**list[ResponseDeviceChannelData]**](ResponseDeviceChannelData.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Device Channel Data at the last available timestamp (All channels). |  -  |
**401** | User is not authorized |  -  |
**406** | Request is not acceptable. Check response for help |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **device_channel_controller_find_device_channel_last_ts**
> ResponseDeviceChannelData device_channel_controller_find_device_channel_last_ts(device_id, channel_id)



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
    api_instance = openapi_client.DeviceChannelControllerApi(api_client)
    device_id = 3.4 # float | 
channel_id = 3.4 # float | 

    try:
        api_response = api_instance.device_channel_controller_find_device_channel_last_ts(device_id, channel_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling DeviceChannelControllerApi->device_channel_controller_find_device_channel_last_ts: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_id** | **float**|  | 
 **channel_id** | **float**|  | 

### Return type

[**ResponseDeviceChannelData**](ResponseDeviceChannelData.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Channel Data of last available timestmp |  -  |
**401** | User is not authorized |  -  |
**406** | Request is not acceptable. Check response for help |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **device_channel_controller_find_device_channel_last_ts_sn_ch_name**
> ResponseDeviceChannelData device_channel_controller_find_device_channel_last_ts_sn_ch_name(serial_no, channel_name)



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
    api_instance = openapi_client.DeviceChannelControllerApi(api_client)
    serial_no = 'serial_no_example' # str | 
channel_name = 'channel_name_example' # str | 

    try:
        api_response = api_instance.device_channel_controller_find_device_channel_last_ts_sn_ch_name(serial_no, channel_name)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling DeviceChannelControllerApi->device_channel_controller_find_device_channel_last_ts_sn_ch_name: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial_no** | **str**|  | 
 **channel_name** | **str**|  | 

### Return type

[**ResponseDeviceChannelData**](ResponseDeviceChannelData.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Channel Data of last available timestmp, queried by device SN and channel name. |  -  |
**401** | User is not authorized |  -  |
**406** | Request is not acceptable. Check response for help |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

