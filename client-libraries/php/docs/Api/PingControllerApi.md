# OpenAPI\Client\PingControllerApi

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**pingControllerPing**](PingControllerApi.md#pingControllerPing) | **GET** /ping | 



## pingControllerPing

> \OpenAPI\Client\Model\InlineResponse200 pingControllerPing()



Ping the server

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new OpenAPI\Client\Api\PingControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $result = $apiInstance->pingControllerPing();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PingControllerApi->pingControllerPing: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\OpenAPI\Client\Model\InlineResponse200**](../Model/InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)

