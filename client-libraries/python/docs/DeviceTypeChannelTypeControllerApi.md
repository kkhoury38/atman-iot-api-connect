# openapi_client.DeviceTypeChannelTypeControllerApi

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**device_type_channel_type_controller_count**](DeviceTypeChannelTypeControllerApi.md#device_type_channel_type_controller_count) | **GET** /device-type-channel-type/{deviceTypeId}/count | 
[**device_type_channel_type_controller_create**](DeviceTypeChannelTypeControllerApi.md#device_type_channel_type_controller_create) | **POST** /device-type-channel-type/{deviceTypeId} | 
[**device_type_channel_type_controller_device_type_channel_categories**](DeviceTypeChannelTypeControllerApi.md#device_type_channel_type_controller_device_type_channel_categories) | **GET** /device-type-channel-type/{deviceTypeId}/channel-categories | 
[**device_type_channel_type_controller_find**](DeviceTypeChannelTypeControllerApi.md#device_type_channel_type_controller_find) | **GET** /device-type-channel-type/{deviceTypeId}/page/{page}/count/{count} | 
[**device_type_channel_type_controller_update_by_id**](DeviceTypeChannelTypeControllerApi.md#device_type_channel_type_controller_update_by_id) | **PATCH** /device-type-channel-type/channel-type/{channelTypeId} | 


# **device_type_channel_type_controller_count**
> LoopbackCount device_type_channel_type_controller_count(device_type_id)



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
    api_instance = openapi_client.DeviceTypeChannelTypeControllerApi(api_client)
    device_type_id = 3.4 # float | 

    try:
        api_response = api_instance.device_type_channel_type_controller_count(device_type_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling DeviceTypeChannelTypeControllerApi->device_type_channel_type_controller_count: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_type_id** | **float**|  | 

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
**200** | ChannelType model count |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **device_type_channel_type_controller_create**
> ChannelType device_type_channel_type_controller_create(device_type_id, channel_type_excluding_id_device_type_id=channel_type_excluding_id_device_type_id)



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
    api_instance = openapi_client.DeviceTypeChannelTypeControllerApi(api_client)
    device_type_id = 3.4 # float | 
channel_type_excluding_id_device_type_id = openapi_client.ChannelTypeExcludingIdDeviceTypeId() # ChannelTypeExcludingIdDeviceTypeId |  (optional)

    try:
        api_response = api_instance.device_type_channel_type_controller_create(device_type_id, channel_type_excluding_id_device_type_id=channel_type_excluding_id_device_type_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling DeviceTypeChannelTypeControllerApi->device_type_channel_type_controller_create: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_type_id** | **float**|  | 
 **channel_type_excluding_id_device_type_id** | [**ChannelTypeExcludingIdDeviceTypeId**](ChannelTypeExcludingIdDeviceTypeId.md)|  | [optional] 

### Return type

[**ChannelType**](ChannelType.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ChannelType model instance |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **device_type_channel_type_controller_device_type_channel_categories**
> list[ChannelTypeExcludingNameDescriptionUnitChannelTypeDeviceTypeId] device_type_channel_type_controller_device_type_channel_categories(device_type_id)



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
    api_instance = openapi_client.DeviceTypeChannelTypeControllerApi(api_client)
    device_type_id = 3.4 # float | 

    try:
        api_response = api_instance.device_type_channel_type_controller_device_type_channel_categories(device_type_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling DeviceTypeChannelTypeControllerApi->device_type_channel_type_controller_device_type_channel_categories: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_type_id** | **float**|  | 

### Return type

[**list[ChannelTypeExcludingNameDescriptionUnitChannelTypeDeviceTypeId]**](ChannelTypeExcludingNameDescriptionUnitChannelTypeDeviceTypeId.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ChannelType model count |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **device_type_channel_type_controller_find**
> list[ChannelType] device_type_channel_type_controller_find(device_type_id, page, count)



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
    api_instance = openapi_client.DeviceTypeChannelTypeControllerApi(api_client)
    device_type_id = 3.4 # float | 
page = 3.4 # float | 
count = 3.4 # float | 

    try:
        api_response = api_instance.device_type_channel_type_controller_find(device_type_id, page, count)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling DeviceTypeChannelTypeControllerApi->device_type_channel_type_controller_find: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_type_id** | **float**|  | 
 **page** | **float**|  | 
 **count** | **float**|  | 

### Return type

[**list[ChannelType]**](ChannelType.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of ChannelType model instances |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **device_type_channel_type_controller_update_by_id**
> device_type_channel_type_controller_update_by_id(channel_type_id, channel_type_excluding_id_name_device_type_id=channel_type_excluding_id_name_device_type_id)



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
    api_instance = openapi_client.DeviceTypeChannelTypeControllerApi(api_client)
    channel_type_id = 3.4 # float | 
channel_type_excluding_id_name_device_type_id = openapi_client.ChannelTypeExcludingIdNameDeviceTypeId() # ChannelTypeExcludingIdNameDeviceTypeId |  (optional)

    try:
        api_instance.device_type_channel_type_controller_update_by_id(channel_type_id, channel_type_excluding_id_name_device_type_id=channel_type_excluding_id_name_device_type_id)
    except ApiException as e:
        print("Exception when calling DeviceTypeChannelTypeControllerApi->device_type_channel_type_controller_update_by_id: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channel_type_id** | **float**|  | 
 **channel_type_excluding_id_name_device_type_id** | [**ChannelTypeExcludingIdNameDeviceTypeId**](ChannelTypeExcludingIdNameDeviceTypeId.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | ChannelType PATCH success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

