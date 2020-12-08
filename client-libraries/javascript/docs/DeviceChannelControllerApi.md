# AtmanIoT.DeviceChannelControllerApi

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deviceChannelControllerFindByPeriod**](DeviceChannelControllerApi.md#deviceChannelControllerFindByPeriod) | **GET** /device-channel/data-by-period/{deviceId}/{channelId}/from/{fromTS}/to/{toTs}/page/{page}/count/{count}/groupBy/{groupBy}/operation/{operation} | 
[**deviceChannelControllerFindDeviceAllLastRecordedTS**](DeviceChannelControllerApi.md#deviceChannelControllerFindDeviceAllLastRecordedTS) | **GET** /device-channel/last-timestamp-in-device/{deviceId} | 
[**deviceChannelControllerFindDeviceAllLastTS**](DeviceChannelControllerApi.md#deviceChannelControllerFindDeviceAllLastTS) | **GET** /device-channel/data-last-timestamp/all-channels/{deviceId} | 
[**deviceChannelControllerFindDeviceChannelLastTS**](DeviceChannelControllerApi.md#deviceChannelControllerFindDeviceChannelLastTS) | **GET** /device-channel/data-last-timestamp/{deviceId}/{channelId} | 
[**deviceChannelControllerFindDeviceChannelLastTSSnChName**](DeviceChannelControllerApi.md#deviceChannelControllerFindDeviceChannelLastTSSnChName) | **POST** /device-channel/data-last-timestamp-by-name/{serialNo}/{channelName} | 



## deviceChannelControllerFindByPeriod

> ResponseDeviceChannelData deviceChannelControllerFindByPeriod(deviceId, channelId, fromTS, toTs, page, count, groupBy, operation)



### Example

```javascript
import AtmanIoT from 'atman_io_t';
let defaultClient = AtmanIoT.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AtmanIoT.DeviceChannelControllerApi();
let deviceId = 3.4; // Number | 
let channelId = 3.4; // Number | 
let fromTS = "fromTS_example"; // String | 
let toTs = "toTs_example"; // String | 
let page = 3.4; // Number | 
let count = 3.4; // Number | 
let groupBy = "groupBy_example"; // String | 
let operation = "operation_example"; // String | 
apiInstance.deviceChannelControllerFindByPeriod(deviceId, channelId, fromTS, toTs, page, count, groupBy, operation, (error, data, response) => {
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
 **deviceId** | **Number**|  | 
 **channelId** | **Number**|  | 
 **fromTS** | **String**|  | 
 **toTs** | **String**|  | 
 **page** | **Number**|  | 
 **count** | **Number**|  | 
 **groupBy** | **String**|  | 
 **operation** | **String**|  | 

### Return type

[**ResponseDeviceChannelData**](ResponseDeviceChannelData.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deviceChannelControllerFindDeviceAllLastRecordedTS

> Timestamp deviceChannelControllerFindDeviceAllLastRecordedTS(deviceId)



### Example

```javascript
import AtmanIoT from 'atman_io_t';
let defaultClient = AtmanIoT.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AtmanIoT.DeviceChannelControllerApi();
let deviceId = 3.4; // Number | 
apiInstance.deviceChannelControllerFindDeviceAllLastRecordedTS(deviceId, (error, data, response) => {
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
 **deviceId** | **Number**|  | 

### Return type

[**Timestamp**](Timestamp.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deviceChannelControllerFindDeviceAllLastTS

> [ResponseDeviceChannelData] deviceChannelControllerFindDeviceAllLastTS(deviceId)



### Example

```javascript
import AtmanIoT from 'atman_io_t';
let defaultClient = AtmanIoT.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AtmanIoT.DeviceChannelControllerApi();
let deviceId = 3.4; // Number | 
apiInstance.deviceChannelControllerFindDeviceAllLastTS(deviceId, (error, data, response) => {
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
 **deviceId** | **Number**|  | 

### Return type

[**[ResponseDeviceChannelData]**](ResponseDeviceChannelData.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deviceChannelControllerFindDeviceChannelLastTS

> ResponseDeviceChannelData deviceChannelControllerFindDeviceChannelLastTS(deviceId, channelId)



### Example

```javascript
import AtmanIoT from 'atman_io_t';
let defaultClient = AtmanIoT.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AtmanIoT.DeviceChannelControllerApi();
let deviceId = 3.4; // Number | 
let channelId = 3.4; // Number | 
apiInstance.deviceChannelControllerFindDeviceChannelLastTS(deviceId, channelId, (error, data, response) => {
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
 **deviceId** | **Number**|  | 
 **channelId** | **Number**|  | 

### Return type

[**ResponseDeviceChannelData**](ResponseDeviceChannelData.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deviceChannelControllerFindDeviceChannelLastTSSnChName

> ResponseDeviceChannelData deviceChannelControllerFindDeviceChannelLastTSSnChName(serialNo, channelName)



### Example

```javascript
import AtmanIoT from 'atman_io_t';
let defaultClient = AtmanIoT.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AtmanIoT.DeviceChannelControllerApi();
let serialNo = "serialNo_example"; // String | 
let channelName = "channelName_example"; // String | 
apiInstance.deviceChannelControllerFindDeviceChannelLastTSSnChName(serialNo, channelName, (error, data, response) => {
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
 **serialNo** | **String**|  | 
 **channelName** | **String**|  | 

### Return type

[**ResponseDeviceChannelData**](ResponseDeviceChannelData.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

