# OpenAPI\Client\SchedulerControllerApi

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**schedulerControllerProcessEvents**](SchedulerControllerApi.md#schedulerControllerProcessEvents) | **GET** /scheduler/process/events/{attempt}/{serverKey} | 
[**schedulerControllerProcessFtpRejected**](SchedulerControllerApi.md#schedulerControllerProcessFtpRejected) | **GET** /scheduler/process/ftp-rejected/{serverKey} | 



## schedulerControllerProcessEvents

> schedulerControllerProcessEvents($attempt, $server_key)



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new OpenAPI\Client\Api\SchedulerControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$attempt = 3.4; // float | 
$server_key = 'server_key_example'; // string | 

try {
    $apiInstance->schedulerControllerProcessEvents($attempt, $server_key);
} catch (Exception $e) {
    echo 'Exception when calling SchedulerControllerApi->schedulerControllerProcessEvents: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attempt** | **float**|  |
 **server_key** | **string**|  |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## schedulerControllerProcessFtpRejected

> schedulerControllerProcessFtpRejected($server_key)



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new OpenAPI\Client\Api\SchedulerControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$server_key = 'server_key_example'; // string | 

try {
    $apiInstance->schedulerControllerProcessFtpRejected($server_key);
} catch (Exception $e) {
    echo 'Exception when calling SchedulerControllerApi->schedulerControllerProcessFtpRejected: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **server_key** | **string**|  |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)

