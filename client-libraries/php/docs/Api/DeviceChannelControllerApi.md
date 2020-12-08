# OpenAPI\Client\DeviceChannelControllerApi

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deviceChannelControllerFindByPeriod**](DeviceChannelControllerApi.md#deviceChannelControllerFindByPeriod) | **GET** /device-channel/data-by-period/{deviceId}/{channelId}/from/{fromTS}/to/{toTs}/page/{page}/count/{count}/groupBy/{groupBy}/operation/{operation} | 
[**deviceChannelControllerFindDeviceAllLastRecordedTS**](DeviceChannelControllerApi.md#deviceChannelControllerFindDeviceAllLastRecordedTS) | **GET** /device-channel/last-timestamp-in-device/{deviceId} | 
[**deviceChannelControllerFindDeviceAllLastTS**](DeviceChannelControllerApi.md#deviceChannelControllerFindDeviceAllLastTS) | **GET** /device-channel/data-last-timestamp/all-channels/{deviceId} | 
[**deviceChannelControllerFindDeviceChannelLastTS**](DeviceChannelControllerApi.md#deviceChannelControllerFindDeviceChannelLastTS) | **GET** /device-channel/data-last-timestamp/{deviceId}/{channelId} | 
[**deviceChannelControllerFindDeviceChannelLastTSSnChName**](DeviceChannelControllerApi.md#deviceChannelControllerFindDeviceChannelLastTSSnChName) | **POST** /device-channel/data-last-timestamp-by-name/{serialNo}/{channelName} | 



## deviceChannelControllerFindByPeriod

> \OpenAPI\Client\Model\ResponseDeviceChannelData deviceChannelControllerFindByPeriod($device_id, $channel_id, $from_ts, $to_ts, $page, $count, $group_by, $operation)



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DeviceChannelControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$device_id = 3.4; // float | 
$channel_id = 3.4; // float | 
$from_ts = 'from_ts_example'; // string | 
$to_ts = 'to_ts_example'; // string | 
$page = 3.4; // float | 
$count = 3.4; // float | 
$group_by = 'group_by_example'; // string | 
$operation = 'operation_example'; // string | 

try {
    $result = $apiInstance->deviceChannelControllerFindByPeriod($device_id, $channel_id, $from_ts, $to_ts, $page, $count, $group_by, $operation);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DeviceChannelControllerApi->deviceChannelControllerFindByPeriod: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_id** | **float**|  |
 **channel_id** | **float**|  |
 **from_ts** | **string**|  |
 **to_ts** | **string**|  |
 **page** | **float**|  |
 **count** | **float**|  |
 **group_by** | **string**|  |
 **operation** | **string**|  |

### Return type

[**\OpenAPI\Client\Model\ResponseDeviceChannelData**](../Model/ResponseDeviceChannelData.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## deviceChannelControllerFindDeviceAllLastRecordedTS

> \OpenAPI\Client\Model\Timestamp deviceChannelControllerFindDeviceAllLastRecordedTS($device_id)



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DeviceChannelControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$device_id = 3.4; // float | 

try {
    $result = $apiInstance->deviceChannelControllerFindDeviceAllLastRecordedTS($device_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DeviceChannelControllerApi->deviceChannelControllerFindDeviceAllLastRecordedTS: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_id** | **float**|  |

### Return type

[**\OpenAPI\Client\Model\Timestamp**](../Model/Timestamp.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## deviceChannelControllerFindDeviceAllLastTS

> \OpenAPI\Client\Model\ResponseDeviceChannelData[] deviceChannelControllerFindDeviceAllLastTS($device_id)



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DeviceChannelControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$device_id = 3.4; // float | 

try {
    $result = $apiInstance->deviceChannelControllerFindDeviceAllLastTS($device_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DeviceChannelControllerApi->deviceChannelControllerFindDeviceAllLastTS: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_id** | **float**|  |

### Return type

[**\OpenAPI\Client\Model\ResponseDeviceChannelData[]**](../Model/ResponseDeviceChannelData.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## deviceChannelControllerFindDeviceChannelLastTS

> \OpenAPI\Client\Model\ResponseDeviceChannelData deviceChannelControllerFindDeviceChannelLastTS($device_id, $channel_id)



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DeviceChannelControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$device_id = 3.4; // float | 
$channel_id = 3.4; // float | 

try {
    $result = $apiInstance->deviceChannelControllerFindDeviceChannelLastTS($device_id, $channel_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DeviceChannelControllerApi->deviceChannelControllerFindDeviceChannelLastTS: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_id** | **float**|  |
 **channel_id** | **float**|  |

### Return type

[**\OpenAPI\Client\Model\ResponseDeviceChannelData**](../Model/ResponseDeviceChannelData.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## deviceChannelControllerFindDeviceChannelLastTSSnChName

> \OpenAPI\Client\Model\ResponseDeviceChannelData deviceChannelControllerFindDeviceChannelLastTSSnChName($serial_no, $channel_name)



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DeviceChannelControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$serial_no = 'serial_no_example'; // string | 
$channel_name = 'channel_name_example'; // string | 

try {
    $result = $apiInstance->deviceChannelControllerFindDeviceChannelLastTSSnChName($serial_no, $channel_name);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DeviceChannelControllerApi->deviceChannelControllerFindDeviceChannelLastTSSnChName: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial_no** | **string**|  |
 **channel_name** | **string**|  |

### Return type

[**\OpenAPI\Client\Model\ResponseDeviceChannelData**](../Model/ResponseDeviceChannelData.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)

