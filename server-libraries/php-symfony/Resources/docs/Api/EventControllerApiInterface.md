# OpenAPI\Server\Api\EventControllerApiInterface

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**eventControllerCreateNow**](EventControllerApiInterface.md#eventControllerCreateNow) | **POST** /event | 
[**eventControllerCreateRelatedDev**](EventControllerApiInterface.md#eventControllerCreateRelatedDev) | **POST** /event/related-device | 
[**eventControllerCreateRule**](EventControllerApiInterface.md#eventControllerCreateRule) | **POST** /event/rule | 
[**eventControllerCreateRuleSubscription**](EventControllerApiInterface.md#eventControllerCreateRuleSubscription) | **POST** /event/rule/subscription | 
[**eventControllerFind**](EventControllerApiInterface.md#eventControllerFind) | **GET** /events/all/{assetId} | 
[**eventControllerFindUnresolved**](EventControllerApiInterface.md#eventControllerFindUnresolved) | **GET** /events/unresolved/{assetId} | 
[**eventControllerProcessSubscriptions**](EventControllerApiInterface.md#eventControllerProcessSubscriptions) | **GET** /event/process | 
[**eventControllerUpdateById**](EventControllerApiInterface.md#eventControllerUpdateById) | **PATCH** /event/resolve/{id} | 


## Service Declaration
```yaml
# src/Acme/MyBundle/Resources/services.yml
services:
    # ...
    acme.my_bundle.api.eventController:
        class: Acme\MyBundle\Api\EventControllerApi
        tags:
            - { name: "open_api_server.api", api: "eventController" }
    # ...
```

## **eventControllerCreateNow**
> OpenAPI\Server\Model\Event eventControllerCreateNow($eventExcludingIdResolvedTimestampResolutionTimestamp)



### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/EventControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\EventControllerApiInterface;

class EventControllerApi implements EventControllerApiInterface
{

    // ...

    /**
     * Implementation of EventControllerApiInterface#eventControllerCreateNow
     */
    public function eventControllerCreateNow(EventExcludingIdResolvedTimestampResolutionTimestamp $eventExcludingIdResolvedTimestampResolutionTimestamp = null)
    {
        // Implement the operation ...
    }

    // ...
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventExcludingIdResolvedTimestampResolutionTimestamp** | [**OpenAPI\Server\Model\EventExcludingIdResolvedTimestampResolutionTimestamp**](../Model/EventExcludingIdResolvedTimestampResolutionTimestamp.md)|  | [optional]

### Return type

[**OpenAPI\Server\Model\Event**](../Model/Event.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **eventControllerCreateRelatedDev**
> OpenAPI\Server\Model\EventRelatedDevice eventControllerCreateRelatedDev($eventRelatedDeviceExcludingId)



### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/EventControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\EventControllerApiInterface;

class EventControllerApi implements EventControllerApiInterface
{

    // ...

    /**
     * Implementation of EventControllerApiInterface#eventControllerCreateRelatedDev
     */
    public function eventControllerCreateRelatedDev(EventRelatedDeviceExcludingId $eventRelatedDeviceExcludingId = null)
    {
        // Implement the operation ...
    }

    // ...
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventRelatedDeviceExcludingId** | [**OpenAPI\Server\Model\EventRelatedDeviceExcludingId**](../Model/EventRelatedDeviceExcludingId.md)|  | [optional]

### Return type

[**OpenAPI\Server\Model\EventRelatedDevice**](../Model/EventRelatedDevice.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **eventControllerCreateRule**
> OpenAPI\Server\Model\EventRule eventControllerCreateRule($requestEventCreateRule)



### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/EventControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\EventControllerApiInterface;

class EventControllerApi implements EventControllerApiInterface
{

    // ...

    /**
     * Implementation of EventControllerApiInterface#eventControllerCreateRule
     */
    public function eventControllerCreateRule(RequestEventCreateRule $requestEventCreateRule = null)
    {
        // Implement the operation ...
    }

    // ...
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestEventCreateRule** | [**OpenAPI\Server\Model\RequestEventCreateRule**](../Model/RequestEventCreateRule.md)|  | [optional]

### Return type

[**OpenAPI\Server\Model\EventRule**](../Model/EventRule.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **eventControllerCreateRuleSubscription**
> OpenAPI\Server\Model\EventRuleSubscription eventControllerCreateRuleSubscription($eventRuleSubscriptionExcludingIdLastExecTimestamp)



### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/EventControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\EventControllerApiInterface;

class EventControllerApi implements EventControllerApiInterface
{

    // ...

    /**
     * Implementation of EventControllerApiInterface#eventControllerCreateRuleSubscription
     */
    public function eventControllerCreateRuleSubscription(EventRuleSubscriptionExcludingIdLastExecTimestamp $eventRuleSubscriptionExcludingIdLastExecTimestamp = null)
    {
        // Implement the operation ...
    }

    // ...
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventRuleSubscriptionExcludingIdLastExecTimestamp** | [**OpenAPI\Server\Model\EventRuleSubscriptionExcludingIdLastExecTimestamp**](../Model/EventRuleSubscriptionExcludingIdLastExecTimestamp.md)|  | [optional]

### Return type

[**OpenAPI\Server\Model\EventRuleSubscription**](../Model/EventRuleSubscription.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **eventControllerFind**
> OpenAPI\Server\Model\ResponseEventAssetEvents eventControllerFind($assetId)



### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/EventControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\EventControllerApiInterface;

class EventControllerApi implements EventControllerApiInterface
{

    // ...

    /**
     * Implementation of EventControllerApiInterface#eventControllerFind
     */
    public function eventControllerFind($assetId)
    {
        // Implement the operation ...
    }

    // ...
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | **float**|  |

### Return type

[**OpenAPI\Server\Model\ResponseEventAssetEvents**](../Model/ResponseEventAssetEvents.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **eventControllerFindUnresolved**
> OpenAPI\Server\Model\ResponseEventAssetEvents eventControllerFindUnresolved($assetId)



### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/EventControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\EventControllerApiInterface;

class EventControllerApi implements EventControllerApiInterface
{

    // ...

    /**
     * Implementation of EventControllerApiInterface#eventControllerFindUnresolved
     */
    public function eventControllerFindUnresolved($assetId)
    {
        // Implement the operation ...
    }

    // ...
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | **float**|  |

### Return type

[**OpenAPI\Server\Model\ResponseEventAssetEvents**](../Model/ResponseEventAssetEvents.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **eventControllerProcessSubscriptions**
> eventControllerProcessSubscriptions()



### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/EventControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\EventControllerApiInterface;

class EventControllerApi implements EventControllerApiInterface
{

    // ...

    /**
     * Implementation of EventControllerApiInterface#eventControllerProcessSubscriptions
     */
    public function eventControllerProcessSubscriptions()
    {
        // Implement the operation ...
    }

    // ...
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **eventControllerUpdateById**
> eventControllerUpdateById($id)



### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/EventControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\EventControllerApiInterface;

class EventControllerApi implements EventControllerApiInterface
{

    // ...

    /**
     * Implementation of EventControllerApiInterface#eventControllerUpdateById
     */
    public function eventControllerUpdateById($id)
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

