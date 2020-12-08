# OpenAPI\Client\DeviceTypeControllerApi

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deviceTypeControllerCount**](DeviceTypeControllerApi.md#deviceTypeControllerCount) | **GET** /device-type/count | 
[**deviceTypeControllerCreate**](DeviceTypeControllerApi.md#deviceTypeControllerCreate) | **POST** /device-type | 
[**deviceTypeControllerFind**](DeviceTypeControllerApi.md#deviceTypeControllerFind) | **GET** /device-type/get-all/page/{page}/count/{count} | 
[**deviceTypeControllerGetAssetDeviceCategories**](DeviceTypeControllerApi.md#deviceTypeControllerGetAssetDeviceCategories) | **GET** /device-type/device-categories-in-asset/{assetId} | 
[**deviceTypeControllerUpdateById**](DeviceTypeControllerApi.md#deviceTypeControllerUpdateById) | **PATCH** /device-type/{id} | 



## deviceTypeControllerCount

> \OpenAPI\Client\Model\LoopbackCount deviceTypeControllerCount()



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DeviceTypeControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->deviceTypeControllerCount();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DeviceTypeControllerApi->deviceTypeControllerCount: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

This endpoint does not need any parameter.

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


## deviceTypeControllerCreate

> \OpenAPI\Client\Model\DeviceType deviceTypeControllerCreate($device_type)



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DeviceTypeControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$device_type = new \OpenAPI\Client\Model\DeviceType(); // \OpenAPI\Client\Model\DeviceType | 

try {
    $result = $apiInstance->deviceTypeControllerCreate($device_type);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DeviceTypeControllerApi->deviceTypeControllerCreate: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_type** | [**\OpenAPI\Client\Model\DeviceType**](../Model/DeviceType.md)|  | [optional]

### Return type

[**\OpenAPI\Client\Model\DeviceType**](../Model/DeviceType.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## deviceTypeControllerFind

> \OpenAPI\Client\Model\DeviceType[] deviceTypeControllerFind($page, $count)



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DeviceTypeControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$page = 3.4; // float | 
$count = 3.4; // float | 

try {
    $result = $apiInstance->deviceTypeControllerFind($page, $count);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DeviceTypeControllerApi->deviceTypeControllerFind: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **float**|  |
 **count** | **float**|  |

### Return type

[**\OpenAPI\Client\Model\DeviceType[]**](../Model/DeviceType.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## deviceTypeControllerGetAssetDeviceCategories

> \OpenAPI\Client\Model\DeviceTypeExcludingModelDescriptionManufacturer[] deviceTypeControllerGetAssetDeviceCategories($asset_id)



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DeviceTypeControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$asset_id = 3.4; // float | 

try {
    $result = $apiInstance->deviceTypeControllerGetAssetDeviceCategories($asset_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DeviceTypeControllerApi->deviceTypeControllerGetAssetDeviceCategories: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset_id** | **float**|  |

### Return type

[**\OpenAPI\Client\Model\DeviceTypeExcludingModelDescriptionManufacturer[]**](../Model/DeviceTypeExcludingModelDescriptionManufacturer.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## deviceTypeControllerUpdateById

> deviceTypeControllerUpdateById($id, $device_type_excluding_id_model_manufacturer)



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DeviceTypeControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 3.4; // float | 
$device_type_excluding_id_model_manufacturer = new \OpenAPI\Client\Model\DeviceTypeExcludingIdModelManufacturer(); // \OpenAPI\Client\Model\DeviceTypeExcludingIdModelManufacturer | 

try {
    $apiInstance->deviceTypeControllerUpdateById($id, $device_type_excluding_id_model_manufacturer);
} catch (Exception $e) {
    echo 'Exception when calling DeviceTypeControllerApi->deviceTypeControllerUpdateById: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **float**|  |
 **device_type_excluding_id_model_manufacturer** | [**\OpenAPI\Client\Model\DeviceTypeExcludingIdModelManufacturer**](../Model/DeviceTypeExcludingIdModelManufacturer.md)|  | [optional]

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

