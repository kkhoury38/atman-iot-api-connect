# AtmanIoT.DataLoggerControllerApi

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

> DataLogger dataLoggerControllerCreate(opts)



Used for creating a new &lt;b&gt;DataLogger&lt;/b&gt; by and authorized &lt;b&gt;User&lt;/b&gt;, identified by the provided &lt;i&gt;token&lt;/i&gt;. &lt;br&gt;&lt;br&gt;&lt;i&gt;&lt;b&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-usercontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;UserController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocsdatalogger\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DataLoggerModel&lt;/a&gt;&lt;/i&gt;

### Example

```javascript
import AtmanIoT from 'atman_io_t';
let defaultClient = AtmanIoT.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AtmanIoT.DataLoggerControllerApi();
let opts = {
  'dataLoggerExcludingIdAuthTokenConfigUserId': new AtmanIoT.DataLoggerExcludingIdAuthTokenConfigUserId() // DataLoggerExcludingIdAuthTokenConfigUserId | 
};
apiInstance.dataLoggerControllerCreate(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataLoggerExcludingIdAuthTokenConfigUserId** | [**DataLoggerExcludingIdAuthTokenConfigUserId**](DataLoggerExcludingIdAuthTokenConfigUserId.md)|  | [optional] 

### Return type

[**DataLogger**](DataLogger.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## dataLoggerControllerDeleteById

> dataLoggerControllerDeleteById(id)



Deletes a&lt;b&gt; DataLogger&lt;/b&gt; identified by &lt;i&gt;id&lt;/i&gt;, owned by a &lt;b&gt;User&lt;/b&gt; identified by the provided &lt;i&gt;token.&lt;/i&gt;&lt;br&gt;&lt;br&gt;&lt;i&gt;&lt;b&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-usercontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;UserController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocsdatalogger\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DataLoggerModel&lt;/a&gt;&lt;/i&gt;

### Example

```javascript
import AtmanIoT from 'atman_io_t';
let defaultClient = AtmanIoT.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AtmanIoT.DataLoggerControllerApi();
let id = 3.4; // Number | 
apiInstance.dataLoggerControllerDeleteById(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## dataLoggerControllerFind

> [DataLogger] dataLoggerControllerFind()



Returns an array of &lt;b&gt;DataLoggers&lt;/b&gt; owned by a &lt;b&gt;User&lt;/b&gt; identified by the provided &lt;i&gt;token.&lt;/i&gt;&lt;br&gt;&lt;br&gt;&lt;i&gt;&lt;b&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-usercontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;UserController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocsdatalogger\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DataLoggerModel&lt;/a&gt;&lt;/i&gt;

### Example

```javascript
import AtmanIoT from 'atman_io_t';
let defaultClient = AtmanIoT.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AtmanIoT.DataLoggerControllerApi();
apiInstance.dataLoggerControllerFind((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[DataLogger]**](DataLogger.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## dataLoggerControllerSetupFromFtp1

> dataLoggerControllerSetupFromFtp1(id, dataLoggerToken)



Step 1 of setup process of &lt;b&gt;DataLoggers&lt;/b&gt; sending data via FTP. It is used for sending a sample uncompressed &lt;i&gt;file&lt;/i&gt; containing raw data, as it was generated by the &lt;b&gt;DataLogger&lt;/b&gt; (hardware) identified by &lt;i&gt;dataLoggerToken&lt;/i&gt;.&lt;br&gt;&lt;br&gt;&lt;i&gt;&lt;b&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#tocsdatalogger\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DataLoggerModel&lt;/a&gt;&lt;/i&gt;

### Example

```javascript
import AtmanIoT from 'atman_io_t';

let apiInstance = new AtmanIoT.DataLoggerControllerApi();
let id = 3.4; // Number | 
let dataLoggerToken = "dataLoggerToken_example"; // String | 
apiInstance.dataLoggerControllerSetupFromFtp1(id, dataLoggerToken, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **dataLoggerToken** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: Not defined


## dataLoggerControllerSetupFromFtp3

> dataLoggerControllerSetupFromFtp3(id, opts)



Step 3 of setup process of &lt;b&gt;DataLoggers&lt;/b&gt; sending data via FTP. It is used for initiating &lt;b&gt;DeviceTypes&lt;/b&gt;, &lt;b&gt;ChannelTypes&lt;/b&gt; and &lt;b&gt;Devices&lt;/b&gt;. Accepts as input the output of Step 2. Make sure that the &lt;i&gt;manufacturer&lt;/i&gt; property is added.&lt;br&gt;&lt;br&gt;&lt;i&gt;&lt;b&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-devicecontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DeviceController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-devicetypecontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DeviceTypeController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-devicetypechanneltypecontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DeviceTypeChannelTypeController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-usercontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;UserController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocsdatalogger\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DataLoggerModel&lt;/a&gt;&lt;/i&gt;

### Example

```javascript
import AtmanIoT from 'atman_io_t';
let defaultClient = AtmanIoT.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AtmanIoT.DataLoggerControllerApi();
let id = 3.4; // Number | 
let opts = {
  'responseDataLoggerSetupStep2': new AtmanIoT.ResponseDataLoggerSetupStep2() // ResponseDataLoggerSetupStep2 | 
};
apiInstance.dataLoggerControllerSetupFromFtp3(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **responseDataLoggerSetupStep2** | [**ResponseDataLoggerSetupStep2**](ResponseDataLoggerSetupStep2.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## dataLoggerControllerSetupFromFtpCsv2

> ResponseDataLoggerSetupStep2 dataLoggerControllerSetupFromFtpCsv2(id, opts)



Step 2 of setup process of &lt;b&gt;DataLoggers&lt;/b&gt; sending CSV data via FTP. It is used for mapping properties of the sent &lt;i&gt;file&lt;/i&gt; to properties of models in the system. &lt;b&gt;DataLogger&lt;/b&gt; to be setup, is identified by &lt;i&gt;id&lt;/i&gt; and &lt;b&gt;User&lt;/b&gt; performing operation is identified by &lt;i&gt;token&lt;/i&gt;. Endpoint response represents the results of the mapping (required in Step 3). If it is satisfactory, it is saved by setting the property &lt;i&gt;confirm&lt;/i&gt; to &lt;i&gt;true&lt;/i&gt;.&lt;br&gt;&lt;br&gt;&lt;i&gt;&lt;b&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-usercontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;UserController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocsdatalogger\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DataLoggerModel&lt;/a&gt;&lt;/i&gt;

### Example

```javascript
import AtmanIoT from 'atman_io_t';
let defaultClient = AtmanIoT.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AtmanIoT.DataLoggerControllerApi();
let id = 3.4; // Number | 
let opts = {
  'requestDataLoggerSetupCsv2ExcludingFileFormat': new AtmanIoT.RequestDataLoggerSetupCsv2ExcludingFileFormat() // RequestDataLoggerSetupCsv2ExcludingFileFormat | 
};
apiInstance.dataLoggerControllerSetupFromFtpCsv2(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **requestDataLoggerSetupCsv2ExcludingFileFormat** | [**RequestDataLoggerSetupCsv2ExcludingFileFormat**](RequestDataLoggerSetupCsv2ExcludingFileFormat.md)|  | [optional] 

### Return type

[**ResponseDataLoggerSetupStep2**](ResponseDataLoggerSetupStep2.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## dataLoggerControllerSetupFromFtpXml2

> ResponseDataLoggerSetupStep2 dataLoggerControllerSetupFromFtpXml2(id, opts)



Step 2 of setup process of &lt;b&gt;DataLoggers&lt;/b&gt; sending XML data via FTP. It is used for mapping properties of the sent &lt;i&gt;file&lt;/i&gt; to properties of models in the system. &lt;b&gt;DataLogger&lt;/b&gt; to be setup, is identified by &lt;i&gt;id&lt;/i&gt; and &lt;b&gt;User&lt;/b&gt; performing operation is identified by &lt;i&gt;token&lt;/i&gt;. Endpoint response represents the results of the mapping (required in Step 3). If it is satisfactory, it is saved by setting the property &lt;i&gt;confirm&lt;/i&gt; to &lt;i&gt;true&lt;/i&gt;.&lt;br&gt;&lt;br&gt;&lt;i&gt;&lt;b&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-usercontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;UserController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocsdatalogger\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DataLoggerModel&lt;/a&gt;&lt;/i&gt;

### Example

```javascript
import AtmanIoT from 'atman_io_t';
let defaultClient = AtmanIoT.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AtmanIoT.DataLoggerControllerApi();
let id = 3.4; // Number | 
let opts = {
  'requestDataLoggerSetupXml2ExcludingFileFormat': new AtmanIoT.RequestDataLoggerSetupXml2ExcludingFileFormat() // RequestDataLoggerSetupXml2ExcludingFileFormat | 
};
apiInstance.dataLoggerControllerSetupFromFtpXml2(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **requestDataLoggerSetupXml2ExcludingFileFormat** | [**RequestDataLoggerSetupXml2ExcludingFileFormat**](RequestDataLoggerSetupXml2ExcludingFileFormat.md)|  | [optional] 

### Return type

[**ResponseDataLoggerSetupStep2**](ResponseDataLoggerSetupStep2.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## dataLoggerControllerUploadDataFromCsv

> dataLoggerControllerUploadDataFromCsv(id, dataLoggerToken)



Used for receiving data, sent in CSV format by a &lt;b&gt;DataLogger&lt;/b&gt; identified by &lt;i&gt;id&lt;/i&gt; and &lt;i&gt;dataLoggerToken&lt;/i&gt;. If the &lt;b&gt;DataLogger&lt;/b&gt; is sending data via FTP, endpoint is called internally.&lt;br&gt;&lt;br&gt;&lt;i&gt;&lt;b&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#tocsdatalogger\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DataLoggerModel&lt;/a&gt;&lt;/i&gt;

### Example

```javascript
import AtmanIoT from 'atman_io_t';

let apiInstance = new AtmanIoT.DataLoggerControllerApi();
let id = 3.4; // Number | 
let dataLoggerToken = "dataLoggerToken_example"; // String | 
apiInstance.dataLoggerControllerUploadDataFromCsv(id, dataLoggerToken, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **dataLoggerToken** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: Not defined


## dataLoggerControllerUploadDataFromXml

> dataLoggerControllerUploadDataFromXml(id, dataLoggerToken)



Used for receiving data, sent in XML format by a &lt;b&gt;DataLogger&lt;/b&gt; identified by &lt;i&gt;id&lt;/i&gt; and &lt;i&gt;dataLoggerToken&lt;/i&gt;. If the &lt;b&gt;DataLogger&lt;/b&gt; is sending data via FTP, endpoint is called internally.&lt;br&gt;&lt;br&gt;&lt;i&gt;&lt;b&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#tocsdatalogger\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DataLoggerModel&lt;/a&gt;&lt;/i&gt;

### Example

```javascript
import AtmanIoT from 'atman_io_t';

let apiInstance = new AtmanIoT.DataLoggerControllerApi();
let id = 3.4; // Number | 
let dataLoggerToken = "dataLoggerToken_example"; // String | 
apiInstance.dataLoggerControllerUploadDataFromXml(id, dataLoggerToken, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **dataLoggerToken** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: Not defined

