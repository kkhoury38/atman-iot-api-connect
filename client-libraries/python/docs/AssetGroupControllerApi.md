# openapi_client.AssetGroupControllerApi

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**asset_group_controller_create_asset_group**](AssetGroupControllerApi.md#asset_group_controller_create_asset_group) | **POST** /asset-group/user | 
[**asset_group_controller_delete_by_id**](AssetGroupControllerApi.md#asset_group_controller_delete_by_id) | **DELETE** /asset-group/{id} | 
[**asset_group_controller_find_user_asset_groups**](AssetGroupControllerApi.md#asset_group_controller_find_user_asset_groups) | **GET** /asset-groups/user | 
[**asset_group_controller_update_by_id**](AssetGroupControllerApi.md#asset_group_controller_update_by_id) | **PATCH** /asset-group/{id} | 


# **asset_group_controller_create_asset_group**
> AssetGroup asset_group_controller_create_asset_group(asset_group_excluding_id_user_id=asset_group_excluding_id_user_id)



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
    api_instance = openapi_client.AssetGroupControllerApi(api_client)
    asset_group_excluding_id_user_id = openapi_client.AssetGroupExcludingIdUserId() # AssetGroupExcludingIdUserId |  (optional)

    try:
        api_response = api_instance.asset_group_controller_create_asset_group(asset_group_excluding_id_user_id=asset_group_excluding_id_user_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling AssetGroupControllerApi->asset_group_controller_create_asset_group: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset_group_excluding_id_user_id** | [**AssetGroupExcludingIdUserId**](AssetGroupExcludingIdUserId.md)|  | [optional] 

### Return type

[**AssetGroup**](AssetGroup.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns created AssetGroup model instance |  -  |
**401** | User is not authorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **asset_group_controller_delete_by_id**
> asset_group_controller_delete_by_id(id)



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
    api_instance = openapi_client.AssetGroupControllerApi(api_client)
    id = 3.4 # float | 

    try:
        api_instance.asset_group_controller_delete_by_id(id)
    except ApiException as e:
        print("Exception when calling AssetGroupControllerApi->asset_group_controller_delete_by_id: %s\n" % e)
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
**204** | AssetGroup model instance deletion verification |  -  |
**401** | User is not authorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **asset_group_controller_find_user_asset_groups**
> list[AssetGroup] asset_group_controller_find_user_asset_groups()



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
    api_instance = openapi_client.AssetGroupControllerApi(api_client)
    
    try:
        api_response = api_instance.asset_group_controller_find_user_asset_groups()
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling AssetGroupControllerApi->asset_group_controller_find_user_asset_groups: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**list[AssetGroup]**](AssetGroup.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns Array of user&#39;s AssetGroup model instances |  -  |
**401** | User is not authorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **asset_group_controller_update_by_id**
> asset_group_controller_update_by_id(id, asset_group_excluding_id_user_id=asset_group_excluding_id_user_id)



Edit (PATCH) AssetGroup

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
    api_instance = openapi_client.AssetGroupControllerApi(api_client)
    id = 3.4 # float | 
asset_group_excluding_id_user_id = openapi_client.AssetGroupExcludingIdUserId() # AssetGroupExcludingIdUserId |  (optional)

    try:
        api_instance.asset_group_controller_update_by_id(id, asset_group_excluding_id_user_id=asset_group_excluding_id_user_id)
    except ApiException as e:
        print("Exception when calling AssetGroupControllerApi->asset_group_controller_update_by_id: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **float**|  | 
 **asset_group_excluding_id_user_id** | [**AssetGroupExcludingIdUserId**](AssetGroupExcludingIdUserId.md)|  | [optional] 

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
**204** | AssetGroup PATCH success |  -  |
**401** | User is not authorized |  -  |
**404** | AssetGroup not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

