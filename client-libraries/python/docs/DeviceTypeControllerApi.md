# openapi_client.DeviceTypeControllerApi

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**device_type_controller_count**](DeviceTypeControllerApi.md#device_type_controller_count) | **GET** /device-type/count | 
[**device_type_controller_create**](DeviceTypeControllerApi.md#device_type_controller_create) | **POST** /device-type | 
[**device_type_controller_find**](DeviceTypeControllerApi.md#device_type_controller_find) | **GET** /device-type/get-all/page/{page}/count/{count} | 
[**device_type_controller_get_asset_device_categories**](DeviceTypeControllerApi.md#device_type_controller_get_asset_device_categories) | **GET** /device-type/device-categories-in-asset/{assetId} | 
[**device_type_controller_update_by_id**](DeviceTypeControllerApi.md#device_type_controller_update_by_id) | **PATCH** /device-type/{id} | 


# **device_type_controller_count**
> LoopbackCount device_type_controller_count()



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
    api_instance = openapi_client.DeviceTypeControllerApi(api_client)
    
    try:
        api_response = api_instance.device_type_controller_count()
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling DeviceTypeControllerApi->device_type_controller_count: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

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
**200** | DeviceType model count |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **device_type_controller_create**
> DeviceType device_type_controller_create(device_type=device_type)



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
    api_instance = openapi_client.DeviceTypeControllerApi(api_client)
    device_type = openapi_client.DeviceType() # DeviceType |  (optional)

    try:
        api_response = api_instance.device_type_controller_create(device_type=device_type)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling DeviceTypeControllerApi->device_type_controller_create: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_type** | [**DeviceType**](DeviceType.md)|  | [optional] 

### Return type

[**DeviceType**](DeviceType.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | DeviceType model instance |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **device_type_controller_find**
> list[DeviceType] device_type_controller_find(page, count)



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
    api_instance = openapi_client.DeviceTypeControllerApi(api_client)
    page = 3.4 # float | 
count = 3.4 # float | 

    try:
        api_response = api_instance.device_type_controller_find(page, count)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling DeviceTypeControllerApi->device_type_controller_find: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **float**|  | 
 **count** | **float**|  | 

### Return type

[**list[DeviceType]**](DeviceType.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of DeviceType model instances |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **device_type_controller_get_asset_device_categories**
> list[DeviceTypeExcludingModelDescriptionManufacturer] device_type_controller_get_asset_device_categories(asset_id)



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
    api_instance = openapi_client.DeviceTypeControllerApi(api_client)
    asset_id = 3.4 # float | 

    try:
        api_response = api_instance.device_type_controller_get_asset_device_categories(asset_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling DeviceTypeControllerApi->device_type_controller_get_asset_device_categories: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset_id** | **float**|  | 

### Return type

[**list[DeviceTypeExcludingModelDescriptionManufacturer]**](DeviceTypeExcludingModelDescriptionManufacturer.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of DeviceType model instances |  -  |
**401** | User is not authorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **device_type_controller_update_by_id**
> device_type_controller_update_by_id(id, device_type_excluding_id_model_manufacturer=device_type_excluding_id_model_manufacturer)



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
    api_instance = openapi_client.DeviceTypeControllerApi(api_client)
    id = 3.4 # float | 
device_type_excluding_id_model_manufacturer = openapi_client.DeviceTypeExcludingIdModelManufacturer() # DeviceTypeExcludingIdModelManufacturer |  (optional)

    try:
        api_instance.device_type_controller_update_by_id(id, device_type_excluding_id_model_manufacturer=device_type_excluding_id_model_manufacturer)
    except ApiException as e:
        print("Exception when calling DeviceTypeControllerApi->device_type_controller_update_by_id: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **float**|  | 
 **device_type_excluding_id_model_manufacturer** | [**DeviceTypeExcludingIdModelManufacturer**](DeviceTypeExcludingIdModelManufacturer.md)|  | [optional] 

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
**204** | DeviceType PATCH success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

