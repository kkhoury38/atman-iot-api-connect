# OpenAPI\Client\DeviceEventControllerApi

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deviceEventControllerCountNotViewed**](DeviceEventControllerApi.md#deviceEventControllerCountNotViewed) | **GET** /device-events/by-asset/count-not-viewed/{assetId} | 
[**deviceEventControllerFind**](DeviceEventControllerApi.md#deviceEventControllerFind) | **GET** /device-events/assetId/{assetId}/page/{page}/count/{count} | 
[**deviceEventControllerUpdateViewedBy**](DeviceEventControllerApi.md#deviceEventControllerUpdateViewedBy) | **GET** /device-events/mark-read/{eventId} | 



## deviceEventControllerCountNotViewed

> \OpenAPI\Client\Model\LoopbackCount deviceEventControllerCountNotViewed($asset_id)



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DeviceEventControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$asset_id = 3.4; // float | 

try {
    $result = $apiInstance->deviceEventControllerCountNotViewed($asset_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DeviceEventControllerApi->deviceEventControllerCountNotViewed: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset_id** | **float**|  |

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


## deviceEventControllerFind

> \OpenAPI\Client\Model\DeviceEventWithRelations[] deviceEventControllerFind($asset_id, $page, $count)



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DeviceEventControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$asset_id = 3.4; // float | 
$page = 3.4; // float | 
$count = 3.4; // float | 

try {
    $result = $apiInstance->deviceEventControllerFind($asset_id, $page, $count);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DeviceEventControllerApi->deviceEventControllerFind: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset_id** | **float**|  |
 **page** | **float**|  |
 **count** | **float**|  |

### Return type

[**\OpenAPI\Client\Model\DeviceEventWithRelations[]**](../Model/DeviceEventWithRelations.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## deviceEventControllerUpdateViewedBy

> deviceEventControllerUpdateViewedBy($event_id)



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DeviceEventControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$event_id = 3.4; // float | 

try {
    $apiInstance->deviceEventControllerUpdateViewedBy($event_id);
} catch (Exception $e) {
    echo 'Exception when calling DeviceEventControllerApi->deviceEventControllerUpdateViewedBy: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **event_id** | **float**|  |

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

