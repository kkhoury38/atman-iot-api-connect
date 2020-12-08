# AtmanIoT.DeviceTypeChannelTypeControllerApi

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deviceTypeChannelTypeControllerCount**](DeviceTypeChannelTypeControllerApi.md#deviceTypeChannelTypeControllerCount) | **GET** /device-type-channel-type/{deviceTypeId}/count | 
[**deviceTypeChannelTypeControllerCreate**](DeviceTypeChannelTypeControllerApi.md#deviceTypeChannelTypeControllerCreate) | **POST** /device-type-channel-type/{deviceTypeId} | 
[**deviceTypeChannelTypeControllerDeviceTypeChannelCategories**](DeviceTypeChannelTypeControllerApi.md#deviceTypeChannelTypeControllerDeviceTypeChannelCategories) | **GET** /device-type-channel-type/{deviceTypeId}/channel-categories | 
[**deviceTypeChannelTypeControllerFind**](DeviceTypeChannelTypeControllerApi.md#deviceTypeChannelTypeControllerFind) | **GET** /device-type-channel-type/{deviceTypeId}/page/{page}/count/{count} | 
[**deviceTypeChannelTypeControllerUpdateById**](DeviceTypeChannelTypeControllerApi.md#deviceTypeChannelTypeControllerUpdateById) | **PATCH** /device-type-channel-type/channel-type/{channelTypeId} | 



## deviceTypeChannelTypeControllerCount

> LoopbackCount deviceTypeChannelTypeControllerCount(deviceTypeId)



### Example

```javascript
import AtmanIoT from 'atman_io_t';
let defaultClient = AtmanIoT.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AtmanIoT.DeviceTypeChannelTypeControllerApi();
let deviceTypeId = 3.4; // Number | 
apiInstance.deviceTypeChannelTypeControllerCount(deviceTypeId, (error, data, response) => {
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
 **deviceTypeId** | **Number**|  | 

### Return type

[**LoopbackCount**](LoopbackCount.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deviceTypeChannelTypeControllerCreate

> ChannelType deviceTypeChannelTypeControllerCreate(deviceTypeId, opts)



### Example

```javascript
import AtmanIoT from 'atman_io_t';
let defaultClient = AtmanIoT.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AtmanIoT.DeviceTypeChannelTypeControllerApi();
let deviceTypeId = 3.4; // Number | 
let opts = {
  'channelTypeExcludingIdDeviceTypeId': new AtmanIoT.ChannelTypeExcludingIdDeviceTypeId() // ChannelTypeExcludingIdDeviceTypeId | 
};
apiInstance.deviceTypeChannelTypeControllerCreate(deviceTypeId, opts, (error, data, response) => {
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
 **deviceTypeId** | **Number**|  | 
 **channelTypeExcludingIdDeviceTypeId** | [**ChannelTypeExcludingIdDeviceTypeId**](ChannelTypeExcludingIdDeviceTypeId.md)|  | [optional] 

### Return type

[**ChannelType**](ChannelType.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deviceTypeChannelTypeControllerDeviceTypeChannelCategories

> [ChannelTypeExcludingNameDescriptionUnitChannelTypeDeviceTypeId] deviceTypeChannelTypeControllerDeviceTypeChannelCategories(deviceTypeId)



### Example

```javascript
import AtmanIoT from 'atman_io_t';
let defaultClient = AtmanIoT.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AtmanIoT.DeviceTypeChannelTypeControllerApi();
let deviceTypeId = 3.4; // Number | 
apiInstance.deviceTypeChannelTypeControllerDeviceTypeChannelCategories(deviceTypeId, (error, data, response) => {
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
 **deviceTypeId** | **Number**|  | 

### Return type

[**[ChannelTypeExcludingNameDescriptionUnitChannelTypeDeviceTypeId]**](ChannelTypeExcludingNameDescriptionUnitChannelTypeDeviceTypeId.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deviceTypeChannelTypeControllerFind

> [ChannelType] deviceTypeChannelTypeControllerFind(deviceTypeId, page, count)



### Example

```javascript
import AtmanIoT from 'atman_io_t';
let defaultClient = AtmanIoT.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AtmanIoT.DeviceTypeChannelTypeControllerApi();
let deviceTypeId = 3.4; // Number | 
let page = 3.4; // Number | 
let count = 3.4; // Number | 
apiInstance.deviceTypeChannelTypeControllerFind(deviceTypeId, page, count, (error, data, response) => {
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
 **deviceTypeId** | **Number**|  | 
 **page** | **Number**|  | 
 **count** | **Number**|  | 

### Return type

[**[ChannelType]**](ChannelType.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deviceTypeChannelTypeControllerUpdateById

> deviceTypeChannelTypeControllerUpdateById(channelTypeId, opts)



### Example

```javascript
import AtmanIoT from 'atman_io_t';
let defaultClient = AtmanIoT.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AtmanIoT.DeviceTypeChannelTypeControllerApi();
let channelTypeId = 3.4; // Number | 
let opts = {
  'channelTypeExcludingIdNameDeviceTypeId': new AtmanIoT.ChannelTypeExcludingIdNameDeviceTypeId() // ChannelTypeExcludingIdNameDeviceTypeId | 
};
apiInstance.deviceTypeChannelTypeControllerUpdateById(channelTypeId, opts, (error, data, response) => {
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
 **channelTypeId** | **Number**|  | 
 **channelTypeExcludingIdNameDeviceTypeId** | [**ChannelTypeExcludingIdNameDeviceTypeId**](ChannelTypeExcludingIdNameDeviceTypeId.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

