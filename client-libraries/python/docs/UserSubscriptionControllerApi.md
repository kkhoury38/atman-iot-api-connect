# openapi_client.UserSubscriptionControllerApi

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**user_subscription_controller_create**](UserSubscriptionControllerApi.md#user_subscription_controller_create) | **POST** /user-subscriptions/paypal/callback | 
[**user_subscription_controller_create_user_subscription_by_sub_id**](UserSubscriptionControllerApi.md#user_subscription_controller_create_user_subscription_by_sub_id) | **GET** /user-subscription/get-new/{subscriptionId} | 
[**user_subscription_controller_find_subscriptions_by_category**](UserSubscriptionControllerApi.md#user_subscription_controller_find_subscriptions_by_category) | **GET** /user-subscription/subscriptions/{product} | 
[**user_subscription_controller_get_by_refference_code**](UserSubscriptionControllerApi.md#user_subscription_controller_get_by_refference_code) | **GET** /user-subscription/get-by-reference-code/{referenceCode} | 
[**user_subscription_controller_verify_code**](UserSubscriptionControllerApi.md#user_subscription_controller_verify_code) | **POST** /user-subscriptions/verify-reference-code | 


# **user_subscription_controller_create**
> user_subscription_controller_create(body=body)



### Example

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


# Enter a context with an instance of the API client
with openapi_client.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserSubscriptionControllerApi(api_client)
    body = None # object |  (optional)

    try:
        api_instance.user_subscription_controller_create(body=body)
    except ApiException as e:
        print("Exception when calling UserSubscriptionControllerApi->user_subscription_controller_create: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **object**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_subscription_controller_create_user_subscription_by_sub_id**
> UserSubscription user_subscription_controller_create_user_subscription_by_sub_id(subscription_id)



### Example

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


# Enter a context with an instance of the API client
with openapi_client.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserSubscriptionControllerApi(api_client)
    subscription_id = 3.4 # float | 

    try:
        api_response = api_instance.user_subscription_controller_create_user_subscription_by_sub_id(subscription_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling UserSubscriptionControllerApi->user_subscription_controller_create_user_subscription_by_sub_id: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **float**|  | 

### Return type

[**UserSubscription**](UserSubscription.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | UserSubscription model instance |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_subscription_controller_find_subscriptions_by_category**
> list[Subscription] user_subscription_controller_find_subscriptions_by_category(product)



### Example

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


# Enter a context with an instance of the API client
with openapi_client.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserSubscriptionControllerApi(api_client)
    product = 'product_example' # str | 

    try:
        api_response = api_instance.user_subscription_controller_find_subscriptions_by_category(product)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling UserSubscriptionControllerApi->user_subscription_controller_find_subscriptions_by_category: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product** | **str**|  | 

### Return type

[**list[Subscription]**](Subscription.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Available subscriptions for product |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_subscription_controller_get_by_refference_code**
> UserSubscriptionWithRelations user_subscription_controller_get_by_refference_code(reference_code)



### Example

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


# Enter a context with an instance of the API client
with openapi_client.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserSubscriptionControllerApi(api_client)
    reference_code = 'reference_code_example' # str | 

    try:
        api_response = api_instance.user_subscription_controller_get_by_refference_code(reference_code)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling UserSubscriptionControllerApi->user_subscription_controller_get_by_refference_code: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reference_code** | **str**|  | 

### Return type

[**UserSubscriptionWithRelations**](UserSubscriptionWithRelations.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | UserSubscription model instance |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_subscription_controller_verify_code**
> UserSubscription user_subscription_controller_verify_code(code_verification_request=code_verification_request)



### Example

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


# Enter a context with an instance of the API client
with openapi_client.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserSubscriptionControllerApi(api_client)
    code_verification_request = openapi_client.CodeVerificationRequest() # CodeVerificationRequest |  (optional)

    try:
        api_response = api_instance.user_subscription_controller_verify_code(code_verification_request=code_verification_request)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling UserSubscriptionControllerApi->user_subscription_controller_verify_code: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code_verification_request** | [**CodeVerificationRequest**](CodeVerificationRequest.md)|  | [optional] 

### Return type

[**UserSubscription**](UserSubscription.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User Subscription |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

