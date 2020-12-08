# openapi_client.DeviceGroupMembershipControllerApi

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**device_group_membership_controller_create**](DeviceGroupMembershipControllerApi.md#device_group_membership_controller_create) | **POST** /device-group-memberships | 
[**device_group_membership_controller_delete_by_id**](DeviceGroupMembershipControllerApi.md#device_group_membership_controller_delete_by_id) | **DELETE** /device-group-memberships/{id} | 
[**device_group_membership_controller_find_by_asset_id**](DeviceGroupMembershipControllerApi.md#device_group_membership_controller_find_by_asset_id) | **GET** /device-group-memberships/by-asset/{assetId} | 
[**device_group_membership_controller_find_by_device_id**](DeviceGroupMembershipControllerApi.md#device_group_membership_controller_find_by_device_id) | **GET** /device-group-memberships/by-device/{deviceId} | 


# **device_group_membership_controller_create**
> DeviceGroupMembership device_group_membership_controller_create(device_group_membership_excluding_id=device_group_membership_excluding_id)



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
    api_instance = openapi_client.DeviceGroupMembershipControllerApi(api_client)
    device_group_membership_excluding_id = openapi_client.DeviceGroupMembershipExcludingId() # DeviceGroupMembershipExcludingId |  (optional)

    try:
        api_response = api_instance.device_group_membership_controller_create(device_group_membership_excluding_id=device_group_membership_excluding_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling DeviceGroupMembershipControllerApi->device_group_membership_controller_create: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_group_membership_excluding_id** | [**DeviceGroupMembershipExcludingId**](DeviceGroupMembershipExcludingId.md)|  | [optional] 

### Return type

[**DeviceGroupMembership**](DeviceGroupMembership.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | DeviceGroupMembership model instance |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **device_group_membership_controller_delete_by_id**
> device_group_membership_controller_delete_by_id(id)



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
    api_instance = openapi_client.DeviceGroupMembershipControllerApi(api_client)
    id = 3.4 # float | 

    try:
        api_instance.device_group_membership_controller_delete_by_id(id)
    except ApiException as e:
        print("Exception when calling DeviceGroupMembershipControllerApi->device_group_membership_controller_delete_by_id: %s\n" % e)
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
**204** | DeviceGroupMembership DELETE success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **device_group_membership_controller_find_by_asset_id**
> list[DeviceGroupMembership] device_group_membership_controller_find_by_asset_id(asset_id)



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
    api_instance = openapi_client.DeviceGroupMembershipControllerApi(api_client)
    asset_id = 3.4 # float | 

    try:
        api_response = api_instance.device_group_membership_controller_find_by_asset_id(asset_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling DeviceGroupMembershipControllerApi->device_group_membership_controller_find_by_asset_id: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset_id** | **float**|  | 

### Return type

[**list[DeviceGroupMembership]**](DeviceGroupMembership.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of DeviceGroupMembership model instances |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **device_group_membership_controller_find_by_device_id**
> list[DeviceGroupMembership] device_group_membership_controller_find_by_device_id(device_id)



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
    api_instance = openapi_client.DeviceGroupMembershipControllerApi(api_client)
    device_id = 3.4 # float | 

    try:
        api_response = api_instance.device_group_membership_controller_find_by_device_id(device_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling DeviceGroupMembershipControllerApi->device_group_membership_controller_find_by_device_id: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_id** | **float**|  | 

### Return type

[**list[DeviceGroupMembership]**](DeviceGroupMembership.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of DeviceGroupMembership model instances |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

