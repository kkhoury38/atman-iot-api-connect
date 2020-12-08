# OpenAPI\Client\EventControllerApi

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**eventControllerCreateNow**](EventControllerApi.md#eventControllerCreateNow) | **POST** /event | 
[**eventControllerCreateRelatedDev**](EventControllerApi.md#eventControllerCreateRelatedDev) | **POST** /event/related-device | 
[**eventControllerCreateRule**](EventControllerApi.md#eventControllerCreateRule) | **POST** /event/rule | 
[**eventControllerCreateRuleSubscription**](EventControllerApi.md#eventControllerCreateRuleSubscription) | **POST** /event/rule/subscription | 
[**eventControllerFind**](EventControllerApi.md#eventControllerFind) | **GET** /events/all/{assetId} | 
[**eventControllerFindUnresolved**](EventControllerApi.md#eventControllerFindUnresolved) | **GET** /events/unresolved/{assetId} | 
[**eventControllerProcessSubscriptions**](EventControllerApi.md#eventControllerProcessSubscriptions) | **GET** /event/process | 
[**eventControllerUpdateById**](EventControllerApi.md#eventControllerUpdateById) | **PATCH** /event/resolve/{id} | 



## eventControllerCreateNow

> \OpenAPI\Client\Model\Event eventControllerCreateNow($event_excluding_id_resolved_timestamp_resolution_timestamp)



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\EventControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$event_excluding_id_resolved_timestamp_resolution_timestamp = new \OpenAPI\Client\Model\EventExcludingIdResolvedTimestampResolutionTimestamp(); // \OpenAPI\Client\Model\EventExcludingIdResolvedTimestampResolutionTimestamp | 

try {
    $result = $apiInstance->eventControllerCreateNow($event_excluding_id_resolved_timestamp_resolution_timestamp);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling EventControllerApi->eventControllerCreateNow: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **event_excluding_id_resolved_timestamp_resolution_timestamp** | [**\OpenAPI\Client\Model\EventExcludingIdResolvedTimestampResolutionTimestamp**](../Model/EventExcludingIdResolvedTimestampResolutionTimestamp.md)|  | [optional]

### Return type

[**\OpenAPI\Client\Model\Event**](../Model/Event.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## eventControllerCreateRelatedDev

> \OpenAPI\Client\Model\EventRelatedDevice eventControllerCreateRelatedDev($event_related_device_excluding_id)



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\EventControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$event_related_device_excluding_id = new \OpenAPI\Client\Model\EventRelatedDeviceExcludingId(); // \OpenAPI\Client\Model\EventRelatedDeviceExcludingId | 

try {
    $result = $apiInstance->eventControllerCreateRelatedDev($event_related_device_excluding_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling EventControllerApi->eventControllerCreateRelatedDev: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **event_related_device_excluding_id** | [**\OpenAPI\Client\Model\EventRelatedDeviceExcludingId**](../Model/EventRelatedDeviceExcludingId.md)|  | [optional]

### Return type

[**\OpenAPI\Client\Model\EventRelatedDevice**](../Model/EventRelatedDevice.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## eventControllerCreateRule

> \OpenAPI\Client\Model\EventRule eventControllerCreateRule($request_event_create_rule)



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\EventControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$request_event_create_rule = new \OpenAPI\Client\Model\RequestEventCreateRule(); // \OpenAPI\Client\Model\RequestEventCreateRule | 

try {
    $result = $apiInstance->eventControllerCreateRule($request_event_create_rule);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling EventControllerApi->eventControllerCreateRule: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request_event_create_rule** | [**\OpenAPI\Client\Model\RequestEventCreateRule**](../Model/RequestEventCreateRule.md)|  | [optional]

### Return type

[**\OpenAPI\Client\Model\EventRule**](../Model/EventRule.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## eventControllerCreateRuleSubscription

> \OpenAPI\Client\Model\EventRuleSubscription eventControllerCreateRuleSubscription($event_rule_subscription_excluding_id_last_exec_timestamp)



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\EventControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$event_rule_subscription_excluding_id_last_exec_timestamp = new \OpenAPI\Client\Model\EventRuleSubscriptionExcludingIdLastExecTimestamp(); // \OpenAPI\Client\Model\EventRuleSubscriptionExcludingIdLastExecTimestamp | 

try {
    $result = $apiInstance->eventControllerCreateRuleSubscription($event_rule_subscription_excluding_id_last_exec_timestamp);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling EventControllerApi->eventControllerCreateRuleSubscription: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **event_rule_subscription_excluding_id_last_exec_timestamp** | [**\OpenAPI\Client\Model\EventRuleSubscriptionExcludingIdLastExecTimestamp**](../Model/EventRuleSubscriptionExcludingIdLastExecTimestamp.md)|  | [optional]

### Return type

[**\OpenAPI\Client\Model\EventRuleSubscription**](../Model/EventRuleSubscription.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## eventControllerFind

> \OpenAPI\Client\Model\ResponseEventAssetEvents[] eventControllerFind($asset_id)



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\EventControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$asset_id = 3.4; // float | 

try {
    $result = $apiInstance->eventControllerFind($asset_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling EventControllerApi->eventControllerFind: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset_id** | **float**|  |

### Return type

[**\OpenAPI\Client\Model\ResponseEventAssetEvents[]**](../Model/ResponseEventAssetEvents.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## eventControllerFindUnresolved

> \OpenAPI\Client\Model\ResponseEventAssetEvents[] eventControllerFindUnresolved($asset_id)



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\EventControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$asset_id = 3.4; // float | 

try {
    $result = $apiInstance->eventControllerFindUnresolved($asset_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling EventControllerApi->eventControllerFindUnresolved: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset_id** | **float**|  |

### Return type

[**\OpenAPI\Client\Model\ResponseEventAssetEvents[]**](../Model/ResponseEventAssetEvents.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## eventControllerProcessSubscriptions

> eventControllerProcessSubscriptions()



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\EventControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $apiInstance->eventControllerProcessSubscriptions();
} catch (Exception $e) {
    echo 'Exception when calling EventControllerApi->eventControllerProcessSubscriptions: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

This endpoint does not need any parameter.

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


## eventControllerUpdateById

> eventControllerUpdateById($id)



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\EventControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 3.4; // float | 

try {
    $apiInstance->eventControllerUpdateById($id);
} catch (Exception $e) {
    echo 'Exception when calling EventControllerApi->eventControllerUpdateById: ', $e->getMessage(), PHP_EOL;
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

