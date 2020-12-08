# OpenAPI\Client\DeviceTypeChannelTypeControllerApi

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deviceTypeChannelTypeControllerCount**](DeviceTypeChannelTypeControllerApi.md#deviceTypeChannelTypeControllerCount) | **GET** /device-type-channel-type/{deviceTypeId}/count | 
[**deviceTypeChannelTypeControllerCreate**](DeviceTypeChannelTypeControllerApi.md#deviceTypeChannelTypeControllerCreate) | **POST** /device-type-channel-type/{deviceTypeId} | 
[**deviceTypeChannelTypeControllerDeviceTypeChannelCategories**](DeviceTypeChannelTypeControllerApi.md#deviceTypeChannelTypeControllerDeviceTypeChannelCategories) | **GET** /device-type-channel-type/{deviceTypeId}/channel-categories | 
[**deviceTypeChannelTypeControllerFind**](DeviceTypeChannelTypeControllerApi.md#deviceTypeChannelTypeControllerFind) | **GET** /device-type-channel-type/{deviceTypeId}/page/{page}/count/{count} | 
[**deviceTypeChannelTypeControllerUpdateById**](DeviceTypeChannelTypeControllerApi.md#deviceTypeChannelTypeControllerUpdateById) | **PATCH** /device-type-channel-type/channel-type/{channelTypeId} | 



## deviceTypeChannelTypeControllerCount

> \OpenAPI\Client\Model\LoopbackCount deviceTypeChannelTypeControllerCount($device_type_id)



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DeviceTypeChannelTypeControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$device_type_id = 3.4; // float | 

try {
    $result = $apiInstance->deviceTypeChannelTypeControllerCount($device_type_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DeviceTypeChannelTypeControllerApi->deviceTypeChannelTypeControllerCount: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_type_id** | **float**|  |

### Return type

[**\OpenAPI\Client\Model\LoopbackCount**](../Model/LoopbackCount.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## deviceTypeChannelTypeControllerCreate

> \OpenAPI\Client\Model\ChannelType deviceTypeChannelTypeControllerCreate($device_type_id, $channel_type_excluding_id_device_type_id)



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DeviceTypeChannelTypeControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$device_type_id = 3.4; // float | 
$channel_type_excluding_id_device_type_id = new \OpenAPI\Client\Model\ChannelTypeExcludingIdDeviceTypeId(); // \OpenAPI\Client\Model\ChannelTypeExcludingIdDeviceTypeId | 

try {
    $result = $apiInstance->deviceTypeChannelTypeControllerCreate($device_type_id, $channel_type_excluding_id_device_type_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DeviceTypeChannelTypeControllerApi->deviceTypeChannelTypeControllerCreate: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_type_id** | **float**|  |
 **channel_type_excluding_id_device_type_id** | [**\OpenAPI\Client\Model\ChannelTypeExcludingIdDeviceTypeId**](../Model/ChannelTypeExcludingIdDeviceTypeId.md)|  | [optional]

### Return type

[**\OpenAPI\Client\Model\ChannelType**](../Model/ChannelType.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## deviceTypeChannelTypeControllerDeviceTypeChannelCategories

> \OpenAPI\Client\Model\ChannelTypeExcludingNameDescriptionUnitChannelTypeDeviceTypeId[] deviceTypeChannelTypeControllerDeviceTypeChannelCategories($device_type_id)



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DeviceTypeChannelTypeControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$device_type_id = 3.4; // float | 

try {
    $result = $apiInstance->deviceTypeChannelTypeControllerDeviceTypeChannelCategories($device_type_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DeviceTypeChannelTypeControllerApi->deviceTypeChannelTypeControllerDeviceTypeChannelCategories: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_type_id** | **float**|  |

### Return type

[**\OpenAPI\Client\Model\ChannelTypeExcludingNameDescriptionUnitChannelTypeDeviceTypeId[]**](../Model/ChannelTypeExcludingNameDescriptionUnitChannelTypeDeviceTypeId.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## deviceTypeChannelTypeControllerFind

> \OpenAPI\Client\Model\ChannelType[] deviceTypeChannelTypeControllerFind($device_type_id, $page, $count)



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DeviceTypeChannelTypeControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$device_type_id = 3.4; // float | 
$page = 3.4; // float | 
$count = 3.4; // float | 

try {
    $result = $apiInstance->deviceTypeChannelTypeControllerFind($device_type_id, $page, $count);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DeviceTypeChannelTypeControllerApi->deviceTypeChannelTypeControllerFind: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_type_id** | **float**|  |
 **page** | **float**|  |
 **count** | **float**|  |

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


## deviceTypeChannelTypeControllerUpdateById

> deviceTypeChannelTypeControllerUpdateById($channel_type_id, $channel_type_excluding_id_name_device_type_id)



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DeviceTypeChannelTypeControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$channel_type_id = 3.4; // float | 
$channel_type_excluding_id_name_device_type_id = new \OpenAPI\Client\Model\ChannelTypeExcludingIdNameDeviceTypeId(); // \OpenAPI\Client\Model\ChannelTypeExcludingIdNameDeviceTypeId | 

try {
    $apiInstance->deviceTypeChannelTypeControllerUpdateById($channel_type_id, $channel_type_excluding_id_name_device_type_id);
} catch (Exception $e) {
    echo 'Exception when calling DeviceTypeChannelTypeControllerApi->deviceTypeChannelTypeControllerUpdateById: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channel_type_id** | **float**|  |
 **channel_type_excluding_id_name_device_type_id** | [**\OpenAPI\Client\Model\ChannelTypeExcludingIdNameDeviceTypeId**](../Model/ChannelTypeExcludingIdNameDeviceTypeId.md)|  | [optional]

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

