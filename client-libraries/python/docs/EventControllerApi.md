# openapi_client.EventControllerApi

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**event_controller_create_now**](EventControllerApi.md#event_controller_create_now) | **POST** /event | 
[**event_controller_create_related_dev**](EventControllerApi.md#event_controller_create_related_dev) | **POST** /event/related-device | 
[**event_controller_create_rule**](EventControllerApi.md#event_controller_create_rule) | **POST** /event/rule | 
[**event_controller_create_rule_subscription**](EventControllerApi.md#event_controller_create_rule_subscription) | **POST** /event/rule/subscription | 
[**event_controller_find**](EventControllerApi.md#event_controller_find) | **GET** /events/all/{assetId} | 
[**event_controller_find_unresolved**](EventControllerApi.md#event_controller_find_unresolved) | **GET** /events/unresolved/{assetId} | 
[**event_controller_process_subscriptions**](EventControllerApi.md#event_controller_process_subscriptions) | **GET** /event/process | 
[**event_controller_update_by_id**](EventControllerApi.md#event_controller_update_by_id) | **PATCH** /event/resolve/{id} | 


# **event_controller_create_now**
> Event event_controller_create_now(event_excluding_id_resolved_timestamp_resolution_timestamp=event_excluding_id_resolved_timestamp_resolution_timestamp)



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
    api_instance = openapi_client.EventControllerApi(api_client)
    event_excluding_id_resolved_timestamp_resolution_timestamp = openapi_client.EventExcludingIdResolvedTimestampResolutionTimestamp() # EventExcludingIdResolvedTimestampResolutionTimestamp |  (optional)

    try:
        api_response = api_instance.event_controller_create_now(event_excluding_id_resolved_timestamp_resolution_timestamp=event_excluding_id_resolved_timestamp_resolution_timestamp)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling EventControllerApi->event_controller_create_now: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **event_excluding_id_resolved_timestamp_resolution_timestamp** | [**EventExcludingIdResolvedTimestampResolutionTimestamp**](EventExcludingIdResolvedTimestampResolutionTimestamp.md)|  | [optional] 

### Return type

[**Event**](Event.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Event model instance |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **event_controller_create_related_dev**
> EventRelatedDevice event_controller_create_related_dev(event_related_device_excluding_id=event_related_device_excluding_id)



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
    api_instance = openapi_client.EventControllerApi(api_client)
    event_related_device_excluding_id = openapi_client.EventRelatedDeviceExcludingId() # EventRelatedDeviceExcludingId |  (optional)

    try:
        api_response = api_instance.event_controller_create_related_dev(event_related_device_excluding_id=event_related_device_excluding_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling EventControllerApi->event_controller_create_related_dev: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **event_related_device_excluding_id** | [**EventRelatedDeviceExcludingId**](EventRelatedDeviceExcludingId.md)|  | [optional] 

### Return type

[**EventRelatedDevice**](EventRelatedDevice.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Event Related Device model instance |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **event_controller_create_rule**
> EventRule event_controller_create_rule(request_event_create_rule=request_event_create_rule)



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
    api_instance = openapi_client.EventControllerApi(api_client)
    request_event_create_rule = openapi_client.RequestEventCreateRule() # RequestEventCreateRule |  (optional)

    try:
        api_response = api_instance.event_controller_create_rule(request_event_create_rule=request_event_create_rule)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling EventControllerApi->event_controller_create_rule: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request_event_create_rule** | [**RequestEventCreateRule**](RequestEventCreateRule.md)|  | [optional] 

### Return type

[**EventRule**](EventRule.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Event Rule model instance |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **event_controller_create_rule_subscription**
> EventRuleSubscription event_controller_create_rule_subscription(event_rule_subscription_excluding_id_last_exec_timestamp=event_rule_subscription_excluding_id_last_exec_timestamp)



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
    api_instance = openapi_client.EventControllerApi(api_client)
    event_rule_subscription_excluding_id_last_exec_timestamp = openapi_client.EventRuleSubscriptionExcludingIdLastExecTimestamp() # EventRuleSubscriptionExcludingIdLastExecTimestamp |  (optional)

    try:
        api_response = api_instance.event_controller_create_rule_subscription(event_rule_subscription_excluding_id_last_exec_timestamp=event_rule_subscription_excluding_id_last_exec_timestamp)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling EventControllerApi->event_controller_create_rule_subscription: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **event_rule_subscription_excluding_id_last_exec_timestamp** | [**EventRuleSubscriptionExcludingIdLastExecTimestamp**](EventRuleSubscriptionExcludingIdLastExecTimestamp.md)|  | [optional] 

### Return type

[**EventRuleSubscription**](EventRuleSubscription.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Event Rule Subscription model instance |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **event_controller_find**
> list[ResponseEventAssetEvents] event_controller_find(asset_id)



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
    api_instance = openapi_client.EventControllerApi(api_client)
    asset_id = 3.4 # float | 

    try:
        api_response = api_instance.event_controller_find(asset_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling EventControllerApi->event_controller_find: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset_id** | **float**|  | 

### Return type

[**list[ResponseEventAssetEvents]**](ResponseEventAssetEvents.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of all Asset Events |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **event_controller_find_unresolved**
> list[ResponseEventAssetEvents] event_controller_find_unresolved(asset_id)



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
    api_instance = openapi_client.EventControllerApi(api_client)
    asset_id = 3.4 # float | 

    try:
        api_response = api_instance.event_controller_find_unresolved(asset_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling EventControllerApi->event_controller_find_unresolved: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset_id** | **float**|  | 

### Return type

[**list[ResponseEventAssetEvents]**](ResponseEventAssetEvents.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of unresolved Asset Events |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **event_controller_process_subscriptions**
> event_controller_process_subscriptions()



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
    api_instance = openapi_client.EventControllerApi(api_client)
    
    try:
        api_instance.event_controller_process_subscriptions()
    except ApiException as e:
        print("Exception when calling EventControllerApi->event_controller_process_subscriptions: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

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
**204** | Event Processing finished |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **event_controller_update_by_id**
> event_controller_update_by_id(id)



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
    api_instance = openapi_client.EventControllerApi(api_client)
    id = 3.4 # float | 

    try:
        api_instance.event_controller_update_by_id(id)
    except ApiException as e:
        print("Exception when calling EventControllerApi->event_controller_update_by_id: %s\n" % e)
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
**204** | Event resolved |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

