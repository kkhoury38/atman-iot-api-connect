# OpenAPI\Client\DeviceControllerApi

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deviceControllerCreate**](DeviceControllerApi.md#deviceControllerCreate) | **POST** /device/{dataLoggerId} | 
[**deviceControllerCreateChannel**](DeviceControllerApi.md#deviceControllerCreateChannel) | **POST** /device/{deviceId}/channel | 
[**deviceControllerDisableChannelMonitoring**](DeviceControllerApi.md#deviceControllerDisableChannelMonitoring) | **GET** /device/{deviceId}/channel/{channelId}/disable-monitoring/all/{all} | 
[**deviceControllerEnableChannelMonitoring**](DeviceControllerApi.md#deviceControllerEnableChannelMonitoring) | **GET** /device/{deviceId}/channel/{channelId}/enable-monitoring/all/{all} | 
[**deviceControllerFind**](DeviceControllerApi.md#deviceControllerFind) | **GET** /devices/{dataLoggerId} | 
[**deviceControllerFindChannelTypes**](DeviceControllerApi.md#deviceControllerFindChannelTypes) | **GET** /device/{deviceId}/channelTypes | 
[**deviceControllerFindChannels**](DeviceControllerApi.md#deviceControllerFindChannels) | **GET** /device/{deviceId}/channels | 
[**deviceControllerGetDevicesWithType**](DeviceControllerApi.md#deviceControllerGetDevicesWithType) | **POST** /devices/with-device-type | 
[**deviceControllerUpdateById**](DeviceControllerApi.md#deviceControllerUpdateById) | **PATCH** /device/{id} | 



## deviceControllerCreate

> \OpenAPI\Client\Model\Device deviceControllerCreate($data_logger_id, $device_excluding_id_data_logger_id)



Used for creating a new <b>Device</b>, belonging to a <b>DataLogger</b> with id <i>dataLoggerId</i> by an authorized <b>User</b> identified by the provided <i>token</i>.<br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-dataloggercontroller\" target=\"_blank\">DataLoggerController</a>, <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocsdevice\" target=\"_blank\">DeviceModel</a></i>

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DeviceControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$data_logger_id = 3.4; // float | 
$device_excluding_id_data_logger_id = new \OpenAPI\Client\Model\DeviceExcludingIdDataLoggerId(); // \OpenAPI\Client\Model\DeviceExcludingIdDataLoggerId | 

try {
    $result = $apiInstance->deviceControllerCreate($data_logger_id, $device_excluding_id_data_logger_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DeviceControllerApi->deviceControllerCreate: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_logger_id** | **float**|  |
 **device_excluding_id_data_logger_id** | [**\OpenAPI\Client\Model\DeviceExcludingIdDataLoggerId**](../Model/DeviceExcludingIdDataLoggerId.md)|  | [optional]

### Return type

[**\OpenAPI\Client\Model\Device**](../Model/Device.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## deviceControllerCreateChannel

> \OpenAPI\Client\Model\Channel deviceControllerCreateChannel($device_id, $channel_excluding_id_device_id)



Used for creating a new <b>Channel</b>, belonging to a <b>Device</b> with id <i>deviceId</i> by an authorized <b>User</b> identified by the provided <i>token</i>.<br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocschannel\" target=\"_blank\">ChannelModel</a>, <a href=\"/documentation.html#tocsdevice\" target=\"_blank\">DeviceModel</a></i>

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DeviceControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$device_id = 3.4; // float | 
$channel_excluding_id_device_id = new \OpenAPI\Client\Model\ChannelExcludingIdDeviceId(); // \OpenAPI\Client\Model\ChannelExcludingIdDeviceId | 

try {
    $result = $apiInstance->deviceControllerCreateChannel($device_id, $channel_excluding_id_device_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DeviceControllerApi->deviceControllerCreateChannel: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_id** | **float**|  |
 **channel_excluding_id_device_id** | [**\OpenAPI\Client\Model\ChannelExcludingIdDeviceId**](../Model/ChannelExcludingIdDeviceId.md)|  | [optional]

### Return type

[**\OpenAPI\Client\Model\Channel**](../Model/Channel.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## deviceControllerDisableChannelMonitoring

> deviceControllerDisableChannelMonitoring($device_id, $channel_id, $all)



Disable monitoring of <b>Channel</b> identified by <i>channelId</i>, in <b>Device</b> identified by <i>deviceId</i>, owned by <b>User</b> authorized by <i>token</i>.<br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocschannel\" target=\"_blank\">ChannelModel</a>, <a href=\"/documentation.html#tocsdevice\" target=\"_blank\">DeviceModel</a></i>

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DeviceControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$device_id = 3.4; // float | 
$channel_id = 3.4; // float | 
$all = True; // bool | 

try {
    $apiInstance->deviceControllerDisableChannelMonitoring($device_id, $channel_id, $all);
} catch (Exception $e) {
    echo 'Exception when calling DeviceControllerApi->deviceControllerDisableChannelMonitoring: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_id** | **float**|  |
 **channel_id** | **float**|  |
 **all** | **bool**|  |

### Return type

void (empty response body)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## deviceControllerEnableChannelMonitoring

> deviceControllerEnableChannelMonitoring($device_id, $channel_id, $all)



Enable monitoring of <b>Channel</b> identified by <i>channelId</i>, in <b>Device</b> identified by <i>deviceId</i>, owned by <b>User</b> authorized by <i>token</i>.<br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocschannel\" target=\"_blank\">ChannelModel</a>, <a href=\"/documentation.html#tocsdevice\" target=\"_blank\">DeviceModel</a></i>

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DeviceControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$device_id = 3.4; // float | 
$channel_id = 3.4; // float | 
$all = True; // bool | 

try {
    $apiInstance->deviceControllerEnableChannelMonitoring($device_id, $channel_id, $all);
} catch (Exception $e) {
    echo 'Exception when calling DeviceControllerApi->deviceControllerEnableChannelMonitoring: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_id** | **float**|  |
 **channel_id** | **float**|  |
 **all** | **bool**|  |

### Return type

void (empty response body)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## deviceControllerFind

> \OpenAPI\Client\Model\Device[] deviceControllerFind($data_logger_id)



Used for getting the <b>Devices</b>, belonging to a <b>DataLogger</b> with id <i>dataLoggerId</i> by an authorized <b>User</b> identified by the provided <i>token</i>.<br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-dataloggercontroller\" target=\"_blank\">DataLoggerController</a>, <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocsdevice\" target=\"_blank\">DeviceModel</a></i>

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DeviceControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$data_logger_id = 3.4; // float | 

try {
    $result = $apiInstance->deviceControllerFind($data_logger_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DeviceControllerApi->deviceControllerFind: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_logger_id** | **float**|  |

### Return type

[**\OpenAPI\Client\Model\Device[]**](../Model/Device.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## deviceControllerFindChannelTypes

> \OpenAPI\Client\Model\ChannelType[] deviceControllerFindChannelTypes($device_id)



Used for getting the  <b>Channel</b><b>Types</b> of <b>Channels</b> belonging to a <b>Device</b> with id <i>deviceId</i>, by an authorized <b>User</b> identified by the provided <i>token</i>.<br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocschannel\" target=\"_blank\">ChannelModel</a>, <a href=\"/documentation.html#tocschanneltype\" target=\"_blank\">ChannelTypeModel</a>, <a href=\"/documentation.html#tocsdevice\" target=\"_blank\">DeviceModel</a></i>

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DeviceControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$device_id = 3.4; // float | 

try {
    $result = $apiInstance->deviceControllerFindChannelTypes($device_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DeviceControllerApi->deviceControllerFindChannelTypes: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_id** | **float**|  |

### Return type

[**\OpenAPI\Client\Model\ChannelType[]**](../Model/ChannelType.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## deviceControllerFindChannels

> \OpenAPI\Client\Model\Channel[] deviceControllerFindChannels($device_id)



Used for getting <b>Channel</b><b>s</b>, belonging to a <b>Device</b> with id <i>deviceId</i>, by an authorized <b>User</b> identified by the provided <i>token</i>.<br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocschannel\" target=\"_blank\">ChannelModel</a>, <a href=\"/documentation.html#tocsdevice\" target=\"_blank\">DeviceModel</a></i>

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DeviceControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$device_id = 3.4; // float | 

try {
    $result = $apiInstance->deviceControllerFindChannels($device_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DeviceControllerApi->deviceControllerFindChannels: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_id** | **float**|  |

### Return type

[**\OpenAPI\Client\Model\Channel[]**](../Model/Channel.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## deviceControllerGetDevicesWithType

> \OpenAPI\Client\Model\DeviceWithType[] deviceControllerGetDevicesWithType($device_excluding_description_serial_no_data_logger_id_device_type_id)



Returns array of devices with their device types

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DeviceControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$device_excluding_description_serial_no_data_logger_id_device_type_id = array(new \OpenAPI\Client\Model\DeviceExcludingDescriptionSerialNoDataLoggerIdDeviceTypeId()); // \OpenAPI\Client\Model\DeviceExcludingDescriptionSerialNoDataLoggerIdDeviceTypeId[] | 

try {
    $result = $apiInstance->deviceControllerGetDevicesWithType($device_excluding_description_serial_no_data_logger_id_device_type_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DeviceControllerApi->deviceControllerGetDevicesWithType: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_excluding_description_serial_no_data_logger_id_device_type_id** | [**\OpenAPI\Client\Model\DeviceExcludingDescriptionSerialNoDataLoggerIdDeviceTypeId[]**](../Model/DeviceExcludingDescriptionSerialNoDataLoggerIdDeviceTypeId.md)|  | [optional]

### Return type

[**\OpenAPI\Client\Model\DeviceWithType[]**](../Model/DeviceWithType.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## deviceControllerUpdateById

> deviceControllerUpdateById($id, $device_excluding_id_serial_no_data_logger_id_device_type_id)



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DeviceControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 3.4; // float | 
$device_excluding_id_serial_no_data_logger_id_device_type_id = new \OpenAPI\Client\Model\DeviceExcludingIdSerialNoDataLoggerIdDeviceTypeId(); // \OpenAPI\Client\Model\DeviceExcludingIdSerialNoDataLoggerIdDeviceTypeId | 

try {
    $apiInstance->deviceControllerUpdateById($id, $device_excluding_id_serial_no_data_logger_id_device_type_id);
} catch (Exception $e) {
    echo 'Exception when calling DeviceControllerApi->deviceControllerUpdateById: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **float**|  |
 **device_excluding_id_serial_no_data_logger_id_device_type_id** | [**\OpenAPI\Client\Model\DeviceExcludingIdSerialNoDataLoggerIdDeviceTypeId**](../Model/DeviceExcludingIdSerialNoDataLoggerIdDeviceTypeId.md)|  | [optional]

### Return type

void (empty response body)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)

