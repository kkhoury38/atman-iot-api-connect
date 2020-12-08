# OpenAPI\Server\Api\UserControllerApiInterface

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**userControllerCreate**](UserControllerApiInterface.md#userControllerCreate) | **POST** /user/register/{referenceCode} | 
[**userControllerCreateVirtual**](UserControllerApiInterface.md#userControllerCreateVirtual) | **POST** /user/register/virtual | 
[**userControllerDeleteVirtualUserById**](UserControllerApiInterface.md#userControllerDeleteVirtualUserById) | **DELETE** /users/virtualUser/{id} | 
[**userControllerGetVirtualUsers**](UserControllerApiInterface.md#userControllerGetVirtualUsers) | **GET** /user/getVirtualUsers | 
[**userControllerLogin**](UserControllerApiInterface.md#userControllerLogin) | **POST** /user/login | 


## Service Declaration
```yaml
# src/Acme/MyBundle/Resources/services.yml
services:
    # ...
    acme.my_bundle.api.userController:
        class: Acme\MyBundle\Api\UserControllerApi
        tags:
            - { name: "open_api_server.api", api: "userController" }
    # ...
```

## **userControllerCreate**
> OpenAPI\Server\Model\User userControllerCreate($referenceCode, $userExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode)



Used for registering a new <b>User</b>.<br><br><i><b>References:</b> <a href=\"/documentation.html#tocsuser\" target=\"_blank\">UserModel</a></i>

### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/UserControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\UserControllerApiInterface;

class UserControllerApi implements UserControllerApiInterface
{

    // ...

    /**
     * Implementation of UserControllerApiInterface#userControllerCreate
     */
    public function userControllerCreate($referenceCode, UserExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode $userExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode = null)
    {
        // Implement the operation ...
    }

    // ...
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceCode** | **string**|  |
 **userExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode** | [**OpenAPI\Server\Model\UserExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode**](../Model/UserExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode.md)|  | [optional]

### Return type

[**OpenAPI\Server\Model\User**](../Model/User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **userControllerCreateVirtual**
> OpenAPI\Server\Model\User userControllerCreateVirtual($userExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode)



Used for registering a new <b>Virtual User</b> by a <b>User</b>, identified by the provided <i>token.</i><br><br><i><b>References:</b> <a href=\"/documentation.html#tocsuser\" target=\"_blank\">UserModel</a></i>

### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/UserControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\UserControllerApiInterface;

class UserControllerApi implements UserControllerApiInterface
{

    // ...

    /**
     * Implementation of UserControllerApiInterface#userControllerCreateVirtual
     */
    public function userControllerCreateVirtual(UserExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode $userExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode = null)
    {
        // Implement the operation ...
    }

    // ...
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode** | [**OpenAPI\Server\Model\UserExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode**](../Model/UserExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode.md)|  | [optional]

### Return type

[**OpenAPI\Server\Model\User**](../Model/User.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **userControllerDeleteVirtualUserById**
> userControllerDeleteVirtualUserById($id)



Deletes Virtual User by Id

### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/UserControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\UserControllerApiInterface;

class UserControllerApi implements UserControllerApiInterface
{

    // ...

    /**
     * Implementation of UserControllerApiInterface#userControllerDeleteVirtualUserById
     */
    public function userControllerDeleteVirtualUserById($id)
    {
        // Implement the operation ...
    }

    // ...
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **float**|  |

### Return type

void (empty response body)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **userControllerGetVirtualUsers**
> OpenAPI\Server\Model\UserExcludingPasswdEmailRolesIsVirtualSubscriptionReferenceCode userControllerGetVirtualUsers()



Returns users under administrator account

### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/UserControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\UserControllerApiInterface;

class UserControllerApi implements UserControllerApiInterface
{

    // ...

    /**
     * Implementation of UserControllerApiInterface#userControllerGetVirtualUsers
     */
    public function userControllerGetVirtualUsers()
    {
        // Implement the operation ...
    }

    // ...
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**OpenAPI\Server\Model\UserExcludingPasswdEmailRolesIsVirtualSubscriptionReferenceCode**](../Model/UserExcludingPasswdEmailRolesIsVirtualSubscriptionReferenceCode.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **userControllerLogin**
> OpenAPI\Server\Model\Token userControllerLogin($userExcludingIdEmailIsVirtualRolesSubscriptionReferenceCode)



Used for <b>User</b> and <b>Virtual User</b> login. Exchanges <i>username/password</i> with an authorization <i>token</i>. Please enter the email provided durring registration in the username field.<br><br><i><b>References:</b> <a href=\"/documentation.html#tocsuser\" target=\"_blank\">UserModel</a></i>

### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/UserControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\UserControllerApiInterface;

class UserControllerApi implements UserControllerApiInterface
{

    // ...

    /**
     * Implementation of UserControllerApiInterface#userControllerLogin
     */
    public function userControllerLogin(UserExcludingIdEmailIsVirtualRolesSubscriptionReferenceCode $userExcludingIdEmailIsVirtualRolesSubscriptionReferenceCode = null)
    {
        // Implement the operation ...
    }

    // ...
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userExcludingIdEmailIsVirtualRolesSubscriptionReferenceCode** | [**OpenAPI\Server\Model\UserExcludingIdEmailIsVirtualRolesSubscriptionReferenceCode**](../Model/UserExcludingIdEmailIsVirtualRolesSubscriptionReferenceCode.md)|  | [optional]

### Return type

[**OpenAPI\Server\Model\Token**](../Model/Token.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

