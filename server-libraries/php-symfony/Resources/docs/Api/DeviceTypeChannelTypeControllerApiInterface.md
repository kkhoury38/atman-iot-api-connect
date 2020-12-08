# OpenAPI\Server\Api\DeviceTypeChannelTypeControllerApiInterface

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deviceTypeChannelTypeControllerCount**](DeviceTypeChannelTypeControllerApiInterface.md#deviceTypeChannelTypeControllerCount) | **GET** /device-type-channel-type/{deviceTypeId}/count | 
[**deviceTypeChannelTypeControllerCreate**](DeviceTypeChannelTypeControllerApiInterface.md#deviceTypeChannelTypeControllerCreate) | **POST** /device-type-channel-type/{deviceTypeId} | 
[**deviceTypeChannelTypeControllerDeviceTypeChannelCategories**](DeviceTypeChannelTypeControllerApiInterface.md#deviceTypeChannelTypeControllerDeviceTypeChannelCategories) | **GET** /device-type-channel-type/{deviceTypeId}/channel-categories | 
[**deviceTypeChannelTypeControllerFind**](DeviceTypeChannelTypeControllerApiInterface.md#deviceTypeChannelTypeControllerFind) | **GET** /device-type-channel-type/{deviceTypeId}/page/{page}/count/{count} | 
[**deviceTypeChannelTypeControllerUpdateById**](DeviceTypeChannelTypeControllerApiInterface.md#deviceTypeChannelTypeControllerUpdateById) | **PATCH** /device-type-channel-type/channel-type/{channelTypeId} | 


## Service Declaration
```yaml
# src/Acme/MyBundle/Resources/services.yml
services:
    # ...
    acme.my_bundle.api.deviceTypeChannelTypeController:
        class: Acme\MyBundle\Api\DeviceTypeChannelTypeControllerApi
        tags:
            - { name: "open_api_server.api", api: "deviceTypeChannelTypeController" }
    # ...
```

## **deviceTypeChannelTypeControllerCount**
> OpenAPI\Server\Model\LoopbackCount deviceTypeChannelTypeControllerCount($deviceTypeId)



### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/DeviceTypeChannelTypeControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\DeviceTypeChannelTypeControllerApiInterface;

class DeviceTypeChannelTypeControllerApi implements DeviceTypeChannelTypeControllerApiInterface
{

    // ...

    /**
     * Implementation of DeviceTypeChannelTypeControllerApiInterface#deviceTypeChannelTypeControllerCount
     */
    public function deviceTypeChannelTypeControllerCount($deviceTypeId)
    {
        // Implement the operation ...
    }

    // ...
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceTypeId** | **float**|  |

### Return type

[**OpenAPI\Server\Model\LoopbackCount**](../Model/LoopbackCount.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **deviceTypeChannelTypeControllerCreate**
> OpenAPI\Server\Model\ChannelType deviceTypeChannelTypeControllerCreate($deviceTypeId, $channelTypeExcludingIdDeviceTypeId)



### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/DeviceTypeChannelTypeControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\DeviceTypeChannelTypeControllerApiInterface;

class DeviceTypeChannelTypeControllerApi implements DeviceTypeChannelTypeControllerApiInterface
{

    // ...

    /**
     * Implementation of DeviceTypeChannelTypeControllerApiInterface#deviceTypeChannelTypeControllerCreate
     */
    public function deviceTypeChannelTypeControllerCreate($deviceTypeId, ChannelTypeExcludingIdDeviceTypeId $channelTypeExcludingIdDeviceTypeId = null)
    {
        // Implement the operation ...
    }

    // ...
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceTypeId** | **float**|  |
 **channelTypeExcludingIdDeviceTypeId** | [**OpenAPI\Server\Model\ChannelTypeExcludingIdDeviceTypeId**](../Model/ChannelTypeExcludingIdDeviceTypeId.md)|  | [optional]

### Return type

[**OpenAPI\Server\Model\ChannelType**](../Model/ChannelType.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **deviceTypeChannelTypeControllerDeviceTypeChannelCategories**
> OpenAPI\Server\Model\ChannelTypeExcludingNameDescriptionUnitChannelTypeDeviceTypeId deviceTypeChannelTypeControllerDeviceTypeChannelCategories($deviceTypeId)



### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/DeviceTypeChannelTypeControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\DeviceTypeChannelTypeControllerApiInterface;

class DeviceTypeChannelTypeControllerApi implements DeviceTypeChannelTypeControllerApiInterface
{

    // ...

    /**
     * Implementation of DeviceTypeChannelTypeControllerApiInterface#deviceTypeChannelTypeControllerDeviceTypeChannelCategories
     */
    public function deviceTypeChannelTypeControllerDeviceTypeChannelCategories($deviceTypeId)
    {
        // Implement the operation ...
    }

    // ...
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceTypeId** | **float**|  |

### Return type

[**OpenAPI\Server\Model\ChannelTypeExcludingNameDescriptionUnitChannelTypeDeviceTypeId**](../Model/ChannelTypeExcludingNameDescriptionUnitChannelTypeDeviceTypeId.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **deviceTypeChannelTypeControllerFind**
> OpenAPI\Server\Model\ChannelType deviceTypeChannelTypeControllerFind($deviceTypeId, $page, $count)



### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/DeviceTypeChannelTypeControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\DeviceTypeChannelTypeControllerApiInterface;

class DeviceTypeChannelTypeControllerApi implements DeviceTypeChannelTypeControllerApiInterface
{

    // ...

    /**
     * Implementation of DeviceTypeChannelTypeControllerApiInterface#deviceTypeChannelTypeControllerFind
     */
    public function deviceTypeChannelTypeControllerFind($deviceTypeId, $page, $count)
    {
        // Implement the operation ...
    }

    // ...
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceTypeId** | **float**|  |
 **page** | **float**|  |
 **count** | **float**|  |

### Return type

[**OpenAPI\Server\Model\ChannelType**](../Model/ChannelType.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **deviceTypeChannelTypeControllerUpdateById**
> deviceTypeChannelTypeControllerUpdateById($channelTypeId, $channelTypeExcludingIdNameDeviceTypeId)



### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/DeviceTypeChannelTypeControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\DeviceTypeChannelTypeControllerApiInterface;

class DeviceTypeChannelTypeControllerApi implements DeviceTypeChannelTypeControllerApiInterface
{

    // ...

    /**
     * Implementation of DeviceTypeChannelTypeControllerApiInterface#deviceTypeChannelTypeControllerUpdateById
     */
    public function deviceTypeChannelTypeControllerUpdateById($channelTypeId, ChannelTypeExcludingIdNameDeviceTypeId $channelTypeExcludingIdNameDeviceTypeId = null)
    {
        // Implement the operation ...
    }

    // ...
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelTypeId** | **float**|  |
 **channelTypeExcludingIdNameDeviceTypeId** | [**OpenAPI\Server\Model\ChannelTypeExcludingIdNameDeviceTypeId**](../Model/ChannelTypeExcludingIdNameDeviceTypeId.md)|  | [optional]

### Return type

void (empty response body)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

