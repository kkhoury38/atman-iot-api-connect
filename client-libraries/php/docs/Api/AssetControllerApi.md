# OpenAPI\Client\AssetControllerApi

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assetControllerCreate**](AssetControllerApi.md#assetControllerCreate) | **POST** /asset | 
[**assetControllerDeleteById**](AssetControllerApi.md#assetControllerDeleteById) | **DELETE** /asset/{id} | 
[**assetControllerFind**](AssetControllerApi.md#assetControllerFind) | **GET** /assets/{assetGroupId} | 
[**assetControllerFindByName**](AssetControllerApi.md#assetControllerFindByName) | **GET** /asset/by-name/{assetName} | 
[**assetControllerFindByUserId**](AssetControllerApi.md#assetControllerFindByUserId) | **GET** /assets/by-user/{userId} | 
[**assetControllerUpdateById**](AssetControllerApi.md#assetControllerUpdateById) | **PATCH** /asset/{id} | 



## assetControllerCreate

> \OpenAPI\Client\Model\Asset assetControllerCreate($asset_excluding_id)



Used for creating a new <b>Asset</b>, by an authorized <b>User</b>, identified by the provided <i>token</i>. An <b>Asset</b> is a way of logical grouping of <b>Devices</b>. One <b>Asset</b> can contain many <b>Devices</b> and can belong to one <b>AssetGroup</b>. <br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-assetgroupcontroller\" target=\"_blank\">AssetGroupController</a>, <a href=\"/documentation.html#atman-iot-devicecontroller\" target=\"_blank\">DeviceController</a>, <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocsasset\" target=\"_blank\">AssetModel</a></i>

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\AssetControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$asset_excluding_id = new \OpenAPI\Client\Model\AssetExcludingId(); // \OpenAPI\Client\Model\AssetExcludingId | 

try {
    $result = $apiInstance->assetControllerCreate($asset_excluding_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AssetControllerApi->assetControllerCreate: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset_excluding_id** | [**\OpenAPI\Client\Model\AssetExcludingId**](../Model/AssetExcludingId.md)|  | [optional]

### Return type

[**\OpenAPI\Client\Model\Asset**](../Model/Asset.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## assetControllerDeleteById

> assetControllerDeleteById($id)



Used for deleting an <b>Asset</b>, identified by <i>id</i> by an authorized <b>User</b> identified by the provided <i>token</i>. <br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocsasset\" target=\"_blank\">AssetModel</a></i>

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\AssetControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 3.4; // float | 

try {
    $apiInstance->assetControllerDeleteById($id);
} catch (Exception $e) {
    echo 'Exception when calling AssetControllerApi->assetControllerDeleteById: ', $e->getMessage(), PHP_EOL;
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


## assetControllerFind

> \OpenAPI\Client\Model\Asset[] assetControllerFind($asset_group_id)



Used for getting the <b>Assets</b> belonging to an <b>AssetGroup</b>, in turn belonging to an authorized <b>User</b> or <b>Virtual User</b>.  An <b>Asset</b> is a way of logical grouping of <b>Devices</b>. One <b>Asset</b> can contain many <b>Devices</b> and can belong to the <b>AssetGroup</b> with the provided <i>assetGroupId</i>. An <b>AssetGroup</b> can have many <b>Assets</b>. <i><b>. <br><br>References:</b> <a href=\"/documentation.html#atman-iot-assetgroupcontroller\" target=\"_blank\">AssetGroupController</a>, <a href=\"/documentation.html#atman-iot-devicecontroller\" target=\"_blank\">DeviceController</a>, <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocsasset\" target=\"_blank\">AssetModel</a></i>

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\AssetControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$asset_group_id = 3.4; // float | 

try {
    $result = $apiInstance->assetControllerFind($asset_group_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AssetControllerApi->assetControllerFind: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset_group_id** | **float**|  |

### Return type

[**\OpenAPI\Client\Model\Asset[]**](../Model/Asset.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## assetControllerFindByName

> \OpenAPI\Client\Model\Asset assetControllerFindByName($asset_name)



Used for getting the <b>Asset</b> identified by <i>assetName</i>, by an authorized <b>User</b> or <b>Virtual User</b> identified by the provided <i>token</i>. An <b>Asset</b> is a way of logical grouping of <b>Devices</b>. One <b>Asset</b> can contain many <b>Devices</b> and can belong to one <b>AssetGroup</b>.<br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-assetgroupcontroller\" target=\"_blank\">AssetGroupController</a>, <a href=\"/documentation.html#atman-iot-devicecontroller\" target=\"_blank\">DeviceController</a>, <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocsasset\" target=\"_blank\">AssetModel</a></i>

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\AssetControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$asset_name = 'asset_name_example'; // string | 

try {
    $result = $apiInstance->assetControllerFindByName($asset_name);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AssetControllerApi->assetControllerFindByName: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset_name** | **string**|  |

### Return type

[**\OpenAPI\Client\Model\Asset**](../Model/Asset.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## assetControllerFindByUserId

> \OpenAPI\Client\Model\Asset[] assetControllerFindByUserId($user_id)



Used for getting the <b>Assets</b> of an authorized <b>User</b> identified by the provided <i>userId</i>, by an authorized <b>Admin</b>. An <b>Asset</b> is a way of logical grouping of <b>Devices</b>. One <b>Asset</b> can contain many <b>Devices</b> and can belong to one <b>AssetGroup</b>.<br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-assetgroupcontroller\" target=\"_blank\">AssetGroupController</a>, <a href=\"/documentation.html#atman-iot-devicecontroller\" target=\"_blank\">DeviceController</a>, <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocsasset\" target=\"_blank\">AssetModel</a></i>

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\AssetControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$user_id = 3.4; // float | 

try {
    $result = $apiInstance->assetControllerFindByUserId($user_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AssetControllerApi->assetControllerFindByUserId: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **float**|  |

### Return type

[**\OpenAPI\Client\Model\Asset[]**](../Model/Asset.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## assetControllerUpdateById

> assetControllerUpdateById($id, $asset_excluding_id_asset_group_id)



Edit (Patch) Asset by Id

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\AssetControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 3.4; // float | 
$asset_excluding_id_asset_group_id = new \OpenAPI\Client\Model\AssetExcludingIdAssetGroupId(); // \OpenAPI\Client\Model\AssetExcludingIdAssetGroupId | 

try {
    $apiInstance->assetControllerUpdateById($id, $asset_excluding_id_asset_group_id);
} catch (Exception $e) {
    echo 'Exception when calling AssetControllerApi->assetControllerUpdateById: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **float**|  |
 **asset_excluding_id_asset_group_id** | [**\OpenAPI\Client\Model\AssetExcludingIdAssetGroupId**](../Model/AssetExcludingIdAssetGroupId.md)|  | [optional]

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

