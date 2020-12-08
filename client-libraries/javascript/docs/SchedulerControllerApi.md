# AtmanIoT.SchedulerControllerApi

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**schedulerControllerProcessEvents**](SchedulerControllerApi.md#schedulerControllerProcessEvents) | **GET** /scheduler/process/events/{attempt}/{serverKey} | 
[**schedulerControllerProcessFtpRejected**](SchedulerControllerApi.md#schedulerControllerProcessFtpRejected) | **GET** /scheduler/process/ftp-rejected/{serverKey} | 



## schedulerControllerProcessEvents

> schedulerControllerProcessEvents(attempt, serverKey)



### Example

```javascript
import AtmanIoT from 'atman_io_t';

let apiInstance = new AtmanIoT.SchedulerControllerApi();
let attempt = 3.4; // Number | 
let serverKey = "serverKey_example"; // String | 
apiInstance.schedulerControllerProcessEvents(attempt, serverKey, (error, data, response) => {
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
 **attempt** | **Number**|  | 
 **serverKey** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## schedulerControllerProcessFtpRejected

> schedulerControllerProcessFtpRejected(serverKey)



### Example

```javascript
import AtmanIoT from 'atman_io_t';

let apiInstance = new AtmanIoT.SchedulerControllerApi();
let serverKey = "serverKey_example"; // String | 
apiInstance.schedulerControllerProcessFtpRejected(serverKey, (error, data, response) => {
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
 **serverKey** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

