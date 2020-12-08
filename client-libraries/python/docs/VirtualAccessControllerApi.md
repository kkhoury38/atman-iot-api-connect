# openapi_client.VirtualAccessControllerApi

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**virtual_access_controller_create_access_by_group**](VirtualAccessControllerApi.md#virtual_access_controller_create_access_by_group) | **POST** /virtual-access/by-asset-group | 
[**virtual_access_controller_create_access_by_right**](VirtualAccessControllerApi.md#virtual_access_controller_create_access_by_right) | **POST** /virtual-access/by-asset | 
[**virtual_access_controller_delete_by_id**](VirtualAccessControllerApi.md#virtual_access_controller_delete_by_id) | **DELETE** /virtual-access/{id} | 
[**virtual_access_controller_find_by_user_id**](VirtualAccessControllerApi.md#virtual_access_controller_find_by_user_id) | **GET** /virtual-access/by-userId/{userId} | 


# **virtual_access_controller_create_access_by_group**
> list[VirtualAccess] virtual_access_controller_create_access_by_group(request_virtual_access_right_excluding_asset_id=request_virtual_access_right_excluding_asset_id)



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
    api_instance = openapi_client.VirtualAccessControllerApi(api_client)
    request_virtual_access_right_excluding_asset_id = openapi_client.RequestVirtualAccessRightExcludingAssetId() # RequestVirtualAccessRightExcludingAssetId |  (optional)

    try:
        api_response = api_instance.virtual_access_controller_create_access_by_group(request_virtual_access_right_excluding_asset_id=request_virtual_access_right_excluding_asset_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling VirtualAccessControllerApi->virtual_access_controller_create_access_by_group: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request_virtual_access_right_excluding_asset_id** | [**RequestVirtualAccessRightExcludingAssetId**](RequestVirtualAccessRightExcludingAssetId.md)|  | [optional] 

### Return type

[**list[VirtualAccess]**](VirtualAccess.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | VirtualAccess model instance |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_access_controller_create_access_by_right**
> VirtualAccess virtual_access_controller_create_access_by_right(request_virtual_access_right_excluding_asset_group_id=request_virtual_access_right_excluding_asset_group_id)



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
    api_instance = openapi_client.VirtualAccessControllerApi(api_client)
    request_virtual_access_right_excluding_asset_group_id = openapi_client.RequestVirtualAccessRightExcludingAssetGroupId() # RequestVirtualAccessRightExcludingAssetGroupId |  (optional)

    try:
        api_response = api_instance.virtual_access_controller_create_access_by_right(request_virtual_access_right_excluding_asset_group_id=request_virtual_access_right_excluding_asset_group_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling VirtualAccessControllerApi->virtual_access_controller_create_access_by_right: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request_virtual_access_right_excluding_asset_group_id** | [**RequestVirtualAccessRightExcludingAssetGroupId**](RequestVirtualAccessRightExcludingAssetGroupId.md)|  | [optional] 

### Return type

[**VirtualAccess**](VirtualAccess.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | VirtualAccess model instance |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_access_controller_delete_by_id**
> virtual_access_controller_delete_by_id(id)



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
    api_instance = openapi_client.VirtualAccessControllerApi(api_client)
    id = 3.4 # float | 

    try:
        api_instance.virtual_access_controller_delete_by_id(id)
    except ApiException as e:
        print("Exception when calling VirtualAccessControllerApi->virtual_access_controller_delete_by_id: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **float**|  | 

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
**204** | VirtualAccess DELETE success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_access_controller_find_by_user_id**
> list[VirtualAccess] virtual_access_controller_find_by_user_id(user_id)



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
    api_instance = openapi_client.VirtualAccessControllerApi(api_client)
    user_id = 3.4 # float | 

    try:
        api_response = api_instance.virtual_access_controller_find_by_user_id(user_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling VirtualAccessControllerApi->virtual_access_controller_find_by_user_id: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **float**|  | 

### Return type

[**list[VirtualAccess]**](VirtualAccess.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of VirtualAccess model instances |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

