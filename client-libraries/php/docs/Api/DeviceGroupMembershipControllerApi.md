# OpenAPI\Client\DeviceGroupMembershipControllerApi

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deviceGroupMembershipControllerCreate**](DeviceGroupMembershipControllerApi.md#deviceGroupMembershipControllerCreate) | **POST** /device-group-memberships | 
[**deviceGroupMembershipControllerDeleteById**](DeviceGroupMembershipControllerApi.md#deviceGroupMembershipControllerDeleteById) | **DELETE** /device-group-memberships/{id} | 
[**deviceGroupMembershipControllerFindByAssetId**](DeviceGroupMembershipControllerApi.md#deviceGroupMembershipControllerFindByAssetId) | **GET** /device-group-memberships/by-asset/{assetId} | 
[**deviceGroupMembershipControllerFindByDeviceId**](DeviceGroupMembershipControllerApi.md#deviceGroupMembershipControllerFindByDeviceId) | **GET** /device-group-memberships/by-device/{deviceId} | 



## deviceGroupMembershipControllerCreate

> \OpenAPI\Client\Model\DeviceGroupMembership deviceGroupMembershipControllerCreate($device_group_membership_excluding_id)



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DeviceGroupMembershipControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$device_group_membership_excluding_id = new \OpenAPI\Client\Model\DeviceGroupMembershipExcludingId(); // \OpenAPI\Client\Model\DeviceGroupMembershipExcludingId | 

try {
    $result = $apiInstance->deviceGroupMembershipControllerCreate($device_group_membership_excluding_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DeviceGroupMembershipControllerApi->deviceGroupMembershipControllerCreate: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_group_membership_excluding_id** | [**\OpenAPI\Client\Model\DeviceGroupMembershipExcludingId**](../Model/DeviceGroupMembershipExcludingId.md)|  | [optional]

### Return type

[**\OpenAPI\Client\Model\DeviceGroupMembership**](../Model/DeviceGroupMembership.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## deviceGroupMembershipControllerDeleteById

> deviceGroupMembershipControllerDeleteById($id)



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DeviceGroupMembershipControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 3.4; // float | 

try {
    $apiInstance->deviceGroupMembershipControllerDeleteById($id);
} catch (Exception $e) {
    echo 'Exception when calling DeviceGroupMembershipControllerApi->deviceGroupMembershipControllerDeleteById: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **float**|  |

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


## deviceGroupMembershipControllerFindByAssetId

> \OpenAPI\Client\Model\DeviceGroupMembership[] deviceGroupMembershipControllerFindByAssetId($asset_id)



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DeviceGroupMembershipControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$asset_id = 3.4; // float | 

try {
    $result = $apiInstance->deviceGroupMembershipControllerFindByAssetId($asset_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DeviceGroupMembershipControllerApi->deviceGroupMembershipControllerFindByAssetId: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset_id** | **float**|  |

### Return type

[**\OpenAPI\Client\Model\DeviceGroupMembership[]**](../Model/DeviceGroupMembership.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## deviceGroupMembershipControllerFindByDeviceId

> \OpenAPI\Client\Model\DeviceGroupMembership[] deviceGroupMembershipControllerFindByDeviceId($device_id)



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DeviceGroupMembershipControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$device_id = 3.4; // float | 

try {
    $result = $apiInstance->deviceGroupMembershipControllerFindByDeviceId($device_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DeviceGroupMembershipControllerApi->deviceGroupMembershipControllerFindByDeviceId: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_id** | **float**|  |

### Return type

[**\OpenAPI\Client\Model\DeviceGroupMembership[]**](../Model/DeviceGroupMembership.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)

