# openapi_client.SchedulerControllerApi

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**scheduler_controller_process_events**](SchedulerControllerApi.md#scheduler_controller_process_events) | **GET** /scheduler/process/events/{attempt}/{serverKey} | 
[**scheduler_controller_process_ftp_rejected**](SchedulerControllerApi.md#scheduler_controller_process_ftp_rejected) | **GET** /scheduler/process/ftp-rejected/{serverKey} | 


# **scheduler_controller_process_events**
> scheduler_controller_process_events(attempt, server_key)



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
    api_instance = openapi_client.SchedulerControllerApi(api_client)
    attempt = 3.4 # float | 
server_key = 'server_key_example' # str | 

    try:
        api_instance.scheduler_controller_process_events(attempt, server_key)
    except ApiException as e:
        print("Exception when calling SchedulerControllerApi->scheduler_controller_process_events: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attempt** | **float**|  | 
 **server_key** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Scheduler Processing finished |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **scheduler_controller_process_ftp_rejected**
> scheduler_controller_process_ftp_rejected(server_key)



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
    api_instance = openapi_client.SchedulerControllerApi(api_client)
    server_key = 'server_key_example' # str | 

    try:
        api_instance.scheduler_controller_process_ftp_rejected(server_key)
    except ApiException as e:
        print("Exception when calling SchedulerControllerApi->scheduler_controller_process_ftp_rejected: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **server_key** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Scheduler Processing finished |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

