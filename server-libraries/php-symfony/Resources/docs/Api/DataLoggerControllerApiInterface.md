# OpenAPI\Server\Api\DataLoggerControllerApiInterface

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dataLoggerControllerCreate**](DataLoggerControllerApiInterface.md#dataLoggerControllerCreate) | **POST** /data-logger | 
[**dataLoggerControllerDeleteById**](DataLoggerControllerApiInterface.md#dataLoggerControllerDeleteById) | **DELETE** /data-logger/{id} | 
[**dataLoggerControllerFind**](DataLoggerControllerApiInterface.md#dataLoggerControllerFind) | **GET** /data-loggers | 
[**dataLoggerControllerSetupFromFtp1**](DataLoggerControllerApiInterface.md#dataLoggerControllerSetupFromFtp1) | **POST** /data-logger/setup-ftp/step1/{id}/{dataLoggerToken} | 
[**dataLoggerControllerSetupFromFtp3**](DataLoggerControllerApiInterface.md#dataLoggerControllerSetupFromFtp3) | **POST** /data-logger/setup-ftp/step3/{id} | 
[**dataLoggerControllerSetupFromFtpCsv2**](DataLoggerControllerApiInterface.md#dataLoggerControllerSetupFromFtpCsv2) | **POST** /data-logger/setup-ftp/step2/csv/{id} | 
[**dataLoggerControllerSetupFromFtpXml2**](DataLoggerControllerApiInterface.md#dataLoggerControllerSetupFromFtpXml2) | **POST** /data-logger/setup-ftp/step2/xml/{id} | 
[**dataLoggerControllerUploadDataFromCsv**](DataLoggerControllerApiInterface.md#dataLoggerControllerUploadDataFromCsv) | **POST** /data-logger/data-from-csv/{id}/{dataLoggerToken} | 
[**dataLoggerControllerUploadDataFromXml**](DataLoggerControllerApiInterface.md#dataLoggerControllerUploadDataFromXml) | **POST** /data-logger/data-from-xml/{id}/{dataLoggerToken} | 


## Service Declaration
```yaml
# src/Acme/MyBundle/Resources/services.yml
services:
    # ...
    acme.my_bundle.api.dataLoggerController:
        class: Acme\MyBundle\Api\DataLoggerControllerApi
        tags:
            - { name: "open_api_server.api", api: "dataLoggerController" }
    # ...
```

## **dataLoggerControllerCreate**
> OpenAPI\Server\Model\DataLogger dataLoggerControllerCreate($dataLoggerExcludingIdAuthTokenConfigUserId)



Used for creating a new <b>DataLogger</b> by and authorized <b>User</b>, identified by the provided <i>token</i>. <br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocsdatalogger\" target=\"_blank\">DataLoggerModel</a></i>

### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/DataLoggerControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\DataLoggerControllerApiInterface;

class DataLoggerControllerApi implements DataLoggerControllerApiInterface
{

    // ...

    /**
     * Implementation of DataLoggerControllerApiInterface#dataLoggerControllerCreate
     */
    public function dataLoggerControllerCreate(DataLoggerExcludingIdAuthTokenConfigUserId $dataLoggerExcludingIdAuthTokenConfigUserId = null)
    {
        // Implement the operation ...
    }

    // ...
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataLoggerExcludingIdAuthTokenConfigUserId** | [**OpenAPI\Server\Model\DataLoggerExcludingIdAuthTokenConfigUserId**](../Model/DataLoggerExcludingIdAuthTokenConfigUserId.md)|  | [optional]

### Return type

[**OpenAPI\Server\Model\DataLogger**](../Model/DataLogger.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **dataLoggerControllerDeleteById**
> dataLoggerControllerDeleteById($id)



Deletes a<b> DataLogger</b> identified by <i>id</i>, owned by a <b>User</b> identified by the provided <i>token.</i><br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocsdatalogger\" target=\"_blank\">DataLoggerModel</a></i>

### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/DataLoggerControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\DataLoggerControllerApiInterface;

class DataLoggerControllerApi implements DataLoggerControllerApiInterface
{

    // ...

    /**
     * Implementation of DataLoggerControllerApiInterface#dataLoggerControllerDeleteById
     */
    public function dataLoggerControllerDeleteById($id)
    {
        // Implement the operation ...
    }

    // ...
}
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

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **dataLoggerControllerFind**
> OpenAPI\Server\Model\DataLogger dataLoggerControllerFind()



Returns an array of <b>DataLoggers</b> owned by a <b>User</b> identified by the provided <i>token.</i><br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocsdatalogger\" target=\"_blank\">DataLoggerModel</a></i>

### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/DataLoggerControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\DataLoggerControllerApiInterface;

class DataLoggerControllerApi implements DataLoggerControllerApiInterface
{

    // ...

    /**
     * Implementation of DataLoggerControllerApiInterface#dataLoggerControllerFind
     */
    public function dataLoggerControllerFind()
    {
        // Implement the operation ...
    }

    // ...
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**OpenAPI\Server\Model\DataLogger**](../Model/DataLogger.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **dataLoggerControllerSetupFromFtp1**
> dataLoggerControllerSetupFromFtp1($id, $dataLoggerToken)



Step 1 of setup process of <b>DataLoggers</b> sending data via FTP. It is used for sending a sample uncompressed <i>file</i> containing raw data, as it was generated by the <b>DataLogger</b> (hardware) identified by <i>dataLoggerToken</i>.<br><br><i><b>References:</b> <a href=\"/documentation.html#tocsdatalogger\" target=\"_blank\">DataLoggerModel</a></i>

### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/DataLoggerControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\DataLoggerControllerApiInterface;

class DataLoggerControllerApi implements DataLoggerControllerApiInterface
{

    // ...

    /**
     * Implementation of DataLoggerControllerApiInterface#dataLoggerControllerSetupFromFtp1
     */
    public function dataLoggerControllerSetupFromFtp1($id, $dataLoggerToken)
    {
        // Implement the operation ...
    }

    // ...
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **float**|  |
 **dataLoggerToken** | **string**|  |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **dataLoggerControllerSetupFromFtp3**
> dataLoggerControllerSetupFromFtp3($id, $responseDataLoggerSetupStep2)



Step 3 of setup process of <b>DataLoggers</b> sending data via FTP. It is used for initiating <b>DeviceTypes</b>, <b>ChannelTypes</b> and <b>Devices</b>. Accepts as input the output of Step 2. Make sure that the <i>manufacturer</i> property is added.<br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-devicecontroller\" target=\"_blank\">DeviceController</a>, <a href=\"/documentation.html#atman-iot-devicetypecontroller\" target=\"_blank\">DeviceTypeController</a>, <a href=\"/documentation.html#atman-iot-devicetypechanneltypecontroller\" target=\"_blank\">DeviceTypeChannelTypeController</a>, <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocsdatalogger\" target=\"_blank\">DataLoggerModel</a></i>

### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/DataLoggerControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\DataLoggerControllerApiInterface;

class DataLoggerControllerApi implements DataLoggerControllerApiInterface
{

    // ...

    /**
     * Implementation of DataLoggerControllerApiInterface#dataLoggerControllerSetupFromFtp3
     */
    public function dataLoggerControllerSetupFromFtp3($id, ResponseDataLoggerSetupStep2 $responseDataLoggerSetupStep2 = null)
    {
        // Implement the operation ...
    }

    // ...
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **float**|  |
 **responseDataLoggerSetupStep2** | [**OpenAPI\Server\Model\ResponseDataLoggerSetupStep2**](../Model/ResponseDataLoggerSetupStep2.md)|  | [optional]

### Return type

void (empty response body)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **dataLoggerControllerSetupFromFtpCsv2**
> OpenAPI\Server\Model\ResponseDataLoggerSetupStep2 dataLoggerControllerSetupFromFtpCsv2($id, $requestDataLoggerSetupCsv2ExcludingFileFormat)



Step 2 of setup process of <b>DataLoggers</b> sending CSV data via FTP. It is used for mapping properties of the sent <i>file</i> to properties of models in the system. <b>DataLogger</b> to be setup, is identified by <i>id</i> and <b>User</b> performing operation is identified by <i>token</i>. Endpoint response represents the results of the mapping (required in Step 3). If it is satisfactory, it is saved by setting the property <i>confirm</i> to <i>true</i>.<br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocsdatalogger\" target=\"_blank\">DataLoggerModel</a></i>

### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/DataLoggerControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\DataLoggerControllerApiInterface;

class DataLoggerControllerApi implements DataLoggerControllerApiInterface
{

    // ...

    /**
     * Implementation of DataLoggerControllerApiInterface#dataLoggerControllerSetupFromFtpCsv2
     */
    public function dataLoggerControllerSetupFromFtpCsv2($id, RequestDataLoggerSetupCsv2ExcludingFileFormat $requestDataLoggerSetupCsv2ExcludingFileFormat = null)
    {
        // Implement the operation ...
    }

    // ...
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **float**|  |
 **requestDataLoggerSetupCsv2ExcludingFileFormat** | [**OpenAPI\Server\Model\RequestDataLoggerSetupCsv2ExcludingFileFormat**](../Model/RequestDataLoggerSetupCsv2ExcludingFileFormat.md)|  | [optional]

### Return type

[**OpenAPI\Server\Model\ResponseDataLoggerSetupStep2**](../Model/ResponseDataLoggerSetupStep2.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **dataLoggerControllerSetupFromFtpXml2**
> OpenAPI\Server\Model\ResponseDataLoggerSetupStep2 dataLoggerControllerSetupFromFtpXml2($id, $requestDataLoggerSetupXml2ExcludingFileFormat)



Step 2 of setup process of <b>DataLoggers</b> sending XML data via FTP. It is used for mapping properties of the sent <i>file</i> to properties of models in the system. <b>DataLogger</b> to be setup, is identified by <i>id</i> and <b>User</b> performing operation is identified by <i>token</i>. Endpoint response represents the results of the mapping (required in Step 3). If it is satisfactory, it is saved by setting the property <i>confirm</i> to <i>true</i>.<br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocsdatalogger\" target=\"_blank\">DataLoggerModel</a></i>

### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/DataLoggerControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\DataLoggerControllerApiInterface;

class DataLoggerControllerApi implements DataLoggerControllerApiInterface
{

    // ...

    /**
     * Implementation of DataLoggerControllerApiInterface#dataLoggerControllerSetupFromFtpXml2
     */
    public function dataLoggerControllerSetupFromFtpXml2($id, RequestDataLoggerSetupXml2ExcludingFileFormat $requestDataLoggerSetupXml2ExcludingFileFormat = null)
    {
        // Implement the operation ...
    }

    // ...
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **float**|  |
 **requestDataLoggerSetupXml2ExcludingFileFormat** | [**OpenAPI\Server\Model\RequestDataLoggerSetupXml2ExcludingFileFormat**](../Model/RequestDataLoggerSetupXml2ExcludingFileFormat.md)|  | [optional]

### Return type

[**OpenAPI\Server\Model\ResponseDataLoggerSetupStep2**](../Model/ResponseDataLoggerSetupStep2.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **dataLoggerControllerUploadDataFromCsv**
> dataLoggerControllerUploadDataFromCsv($id, $dataLoggerToken)



Used for receiving data, sent in CSV format by a <b>DataLogger</b> identified by <i>id</i> and <i>dataLoggerToken</i>. If the <b>DataLogger</b> is sending data via FTP, endpoint is called internally.<br><br><i><b>References:</b> <a href=\"/documentation.html#tocsdatalogger\" target=\"_blank\">DataLoggerModel</a></i>

### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/DataLoggerControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\DataLoggerControllerApiInterface;

class DataLoggerControllerApi implements DataLoggerControllerApiInterface
{

    // ...

    /**
     * Implementation of DataLoggerControllerApiInterface#dataLoggerControllerUploadDataFromCsv
     */
    public function dataLoggerControllerUploadDataFromCsv($id, $dataLoggerToken)
    {
        // Implement the operation ...
    }

    // ...
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **float**|  |
 **dataLoggerToken** | **string**|  |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **dataLoggerControllerUploadDataFromXml**
> dataLoggerControllerUploadDataFromXml($id, $dataLoggerToken)



Used for receiving data, sent in XML format by a <b>DataLogger</b> identified by <i>id</i> and <i>dataLoggerToken</i>. If the <b>DataLogger</b> is sending data via FTP, endpoint is called internally.<br><br><i><b>References:</b> <a href=\"/documentation.html#tocsdatalogger\" target=\"_blank\">DataLoggerModel</a></i>

### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/DataLoggerControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\DataLoggerControllerApiInterface;

class DataLoggerControllerApi implements DataLoggerControllerApiInterface
{

    // ...

    /**
     * Implementation of DataLoggerControllerApiInterface#dataLoggerControllerUploadDataFromXml
     */
    public function dataLoggerControllerUploadDataFromXml($id, $dataLoggerToken)
    {
        // Implement the operation ...
    }

    // ...
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **float**|  |
 **dataLoggerToken** | **string**|  |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

