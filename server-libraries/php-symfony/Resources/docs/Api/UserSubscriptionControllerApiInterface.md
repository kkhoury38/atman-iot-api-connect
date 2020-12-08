# OpenAPI\Server\Api\UserSubscriptionControllerApiInterface

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**userSubscriptionControllerCreate**](UserSubscriptionControllerApiInterface.md#userSubscriptionControllerCreate) | **POST** /user-subscriptions/paypal/callback | 
[**userSubscriptionControllerCreateUserSubscriptionBySubId**](UserSubscriptionControllerApiInterface.md#userSubscriptionControllerCreateUserSubscriptionBySubId) | **GET** /user-subscription/get-new/{subscriptionId} | 
[**userSubscriptionControllerFindSubscriptionsByCategory**](UserSubscriptionControllerApiInterface.md#userSubscriptionControllerFindSubscriptionsByCategory) | **GET** /user-subscription/subscriptions/{product} | 
[**userSubscriptionControllerGetByRefferenceCode**](UserSubscriptionControllerApiInterface.md#userSubscriptionControllerGetByRefferenceCode) | **GET** /user-subscription/get-by-reference-code/{referenceCode} | 
[**userSubscriptionControllerVerifyCode**](UserSubscriptionControllerApiInterface.md#userSubscriptionControllerVerifyCode) | **POST** /user-subscriptions/verify-reference-code | 


## Service Declaration
```yaml
# src/Acme/MyBundle/Resources/services.yml
services:
    # ...
    acme.my_bundle.api.userSubscriptionController:
        class: Acme\MyBundle\Api\UserSubscriptionControllerApi
        tags:
            - { name: "open_api_server.api", api: "userSubscriptionController" }
    # ...
```

## **userSubscriptionControllerCreate**
> userSubscriptionControllerCreate($body)



### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/UserSubscriptionControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\UserSubscriptionControllerApiInterface;

class UserSubscriptionControllerApi implements UserSubscriptionControllerApiInterface
{

    // ...

    /**
     * Implementation of UserSubscriptionControllerApiInterface#userSubscriptionControllerCreate
     */
    public function userSubscriptionControllerCreate(array $body = null)
    {
        // Implement the operation ...
    }

    // ...
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **array**|  | [optional]

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **userSubscriptionControllerCreateUserSubscriptionBySubId**
> OpenAPI\Server\Model\UserSubscription userSubscriptionControllerCreateUserSubscriptionBySubId($subscriptionId)



### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/UserSubscriptionControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\UserSubscriptionControllerApiInterface;

class UserSubscriptionControllerApi implements UserSubscriptionControllerApiInterface
{

    // ...

    /**
     * Implementation of UserSubscriptionControllerApiInterface#userSubscriptionControllerCreateUserSubscriptionBySubId
     */
    public function userSubscriptionControllerCreateUserSubscriptionBySubId($subscriptionId)
    {
        // Implement the operation ...
    }

    // ...
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionId** | **float**|  |

### Return type

[**OpenAPI\Server\Model\UserSubscription**](../Model/UserSubscription.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **userSubscriptionControllerFindSubscriptionsByCategory**
> OpenAPI\Server\Model\Subscription userSubscriptionControllerFindSubscriptionsByCategory($product)



### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/UserSubscriptionControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\UserSubscriptionControllerApiInterface;

class UserSubscriptionControllerApi implements UserSubscriptionControllerApiInterface
{

    // ...

    /**
     * Implementation of UserSubscriptionControllerApiInterface#userSubscriptionControllerFindSubscriptionsByCategory
     */
    public function userSubscriptionControllerFindSubscriptionsByCategory($product)
    {
        // Implement the operation ...
    }

    // ...
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product** | **string**|  |

### Return type

[**OpenAPI\Server\Model\Subscription**](../Model/Subscription.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **userSubscriptionControllerGetByRefferenceCode**
> OpenAPI\Server\Model\UserSubscriptionWithRelations userSubscriptionControllerGetByRefferenceCode($referenceCode)



### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/UserSubscriptionControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\UserSubscriptionControllerApiInterface;

class UserSubscriptionControllerApi implements UserSubscriptionControllerApiInterface
{

    // ...

    /**
     * Implementation of UserSubscriptionControllerApiInterface#userSubscriptionControllerGetByRefferenceCode
     */
    public function userSubscriptionControllerGetByRefferenceCode($referenceCode)
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

### Return type

[**OpenAPI\Server\Model\UserSubscriptionWithRelations**](../Model/UserSubscriptionWithRelations.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **userSubscriptionControllerVerifyCode**
> OpenAPI\Server\Model\UserSubscription userSubscriptionControllerVerifyCode($codeVerificationRequest)



### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/UserSubscriptionControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\UserSubscriptionControllerApiInterface;

class UserSubscriptionControllerApi implements UserSubscriptionControllerApiInterface
{

    // ...

    /**
     * Implementation of UserSubscriptionControllerApiInterface#userSubscriptionControllerVerifyCode
     */
    public function userSubscriptionControllerVerifyCode(CodeVerificationRequest $codeVerificationRequest = null)
    {
        // Implement the operation ...
    }

    // ...
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **codeVerificationRequest** | [**OpenAPI\Server\Model\CodeVerificationRequest**](../Model/CodeVerificationRequest.md)|  | [optional]

### Return type

[**OpenAPI\Server\Model\UserSubscription**](../Model/UserSubscription.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

