# OpenAPI\Client\DataLoggerControllerApi

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dataLoggerControllerCreate**](DataLoggerControllerApi.md#dataLoggerControllerCreate) | **POST** /data-logger | 
[**dataLoggerControllerDeleteById**](DataLoggerControllerApi.md#dataLoggerControllerDeleteById) | **DELETE** /data-logger/{id} | 
[**dataLoggerControllerFind**](DataLoggerControllerApi.md#dataLoggerControllerFind) | **GET** /data-loggers | 
[**dataLoggerControllerSetupFromFtp1**](DataLoggerControllerApi.md#dataLoggerControllerSetupFromFtp1) | **POST** /data-logger/setup-ftp/step1/{id}/{dataLoggerToken} | 
[**dataLoggerControllerSetupFromFtp3**](DataLoggerControllerApi.md#dataLoggerControllerSetupFromFtp3) | **POST** /data-logger/setup-ftp/step3/{id} | 
[**dataLoggerControllerSetupFromFtpCsv2**](DataLoggerControllerApi.md#dataLoggerControllerSetupFromFtpCsv2) | **POST** /data-logger/setup-ftp/step2/csv/{id} | 
[**dataLoggerControllerSetupFromFtpXml2**](DataLoggerControllerApi.md#dataLoggerControllerSetupFromFtpXml2) | **POST** /data-logger/setup-ftp/step2/xml/{id} | 
[**dataLoggerControllerUploadDataFromCsv**](DataLoggerControllerApi.md#dataLoggerControllerUploadDataFromCsv) | **POST** /data-logger/data-from-csv/{id}/{dataLoggerToken} | 
[**dataLoggerControllerUploadDataFromXml**](DataLoggerControllerApi.md#dataLoggerControllerUploadDataFromXml) | **POST** /data-logger/data-from-xml/{id}/{dataLoggerToken} | 



## dataLoggerControllerCreate

> \OpenAPI\Client\Model\DataLogger dataLoggerControllerCreate($data_logger_excluding_id_auth_token_config_user_id)



Used for creating a new <b>DataLogger</b> by and authorized <b>User</b>, identified by the provided <i>token</i>. <br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocsdatalogger\" target=\"_blank\">DataLoggerModel</a></i>

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DataLoggerControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$data_logger_excluding_id_auth_token_config_user_id = new \OpenAPI\Client\Model\DataLoggerExcludingIdAuthTokenConfigUserId(); // \OpenAPI\Client\Model\DataLoggerExcludingIdAuthTokenConfigUserId | 

try {
    $result = $apiInstance->dataLoggerControllerCreate($data_logger_excluding_id_auth_token_config_user_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DataLoggerControllerApi->dataLoggerControllerCreate: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_logger_excluding_id_auth_token_config_user_id** | [**\OpenAPI\Client\Model\DataLoggerExcludingIdAuthTokenConfigUserId**](../Model/DataLoggerExcludingIdAuthTokenConfigUserId.md)|  | [optional]

### Return type

[**\OpenAPI\Client\Model\DataLogger**](../Model/DataLogger.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## dataLoggerControllerDeleteById

> dataLoggerControllerDeleteById($id)



Deletes a<b> DataLogger</b> identified by <i>id</i>, owned by a <b>User</b> identified by the provided <i>token.</i><br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocsdatalogger\" target=\"_blank\">DataLoggerModel</a></i>

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DataLoggerControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 3.4; // float | 

try {
    $apiInstance->dataLoggerControllerDeleteById($id);
} catch (Exception $e) {
    echo 'Exception when calling DataLoggerControllerApi->dataLoggerControllerDeleteById: ', $e->getMessage(), PHP_EOL;
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


## dataLoggerControllerFind

> \OpenAPI\Client\Model\DataLogger[] dataLoggerControllerFind()



Returns an array of <b>DataLoggers</b> owned by a <b>User</b> identified by the provided <i>token.</i><br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocsdatalogger\" target=\"_blank\">DataLoggerModel</a></i>

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DataLoggerControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->dataLoggerControllerFind();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DataLoggerControllerApi->dataLoggerControllerFind: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\OpenAPI\Client\Model\DataLogger[]**](../Model/DataLogger.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## dataLoggerControllerSetupFromFtp1

> dataLoggerControllerSetupFromFtp1($id, $data_logger_token)



Step 1 of setup process of <b>DataLoggers</b> sending data via FTP. It is used for sending a sample uncompressed <i>file</i> containing raw data, as it was generated by the <b>DataLogger</b> (hardware) identified by <i>dataLoggerToken</i>.<br><br><i><b>References:</b> <a href=\"/documentation.html#tocsdatalogger\" target=\"_blank\">DataLoggerModel</a></i>

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new OpenAPI\Client\Api\DataLoggerControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$id = 3.4; // float | 
$data_logger_token = 'data_logger_token_example'; // string | 

try {
    $apiInstance->dataLoggerControllerSetupFromFtp1($id, $data_logger_token);
} catch (Exception $e) {
    echo 'Exception when calling DataLoggerControllerApi->dataLoggerControllerSetupFromFtp1: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **float**|  |
 **data_logger_token** | **string**|  |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## dataLoggerControllerSetupFromFtp3

> dataLoggerControllerSetupFromFtp3($id, $response_data_logger_setup_step2)



Step 3 of setup process of <b>DataLoggers</b> sending data via FTP. It is used for initiating <b>DeviceTypes</b>, <b>ChannelTypes</b> and <b>Devices</b>. Accepts as input the output of Step 2. Make sure that the <i>manufacturer</i> property is added.<br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-devicecontroller\" target=\"_blank\">DeviceController</a>, <a href=\"/documentation.html#atman-iot-devicetypecontroller\" target=\"_blank\">DeviceTypeController</a>, <a href=\"/documentation.html#atman-iot-devicetypechanneltypecontroller\" target=\"_blank\">DeviceTypeChannelTypeController</a>, <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocsdatalogger\" target=\"_blank\">DataLoggerModel</a></i>

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DataLoggerControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 3.4; // float | 
$response_data_logger_setup_step2 = new \OpenAPI\Client\Model\ResponseDataLoggerSetupStep2(); // \OpenAPI\Client\Model\ResponseDataLoggerSetupStep2 | 

try {
    $apiInstance->dataLoggerControllerSetupFromFtp3($id, $response_data_logger_setup_step2);
} catch (Exception $e) {
    echo 'Exception when calling DataLoggerControllerApi->dataLoggerControllerSetupFromFtp3: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **float**|  |
 **response_data_logger_setup_step2** | [**\OpenAPI\Client\Model\ResponseDataLoggerSetupStep2**](../Model/ResponseDataLoggerSetupStep2.md)|  | [optional]

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


## dataLoggerControllerSetupFromFtpCsv2

> \OpenAPI\Client\Model\ResponseDataLoggerSetupStep2 dataLoggerControllerSetupFromFtpCsv2($id, $request_data_logger_setup_csv2_excluding_file_format)



Step 2 of setup process of <b>DataLoggers</b> sending CSV data via FTP. It is used for mapping properties of the sent <i>file</i> to properties of models in the system. <b>DataLogger</b> to be setup, is identified by <i>id</i> and <b>User</b> performing operation is identified by <i>token</i>. Endpoint response represents the results of the mapping (required in Step 3). If it is satisfactory, it is saved by setting the property <i>confirm</i> to <i>true</i>.<br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocsdatalogger\" target=\"_blank\">DataLoggerModel</a></i>

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DataLoggerControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 3.4; // float | 
$request_data_logger_setup_csv2_excluding_file_format = new \OpenAPI\Client\Model\RequestDataLoggerSetupCsv2ExcludingFileFormat(); // \OpenAPI\Client\Model\RequestDataLoggerSetupCsv2ExcludingFileFormat | 

try {
    $result = $apiInstance->dataLoggerControllerSetupFromFtpCsv2($id, $request_data_logger_setup_csv2_excluding_file_format);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DataLoggerControllerApi->dataLoggerControllerSetupFromFtpCsv2: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **float**|  |
 **request_data_logger_setup_csv2_excluding_file_format** | [**\OpenAPI\Client\Model\RequestDataLoggerSetupCsv2ExcludingFileFormat**](../Model/RequestDataLoggerSetupCsv2ExcludingFileFormat.md)|  | [optional]

### Return type

[**\OpenAPI\Client\Model\ResponseDataLoggerSetupStep2**](../Model/ResponseDataLoggerSetupStep2.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## dataLoggerControllerSetupFromFtpXml2

> \OpenAPI\Client\Model\ResponseDataLoggerSetupStep2 dataLoggerControllerSetupFromFtpXml2($id, $request_data_logger_setup_xml2_excluding_file_format)



Step 2 of setup process of <b>DataLoggers</b> sending XML data via FTP. It is used for mapping properties of the sent <i>file</i> to properties of models in the system. <b>DataLogger</b> to be setup, is identified by <i>id</i> and <b>User</b> performing operation is identified by <i>token</i>. Endpoint response represents the results of the mapping (required in Step 3). If it is satisfactory, it is saved by setting the property <i>confirm</i> to <i>true</i>.<br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocsdatalogger\" target=\"_blank\">DataLoggerModel</a></i>

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\DataLoggerControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 3.4; // float | 
$request_data_logger_setup_xml2_excluding_file_format = new \OpenAPI\Client\Model\RequestDataLoggerSetupXml2ExcludingFileFormat(); // \OpenAPI\Client\Model\RequestDataLoggerSetupXml2ExcludingFileFormat | 

try {
    $result = $apiInstance->dataLoggerControllerSetupFromFtpXml2($id, $request_data_logger_setup_xml2_excluding_file_format);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DataLoggerControllerApi->dataLoggerControllerSetupFromFtpXml2: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **float**|  |
 **request_data_logger_setup_xml2_excluding_file_format** | [**\OpenAPI\Client\Model\RequestDataLoggerSetupXml2ExcludingFileFormat**](../Model/RequestDataLoggerSetupXml2ExcludingFileFormat.md)|  | [optional]

### Return type

[**\OpenAPI\Client\Model\ResponseDataLoggerSetupStep2**](../Model/ResponseDataLoggerSetupStep2.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## dataLoggerControllerUploadDataFromCsv

> dataLoggerControllerUploadDataFromCsv($id, $data_logger_token)



Used for receiving data, sent in CSV format by a <b>DataLogger</b> identified by <i>id</i> and <i>dataLoggerToken</i>. If the <b>DataLogger</b> is sending data via FTP, endpoint is called internally.<br><br><i><b>References:</b> <a href=\"/documentation.html#tocsdatalogger\" target=\"_blank\">DataLoggerModel</a></i>

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new OpenAPI\Client\Api\DataLoggerControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$id = 3.4; // float | 
$data_logger_token = 'data_logger_token_example'; // string | 

try {
    $apiInstance->dataLoggerControllerUploadDataFromCsv($id, $data_logger_token);
} catch (Exception $e) {
    echo 'Exception when calling DataLoggerControllerApi->dataLoggerControllerUploadDataFromCsv: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **float**|  |
 **data_logger_token** | **string**|  |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## dataLoggerControllerUploadDataFromXml

> dataLoggerControllerUploadDataFromXml($id, $data_logger_token)



Used for receiving data, sent in XML format by a <b>DataLogger</b> identified by <i>id</i> and <i>dataLoggerToken</i>. If the <b>DataLogger</b> is sending data via FTP, endpoint is called internally.<br><br><i><b>References:</b> <a href=\"/documentation.html#tocsdatalogger\" target=\"_blank\">DataLoggerModel</a></i>

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new OpenAPI\Client\Api\DataLoggerControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$id = 3.4; // float | 
$data_logger_token = 'data_logger_token_example'; // string | 

try {
    $apiInstance->dataLoggerControllerUploadDataFromXml($id, $data_logger_token);
} catch (Exception $e) {
    echo 'Exception when calling DataLoggerControllerApi->dataLoggerControllerUploadDataFromXml: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **float**|  |
 **data_logger_token** | **string**|  |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)

