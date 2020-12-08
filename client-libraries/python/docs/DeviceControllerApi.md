# openapi_client.DeviceControllerApi

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**device_controller_create**](DeviceControllerApi.md#device_controller_create) | **POST** /device/{dataLoggerId} | 
[**device_controller_create_channel**](DeviceControllerApi.md#device_controller_create_channel) | **POST** /device/{deviceId}/channel | 
[**device_controller_disable_channel_monitoring**](DeviceControllerApi.md#device_controller_disable_channel_monitoring) | **GET** /device/{deviceId}/channel/{channelId}/disable-monitoring/all/{all} | 
[**device_controller_enable_channel_monitoring**](DeviceControllerApi.md#device_controller_enable_channel_monitoring) | **GET** /device/{deviceId}/channel/{channelId}/enable-monitoring/all/{all} | 
[**device_controller_find**](DeviceControllerApi.md#device_controller_find) | **GET** /devices/{dataLoggerId} | 
[**device_controller_find_channel_types**](DeviceControllerApi.md#device_controller_find_channel_types) | **GET** /device/{deviceId}/channelTypes | 
[**device_controller_find_channels**](DeviceControllerApi.md#device_controller_find_channels) | **GET** /device/{deviceId}/channels | 
[**device_controller_get_devices_with_type**](DeviceControllerApi.md#device_controller_get_devices_with_type) | **POST** /devices/with-device-type | 
[**device_controller_update_by_id**](DeviceControllerApi.md#device_controller_update_by_id) | **PATCH** /device/{id} | 


# **device_controller_create**
> Device device_controller_create(data_logger_id, device_excluding_id_data_logger_id=device_excluding_id_data_logger_id)



Used for creating a new <b>Device</b>, belonging to a <b>DataLogger</b> with id <i>dataLoggerId</i> by an authorized <b>User</b> identified by the provided <i>token</i>.<br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-dataloggercontroller\" target=\"_blank\">DataLoggerController</a>, <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocsdevice\" target=\"_blank\">DeviceModel</a></i>

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
    api_instance = openapi_client.DeviceControllerApi(api_client)
    data_logger_id = 3.4 # float | 
device_excluding_id_data_logger_id = openapi_client.DeviceExcludingIdDataLoggerId() # DeviceExcludingIdDataLoggerId |  (optional)

    try:
        api_response = api_instance.device_controller_create(data_logger_id, device_excluding_id_data_logger_id=device_excluding_id_data_logger_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling DeviceControllerApi->device_controller_create: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_logger_id** | **float**|  | 
 **device_excluding_id_data_logger_id** | [**DeviceExcludingIdDataLoggerId**](DeviceExcludingIdDataLoggerId.md)|  | [optional] 

### Return type

[**Device**](Device.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns created Device model instance |  -  |
**401** | User is not authorized |  -  |
**406** | Request is not acceptable. Check response for help |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **device_controller_create_channel**
> Channel device_controller_create_channel(device_id, channel_excluding_id_device_id=channel_excluding_id_device_id)



Used for creating a new <b>Channel</b>, belonging to a <b>Device</b> with id <i>deviceId</i> by an authorized <b>User</b> identified by the provided <i>token</i>.<br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocschannel\" target=\"_blank\">ChannelModel</a>, <a href=\"/documentation.html#tocsdevice\" target=\"_blank\">DeviceModel</a></i>

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
    api_instance = openapi_client.DeviceControllerApi(api_client)
    device_id = 3.4 # float | 
channel_excluding_id_device_id = openapi_client.ChannelExcludingIdDeviceId() # ChannelExcludingIdDeviceId |  (optional)

    try:
        api_response = api_instance.device_controller_create_channel(device_id, channel_excluding_id_device_id=channel_excluding_id_device_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling DeviceControllerApi->device_controller_create_channel: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_id** | **float**|  | 
 **channel_excluding_id_device_id** | [**ChannelExcludingIdDeviceId**](ChannelExcludingIdDeviceId.md)|  | [optional] 

### Return type

[**Channel**](Channel.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns created Channel model instance in Device with provided id |  -  |
**401** | User is not authorized |  -  |
**406** | Request is not acceptable. Check response for help |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **device_controller_disable_channel_monitoring**
> device_controller_disable_channel_monitoring(device_id, channel_id, all)



Disable monitoring of <b>Channel</b> identified by <i>channelId</i>, in <b>Device</b> identified by <i>deviceId</i>, owned by <b>User</b> authorized by <i>token</i>.<br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocschannel\" target=\"_blank\">ChannelModel</a>, <a href=\"/documentation.html#tocsdevice\" target=\"_blank\">DeviceModel</a></i>

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
    api_instance = openapi_client.DeviceControllerApi(api_client)
    device_id = 3.4 # float | 
channel_id = 3.4 # float | 
all = True # bool | 

    try:
        api_instance.device_controller_disable_channel_monitoring(device_id, channel_id, all)
    except ApiException as e:
        print("Exception when calling DeviceControllerApi->device_controller_disable_channel_monitoring: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_id** | **float**|  | 
 **channel_id** | **float**|  | 
 **all** | **bool**|  | 

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
**204** | Monitoring disabled |  -  |
**401** | User is not authorized |  -  |
**406** | Request is not acceptable. Check response for help |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **device_controller_enable_channel_monitoring**
> device_controller_enable_channel_monitoring(device_id, channel_id, all)



Enable monitoring of <b>Channel</b> identified by <i>channelId</i>, in <b>Device</b> identified by <i>deviceId</i>, owned by <b>User</b> authorized by <i>token</i>.<br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocschannel\" target=\"_blank\">ChannelModel</a>, <a href=\"/documentation.html#tocsdevice\" target=\"_blank\">DeviceModel</a></i>

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
    api_instance = openapi_client.DeviceControllerApi(api_client)
    device_id = 3.4 # float | 
channel_id = 3.4 # float | 
all = True # bool | 

    try:
        api_instance.device_controller_enable_channel_monitoring(device_id, channel_id, all)
    except ApiException as e:
        print("Exception when calling DeviceControllerApi->device_controller_enable_channel_monitoring: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_id** | **float**|  | 
 **channel_id** | **float**|  | 
 **all** | **bool**|  | 

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
**204** | Monitoring enabled |  -  |
**401** | User is not authorized |  -  |
**406** | Request is not acceptable. Check response for help |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **device_controller_find**
> list[Device] device_controller_find(data_logger_id)



Used for getting the <b>Devices</b>, belonging to a <b>DataLogger</b> with id <i>dataLoggerId</i> by an authorized <b>User</b> identified by the provided <i>token</i>.<br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-dataloggercontroller\" target=\"_blank\">DataLoggerController</a>, <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocsdevice\" target=\"_blank\">DeviceModel</a></i>

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
    api_instance = openapi_client.DeviceControllerApi(api_client)
    data_logger_id = 3.4 # float | 

    try:
        api_response = api_instance.device_controller_find(data_logger_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling DeviceControllerApi->device_controller_find: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_logger_id** | **float**|  | 

### Return type

[**list[Device]**](Device.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns Array of Device model in DataLogger with provided id |  -  |
**401** | User is not authorized |  -  |
**406** | Request is not acceptable. Check response for help |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **device_controller_find_channel_types**
> list[ChannelType] device_controller_find_channel_types(device_id)



Used for getting the  <b>Channel</b><b>Types</b> of <b>Channels</b> belonging to a <b>Device</b> with id <i>deviceId</i>, by an authorized <b>User</b> identified by the provided <i>token</i>.<br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocschannel\" target=\"_blank\">ChannelModel</a>, <a href=\"/documentation.html#tocschanneltype\" target=\"_blank\">ChannelTypeModel</a>, <a href=\"/documentation.html#tocsdevice\" target=\"_blank\">DeviceModel</a></i>

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
    api_instance = openapi_client.DeviceControllerApi(api_client)
    device_id = 3.4 # float | 

    try:
        api_response = api_instance.device_controller_find_channel_types(device_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling DeviceControllerApi->device_controller_find_channel_types: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_id** | **float**|  | 

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
**200** | Returns Array of ChannelType model instances in Device with provided id |  -  |
**401** | User is not authorized |  -  |
**406** | Request is not acceptable. Check response for help |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **device_controller_find_channels**
> list[Channel] device_controller_find_channels(device_id)



Used for getting <b>Channel</b><b>s</b>, belonging to a <b>Device</b> with id <i>deviceId</i>, by an authorized <b>User</b> identified by the provided <i>token</i>.<br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocschannel\" target=\"_blank\">ChannelModel</a>, <a href=\"/documentation.html#tocsdevice\" target=\"_blank\">DeviceModel</a></i>

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
    api_instance = openapi_client.DeviceControllerApi(api_client)
    device_id = 3.4 # float | 

    try:
        api_response = api_instance.device_controller_find_channels(device_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling DeviceControllerApi->device_controller_find_channels: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_id** | **float**|  | 

### Return type

[**list[Channel]**](Channel.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns Array of Channel model instances in Device with provided id |  -  |
**401** | User is not authorized |  -  |
**406** | Request is not acceptable. Check response for help |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **device_controller_get_devices_with_type**
> list[DeviceWithType] device_controller_get_devices_with_type(device_excluding_description_serial_no_data_logger_id_device_type_id=device_excluding_description_serial_no_data_logger_id_device_type_id)



Returns array of devices with their device types

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
    api_instance = openapi_client.DeviceControllerApi(api_client)
    device_excluding_description_serial_no_data_logger_id_device_type_id = [openapi_client.DeviceExcludingDescriptionSerialNoDataLoggerIdDeviceTypeId()] # list[DeviceExcludingDescriptionSerialNoDataLoggerIdDeviceTypeId] |  (optional)

    try:
        api_response = api_instance.device_controller_get_devices_with_type(device_excluding_description_serial_no_data_logger_id_device_type_id=device_excluding_description_serial_no_data_logger_id_device_type_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling DeviceControllerApi->device_controller_get_devices_with_type: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_excluding_description_serial_no_data_logger_id_device_type_id** | [**list[DeviceExcludingDescriptionSerialNoDataLoggerIdDeviceTypeId]**](DeviceExcludingDescriptionSerialNoDataLoggerIdDeviceTypeId.md)|  | [optional] 

### Return type

[**list[DeviceWithType]**](DeviceWithType.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | DeviceType belonging to Device |  -  |
**401** | User is not authorized |  -  |
**404** | Device Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **device_controller_update_by_id**
> device_controller_update_by_id(id, device_excluding_id_serial_no_data_logger_id_device_type_id=device_excluding_id_serial_no_data_logger_id_device_type_id)



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
    api_instance = openapi_client.DeviceControllerApi(api_client)
    id = 3.4 # float | 
device_excluding_id_serial_no_data_logger_id_device_type_id = openapi_client.DeviceExcludingIdSerialNoDataLoggerIdDeviceTypeId() # DeviceExcludingIdSerialNoDataLoggerIdDeviceTypeId |  (optional)

    try:
        api_instance.device_controller_update_by_id(id, device_excluding_id_serial_no_data_logger_id_device_type_id=device_excluding_id_serial_no_data_logger_id_device_type_id)
    except ApiException as e:
        print("Exception when calling DeviceControllerApi->device_controller_update_by_id: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **float**|  | 
 **device_excluding_id_serial_no_data_logger_id_device_type_id** | [**DeviceExcludingIdSerialNoDataLoggerIdDeviceTypeId**](DeviceExcludingIdSerialNoDataLoggerIdDeviceTypeId.md)|  | [optional] 

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
**204** | Device PATCH success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

