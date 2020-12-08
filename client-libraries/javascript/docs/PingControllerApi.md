# AtmanIoT.PingControllerApi

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**pingControllerPing**](PingControllerApi.md#pingControllerPing) | **GET** /ping | 



## pingControllerPing

> InlineResponse200 pingControllerPing()



Ping the server

### Example

```javascript
import AtmanIoT from 'atman_io_t';

let apiInstance = new AtmanIoT.PingControllerApi();
apiInstance.pingControllerPing((error, data, response) => {
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

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

