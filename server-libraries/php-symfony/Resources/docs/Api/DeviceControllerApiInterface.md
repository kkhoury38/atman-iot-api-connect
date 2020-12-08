# OpenAPI\Server\Api\DeviceControllerApiInterface

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deviceControllerCreate**](DeviceControllerApiInterface.md#deviceControllerCreate) | **POST** /device/{dataLoggerId} | 
[**deviceControllerCreateChannel**](DeviceControllerApiInterface.md#deviceControllerCreateChannel) | **POST** /device/{deviceId}/channel | 
[**deviceControllerDisableChannelMonitoring**](DeviceControllerApiInterface.md#deviceControllerDisableChannelMonitoring) | **GET** /device/{deviceId}/channel/{channelId}/disable-monitoring/all/{all} | 
[**deviceControllerEnableChannelMonitoring**](DeviceControllerApiInterface.md#deviceControllerEnableChannelMonitoring) | **GET** /device/{deviceId}/channel/{channelId}/enable-monitoring/all/{all} | 
[**deviceControllerFind**](DeviceControllerApiInterface.md#deviceControllerFind) | **GET** /devices/{dataLoggerId} | 
[**deviceControllerFindChannelTypes**](DeviceControllerApiInterface.md#deviceControllerFindChannelTypes) | **GET** /device/{deviceId}/channelTypes | 
[**deviceControllerFindChannels**](DeviceControllerApiInterface.md#deviceControllerFindChannels) | **GET** /device/{deviceId}/channels | 
[**deviceControllerGetDevicesWithType**](DeviceControllerApiInterface.md#deviceControllerGetDevicesWithType) | **POST** /devices/with-device-type | 
[**deviceControllerUpdateById**](DeviceControllerApiInterface.md#deviceControllerUpdateById) | **PATCH** /device/{id} | 


## Service Declaration
```yaml
# src/Acme/MyBundle/Resources/services.yml
services:
    # ...
    acme.my_bundle.api.deviceController:
        class: Acme\MyBundle\Api\DeviceControllerApi
        tags:
            - { name: "open_api_server.api", api: "deviceController" }
    # ...
```

## **deviceControllerCreate**
> OpenAPI\Server\Model\Device deviceControllerCreate($dataLoggerId, $deviceExcludingIdDataLoggerId)



Used for creating a new <b>Device</b>, belonging to a <b>DataLogger</b> with id <i>dataLoggerId</i> by an authorized <b>User</b> identified by the provided <i>token</i>.<br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-dataloggercontroller\" target=\"_blank\">DataLoggerController</a>, <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocsdevice\" target=\"_blank\">DeviceModel</a></i>

### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/DeviceControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\DeviceControllerApiInterface;

class DeviceControllerApi implements DeviceControllerApiInterface
{

    // ...

    /**
     * Implementation of DeviceControllerApiInterface#deviceControllerCreate
     */
    public function deviceControllerCreate($dataLoggerId, DeviceExcludingIdDataLoggerId $deviceExcludingIdDataLoggerId = null)
    {
        // Implement the operation ...
    }

    // ...
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataLoggerId** | **float**|  |
 **deviceExcludingIdDataLoggerId** | [**OpenAPI\Server\Model\DeviceExcludingIdDataLoggerId**](../Model/DeviceExcludingIdDataLoggerId.md)|  | [optional]

### Return type

[**OpenAPI\Server\Model\Device**](../Model/Device.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **deviceControllerCreateChannel**
> OpenAPI\Server\Model\Channel deviceControllerCreateChannel($deviceId, $channelExcludingIdDeviceId)



Used for creating a new <b>Channel</b>, belonging to a <b>Device</b> with id <i>deviceId</i> by an authorized <b>User</b> identified by the provided <i>token</i>.<br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocschannel\" target=\"_blank\">ChannelModel</a>, <a href=\"/documentation.html#tocsdevice\" target=\"_blank\">DeviceModel</a></i>

### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/DeviceControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\DeviceControllerApiInterface;

class DeviceControllerApi implements DeviceControllerApiInterface
{

    // ...

    /**
     * Implementation of DeviceControllerApiInterface#deviceControllerCreateChannel
     */
    public function deviceControllerCreateChannel($deviceId, ChannelExcludingIdDeviceId $channelExcludingIdDeviceId = null)
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
 **channelExcludingIdDeviceId** | [**OpenAPI\Server\Model\ChannelExcludingIdDeviceId**](../Model/ChannelExcludingIdDeviceId.md)|  | [optional]

### Return type

[**OpenAPI\Server\Model\Channel**](../Model/Channel.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **deviceControllerDisableChannelMonitoring**
> deviceControllerDisableChannelMonitoring($deviceId, $channelId, $all)



Disable monitoring of <b>Channel</b> identified by <i>channelId</i>, in <b>Device</b> identified by <i>deviceId</i>, owned by <b>User</b> authorized by <i>token</i>.<br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocschannel\" target=\"_blank\">ChannelModel</a>, <a href=\"/documentation.html#tocsdevice\" target=\"_blank\">DeviceModel</a></i>

### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/DeviceControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\DeviceControllerApiInterface;

class DeviceControllerApi implements DeviceControllerApiInterface
{

    // ...

    /**
     * Implementation of DeviceControllerApiInterface#deviceControllerDisableChannelMonitoring
     */
    public function deviceControllerDisableChannelMonitoring($deviceId, $channelId, $all)
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
 **all** | **bool**|  |

### Return type

void (empty response body)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **deviceControllerEnableChannelMonitoring**
> deviceControllerEnableChannelMonitoring($deviceId, $channelId, $all)



Enable monitoring of <b>Channel</b> identified by <i>channelId</i>, in <b>Device</b> identified by <i>deviceId</i>, owned by <b>User</b> authorized by <i>token</i>.<br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocschannel\" target=\"_blank\">ChannelModel</a>, <a href=\"/documentation.html#tocsdevice\" target=\"_blank\">DeviceModel</a></i>

### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/DeviceControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\DeviceControllerApiInterface;

class DeviceControllerApi implements DeviceControllerApiInterface
{

    // ...

    /**
     * Implementation of DeviceControllerApiInterface#deviceControllerEnableChannelMonitoring
     */
    public function deviceControllerEnableChannelMonitoring($deviceId, $channelId, $all)
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
 **all** | **bool**|  |

### Return type

void (empty response body)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **deviceControllerFind**
> OpenAPI\Server\Model\Device deviceControllerFind($dataLoggerId)



Used for getting the <b>Devices</b>, belonging to a <b>DataLogger</b> with id <i>dataLoggerId</i> by an authorized <b>User</b> identified by the provided <i>token</i>.<br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-dataloggercontroller\" target=\"_blank\">DataLoggerController</a>, <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocsdevice\" target=\"_blank\">DeviceModel</a></i>

### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/DeviceControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\DeviceControllerApiInterface;

class DeviceControllerApi implements DeviceControllerApiInterface
{

    // ...

    /**
     * Implementation of DeviceControllerApiInterface#deviceControllerFind
     */
    public function deviceControllerFind($dataLoggerId)
    {
        // Implement the operation ...
    }

    // ...
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataLoggerId** | **float**|  |

### Return type

[**OpenAPI\Server\Model\Device**](../Model/Device.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **deviceControllerFindChannelTypes**
> OpenAPI\Server\Model\ChannelType deviceControllerFindChannelTypes($deviceId)



Used for getting the  <b>Channel</b><b>Types</b> of <b>Channels</b> belonging to a <b>Device</b> with id <i>deviceId</i>, by an authorized <b>User</b> identified by the provided <i>token</i>.<br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocschannel\" target=\"_blank\">ChannelModel</a>, <a href=\"/documentation.html#tocschanneltype\" target=\"_blank\">ChannelTypeModel</a>, <a href=\"/documentation.html#tocsdevice\" target=\"_blank\">DeviceModel</a></i>

### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/DeviceControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\DeviceControllerApiInterface;

class DeviceControllerApi implements DeviceControllerApiInterface
{

    // ...

    /**
     * Implementation of DeviceControllerApiInterface#deviceControllerFindChannelTypes
     */
    public function deviceControllerFindChannelTypes($deviceId)
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

[**OpenAPI\Server\Model\ChannelType**](../Model/ChannelType.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **deviceControllerFindChannels**
> OpenAPI\Server\Model\Channel deviceControllerFindChannels($deviceId)



Used for getting <b>Channel</b><b>s</b>, belonging to a <b>Device</b> with id <i>deviceId</i>, by an authorized <b>User</b> identified by the provided <i>token</i>.<br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocschannel\" target=\"_blank\">ChannelModel</a>, <a href=\"/documentation.html#tocsdevice\" target=\"_blank\">DeviceModel</a></i>

### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/DeviceControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\DeviceControllerApiInterface;

class DeviceControllerApi implements DeviceControllerApiInterface
{

    // ...

    /**
     * Implementation of DeviceControllerApiInterface#deviceControllerFindChannels
     */
    public function deviceControllerFindChannels($deviceId)
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

[**OpenAPI\Server\Model\Channel**](../Model/Channel.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **deviceControllerGetDevicesWithType**
> OpenAPI\Server\Model\DeviceWithType deviceControllerGetDevicesWithType($deviceExcludingDescriptionSerialNoDataLoggerIdDeviceTypeId)



Returns array of devices with their device types

### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/DeviceControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\DeviceControllerApiInterface;

class DeviceControllerApi implements DeviceControllerApiInterface
{

    // ...

    /**
     * Implementation of DeviceControllerApiInterface#deviceControllerGetDevicesWithType
     */
    public function deviceControllerGetDevicesWithType(array $deviceExcludingDescriptionSerialNoDataLoggerIdDeviceTypeId = null)
    {
        // Implement the operation ...
    }

    // ...
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceExcludingDescriptionSerialNoDataLoggerIdDeviceTypeId** | [**OpenAPI\Server\Model\DeviceExcludingDescriptionSerialNoDataLoggerIdDeviceTypeId**](../Model/DeviceExcludingDescriptionSerialNoDataLoggerIdDeviceTypeId.md)|  | [optional]

### Return type

[**OpenAPI\Server\Model\DeviceWithType**](../Model/DeviceWithType.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **deviceControllerUpdateById**
> deviceControllerUpdateById($id, $deviceExcludingIdSerialNoDataLoggerIdDeviceTypeId)



### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/DeviceControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\DeviceControllerApiInterface;

class DeviceControllerApi implements DeviceControllerApiInterface
{

    // ...

    /**
     * Implementation of DeviceControllerApiInterface#deviceControllerUpdateById
     */
    public function deviceControllerUpdateById($id, DeviceExcludingIdSerialNoDataLoggerIdDeviceTypeId $deviceExcludingIdSerialNoDataLoggerIdDeviceTypeId = null)
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
 **deviceExcludingIdSerialNoDataLoggerIdDeviceTypeId** | [**OpenAPI\Server\Model\DeviceExcludingIdSerialNoDataLoggerIdDeviceTypeId**](../Model/DeviceExcludingIdSerialNoDataLoggerIdDeviceTypeId.md)|  | [optional]

### Return type

void (empty response body)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

