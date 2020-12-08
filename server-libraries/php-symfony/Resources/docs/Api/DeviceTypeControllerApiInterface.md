# OpenAPI\Server\Api\DeviceTypeControllerApiInterface

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deviceTypeControllerCount**](DeviceTypeControllerApiInterface.md#deviceTypeControllerCount) | **GET** /device-type/count | 
[**deviceTypeControllerCreate**](DeviceTypeControllerApiInterface.md#deviceTypeControllerCreate) | **POST** /device-type | 
[**deviceTypeControllerFind**](DeviceTypeControllerApiInterface.md#deviceTypeControllerFind) | **GET** /device-type/get-all/page/{page}/count/{count} | 
[**deviceTypeControllerGetAssetDeviceCategories**](DeviceTypeControllerApiInterface.md#deviceTypeControllerGetAssetDeviceCategories) | **GET** /device-type/device-categories-in-asset/{assetId} | 
[**deviceTypeControllerUpdateById**](DeviceTypeControllerApiInterface.md#deviceTypeControllerUpdateById) | **PATCH** /device-type/{id} | 


## Service Declaration
```yaml
# src/Acme/MyBundle/Resources/services.yml
services:
    # ...
    acme.my_bundle.api.deviceTypeController:
        class: Acme\MyBundle\Api\DeviceTypeControllerApi
        tags:
            - { name: "open_api_server.api", api: "deviceTypeController" }
    # ...
```

## **deviceTypeControllerCount**
> OpenAPI\Server\Model\LoopbackCount deviceTypeControllerCount()



### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/DeviceTypeControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\DeviceTypeControllerApiInterface;

class DeviceTypeControllerApi implements DeviceTypeControllerApiInterface
{

    // ...

    /**
     * Implementation of DeviceTypeControllerApiInterface#deviceTypeControllerCount
     */
    public function deviceTypeControllerCount()
    {
        // Implement the operation ...
    }

    // ...
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**OpenAPI\Server\Model\LoopbackCount**](../Model/LoopbackCount.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **deviceTypeControllerCreate**
> OpenAPI\Server\Model\DeviceType deviceTypeControllerCreate($deviceType)



### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/DeviceTypeControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\DeviceTypeControllerApiInterface;

class DeviceTypeControllerApi implements DeviceTypeControllerApiInterface
{

    // ...

    /**
     * Implementation of DeviceTypeControllerApiInterface#deviceTypeControllerCreate
     */
    public function deviceTypeControllerCreate(DeviceType $deviceType = null)
    {
        // Implement the operation ...
    }

    // ...
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceType** | [**OpenAPI\Server\Model\DeviceType**](../Model/DeviceType.md)|  | [optional]

### Return type

[**OpenAPI\Server\Model\DeviceType**](../Model/DeviceType.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **deviceTypeControllerFind**
> OpenAPI\Server\Model\DeviceType deviceTypeControllerFind($page, $count)



### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/DeviceTypeControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\DeviceTypeControllerApiInterface;

class DeviceTypeControllerApi implements DeviceTypeControllerApiInterface
{

    // ...

    /**
     * Implementation of DeviceTypeControllerApiInterface#deviceTypeControllerFind
     */
    public function deviceTypeControllerFind($page, $count)
    {
        // Implement the operation ...
    }

    // ...
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **float**|  |
 **count** | **float**|  |

### Return type

[**OpenAPI\Server\Model\DeviceType**](../Model/DeviceType.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **deviceTypeControllerGetAssetDeviceCategories**
> OpenAPI\Server\Model\DeviceTypeExcludingModelDescriptionManufacturer deviceTypeControllerGetAssetDeviceCategories($assetId)



### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/DeviceTypeControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\DeviceTypeControllerApiInterface;

class DeviceTypeControllerApi implements DeviceTypeControllerApiInterface
{

    // ...

    /**
     * Implementation of DeviceTypeControllerApiInterface#deviceTypeControllerGetAssetDeviceCategories
     */
    public function deviceTypeControllerGetAssetDeviceCategories($assetId)
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

[**OpenAPI\Server\Model\DeviceTypeExcludingModelDescriptionManufacturer**](../Model/DeviceTypeExcludingModelDescriptionManufacturer.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **deviceTypeControllerUpdateById**
> deviceTypeControllerUpdateById($id, $deviceTypeExcludingIdModelManufacturer)



### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/DeviceTypeControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\DeviceTypeControllerApiInterface;

class DeviceTypeControllerApi implements DeviceTypeControllerApiInterface
{

    // ...

    /**
     * Implementation of DeviceTypeControllerApiInterface#deviceTypeControllerUpdateById
     */
    public function deviceTypeControllerUpdateById($id, DeviceTypeExcludingIdModelManufacturer $deviceTypeExcludingIdModelManufacturer = null)
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
 **deviceTypeExcludingIdModelManufacturer** | [**OpenAPI\Server\Model\DeviceTypeExcludingIdModelManufacturer**](../Model/DeviceTypeExcludingIdModelManufacturer.md)|  | [optional]

### Return type

void (empty response body)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

