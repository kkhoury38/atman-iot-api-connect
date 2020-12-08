# OpenapiClient::DataLoggerControllerApi

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**data_logger_controller_create**](DataLoggerControllerApi.md#data_logger_controller_create) | **POST** /data-logger | 
[**data_logger_controller_delete_by_id**](DataLoggerControllerApi.md#data_logger_controller_delete_by_id) | **DELETE** /data-logger/{id} | 
[**data_logger_controller_find**](DataLoggerControllerApi.md#data_logger_controller_find) | **GET** /data-loggers | 
[**data_logger_controller_setup_from_ftp1**](DataLoggerControllerApi.md#data_logger_controller_setup_from_ftp1) | **POST** /data-logger/setup-ftp/step1/{id}/{dataLoggerToken} | 
[**data_logger_controller_setup_from_ftp3**](DataLoggerControllerApi.md#data_logger_controller_setup_from_ftp3) | **POST** /data-logger/setup-ftp/step3/{id} | 
[**data_logger_controller_setup_from_ftp_csv2**](DataLoggerControllerApi.md#data_logger_controller_setup_from_ftp_csv2) | **POST** /data-logger/setup-ftp/step2/csv/{id} | 
[**data_logger_controller_setup_from_ftp_xml2**](DataLoggerControllerApi.md#data_logger_controller_setup_from_ftp_xml2) | **POST** /data-logger/setup-ftp/step2/xml/{id} | 
[**data_logger_controller_upload_data_from_csv**](DataLoggerControllerApi.md#data_logger_controller_upload_data_from_csv) | **POST** /data-logger/data-from-csv/{id}/{dataLoggerToken} | 
[**data_logger_controller_upload_data_from_xml**](DataLoggerControllerApi.md#data_logger_controller_upload_data_from_xml) | **POST** /data-logger/data-from-xml/{id}/{dataLoggerToken} | 



## data_logger_controller_create

> DataLogger data_logger_controller_create(opts)



Used for creating a new <b>DataLogger</b> by and authorized <b>User</b>, identified by the provided <i>token</i>. <br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocsdatalogger\" target=\"_blank\">DataLoggerModel</a></i>

### Example

```ruby
# load the gem
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::DataLoggerControllerApi.new
opts = {
  data_logger_excluding_id_auth_token_config_user_id: OpenapiClient::DataLoggerExcludingIdAuthTokenConfigUserId.new # DataLoggerExcludingIdAuthTokenConfigUserId | 
}

begin
  result = api_instance.data_logger_controller_create(opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling DataLoggerControllerApi->data_logger_controller_create: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_logger_excluding_id_auth_token_config_user_id** | [**DataLoggerExcludingIdAuthTokenConfigUserId**](DataLoggerExcludingIdAuthTokenConfigUserId.md)|  | [optional] 

### Return type

[**DataLogger**](DataLogger.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## data_logger_controller_delete_by_id

> data_logger_controller_delete_by_id(id)



Deletes a<b> DataLogger</b> identified by <i>id</i>, owned by a <b>User</b> identified by the provided <i>token.</i><br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocsdatalogger\" target=\"_blank\">DataLoggerModel</a></i>

### Example

```ruby
# load the gem
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::DataLoggerControllerApi.new
id = 3.4 # Float | 

begin
  api_instance.data_logger_controller_delete_by_id(id)
rescue OpenapiClient::ApiError => e
  puts "Exception when calling DataLoggerControllerApi->data_logger_controller_delete_by_id: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Float**|  | 

### Return type

nil (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## data_logger_controller_find

> Array&lt;DataLogger&gt; data_logger_controller_find



Returns an array of <b>DataLoggers</b> owned by a <b>User</b> identified by the provided <i>token.</i><br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocsdatalogger\" target=\"_blank\">DataLoggerModel</a></i>

### Example

```ruby
# load the gem
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::DataLoggerControllerApi.new

begin
  result = api_instance.data_logger_controller_find
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling DataLoggerControllerApi->data_logger_controller_find: #{e}"
end
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;DataLogger&gt;**](DataLogger.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## data_logger_controller_setup_from_ftp1

> data_logger_controller_setup_from_ftp1(id, data_logger_token)



Step 1 of setup process of <b>DataLoggers</b> sending data via FTP. It is used for sending a sample uncompressed <i>file</i> containing raw data, as it was generated by the <b>DataLogger</b> (hardware) identified by <i>dataLoggerToken</i>.<br><br><i><b>References:</b> <a href=\"/documentation.html#tocsdatalogger\" target=\"_blank\">DataLoggerModel</a></i>

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::DataLoggerControllerApi.new
id = 3.4 # Float | 
data_logger_token = 'data_logger_token_example' # String | 

begin
  api_instance.data_logger_controller_setup_from_ftp1(id, data_logger_token)
rescue OpenapiClient::ApiError => e
  puts "Exception when calling DataLoggerControllerApi->data_logger_controller_setup_from_ftp1: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Float**|  | 
 **data_logger_token** | **String**|  | 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: Not defined


## data_logger_controller_setup_from_ftp3

> data_logger_controller_setup_from_ftp3(id, opts)



Step 3 of setup process of <b>DataLoggers</b> sending data via FTP. It is used for initiating <b>DeviceTypes</b>, <b>ChannelTypes</b> and <b>Devices</b>. Accepts as input the output of Step 2. Make sure that the <i>manufacturer</i> property is added.<br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-devicecontroller\" target=\"_blank\">DeviceController</a>, <a href=\"/documentation.html#atman-iot-devicetypecontroller\" target=\"_blank\">DeviceTypeController</a>, <a href=\"/documentation.html#atman-iot-devicetypechanneltypecontroller\" target=\"_blank\">DeviceTypeChannelTypeController</a>, <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocsdatalogger\" target=\"_blank\">DataLoggerModel</a></i>

### Example

```ruby
# load the gem
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::DataLoggerControllerApi.new
id = 3.4 # Float | 
opts = {
  response_data_logger_setup_step2: OpenapiClient::ResponseDataLoggerSetupStep2.new # ResponseDataLoggerSetupStep2 | 
}

begin
  api_instance.data_logger_controller_setup_from_ftp3(id, opts)
rescue OpenapiClient::ApiError => e
  puts "Exception when calling DataLoggerControllerApi->data_logger_controller_setup_from_ftp3: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Float**|  | 
 **response_data_logger_setup_step2** | [**ResponseDataLoggerSetupStep2**](ResponseDataLoggerSetupStep2.md)|  | [optional] 

### Return type

nil (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## data_logger_controller_setup_from_ftp_csv2

> ResponseDataLoggerSetupStep2 data_logger_controller_setup_from_ftp_csv2(id, opts)



Step 2 of setup process of <b>DataLoggers</b> sending CSV data via FTP. It is used for mapping properties of the sent <i>file</i> to properties of models in the system. <b>DataLogger</b> to be setup, is identified by <i>id</i> and <b>User</b> performing operation is identified by <i>token</i>. Endpoint response represents the results of the mapping (required in Step 3). If it is satisfactory, it is saved by setting the property <i>confirm</i> to <i>true</i>.<br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocsdatalogger\" target=\"_blank\">DataLoggerModel</a></i>

### Example

```ruby
# load the gem
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::DataLoggerControllerApi.new
id = 3.4 # Float | 
opts = {
  request_data_logger_setup_csv2_excluding_file_format: OpenapiClient::RequestDataLoggerSetupCsv2ExcludingFileFormat.new # RequestDataLoggerSetupCsv2ExcludingFileFormat | 
}

begin
  result = api_instance.data_logger_controller_setup_from_ftp_csv2(id, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling DataLoggerControllerApi->data_logger_controller_setup_from_ftp_csv2: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Float**|  | 
 **request_data_logger_setup_csv2_excluding_file_format** | [**RequestDataLoggerSetupCsv2ExcludingFileFormat**](RequestDataLoggerSetupCsv2ExcludingFileFormat.md)|  | [optional] 

### Return type

[**ResponseDataLoggerSetupStep2**](ResponseDataLoggerSetupStep2.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## data_logger_controller_setup_from_ftp_xml2

> ResponseDataLoggerSetupStep2 data_logger_controller_setup_from_ftp_xml2(id, opts)



Step 2 of setup process of <b>DataLoggers</b> sending XML data via FTP. It is used for mapping properties of the sent <i>file</i> to properties of models in the system. <b>DataLogger</b> to be setup, is identified by <i>id</i> and <b>User</b> performing operation is identified by <i>token</i>. Endpoint response represents the results of the mapping (required in Step 3). If it is satisfactory, it is saved by setting the property <i>confirm</i> to <i>true</i>.<br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocsdatalogger\" target=\"_blank\">DataLoggerModel</a></i>

### Example

```ruby
# load the gem
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::DataLoggerControllerApi.new
id = 3.4 # Float | 
opts = {
  request_data_logger_setup_xml2_excluding_file_format: OpenapiClient::RequestDataLoggerSetupXml2ExcludingFileFormat.new # RequestDataLoggerSetupXml2ExcludingFileFormat | 
}

begin
  result = api_instance.data_logger_controller_setup_from_ftp_xml2(id, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling DataLoggerControllerApi->data_logger_controller_setup_from_ftp_xml2: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Float**|  | 
 **request_data_logger_setup_xml2_excluding_file_format** | [**RequestDataLoggerSetupXml2ExcludingFileFormat**](RequestDataLoggerSetupXml2ExcludingFileFormat.md)|  | [optional] 

### Return type

[**ResponseDataLoggerSetupStep2**](ResponseDataLoggerSetupStep2.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## data_logger_controller_upload_data_from_csv

> data_logger_controller_upload_data_from_csv(id, data_logger_token)



Used for receiving data, sent in CSV format by a <b>DataLogger</b> identified by <i>id</i> and <i>dataLoggerToken</i>. If the <b>DataLogger</b> is sending data via FTP, endpoint is called internally.<br><br><i><b>References:</b> <a href=\"/documentation.html#tocsdatalogger\" target=\"_blank\">DataLoggerModel</a></i>

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::DataLoggerControllerApi.new
id = 3.4 # Float | 
data_logger_token = 'data_logger_token_example' # String | 

begin
  api_instance.data_logger_controller_upload_data_from_csv(id, data_logger_token)
rescue OpenapiClient::ApiError => e
  puts "Exception when calling DataLoggerControllerApi->data_logger_controller_upload_data_from_csv: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Float**|  | 
 **data_logger_token** | **String**|  | 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: Not defined


## data_logger_controller_upload_data_from_xml

> data_logger_controller_upload_data_from_xml(id, data_logger_token)



Used for receiving data, sent in XML format by a <b>DataLogger</b> identified by <i>id</i> and <i>dataLoggerToken</i>. If the <b>DataLogger</b> is sending data via FTP, endpoint is called internally.<br><br><i><b>References:</b> <a href=\"/documentation.html#tocsdatalogger\" target=\"_blank\">DataLoggerModel</a></i>

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::DataLoggerControllerApi.new
id = 3.4 # Float | 
data_logger_token = 'data_logger_token_example' # String | 

begin
  api_instance.data_logger_controller_upload_data_from_xml(id, data_logger_token)
rescue OpenapiClient::ApiError => e
  puts "Exception when calling DataLoggerControllerApi->data_logger_controller_upload_data_from_xml: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Float**|  | 
 **data_logger_token** | **String**|  | 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: Not defined

