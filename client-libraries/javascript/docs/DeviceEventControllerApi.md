# AtmanIoT.DeviceEventControllerApi

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deviceEventControllerCountNotViewed**](DeviceEventControllerApi.md#deviceEventControllerCountNotViewed) | **GET** /device-events/by-asset/count-not-viewed/{assetId} | 
[**deviceEventControllerFind**](DeviceEventControllerApi.md#deviceEventControllerFind) | **GET** /device-events/assetId/{assetId}/page/{page}/count/{count} | 
[**deviceEventControllerUpdateViewedBy**](DeviceEventControllerApi.md#deviceEventControllerUpdateViewedBy) | **GET** /device-events/mark-read/{eventId} | 



## deviceEventControllerCountNotViewed

> LoopbackCount deviceEventControllerCountNotViewed(assetId)



### Example

```javascript
import AtmanIoT from 'atman_io_t';
let defaultClient = AtmanIoT.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AtmanIoT.DeviceEventControllerApi();
let assetId = 3.4; // Number | 
apiInstance.deviceEventControllerCountNotViewed(assetId, (error, data, response) => {
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
 **assetId** | **Number**|  | 

### Return type

[**LoopbackCount**](LoopbackCount.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deviceEventControllerFind

> [DeviceEventWithRelations] deviceEventControllerFind(assetId, page, count)



### Example

```javascript
import AtmanIoT from 'atman_io_t';
let defaultClient = AtmanIoT.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AtmanIoT.DeviceEventControllerApi();
let assetId = 3.4; // Number | 
let page = 3.4; // Number | 
let count = 3.4; // Number | 
apiInstance.deviceEventControllerFind(assetId, page, count, (error, data, response) => {
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
 **assetId** | **Number**|  | 
 **page** | **Number**|  | 
 **count** | **Number**|  | 

### Return type

[**[DeviceEventWithRelations]**](DeviceEventWithRelations.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deviceEventControllerUpdateViewedBy

> deviceEventControllerUpdateViewedBy(eventId)



### Example

```javascript
import AtmanIoT from 'atman_io_t';
let defaultClient = AtmanIoT.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AtmanIoT.DeviceEventControllerApi();
let eventId = 3.4; // Number | 
apiInstance.deviceEventControllerUpdateViewedBy(eventId, (error, data, response) => {
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
 **eventId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

