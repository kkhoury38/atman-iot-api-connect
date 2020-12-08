# openapi_client.UserControllerApi

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**user_controller_create**](UserControllerApi.md#user_controller_create) | **POST** /user/register/{referenceCode} | 
[**user_controller_create_virtual**](UserControllerApi.md#user_controller_create_virtual) | **POST** /user/register/virtual | 
[**user_controller_delete_virtual_user_by_id**](UserControllerApi.md#user_controller_delete_virtual_user_by_id) | **DELETE** /users/virtualUser/{id} | 
[**user_controller_get_virtual_users**](UserControllerApi.md#user_controller_get_virtual_users) | **GET** /user/getVirtualUsers | 
[**user_controller_login**](UserControllerApi.md#user_controller_login) | **POST** /user/login | 


# **user_controller_create**
> User user_controller_create(reference_code, user_excluding_id_username_is_virtual_roles_subscription_reference_code=user_excluding_id_username_is_virtual_roles_subscription_reference_code)



Used for registering a new <b>User</b>.<br><br><i><b>References:</b> <a href=\"/documentation.html#tocsuser\" target=\"_blank\">UserModel</a></i>

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
    api_instance = openapi_client.UserControllerApi(api_client)
    reference_code = 'reference_code_example' # str | 
user_excluding_id_username_is_virtual_roles_subscription_reference_code = openapi_client.UserExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode() # UserExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode |  (optional)

    try:
        api_response = api_instance.user_controller_create(reference_code, user_excluding_id_username_is_virtual_roles_subscription_reference_code=user_excluding_id_username_is_virtual_roles_subscription_reference_code)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling UserControllerApi->user_controller_create: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reference_code** | **str**|  | 
 **user_excluding_id_username_is_virtual_roles_subscription_reference_code** | [**UserExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode**](UserExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode.md)|  | [optional] 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User model instance |  -  |
**422** | User already exists |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_controller_create_virtual**
> User user_controller_create_virtual(user_excluding_id_username_is_virtual_roles_subscription_reference_code=user_excluding_id_username_is_virtual_roles_subscription_reference_code)



Used for registering a new <b>Virtual User</b> by a <b>User</b>, identified by the provided <i>token.</i><br><br><i><b>References:</b> <a href=\"/documentation.html#tocsuser\" target=\"_blank\">UserModel</a></i>

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
    api_instance = openapi_client.UserControllerApi(api_client)
    user_excluding_id_username_is_virtual_roles_subscription_reference_code = openapi_client.UserExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode() # UserExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode |  (optional)

    try:
        api_response = api_instance.user_controller_create_virtual(user_excluding_id_username_is_virtual_roles_subscription_reference_code=user_excluding_id_username_is_virtual_roles_subscription_reference_code)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling UserControllerApi->user_controller_create_virtual: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_excluding_id_username_is_virtual_roles_subscription_reference_code** | [**UserExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode**](UserExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode.md)|  | [optional] 

### Return type

[**User**](User.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User model instance |  -  |
**406** | Cannot register virtual user |  -  |
**422** | User already exists |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_controller_delete_virtual_user_by_id**
> user_controller_delete_virtual_user_by_id(id)



Deletes Virtual User by Id

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
    api_instance = openapi_client.UserControllerApi(api_client)
    id = 3.4 # float | 

    try:
        api_instance.user_controller_delete_virtual_user_by_id(id)
    except ApiException as e:
        print("Exception when calling UserControllerApi->user_controller_delete_virtual_user_by_id: %s\n" % e)
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
**204** | User DELETE success |  -  |
**401** | User is not authorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_controller_get_virtual_users**
> list[UserExcludingPasswdEmailRolesIsVirtualSubscriptionReferenceCode] user_controller_get_virtual_users()



Returns users under administrator account

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
    api_instance = openapi_client.UserControllerApi(api_client)
    
    try:
        api_response = api_instance.user_controller_get_virtual_users()
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling UserControllerApi->user_controller_get_virtual_users: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**list[UserExcludingPasswdEmailRolesIsVirtualSubscriptionReferenceCode]**](UserExcludingPasswdEmailRolesIsVirtualSubscriptionReferenceCode.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of virtual users |  -  |
**401** | User is not authorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_controller_login**
> Token user_controller_login(user_excluding_id_email_is_virtual_roles_subscription_reference_code=user_excluding_id_email_is_virtual_roles_subscription_reference_code)



Used for <b>User</b> and <b>Virtual User</b> login. Exchanges <i>username/password</i> with an authorization <i>token</i>. Please enter the email provided durring registration in the username field.<br><br><i><b>References:</b> <a href=\"/documentation.html#tocsuser\" target=\"_blank\">UserModel</a></i>

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
    api_instance = openapi_client.UserControllerApi(api_client)
    user_excluding_id_email_is_virtual_roles_subscription_reference_code = openapi_client.UserExcludingIdEmailIsVirtualRolesSubscriptionReferenceCode() # UserExcludingIdEmailIsVirtualRolesSubscriptionReferenceCode |  (optional)

    try:
        api_response = api_instance.user_controller_login(user_excluding_id_email_is_virtual_roles_subscription_reference_code=user_excluding_id_email_is_virtual_roles_subscription_reference_code)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling UserControllerApi->user_controller_login: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_excluding_id_email_is_virtual_roles_subscription_reference_code** | [**UserExcludingIdEmailIsVirtualRolesSubscriptionReferenceCode**](UserExcludingIdEmailIsVirtualRolesSubscriptionReferenceCode.md)|  | [optional] 

### Return type

[**Token**](Token.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Login User - Get Access Token |  -  |
**401** | User is not authorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

