# OpenAPI\Client\VirtualAccessControllerApi

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**virtualAccessControllerCreateAccessByGroup**](VirtualAccessControllerApi.md#virtualAccessControllerCreateAccessByGroup) | **POST** /virtual-access/by-asset-group | 
[**virtualAccessControllerCreateAccessByRight**](VirtualAccessControllerApi.md#virtualAccessControllerCreateAccessByRight) | **POST** /virtual-access/by-asset | 
[**virtualAccessControllerDeleteById**](VirtualAccessControllerApi.md#virtualAccessControllerDeleteById) | **DELETE** /virtual-access/{id} | 
[**virtualAccessControllerFindByUserId**](VirtualAccessControllerApi.md#virtualAccessControllerFindByUserId) | **GET** /virtual-access/by-userId/{userId} | 



## virtualAccessControllerCreateAccessByGroup

> \OpenAPI\Client\Model\VirtualAccess[] virtualAccessControllerCreateAccessByGroup($request_virtual_access_right_excluding_asset_id)



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\VirtualAccessControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$request_virtual_access_right_excluding_asset_id = new \OpenAPI\Client\Model\RequestVirtualAccessRightExcludingAssetId(); // \OpenAPI\Client\Model\RequestVirtualAccessRightExcludingAssetId | 

try {
    $result = $apiInstance->virtualAccessControllerCreateAccessByGroup($request_virtual_access_right_excluding_asset_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling VirtualAccessControllerApi->virtualAccessControllerCreateAccessByGroup: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request_virtual_access_right_excluding_asset_id** | [**\OpenAPI\Client\Model\RequestVirtualAccessRightExcludingAssetId**](../Model/RequestVirtualAccessRightExcludingAssetId.md)|  | [optional]

### Return type

[**\OpenAPI\Client\Model\VirtualAccess[]**](../Model/VirtualAccess.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## virtualAccessControllerCreateAccessByRight

> \OpenAPI\Client\Model\VirtualAccess virtualAccessControllerCreateAccessByRight($request_virtual_access_right_excluding_asset_group_id)



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\VirtualAccessControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$request_virtual_access_right_excluding_asset_group_id = new \OpenAPI\Client\Model\RequestVirtualAccessRightExcludingAssetGroupId(); // \OpenAPI\Client\Model\RequestVirtualAccessRightExcludingAssetGroupId | 

try {
    $result = $apiInstance->virtualAccessControllerCreateAccessByRight($request_virtual_access_right_excluding_asset_group_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling VirtualAccessControllerApi->virtualAccessControllerCreateAccessByRight: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request_virtual_access_right_excluding_asset_group_id** | [**\OpenAPI\Client\Model\RequestVirtualAccessRightExcludingAssetGroupId**](../Model/RequestVirtualAccessRightExcludingAssetGroupId.md)|  | [optional]

### Return type

[**\OpenAPI\Client\Model\VirtualAccess**](../Model/VirtualAccess.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## virtualAccessControllerDeleteById

> virtualAccessControllerDeleteById($id)



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\VirtualAccessControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 3.4; // float | 

try {
    $apiInstance->virtualAccessControllerDeleteById($id);
} catch (Exception $e) {
    echo 'Exception when calling VirtualAccessControllerApi->virtualAccessControllerDeleteById: ', $e->getMessage(), PHP_EOL;
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


## virtualAccessControllerFindByUserId

> \OpenAPI\Client\Model\VirtualAccess[] virtualAccessControllerFindByUserId($user_id)



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\VirtualAccessControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$user_id = 3.4; // float | 

try {
    $result = $apiInstance->virtualAccessControllerFindByUserId($user_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling VirtualAccessControllerApi->virtualAccessControllerFindByUserId: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **float**|  |

### Return type

[**\OpenAPI\Client\Model\VirtualAccess[]**](../Model/VirtualAccess.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)

