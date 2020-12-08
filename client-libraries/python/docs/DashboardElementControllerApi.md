# openapi_client.DashboardElementControllerApi

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dashboard_element_controller_create**](DashboardElementControllerApi.md#dashboard_element_controller_create) | **POST** /dashboard-element | 
[**dashboard_element_controller_delete_by_id**](DashboardElementControllerApi.md#dashboard_element_controller_delete_by_id) | **DELETE** /dashboard-element/{id} | 
[**dashboard_element_controller_find_by_user_id_asset_id_location**](DashboardElementControllerApi.md#dashboard_element_controller_find_by_user_id_asset_id_location) | **GET** /dashboard-elements/asset-id/{assetId}/user-id/{userId}/location/{location} | 
[**dashboard_element_controller_move_element_down**](DashboardElementControllerApi.md#dashboard_element_controller_move_element_down) | **PATCH** /dashboard-element/{id}/move-down | 
[**dashboard_element_controller_move_element_up**](DashboardElementControllerApi.md#dashboard_element_controller_move_element_up) | **PATCH** /dashboard-element/{id}/move-up | 


# **dashboard_element_controller_create**
> DashboardElement dashboard_element_controller_create(new_dashboard_element=new_dashboard_element)



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
    api_instance = openapi_client.DashboardElementControllerApi(api_client)
    new_dashboard_element = openapi_client.NewDashboardElement() # NewDashboardElement |  (optional)

    try:
        api_response = api_instance.dashboard_element_controller_create(new_dashboard_element=new_dashboard_element)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling DashboardElementControllerApi->dashboard_element_controller_create: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **new_dashboard_element** | [**NewDashboardElement**](NewDashboardElement.md)|  | [optional] 

### Return type

[**DashboardElement**](DashboardElement.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Create DashboardElement |  -  |
**401** | User is not authorized |  -  |
**406** | Request is not acceptable. Check response for help |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dashboard_element_controller_delete_by_id**
> dashboard_element_controller_delete_by_id(id)



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
    api_instance = openapi_client.DashboardElementControllerApi(api_client)
    id = 3.4 # float | 

    try:
        api_instance.dashboard_element_controller_delete_by_id(id)
    except ApiException as e:
        print("Exception when calling DashboardElementControllerApi->dashboard_element_controller_delete_by_id: %s\n" % e)
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
**204** | DashboardElement DELETE success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dashboard_element_controller_find_by_user_id_asset_id_location**
> list[DashboardElementWithScope] dashboard_element_controller_find_by_user_id_asset_id_location(asset_id, user_id, location)



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
    api_instance = openapi_client.DashboardElementControllerApi(api_client)
    asset_id = 3.4 # float | 
user_id = 3.4 # float | 
location = 'location_example' # str | 

    try:
        api_response = api_instance.dashboard_element_controller_find_by_user_id_asset_id_location(asset_id, user_id, location)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling DashboardElementControllerApi->dashboard_element_controller_find_by_user_id_asset_id_location: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset_id** | **float**|  | 
 **user_id** | **float**|  | 
 **location** | **str**|  | 

### Return type

[**list[DashboardElementWithScope]**](DashboardElementWithScope.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of DashboardElement model instances |  -  |
**401** | User is not authorized |  -  |
**406** | Request is not acceptable. Check response for help |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dashboard_element_controller_move_element_down**
> dashboard_element_controller_move_element_down(id)



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
    api_instance = openapi_client.DashboardElementControllerApi(api_client)
    id = 3.4 # float | 

    try:
        api_instance.dashboard_element_controller_move_element_down(id)
    except ApiException as e:
        print("Exception when calling DashboardElementControllerApi->dashboard_element_controller_move_element_down: %s\n" % e)
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
**204** | Move up Dashboard Element success |  -  |
**401** | User is not authorized |  -  |
**406** | Request is not acceptable. Check response for help |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dashboard_element_controller_move_element_up**
> dashboard_element_controller_move_element_up(id)



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
    api_instance = openapi_client.DashboardElementControllerApi(api_client)
    id = 3.4 # float | 

    try:
        api_instance.dashboard_element_controller_move_element_up(id)
    except ApiException as e:
        print("Exception when calling DashboardElementControllerApi->dashboard_element_controller_move_element_up: %s\n" % e)
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
**204** | Move up Dashboard Element success |  -  |
**401** | User is not authorized |  -  |
**406** | Request is not acceptable. Check response for help |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

