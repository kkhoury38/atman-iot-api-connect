# OpenAPI\Server\Api\DeviceChannelControllerApiInterface

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deviceChannelControllerFindByPeriod**](DeviceChannelControllerApiInterface.md#deviceChannelControllerFindByPeriod) | **GET** /device-channel/data-by-period/{deviceId}/{channelId}/from/{fromTS}/to/{toTs}/page/{page}/count/{count}/groupBy/{groupBy}/operation/{operation} | 
[**deviceChannelControllerFindDeviceAllLastRecordedTS**](DeviceChannelControllerApiInterface.md#deviceChannelControllerFindDeviceAllLastRecordedTS) | **GET** /device-channel/last-timestamp-in-device/{deviceId} | 
[**deviceChannelControllerFindDeviceAllLastTS**](DeviceChannelControllerApiInterface.md#deviceChannelControllerFindDeviceAllLastTS) | **GET** /device-channel/data-last-timestamp/all-channels/{deviceId} | 
[**deviceChannelControllerFindDeviceChannelLastTS**](DeviceChannelControllerApiInterface.md#deviceChannelControllerFindDeviceChannelLastTS) | **GET** /device-channel/data-last-timestamp/{deviceId}/{channelId} | 
[**deviceChannelControllerFindDeviceChannelLastTSSnChName**](DeviceChannelControllerApiInterface.md#deviceChannelControllerFindDeviceChannelLastTSSnChName) | **POST** /device-channel/data-last-timestamp-by-name/{serialNo}/{channelName} | 


## Service Declaration
```yaml
# src/Acme/MyBundle/Resources/services.yml
services:
    # ...
    acme.my_bundle.api.deviceChannelController:
        class: Acme\MyBundle\Api\DeviceChannelControllerApi
        tags:
            - { name: "open_api_server.api", api: "deviceChannelController" }
    # ...
```

## **deviceChannelControllerFindByPeriod**
> OpenAPI\Server\Model\ResponseDeviceChannelData deviceChannelControllerFindByPeriod($deviceId, $channelId, $fromTS, $toTs, $page, $count, $groupBy, $operation)



### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/DeviceChannelControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\DeviceChannelControllerApiInterface;

class DeviceChannelControllerApi implements DeviceChannelControllerApiInterface
{

    // ...

    /**
     * Implementation of DeviceChannelControllerApiInterface#deviceChannelControllerFindByPeriod
     */
    public function deviceChannelControllerFindByPeriod($deviceId, $channelId, $fromTS, $toTs, $page, $count, $groupBy, $operation)
    {
        // Implement the operation ...
    }

    // ...
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **float**|  |
 **channelId** | **float**|  |
 **fromTS** | **string**|  |
 **toTs** | **string**|  |
 **page** | **float**|  |
 **count** | **float**|  |
 **groupBy** | **string**|  |
 **operation** | **string**|  |

### Return type

[**OpenAPI\Server\Model\ResponseDeviceChannelData**](../Model/ResponseDeviceChannelData.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **deviceChannelControllerFindDeviceAllLastRecordedTS**
> OpenAPI\Server\Model\Timestamp deviceChannelControllerFindDeviceAllLastRecordedTS($deviceId)



### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/DeviceChannelControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\DeviceChannelControllerApiInterface;

class DeviceChannelControllerApi implements DeviceChannelControllerApiInterface
{

    // ...

    /**
     * Implementation of DeviceChannelControllerApiInterface#deviceChannelControllerFindDeviceAllLastRecordedTS
     */
    public function deviceChannelControllerFindDeviceAllLastRecordedTS($deviceId)
    {
        // Implement the operation ...
    }

    // ...
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **float**|  |

### Return type

[**OpenAPI\Server\Model\Timestamp**](../Model/Timestamp.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **deviceChannelControllerFindDeviceAllLastTS**
> OpenAPI\Server\Model\ResponseDeviceChannelData deviceChannelControllerFindDeviceAllLastTS($deviceId)



### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/DeviceChannelControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\DeviceChannelControllerApiInterface;

class DeviceChannelControllerApi implements DeviceChannelControllerApiInterface
{

    // ...

    /**
     * Implementation of DeviceChannelControllerApiInterface#deviceChannelControllerFindDeviceAllLastTS
     */
    public function deviceChannelControllerFindDeviceAllLastTS($deviceId)
    {
        // Implement the operation ...
    }

    // ...
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **float**|  |

### Return type

[**OpenAPI\Server\Model\ResponseDeviceChannelData**](../Model/ResponseDeviceChannelData.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **deviceChannelControllerFindDeviceChannelLastTS**
> OpenAPI\Server\Model\ResponseDeviceChannelData deviceChannelControllerFindDeviceChannelLastTS($deviceId, $channelId)



### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/DeviceChannelControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\DeviceChannelControllerApiInterface;

class DeviceChannelControllerApi implements DeviceChannelControllerApiInterface
{

    // ...

    /**
     * Implementation of DeviceChannelControllerApiInterface#deviceChannelControllerFindDeviceChannelLastTS
     */
    public function deviceChannelControllerFindDeviceChannelLastTS($deviceId, $channelId)
    {
        // Implement the operation ...
    }

    // ...
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **float**|  |
 **channelId** | **float**|  |

### Return type

[**OpenAPI\Server\Model\ResponseDeviceChannelData**](../Model/ResponseDeviceChannelData.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **deviceChannelControllerFindDeviceChannelLastTSSnChName**
> OpenAPI\Server\Model\ResponseDeviceChannelData deviceChannelControllerFindDeviceChannelLastTSSnChName($serialNo, $channelName)



### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/DeviceChannelControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\DeviceChannelControllerApiInterface;

class DeviceChannelControllerApi implements DeviceChannelControllerApiInterface
{

    // ...

    /**
     * Implementation of DeviceChannelControllerApiInterface#deviceChannelControllerFindDeviceChannelLastTSSnChName
     */
    public function deviceChannelControllerFindDeviceChannelLastTSSnChName($serialNo, $channelName)
    {
        // Implement the operation ...
    }

    // ...
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serialNo** | **string**|  |
 **channelName** | **string**|  |

### Return type

[**OpenAPI\Server\Model\ResponseDeviceChannelData**](../Model/ResponseDeviceChannelData.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

