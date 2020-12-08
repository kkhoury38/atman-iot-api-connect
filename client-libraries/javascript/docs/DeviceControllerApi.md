# AtmanIoT.DeviceControllerApi

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deviceControllerCreate**](DeviceControllerApi.md#deviceControllerCreate) | **POST** /device/{dataLoggerId} | 
[**deviceControllerCreateChannel**](DeviceControllerApi.md#deviceControllerCreateChannel) | **POST** /device/{deviceId}/channel | 
[**deviceControllerDisableChannelMonitoring**](DeviceControllerApi.md#deviceControllerDisableChannelMonitoring) | **GET** /device/{deviceId}/channel/{channelId}/disable-monitoring/all/{all} | 
[**deviceControllerEnableChannelMonitoring**](DeviceControllerApi.md#deviceControllerEnableChannelMonitoring) | **GET** /device/{deviceId}/channel/{channelId}/enable-monitoring/all/{all} | 
[**deviceControllerFind**](DeviceControllerApi.md#deviceControllerFind) | **GET** /devices/{dataLoggerId} | 
[**deviceControllerFindChannelTypes**](DeviceControllerApi.md#deviceControllerFindChannelTypes) | **GET** /device/{deviceId}/channelTypes | 
[**deviceControllerFindChannels**](DeviceControllerApi.md#deviceControllerFindChannels) | **GET** /device/{deviceId}/channels | 
[**deviceControllerGetDevicesWithType**](DeviceControllerApi.md#deviceControllerGetDevicesWithType) | **POST** /devices/with-device-type | 
[**deviceControllerUpdateById**](DeviceControllerApi.md#deviceControllerUpdateById) | **PATCH** /device/{id} | 



## deviceControllerCreate

> Device deviceControllerCreate(dataLoggerId, opts)



Used for creating a new &lt;b&gt;Device&lt;/b&gt;, belonging to a &lt;b&gt;DataLogger&lt;/b&gt; with id &lt;i&gt;dataLoggerId&lt;/i&gt; by an authorized &lt;b&gt;User&lt;/b&gt; identified by the provided &lt;i&gt;token&lt;/i&gt;.&lt;br&gt;&lt;br&gt;&lt;i&gt;&lt;b&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-dataloggercontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DataLoggerController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-usercontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;UserController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocsdevice\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DeviceModel&lt;/a&gt;&lt;/i&gt;

### Example

```javascript
import AtmanIoT from 'atman_io_t';
let defaultClient = AtmanIoT.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AtmanIoT.DeviceControllerApi();
let dataLoggerId = 3.4; // Number | 
let opts = {
  'deviceExcludingIdDataLoggerId': new AtmanIoT.DeviceExcludingIdDataLoggerId() // DeviceExcludingIdDataLoggerId | 
};
apiInstance.deviceControllerCreate(dataLoggerId, opts, (error, data, response) => {
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
 **dataLoggerId** | **Number**|  | 
 **deviceExcludingIdDataLoggerId** | [**DeviceExcludingIdDataLoggerId**](DeviceExcludingIdDataLoggerId.md)|  | [optional] 

### Return type

[**Device**](Device.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deviceControllerCreateChannel

> Channel deviceControllerCreateChannel(deviceId, opts)



Used for creating a new &lt;b&gt;Channel&lt;/b&gt;, belonging to a &lt;b&gt;Device&lt;/b&gt; with id &lt;i&gt;deviceId&lt;/i&gt; by an authorized &lt;b&gt;User&lt;/b&gt; identified by the provided &lt;i&gt;token&lt;/i&gt;.&lt;br&gt;&lt;br&gt;&lt;i&gt;&lt;b&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-usercontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;UserController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocschannel\&quot; target&#x3D;\&quot;_blank\&quot;&gt;ChannelModel&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocsdevice\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DeviceModel&lt;/a&gt;&lt;/i&gt;

### Example

```javascript
import AtmanIoT from 'atman_io_t';
let defaultClient = AtmanIoT.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AtmanIoT.DeviceControllerApi();
let deviceId = 3.4; // Number | 
let opts = {
  'channelExcludingIdDeviceId': new AtmanIoT.ChannelExcludingIdDeviceId() // ChannelExcludingIdDeviceId | 
};
apiInstance.deviceControllerCreateChannel(deviceId, opts, (error, data, response) => {
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
 **channelExcludingIdDeviceId** | [**ChannelExcludingIdDeviceId**](ChannelExcludingIdDeviceId.md)|  | [optional] 

### Return type

[**Channel**](Channel.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deviceControllerDisableChannelMonitoring

> deviceControllerDisableChannelMonitoring(deviceId, channelId, all)



Disable monitoring of &lt;b&gt;Channel&lt;/b&gt; identified by &lt;i&gt;channelId&lt;/i&gt;, in &lt;b&gt;Device&lt;/b&gt; identified by &lt;i&gt;deviceId&lt;/i&gt;, owned by &lt;b&gt;User&lt;/b&gt; authorized by &lt;i&gt;token&lt;/i&gt;.&lt;br&gt;&lt;br&gt;&lt;i&gt;&lt;b&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-usercontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;UserController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocschannel\&quot; target&#x3D;\&quot;_blank\&quot;&gt;ChannelModel&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocsdevice\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DeviceModel&lt;/a&gt;&lt;/i&gt;

### Example

```javascript
import AtmanIoT from 'atman_io_t';
let defaultClient = AtmanIoT.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AtmanIoT.DeviceControllerApi();
let deviceId = 3.4; // Number | 
let channelId = 3.4; // Number | 
let all = true; // Boolean | 
apiInstance.deviceControllerDisableChannelMonitoring(deviceId, channelId, all, (error, data, response) => {
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
 **deviceId** | **Number**|  | 
 **channelId** | **Number**|  | 
 **all** | **Boolean**|  | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deviceControllerEnableChannelMonitoring

> deviceControllerEnableChannelMonitoring(deviceId, channelId, all)



Enable monitoring of &lt;b&gt;Channel&lt;/b&gt; identified by &lt;i&gt;channelId&lt;/i&gt;, in &lt;b&gt;Device&lt;/b&gt; identified by &lt;i&gt;deviceId&lt;/i&gt;, owned by &lt;b&gt;User&lt;/b&gt; authorized by &lt;i&gt;token&lt;/i&gt;.&lt;br&gt;&lt;br&gt;&lt;i&gt;&lt;b&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-usercontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;UserController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocschannel\&quot; target&#x3D;\&quot;_blank\&quot;&gt;ChannelModel&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocsdevice\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DeviceModel&lt;/a&gt;&lt;/i&gt;

### Example

```javascript
import AtmanIoT from 'atman_io_t';
let defaultClient = AtmanIoT.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AtmanIoT.DeviceControllerApi();
let deviceId = 3.4; // Number | 
let channelId = 3.4; // Number | 
let all = true; // Boolean | 
apiInstance.deviceControllerEnableChannelMonitoring(deviceId, channelId, all, (error, data, response) => {
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
 **deviceId** | **Number**|  | 
 **channelId** | **Number**|  | 
 **all** | **Boolean**|  | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deviceControllerFind

> [Device] deviceControllerFind(dataLoggerId)



Used for getting the &lt;b&gt;Devices&lt;/b&gt;, belonging to a &lt;b&gt;DataLogger&lt;/b&gt; with id &lt;i&gt;dataLoggerId&lt;/i&gt; by an authorized &lt;b&gt;User&lt;/b&gt; identified by the provided &lt;i&gt;token&lt;/i&gt;.&lt;br&gt;&lt;br&gt;&lt;i&gt;&lt;b&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-dataloggercontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DataLoggerController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-usercontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;UserController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocsdevice\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DeviceModel&lt;/a&gt;&lt;/i&gt;

### Example

```javascript
import AtmanIoT from 'atman_io_t';
let defaultClient = AtmanIoT.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AtmanIoT.DeviceControllerApi();
let dataLoggerId = 3.4; // Number | 
apiInstance.deviceControllerFind(dataLoggerId, (error, data, response) => {
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
 **dataLoggerId** | **Number**|  | 

### Return type

[**[Device]**](Device.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deviceControllerFindChannelTypes

> [ChannelType] deviceControllerFindChannelTypes(deviceId)



Used for getting the  &lt;b&gt;Channel&lt;/b&gt;&lt;b&gt;Types&lt;/b&gt; of &lt;b&gt;Channels&lt;/b&gt; belonging to a &lt;b&gt;Device&lt;/b&gt; with id &lt;i&gt;deviceId&lt;/i&gt;, by an authorized &lt;b&gt;User&lt;/b&gt; identified by the provided &lt;i&gt;token&lt;/i&gt;.&lt;br&gt;&lt;br&gt;&lt;i&gt;&lt;b&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-usercontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;UserController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocschannel\&quot; target&#x3D;\&quot;_blank\&quot;&gt;ChannelModel&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocschanneltype\&quot; target&#x3D;\&quot;_blank\&quot;&gt;ChannelTypeModel&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocsdevice\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DeviceModel&lt;/a&gt;&lt;/i&gt;

### Example

```javascript
import AtmanIoT from 'atman_io_t';
let defaultClient = AtmanIoT.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AtmanIoT.DeviceControllerApi();
let deviceId = 3.4; // Number | 
apiInstance.deviceControllerFindChannelTypes(deviceId, (error, data, response) => {
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

[**[ChannelType]**](ChannelType.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deviceControllerFindChannels

> [Channel] deviceControllerFindChannels(deviceId)



Used for getting &lt;b&gt;Channel&lt;/b&gt;&lt;b&gt;s&lt;/b&gt;, belonging to a &lt;b&gt;Device&lt;/b&gt; with id &lt;i&gt;deviceId&lt;/i&gt;, by an authorized &lt;b&gt;User&lt;/b&gt; identified by the provided &lt;i&gt;token&lt;/i&gt;.&lt;br&gt;&lt;br&gt;&lt;i&gt;&lt;b&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-usercontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;UserController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocschannel\&quot; target&#x3D;\&quot;_blank\&quot;&gt;ChannelModel&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocsdevice\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DeviceModel&lt;/a&gt;&lt;/i&gt;

### Example

```javascript
import AtmanIoT from 'atman_io_t';
let defaultClient = AtmanIoT.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AtmanIoT.DeviceControllerApi();
let deviceId = 3.4; // Number | 
apiInstance.deviceControllerFindChannels(deviceId, (error, data, response) => {
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

[**[Channel]**](Channel.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deviceControllerGetDevicesWithType

> [DeviceWithType] deviceControllerGetDevicesWithType(opts)



Returns array of devices with their device types

### Example

```javascript
import AtmanIoT from 'atman_io_t';
let defaultClient = AtmanIoT.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AtmanIoT.DeviceControllerApi();
let opts = {
  'deviceExcludingDescriptionSerialNoDataLoggerIdDeviceTypeId': [new AtmanIoT.DeviceExcludingDescriptionSerialNoDataLoggerIdDeviceTypeId()] // [DeviceExcludingDescriptionSerialNoDataLoggerIdDeviceTypeId] | 
};
apiInstance.deviceControllerGetDevicesWithType(opts, (error, data, response) => {
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
 **deviceExcludingDescriptionSerialNoDataLoggerIdDeviceTypeId** | [**[DeviceExcludingDescriptionSerialNoDataLoggerIdDeviceTypeId]**](DeviceExcludingDescriptionSerialNoDataLoggerIdDeviceTypeId.md)|  | [optional] 

### Return type

[**[DeviceWithType]**](DeviceWithType.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deviceControllerUpdateById

> deviceControllerUpdateById(id, opts)



### Example

```javascript
import AtmanIoT from 'atman_io_t';
let defaultClient = AtmanIoT.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AtmanIoT.DeviceControllerApi();
let id = 3.4; // Number | 
let opts = {
  'deviceExcludingIdSerialNoDataLoggerIdDeviceTypeId': new AtmanIoT.DeviceExcludingIdSerialNoDataLoggerIdDeviceTypeId() // DeviceExcludingIdSerialNoDataLoggerIdDeviceTypeId | 
};
apiInstance.deviceControllerUpdateById(id, opts, (error, data, response) => {
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
 **deviceExcludingIdSerialNoDataLoggerIdDeviceTypeId** | [**DeviceExcludingIdSerialNoDataLoggerIdDeviceTypeId**](DeviceExcludingIdSerialNoDataLoggerIdDeviceTypeId.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

