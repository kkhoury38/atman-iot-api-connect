# OpenAPI\Server\Api\DeviceEventControllerApiInterface

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deviceEventControllerCountNotViewed**](DeviceEventControllerApiInterface.md#deviceEventControllerCountNotViewed) | **GET** /device-events/by-asset/count-not-viewed/{assetId} | 
[**deviceEventControllerFind**](DeviceEventControllerApiInterface.md#deviceEventControllerFind) | **GET** /device-events/assetId/{assetId}/page/{page}/count/{count} | 
[**deviceEventControllerUpdateViewedBy**](DeviceEventControllerApiInterface.md#deviceEventControllerUpdateViewedBy) | **GET** /device-events/mark-read/{eventId} | 


## Service Declaration
```yaml
# src/Acme/MyBundle/Resources/services.yml
services:
    # ...
    acme.my_bundle.api.deviceEventController:
        class: Acme\MyBundle\Api\DeviceEventControllerApi
        tags:
            - { name: "open_api_server.api", api: "deviceEventController" }
    # ...
```

## **deviceEventControllerCountNotViewed**
> OpenAPI\Server\Model\LoopbackCount deviceEventControllerCountNotViewed($assetId)



### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/DeviceEventControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\DeviceEventControllerApiInterface;

class DeviceEventControllerApi implements DeviceEventControllerApiInterface
{

    // ...

    /**
     * Implementation of DeviceEventControllerApiInterface#deviceEventControllerCountNotViewed
     */
    public function deviceEventControllerCountNotViewed($assetId)
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

[**OpenAPI\Server\Model\LoopbackCount**](../Model/LoopbackCount.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **deviceEventControllerFind**
> OpenAPI\Server\Model\DeviceEventWithRelations deviceEventControllerFind($assetId, $page, $count)



### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/DeviceEventControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\DeviceEventControllerApiInterface;

class DeviceEventControllerApi implements DeviceEventControllerApiInterface
{

    // ...

    /**
     * Implementation of DeviceEventControllerApiInterface#deviceEventControllerFind
     */
    public function deviceEventControllerFind($assetId, $page, $count)
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
 **page** | **float**|  |
 **count** | **float**|  |

### Return type

[**OpenAPI\Server\Model\DeviceEventWithRelations**](../Model/DeviceEventWithRelations.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **deviceEventControllerUpdateViewedBy**
> deviceEventControllerUpdateViewedBy($eventId)



### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/DeviceEventControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\DeviceEventControllerApiInterface;

class DeviceEventControllerApi implements DeviceEventControllerApiInterface
{

    // ...

    /**
     * Implementation of DeviceEventControllerApiInterface#deviceEventControllerUpdateViewedBy
     */
    public function deviceEventControllerUpdateViewedBy($eventId)
    {
        // Implement the operation ...
    }

    // ...
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventId** | **float**|  |

### Return type

void (empty response body)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

