# \DataLoggerControllerApi

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DataLoggerControllerCreate**](DataLoggerControllerApi.md#DataLoggerControllerCreate) | **Post** /data-logger | 
[**DataLoggerControllerDeleteById**](DataLoggerControllerApi.md#DataLoggerControllerDeleteById) | **Delete** /data-logger/{id} | 
[**DataLoggerControllerFind**](DataLoggerControllerApi.md#DataLoggerControllerFind) | **Get** /data-loggers | 
[**DataLoggerControllerSetupFromFtp1**](DataLoggerControllerApi.md#DataLoggerControllerSetupFromFtp1) | **Post** /data-logger/setup-ftp/step1/{id}/{dataLoggerToken} | 
[**DataLoggerControllerSetupFromFtp3**](DataLoggerControllerApi.md#DataLoggerControllerSetupFromFtp3) | **Post** /data-logger/setup-ftp/step3/{id} | 
[**DataLoggerControllerSetupFromFtpCsv2**](DataLoggerControllerApi.md#DataLoggerControllerSetupFromFtpCsv2) | **Post** /data-logger/setup-ftp/step2/csv/{id} | 
[**DataLoggerControllerSetupFromFtpXml2**](DataLoggerControllerApi.md#DataLoggerControllerSetupFromFtpXml2) | **Post** /data-logger/setup-ftp/step2/xml/{id} | 
[**DataLoggerControllerUploadDataFromCsv**](DataLoggerControllerApi.md#DataLoggerControllerUploadDataFromCsv) | **Post** /data-logger/data-from-csv/{id}/{dataLoggerToken} | 
[**DataLoggerControllerUploadDataFromXml**](DataLoggerControllerApi.md#DataLoggerControllerUploadDataFromXml) | **Post** /data-logger/data-from-xml/{id}/{dataLoggerToken} | 



## DataLoggerControllerCreate

> DataLogger DataLoggerControllerCreate(ctx, optional)



Used for creating a new <b>DataLogger</b> by and authorized <b>User</b>, identified by the provided <i>token</i>. <br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocsdatalogger\" target=\"_blank\">DataLoggerModel</a></i>

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***DataLoggerControllerCreateOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a DataLoggerControllerCreateOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataLoggerExcludingIdAuthTokenConfigUserId** | [**optional.Interface of DataLoggerExcludingIdAuthTokenConfigUserId**](DataLoggerExcludingIdAuthTokenConfigUserId.md)|  | 

### Return type

[**DataLogger**](DataLogger.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DataLoggerControllerDeleteById

> DataLoggerControllerDeleteById(ctx, id)



Deletes a<b> DataLogger</b> identified by <i>id</i>, owned by a <b>User</b> identified by the provided <i>token.</i><br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocsdatalogger\" target=\"_blank\">DataLoggerModel</a></i>

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **float32**|  | 

### Return type

 (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DataLoggerControllerFind

> []DataLogger DataLoggerControllerFind(ctx, )



Returns an array of <b>DataLoggers</b> owned by a <b>User</b> identified by the provided <i>token.</i><br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocsdatalogger\" target=\"_blank\">DataLoggerModel</a></i>

### Required Parameters

This endpoint does not need any parameter.

### Return type

[**[]DataLogger**](DataLogger.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DataLoggerControllerSetupFromFtp1

> DataLoggerControllerSetupFromFtp1(ctx, id, dataLoggerToken)



Step 1 of setup process of <b>DataLoggers</b> sending data via FTP. It is used for sending a sample uncompressed <i>file</i> containing raw data, as it was generated by the <b>DataLogger</b> (hardware) identified by <i>dataLoggerToken</i>.<br><br><i><b>References:</b> <a href=\"/documentation.html#tocsdatalogger\" target=\"_blank\">DataLoggerModel</a></i>

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **float32**|  | 
**dataLoggerToken** | **string**|  | 

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DataLoggerControllerSetupFromFtp3

> DataLoggerControllerSetupFromFtp3(ctx, id, optional)



Step 3 of setup process of <b>DataLoggers</b> sending data via FTP. It is used for initiating <b>DeviceTypes</b>, <b>ChannelTypes</b> and <b>Devices</b>. Accepts as input the output of Step 2. Make sure that the <i>manufacturer</i> property is added.<br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-devicecontroller\" target=\"_blank\">DeviceController</a>, <a href=\"/documentation.html#atman-iot-devicetypecontroller\" target=\"_blank\">DeviceTypeController</a>, <a href=\"/documentation.html#atman-iot-devicetypechanneltypecontroller\" target=\"_blank\">DeviceTypeChannelTypeController</a>, <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocsdatalogger\" target=\"_blank\">DataLoggerModel</a></i>

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **float32**|  | 
 **optional** | ***DataLoggerControllerSetupFromFtp3Opts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a DataLoggerControllerSetupFromFtp3Opts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **responseDataLoggerSetupStep2** | [**optional.Interface of ResponseDataLoggerSetupStep2**](ResponseDataLoggerSetupStep2.md)|  | 

### Return type

 (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DataLoggerControllerSetupFromFtpCsv2

> ResponseDataLoggerSetupStep2 DataLoggerControllerSetupFromFtpCsv2(ctx, id, optional)



Step 2 of setup process of <b>DataLoggers</b> sending CSV data via FTP. It is used for mapping properties of the sent <i>file</i> to properties of models in the system. <b>DataLogger</b> to be setup, is identified by <i>id</i> and <b>User</b> performing operation is identified by <i>token</i>. Endpoint response represents the results of the mapping (required in Step 3). If it is satisfactory, it is saved by setting the property <i>confirm</i> to <i>true</i>.<br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocsdatalogger\" target=\"_blank\">DataLoggerModel</a></i>

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **float32**|  | 
 **optional** | ***DataLoggerControllerSetupFromFtpCsv2Opts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a DataLoggerControllerSetupFromFtpCsv2Opts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **requestDataLoggerSetupCsv2ExcludingFileFormat** | [**optional.Interface of RequestDataLoggerSetupCsv2ExcludingFileFormat**](RequestDataLoggerSetupCsv2ExcludingFileFormat.md)|  | 

### Return type

[**ResponseDataLoggerSetupStep2**](ResponseDataLoggerSetupStep2.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DataLoggerControllerSetupFromFtpXml2

> ResponseDataLoggerSetupStep2 DataLoggerControllerSetupFromFtpXml2(ctx, id, optional)



Step 2 of setup process of <b>DataLoggers</b> sending XML data via FTP. It is used for mapping properties of the sent <i>file</i> to properties of models in the system. <b>DataLogger</b> to be setup, is identified by <i>id</i> and <b>User</b> performing operation is identified by <i>token</i>. Endpoint response represents the results of the mapping (required in Step 3). If it is satisfactory, it is saved by setting the property <i>confirm</i> to <i>true</i>.<br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocsdatalogger\" target=\"_blank\">DataLoggerModel</a></i>

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **float32**|  | 
 **optional** | ***DataLoggerControllerSetupFromFtpXml2Opts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a DataLoggerControllerSetupFromFtpXml2Opts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **requestDataLoggerSetupXml2ExcludingFileFormat** | [**optional.Interface of RequestDataLoggerSetupXml2ExcludingFileFormat**](RequestDataLoggerSetupXml2ExcludingFileFormat.md)|  | 

### Return type

[**ResponseDataLoggerSetupStep2**](ResponseDataLoggerSetupStep2.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DataLoggerControllerUploadDataFromCsv

> DataLoggerControllerUploadDataFromCsv(ctx, id, dataLoggerToken)



Used for receiving data, sent in CSV format by a <b>DataLogger</b> identified by <i>id</i> and <i>dataLoggerToken</i>. If the <b>DataLogger</b> is sending data via FTP, endpoint is called internally.<br><br><i><b>References:</b> <a href=\"/documentation.html#tocsdatalogger\" target=\"_blank\">DataLoggerModel</a></i>

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **float32**|  | 
**dataLoggerToken** | **string**|  | 

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DataLoggerControllerUploadDataFromXml

> DataLoggerControllerUploadDataFromXml(ctx, id, dataLoggerToken)



Used for receiving data, sent in XML format by a <b>DataLogger</b> identified by <i>id</i> and <i>dataLoggerToken</i>. If the <b>DataLogger</b> is sending data via FTP, endpoint is called internally.<br><br><i><b>References:</b> <a href=\"/documentation.html#tocsdatalogger\" target=\"_blank\">DataLoggerModel</a></i>

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **float32**|  | 
**dataLoggerToken** | **string**|  | 

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

