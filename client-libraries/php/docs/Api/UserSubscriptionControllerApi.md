# OpenAPI\Client\UserSubscriptionControllerApi

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**userSubscriptionControllerCreate**](UserSubscriptionControllerApi.md#userSubscriptionControllerCreate) | **POST** /user-subscriptions/paypal/callback | 
[**userSubscriptionControllerCreateUserSubscriptionBySubId**](UserSubscriptionControllerApi.md#userSubscriptionControllerCreateUserSubscriptionBySubId) | **GET** /user-subscription/get-new/{subscriptionId} | 
[**userSubscriptionControllerFindSubscriptionsByCategory**](UserSubscriptionControllerApi.md#userSubscriptionControllerFindSubscriptionsByCategory) | **GET** /user-subscription/subscriptions/{product} | 
[**userSubscriptionControllerGetByRefferenceCode**](UserSubscriptionControllerApi.md#userSubscriptionControllerGetByRefferenceCode) | **GET** /user-subscription/get-by-reference-code/{referenceCode} | 
[**userSubscriptionControllerVerifyCode**](UserSubscriptionControllerApi.md#userSubscriptionControllerVerifyCode) | **POST** /user-subscriptions/verify-reference-code | 



## userSubscriptionControllerCreate

> userSubscriptionControllerCreate($body)



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new OpenAPI\Client\Api\UserSubscriptionControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$body = new \stdClass; // object | 

try {
    $apiInstance->userSubscriptionControllerCreate($body);
} catch (Exception $e) {
    echo 'Exception when calling UserSubscriptionControllerApi->userSubscriptionControllerCreate: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **object**|  | [optional]

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## userSubscriptionControllerCreateUserSubscriptionBySubId

> \OpenAPI\Client\Model\UserSubscription userSubscriptionControllerCreateUserSubscriptionBySubId($subscription_id)



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new OpenAPI\Client\Api\UserSubscriptionControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$subscription_id = 3.4; // float | 

try {
    $result = $apiInstance->userSubscriptionControllerCreateUserSubscriptionBySubId($subscription_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling UserSubscriptionControllerApi->userSubscriptionControllerCreateUserSubscriptionBySubId: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **float**|  |

### Return type

[**\OpenAPI\Client\Model\UserSubscription**](../Model/UserSubscription.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## userSubscriptionControllerFindSubscriptionsByCategory

> \OpenAPI\Client\Model\Subscription[] userSubscriptionControllerFindSubscriptionsByCategory($product)



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new OpenAPI\Client\Api\UserSubscriptionControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$product = 'product_example'; // string | 

try {
    $result = $apiInstance->userSubscriptionControllerFindSubscriptionsByCategory($product);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling UserSubscriptionControllerApi->userSubscriptionControllerFindSubscriptionsByCategory: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product** | **string**|  |

### Return type

[**\OpenAPI\Client\Model\Subscription[]**](../Model/Subscription.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## userSubscriptionControllerGetByRefferenceCode

> \OpenAPI\Client\Model\UserSubscriptionWithRelations userSubscriptionControllerGetByRefferenceCode($reference_code)



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new OpenAPI\Client\Api\UserSubscriptionControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$reference_code = 'reference_code_example'; // string | 

try {
    $result = $apiInstance->userSubscriptionControllerGetByRefferenceCode($reference_code);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling UserSubscriptionControllerApi->userSubscriptionControllerGetByRefferenceCode: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reference_code** | **string**|  |

### Return type

[**\OpenAPI\Client\Model\UserSubscriptionWithRelations**](../Model/UserSubscriptionWithRelations.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## userSubscriptionControllerVerifyCode

> \OpenAPI\Client\Model\UserSubscription userSubscriptionControllerVerifyCode($code_verification_request)



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new OpenAPI\Client\Api\UserSubscriptionControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$code_verification_request = new \OpenAPI\Client\Model\CodeVerificationRequest(); // \OpenAPI\Client\Model\CodeVerificationRequest | 

try {
    $result = $apiInstance->userSubscriptionControllerVerifyCode($code_verification_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling UserSubscriptionControllerApi->userSubscriptionControllerVerifyCode: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code_verification_request** | [**\OpenAPI\Client\Model\CodeVerificationRequest**](../Model/CodeVerificationRequest.md)|  | [optional]

### Return type

[**\OpenAPI\Client\Model\UserSubscription**](../Model/UserSubscription.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)

