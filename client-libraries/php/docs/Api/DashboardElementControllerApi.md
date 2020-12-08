# OpenAPI\Client\DashboardElementControllerApi

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dashboardElementControllerCreate**](DashboardElementControllerApi.md#dashboardElementControllerCreate) | **POST** /dashboard-element | 
[**dashboardElementControllerDeleteById**](DashboardElementControllerApi.md#dashboardElementControllerDeleteById) | **DELETE** /dashboard-element/{id} | 
[**dashboardElementControllerFindByUserIdAssetIdLocation**](DashboardElementControllerApi.md#dashboardElementControllerFindByUserIdAssetIdLocation) | **GET** /dashboard-elements/asset-id/{assetId}/user-id/{userId}/location/{location} | 
[**dashboardElementControllerMoveElementDown**](DashboardElementControllerApi.md#dashboardElementControllerMoveElementDown) | **PATCH** /dashboard-element/{id}/move-down | 
[**dashboardElementControllerMoveElementUp**](DashboardElementControllerApi.md#dashboardElementControllerMoveElementUp) | **PATCH** /dashboard-element/{id}/move-up | 



## dashboardElementControllerCreate

> \OpenAPI\Client\Model\DashboardElement dashboardElementControllerCreate($new_dashboard_element)



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DashboardElementControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$new_dashboard_element = new \OpenAPI\Client\Model\NewDashboardElement(); // \OpenAPI\Client\Model\NewDashboardElement | 

try {
    $result = $apiInstance->dashboardElementControllerCreate($new_dashboard_element);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DashboardElementControllerApi->dashboardElementControllerCreate: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **new_dashboard_element** | [**\OpenAPI\Client\Model\NewDashboardElement**](../Model/NewDashboardElement.md)|  | [optional]

### Return type

[**\OpenAPI\Client\Model\DashboardElement**](../Model/DashboardElement.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## dashboardElementControllerDeleteById

> dashboardElementControllerDeleteById($id)



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DashboardElementControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 3.4; // float | 

try {
    $apiInstance->dashboardElementControllerDeleteById($id);
} catch (Exception $e) {
    echo 'Exception when calling DashboardElementControllerApi->dashboardElementControllerDeleteById: ', $e->getMessage(), PHP_EOL;
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


## dashboardElementControllerFindByUserIdAssetIdLocation

> \OpenAPI\Client\Model\DashboardElementWithScope[] dashboardElementControllerFindByUserIdAssetIdLocation($asset_id, $user_id, $location)



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DashboardElementControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$asset_id = 3.4; // float | 
$user_id = 3.4; // float | 
$location = 'location_example'; // string | 

try {
    $result = $apiInstance->dashboardElementControllerFindByUserIdAssetIdLocation($asset_id, $user_id, $location);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DashboardElementControllerApi->dashboardElementControllerFindByUserIdAssetIdLocation: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset_id** | **float**|  |
 **user_id** | **float**|  |
 **location** | **string**|  |

### Return type

[**\OpenAPI\Client\Model\DashboardElementWithScope[]**](../Model/DashboardElementWithScope.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## dashboardElementControllerMoveElementDown

> dashboardElementControllerMoveElementDown($id)



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DashboardElementControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 3.4; // float | 

try {
    $apiInstance->dashboardElementControllerMoveElementDown($id);
} catch (Exception $e) {
    echo 'Exception when calling DashboardElementControllerApi->dashboardElementControllerMoveElementDown: ', $e->getMessage(), PHP_EOL;
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


## dashboardElementControllerMoveElementUp

> dashboardElementControllerMoveElementUp($id)



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DashboardElementControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 3.4; // float | 

try {
    $apiInstance->dashboardElementControllerMoveElementUp($id);
} catch (Exception $e) {
    echo 'Exception when calling DashboardElementControllerApi->dashboardElementControllerMoveElementUp: ', $e->getMessage(), PHP_EOL;
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

