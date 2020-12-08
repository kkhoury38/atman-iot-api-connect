# openapi_client.AssetControllerApi

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**asset_controller_create**](AssetControllerApi.md#asset_controller_create) | **POST** /asset | 
[**asset_controller_delete_by_id**](AssetControllerApi.md#asset_controller_delete_by_id) | **DELETE** /asset/{id} | 
[**asset_controller_find**](AssetControllerApi.md#asset_controller_find) | **GET** /assets/{assetGroupId} | 
[**asset_controller_find_by_name**](AssetControllerApi.md#asset_controller_find_by_name) | **GET** /asset/by-name/{assetName} | 
[**asset_controller_find_by_user_id**](AssetControllerApi.md#asset_controller_find_by_user_id) | **GET** /assets/by-user/{userId} | 
[**asset_controller_update_by_id**](AssetControllerApi.md#asset_controller_update_by_id) | **PATCH** /asset/{id} | 


# **asset_controller_create**
> Asset asset_controller_create(asset_excluding_id=asset_excluding_id)



Used for creating a new <b>Asset</b>, by an authorized <b>User</b>, identified by the provided <i>token</i>. An <b>Asset</b> is a way of logical grouping of <b>Devices</b>. One <b>Asset</b> can contain many <b>Devices</b> and can belong to one <b>AssetGroup</b>. <br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-assetgroupcontroller\" target=\"_blank\">AssetGroupController</a>, <a href=\"/documentation.html#atman-iot-devicecontroller\" target=\"_blank\">DeviceController</a>, <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocsasset\" target=\"_blank\">AssetModel</a></i>

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
    api_instance = openapi_client.AssetControllerApi(api_client)
    asset_excluding_id = openapi_client.AssetExcludingId() # AssetExcludingId |  (optional)

    try:
        api_response = api_instance.asset_controller_create(asset_excluding_id=asset_excluding_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling AssetControllerApi->asset_controller_create: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset_excluding_id** | [**AssetExcludingId**](AssetExcludingId.md)|  | [optional] 

### Return type

[**Asset**](Asset.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns created Asset model instance |  -  |
**401** | User is not authorized |  -  |
**406** | Request is not acceptable. Check response for help |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **asset_controller_delete_by_id**
> asset_controller_delete_by_id(id)



Used for deleting an <b>Asset</b>, identified by <i>id</i> by an authorized <b>User</b> identified by the provided <i>token</i>. <br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocsasset\" target=\"_blank\">AssetModel</a></i>

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
    api_instance = openapi_client.AssetControllerApi(api_client)
    id = 3.4 # float | 

    try:
        api_instance.asset_controller_delete_by_id(id)
    except ApiException as e:
        print("Exception when calling AssetControllerApi->asset_controller_delete_by_id: %s\n" % e)
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
**204** | Asset model instance deletion verification |  -  |
**401** | User is not authorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **asset_controller_find**
> list[Asset] asset_controller_find(asset_group_id)



Used for getting the <b>Assets</b> belonging to an <b>AssetGroup</b>, in turn belonging to an authorized <b>User</b> or <b>Virtual User</b>.  An <b>Asset</b> is a way of logical grouping of <b>Devices</b>. One <b>Asset</b> can contain many <b>Devices</b> and can belong to the <b>AssetGroup</b> with the provided <i>assetGroupId</i>. An <b>AssetGroup</b> can have many <b>Assets</b>. <i><b>. <br><br>References:</b> <a href=\"/documentation.html#atman-iot-assetgroupcontroller\" target=\"_blank\">AssetGroupController</a>, <a href=\"/documentation.html#atman-iot-devicecontroller\" target=\"_blank\">DeviceController</a>, <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocsasset\" target=\"_blank\">AssetModel</a></i>

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
    api_instance = openapi_client.AssetControllerApi(api_client)
    asset_group_id = 3.4 # float | 

    try:
        api_response = api_instance.asset_controller_find(asset_group_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling AssetControllerApi->asset_controller_find: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset_group_id** | **float**|  | 

### Return type

[**list[Asset]**](Asset.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns Array of Asset model instances in AssetGroup with provided id |  -  |
**401** | User is not authorized |  -  |
**406** | Request is not acceptable. Check response for help |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **asset_controller_find_by_name**
> Asset asset_controller_find_by_name(asset_name)



Used for getting the <b>Asset</b> identified by <i>assetName</i>, by an authorized <b>User</b> or <b>Virtual User</b> identified by the provided <i>token</i>. An <b>Asset</b> is a way of logical grouping of <b>Devices</b>. One <b>Asset</b> can contain many <b>Devices</b> and can belong to one <b>AssetGroup</b>.<br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-assetgroupcontroller\" target=\"_blank\">AssetGroupController</a>, <a href=\"/documentation.html#atman-iot-devicecontroller\" target=\"_blank\">DeviceController</a>, <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocsasset\" target=\"_blank\">AssetModel</a></i>

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
    api_instance = openapi_client.AssetControllerApi(api_client)
    asset_name = 'asset_name_example' # str | 

    try:
        api_response = api_instance.asset_controller_find_by_name(asset_name)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling AssetControllerApi->asset_controller_find_by_name: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset_name** | **str**|  | 

### Return type

[**Asset**](Asset.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns Asset model instance that matches provided Asset name |  -  |
**401** | User is not authorized |  -  |
**406** | Request is not acceptable. Check response for help |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **asset_controller_find_by_user_id**
> list[Asset] asset_controller_find_by_user_id(user_id)



Used for getting the <b>Assets</b> of an authorized <b>User</b> identified by the provided <i>userId</i>, by an authorized <b>Admin</b>. An <b>Asset</b> is a way of logical grouping of <b>Devices</b>. One <b>Asset</b> can contain many <b>Devices</b> and can belong to one <b>AssetGroup</b>.<br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-assetgroupcontroller\" target=\"_blank\">AssetGroupController</a>, <a href=\"/documentation.html#atman-iot-devicecontroller\" target=\"_blank\">DeviceController</a>, <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocsasset\" target=\"_blank\">AssetModel</a></i>

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
    api_instance = openapi_client.AssetControllerApi(api_client)
    user_id = 3.4 # float | 

    try:
        api_response = api_instance.asset_controller_find_by_user_id(user_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling AssetControllerApi->asset_controller_find_by_user_id: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **float**|  | 

### Return type

[**list[Asset]**](Asset.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns array of Asset model instances that matches provided User Id |  -  |
**401** | User is not authorized |  -  |
**406** | Request is not acceptable. Check response for help |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **asset_controller_update_by_id**
> asset_controller_update_by_id(id, asset_excluding_id_asset_group_id=asset_excluding_id_asset_group_id)



Edit (Patch) Asset by Id

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
    api_instance = openapi_client.AssetControllerApi(api_client)
    id = 3.4 # float | 
asset_excluding_id_asset_group_id = openapi_client.AssetExcludingIdAssetGroupId() # AssetExcludingIdAssetGroupId |  (optional)

    try:
        api_instance.asset_controller_update_by_id(id, asset_excluding_id_asset_group_id=asset_excluding_id_asset_group_id)
    except ApiException as e:
        print("Exception when calling AssetControllerApi->asset_controller_update_by_id: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **float**|  | 
 **asset_excluding_id_asset_group_id** | [**AssetExcludingIdAssetGroupId**](AssetExcludingIdAssetGroupId.md)|  | [optional] 

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
**204** | Asset PATCH success |  -  |
**401** | User is not authorized |  -  |
**404** | Asset not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

