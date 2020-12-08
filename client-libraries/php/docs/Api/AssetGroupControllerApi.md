# OpenAPI\Client\AssetGroupControllerApi

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assetGroupControllerCreateAssetGroup**](AssetGroupControllerApi.md#assetGroupControllerCreateAssetGroup) | **POST** /asset-group/user | 
[**assetGroupControllerDeleteById**](AssetGroupControllerApi.md#assetGroupControllerDeleteById) | **DELETE** /asset-group/{id} | 
[**assetGroupControllerFindUserAssetGroups**](AssetGroupControllerApi.md#assetGroupControllerFindUserAssetGroups) | **GET** /asset-groups/user | 
[**assetGroupControllerUpdateById**](AssetGroupControllerApi.md#assetGroupControllerUpdateById) | **PATCH** /asset-group/{id} | 



## assetGroupControllerCreateAssetGroup

> \OpenAPI\Client\Model\AssetGroup assetGroupControllerCreateAssetGroup($asset_group_excluding_id_user_id)



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\AssetGroupControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$asset_group_excluding_id_user_id = new \OpenAPI\Client\Model\AssetGroupExcludingIdUserId(); // \OpenAPI\Client\Model\AssetGroupExcludingIdUserId | 

try {
    $result = $apiInstance->assetGroupControllerCreateAssetGroup($asset_group_excluding_id_user_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AssetGroupControllerApi->assetGroupControllerCreateAssetGroup: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset_group_excluding_id_user_id** | [**\OpenAPI\Client\Model\AssetGroupExcludingIdUserId**](../Model/AssetGroupExcludingIdUserId.md)|  | [optional]

### Return type

[**\OpenAPI\Client\Model\AssetGroup**](../Model/AssetGroup.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## assetGroupControllerDeleteById

> assetGroupControllerDeleteById($id)



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\AssetGroupControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 3.4; // float | 

try {
    $apiInstance->assetGroupControllerDeleteById($id);
} catch (Exception $e) {
    echo 'Exception when calling AssetGroupControllerApi->assetGroupControllerDeleteById: ', $e->getMessage(), PHP_EOL;
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


## assetGroupControllerFindUserAssetGroups

> \OpenAPI\Client\Model\AssetGroup[] assetGroupControllerFindUserAssetGroups()



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\AssetGroupControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->assetGroupControllerFindUserAssetGroups();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AssetGroupControllerApi->assetGroupControllerFindUserAssetGroups: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\OpenAPI\Client\Model\AssetGroup[]**](../Model/AssetGroup.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## assetGroupControllerUpdateById

> assetGroupControllerUpdateById($id, $asset_group_excluding_id_user_id)



Edit (PATCH) AssetGroup

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\AssetGroupControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 3.4; // float | 
$asset_group_excluding_id_user_id = new \OpenAPI\Client\Model\AssetGroupExcludingIdUserId(); // \OpenAPI\Client\Model\AssetGroupExcludingIdUserId | 

try {
    $apiInstance->assetGroupControllerUpdateById($id, $asset_group_excluding_id_user_id);
} catch (Exception $e) {
    echo 'Exception when calling AssetGroupControllerApi->assetGroupControllerUpdateById: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **float**|  |
 **asset_group_excluding_id_user_id** | [**\OpenAPI\Client\Model\AssetGroupExcludingIdUserId**](../Model/AssetGroupExcludingIdUserId.md)|  | [optional]

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

