# openapi_client.DataLoggerControllerApi

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


# **data_logger_controller_create**
> DataLogger data_logger_controller_create(data_logger_excluding_id_auth_token_config_user_id=data_logger_excluding_id_auth_token_config_user_id)



Used for creating a new <b>DataLogger</b> by and authorized <b>User</b>, identified by the provided <i>token</i>. <br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocsdatalogger\" target=\"_blank\">DataLoggerModel</a></i>

### Example

* Bearer (JWT) Authentication (bearerAuth):
```python
from __future__ import print_function
import time
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to https://atman-iot.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://atman-iot.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = openapi_client.Configuration(
    access_token = 'YOUR_BEARER_TOKEN'
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DataLoggerControllerApi(api_client)
    data_logger_excluding_id_auth_token_config_user_id = openapi_client.DataLoggerExcludingIdAuthTokenConfigUserId() # DataLoggerExcludingIdAuthTokenConfigUserId |  (optional)

    try:
        api_response = api_instance.data_logger_controller_create(data_logger_excluding_id_auth_token_config_user_id=data_logger_excluding_id_auth_token_config_user_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling DataLoggerControllerApi->data_logger_controller_create: %s\n" % e)
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

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns created DataLogger model instance |  -  |
**401** | User is not authorized |  -  |
**406** | Request is not acceptable. Check response for help |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_logger_controller_delete_by_id**
> data_logger_controller_delete_by_id(id)



Deletes a<b> DataLogger</b> identified by <i>id</i>, owned by a <b>User</b> identified by the provided <i>token.</i><br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocsdatalogger\" target=\"_blank\">DataLoggerModel</a></i>

### Example

* Bearer (JWT) Authentication (bearerAuth):
```python
from __future__ import print_function
import time
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to https://atman-iot.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://atman-iot.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = openapi_client.Configuration(
    access_token = 'YOUR_BEARER_TOKEN'
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DataLoggerControllerApi(api_client)
    id = 3.4 # float | 

    try:
        api_instance.data_logger_controller_delete_by_id(id)
    except ApiException as e:
        print("Exception when calling DataLoggerControllerApi->data_logger_controller_delete_by_id: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **float**|  | 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | DataLogger model instance deletion verification |  -  |
**401** | User is not authorized |  -  |
**406** | Request is not acceptable. Check response for help |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_logger_controller_find**
> list[DataLogger] data_logger_controller_find()



Returns an array of <b>DataLoggers</b> owned by a <b>User</b> identified by the provided <i>token.</i><br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocsdatalogger\" target=\"_blank\">DataLoggerModel</a></i>

### Example

* Bearer (JWT) Authentication (bearerAuth):
```python
from __future__ import print_function
import time
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to https://atman-iot.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://atman-iot.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = openapi_client.Configuration(
    access_token = 'YOUR_BEARER_TOKEN'
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DataLoggerControllerApi(api_client)
    
    try:
        api_response = api_instance.data_logger_controller_find()
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling DataLoggerControllerApi->data_logger_controller_find: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**list[DataLogger]**](DataLogger.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns Array of DataLogger model instances |  -  |
**401** | User is not authorized |  -  |
**406** | Request is not acceptable. Check response for help |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_logger_controller_setup_from_ftp1**
> data_logger_controller_setup_from_ftp1(id, data_logger_token)



Step 1 of setup process of <b>DataLoggers</b> sending data via FTP. It is used for sending a sample uncompressed <i>file</i> containing raw data, as it was generated by the <b>DataLogger</b> (hardware) identified by <i>dataLoggerToken</i>.<br><br><i><b>References:</b> <a href=\"/documentation.html#tocsdatalogger\" target=\"_blank\">DataLoggerModel</a></i>

### Example

```python
from __future__ import print_function
import time
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to https://atman-iot.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://atman-iot.com/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DataLoggerControllerApi(api_client)
    id = 3.4 # float | 
data_logger_token = 'data_logger_token_example' # str | 

    try:
        api_instance.data_logger_controller_setup_from_ftp1(id, data_logger_token)
    except ApiException as e:
        print("Exception when calling DataLoggerControllerApi->data_logger_controller_setup_from_ftp1: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **float**|  | 
 **data_logger_token** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | File upload verification |  -  |
**406** | Request is not acceptable. Check response for help |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_logger_controller_setup_from_ftp3**
> data_logger_controller_setup_from_ftp3(id, response_data_logger_setup_step2=response_data_logger_setup_step2)



Step 3 of setup process of <b>DataLoggers</b> sending data via FTP. It is used for initiating <b>DeviceTypes</b>, <b>ChannelTypes</b> and <b>Devices</b>. Accepts as input the output of Step 2. Make sure that the <i>manufacturer</i> property is added.<br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-devicecontroller\" target=\"_blank\">DeviceController</a>, <a href=\"/documentation.html#atman-iot-devicetypecontroller\" target=\"_blank\">DeviceTypeController</a>, <a href=\"/documentation.html#atman-iot-devicetypechanneltypecontroller\" target=\"_blank\">DeviceTypeChannelTypeController</a>, <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocsdatalogger\" target=\"_blank\">DataLoggerModel</a></i>

### Example

* Bearer (JWT) Authentication (bearerAuth):
```python
from __future__ import print_function
import time
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to https://atman-iot.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://atman-iot.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = openapi_client.Configuration(
    access_token = 'YOUR_BEARER_TOKEN'
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DataLoggerControllerApi(api_client)
    id = 3.4 # float | 
response_data_logger_setup_step2 = openapi_client.ResponseDataLoggerSetupStep2() # ResponseDataLoggerSetupStep2 |  (optional)

    try:
        api_instance.data_logger_controller_setup_from_ftp3(id, response_data_logger_setup_step2=response_data_logger_setup_step2)
    except ApiException as e:
        print("Exception when calling DataLoggerControllerApi->data_logger_controller_setup_from_ftp3: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **float**|  | 
 **response_data_logger_setup_step2** | [**ResponseDataLoggerSetupStep2**](ResponseDataLoggerSetupStep2.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Data logger devices initiation verification  |  -  |
**401** | User is not authorized |  -  |
**406** | Request is not acceptable. Check response for help |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_logger_controller_setup_from_ftp_csv2**
> ResponseDataLoggerSetupStep2 data_logger_controller_setup_from_ftp_csv2(id, request_data_logger_setup_csv2_excluding_file_format=request_data_logger_setup_csv2_excluding_file_format)



Step 2 of setup process of <b>DataLoggers</b> sending CSV data via FTP. It is used for mapping properties of the sent <i>file</i> to properties of models in the system. <b>DataLogger</b> to be setup, is identified by <i>id</i> and <b>User</b> performing operation is identified by <i>token</i>. Endpoint response represents the results of the mapping (required in Step 3). If it is satisfactory, it is saved by setting the property <i>confirm</i> to <i>true</i>.<br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocsdatalogger\" target=\"_blank\">DataLoggerModel</a></i>

### Example

* Bearer (JWT) Authentication (bearerAuth):
```python
from __future__ import print_function
import time
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to https://atman-iot.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://atman-iot.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = openapi_client.Configuration(
    access_token = 'YOUR_BEARER_TOKEN'
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DataLoggerControllerApi(api_client)
    id = 3.4 # float | 
request_data_logger_setup_csv2_excluding_file_format = openapi_client.RequestDataLoggerSetupCsv2ExcludingFileFormat() # RequestDataLoggerSetupCsv2ExcludingFileFormat |  (optional)

    try:
        api_response = api_instance.data_logger_controller_setup_from_ftp_csv2(id, request_data_logger_setup_csv2_excluding_file_format=request_data_logger_setup_csv2_excluding_file_format)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling DataLoggerControllerApi->data_logger_controller_setup_from_ftp_csv2: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **float**|  | 
 **request_data_logger_setup_csv2_excluding_file_format** | [**RequestDataLoggerSetupCsv2ExcludingFileFormat**](RequestDataLoggerSetupCsv2ExcludingFileFormat.md)|  | [optional] 

### Return type

[**ResponseDataLoggerSetupStep2**](ResponseDataLoggerSetupStep2.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Data logger configuration file |  -  |
**401** | User is not authorized |  -  |
**406** | Request is not acceptable. Check response for help |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_logger_controller_setup_from_ftp_xml2**
> ResponseDataLoggerSetupStep2 data_logger_controller_setup_from_ftp_xml2(id, request_data_logger_setup_xml2_excluding_file_format=request_data_logger_setup_xml2_excluding_file_format)



Step 2 of setup process of <b>DataLoggers</b> sending XML data via FTP. It is used for mapping properties of the sent <i>file</i> to properties of models in the system. <b>DataLogger</b> to be setup, is identified by <i>id</i> and <b>User</b> performing operation is identified by <i>token</i>. Endpoint response represents the results of the mapping (required in Step 3). If it is satisfactory, it is saved by setting the property <i>confirm</i> to <i>true</i>.<br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocsdatalogger\" target=\"_blank\">DataLoggerModel</a></i>

### Example

* Bearer (JWT) Authentication (bearerAuth):
```python
from __future__ import print_function
import time
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to https://atman-iot.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://atman-iot.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = openapi_client.Configuration(
    access_token = 'YOUR_BEARER_TOKEN'
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DataLoggerControllerApi(api_client)
    id = 3.4 # float | 
request_data_logger_setup_xml2_excluding_file_format = openapi_client.RequestDataLoggerSetupXml2ExcludingFileFormat() # RequestDataLoggerSetupXml2ExcludingFileFormat |  (optional)

    try:
        api_response = api_instance.data_logger_controller_setup_from_ftp_xml2(id, request_data_logger_setup_xml2_excluding_file_format=request_data_logger_setup_xml2_excluding_file_format)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling DataLoggerControllerApi->data_logger_controller_setup_from_ftp_xml2: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **float**|  | 
 **request_data_logger_setup_xml2_excluding_file_format** | [**RequestDataLoggerSetupXml2ExcludingFileFormat**](RequestDataLoggerSetupXml2ExcludingFileFormat.md)|  | [optional] 

### Return type

[**ResponseDataLoggerSetupStep2**](ResponseDataLoggerSetupStep2.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Data logger configuration JSON |  -  |
**401** | User is not authorized |  -  |
**406** | Request is not acceptable. Check response for help |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_logger_controller_upload_data_from_csv**
> data_logger_controller_upload_data_from_csv(id, data_logger_token)



Used for receiving data, sent in CSV format by a <b>DataLogger</b> identified by <i>id</i> and <i>dataLoggerToken</i>. If the <b>DataLogger</b> is sending data via FTP, endpoint is called internally.<br><br><i><b>References:</b> <a href=\"/documentation.html#tocsdatalogger\" target=\"_blank\">DataLoggerModel</a></i>

### Example

```python
from __future__ import print_function
import time
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to https://atman-iot.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://atman-iot.com/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DataLoggerControllerApi(api_client)
    id = 3.4 # float | 
data_logger_token = 'data_logger_token_example' # str | 

    try:
        api_instance.data_logger_controller_upload_data_from_csv(id, data_logger_token)
    except ApiException as e:
        print("Exception when calling DataLoggerControllerApi->data_logger_controller_upload_data_from_csv: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **float**|  | 
 **data_logger_token** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | File upload verification |  -  |
**406** | Request is not acceptable. Check response for help |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_logger_controller_upload_data_from_xml**
> data_logger_controller_upload_data_from_xml(id, data_logger_token)



Used for receiving data, sent in XML format by a <b>DataLogger</b> identified by <i>id</i> and <i>dataLoggerToken</i>. If the <b>DataLogger</b> is sending data via FTP, endpoint is called internally.<br><br><i><b>References:</b> <a href=\"/documentation.html#tocsdatalogger\" target=\"_blank\">DataLoggerModel</a></i>

### Example

```python
from __future__ import print_function
import time
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to https://atman-iot.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://atman-iot.com/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DataLoggerControllerApi(api_client)
    id = 3.4 # float | 
data_logger_token = 'data_logger_token_example' # str | 

    try:
        api_instance.data_logger_controller_upload_data_from_xml(id, data_logger_token)
    except ApiException as e:
        print("Exception when calling DataLoggerControllerApi->data_logger_controller_upload_data_from_xml: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **float**|  | 
 **data_logger_token** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | File upload verification |  -  |
**406** | Request is not acceptable. Check response for help |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

