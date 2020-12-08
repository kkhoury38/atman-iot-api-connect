# AtmanIoT.DeviceTypeControllerApi

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deviceTypeControllerCount**](DeviceTypeControllerApi.md#deviceTypeControllerCount) | **GET** /device-type/count | 
[**deviceTypeControllerCreate**](DeviceTypeControllerApi.md#deviceTypeControllerCreate) | **POST** /device-type | 
[**deviceTypeControllerFind**](DeviceTypeControllerApi.md#deviceTypeControllerFind) | **GET** /device-type/get-all/page/{page}/count/{count} | 
[**deviceTypeControllerGetAssetDeviceCategories**](DeviceTypeControllerApi.md#deviceTypeControllerGetAssetDeviceCategories) | **GET** /device-type/device-categories-in-asset/{assetId} | 
[**deviceTypeControllerUpdateById**](DeviceTypeControllerApi.md#deviceTypeControllerUpdateById) | **PATCH** /device-type/{id} | 



## deviceTypeControllerCount

> LoopbackCount deviceTypeControllerCount()



### Example

```javascript
import AtmanIoT from 'atman_io_t';
let defaultClient = AtmanIoT.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AtmanIoT.DeviceTypeControllerApi();
apiInstance.deviceTypeControllerCount((error, data, response) => {
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

[**LoopbackCount**](LoopbackCount.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deviceTypeControllerCreate

> DeviceType deviceTypeControllerCreate(opts)



### Example

```javascript
import AtmanIoT from 'atman_io_t';
let defaultClient = AtmanIoT.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AtmanIoT.DeviceTypeControllerApi();
let opts = {
  'deviceType': new AtmanIoT.DeviceType() // DeviceType | 
};
apiInstance.deviceTypeControllerCreate(opts, (error, data, response) => {
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
 **deviceType** | [**DeviceType**](DeviceType.md)|  | [optional] 

### Return type

[**DeviceType**](DeviceType.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deviceTypeControllerFind

> [DeviceType] deviceTypeControllerFind(page, count)



### Example

```javascript
import AtmanIoT from 'atman_io_t';
let defaultClient = AtmanIoT.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AtmanIoT.DeviceTypeControllerApi();
let page = 3.4; // Number | 
let count = 3.4; // Number | 
apiInstance.deviceTypeControllerFind(page, count, (error, data, response) => {
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
 **page** | **Number**|  | 
 **count** | **Number**|  | 

### Return type

[**[DeviceType]**](DeviceType.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deviceTypeControllerGetAssetDeviceCategories

> [DeviceTypeExcludingModelDescriptionManufacturer] deviceTypeControllerGetAssetDeviceCategories(assetId)



### Example

```javascript
import AtmanIoT from 'atman_io_t';
let defaultClient = AtmanIoT.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AtmanIoT.DeviceTypeControllerApi();
let assetId = 3.4; // Number | 
apiInstance.deviceTypeControllerGetAssetDeviceCategories(assetId, (error, data, response) => {
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

[**[DeviceTypeExcludingModelDescriptionManufacturer]**](DeviceTypeExcludingModelDescriptionManufacturer.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deviceTypeControllerUpdateById

> deviceTypeControllerUpdateById(id, opts)



### Example

```javascript
import AtmanIoT from 'atman_io_t';
let defaultClient = AtmanIoT.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AtmanIoT.DeviceTypeControllerApi();
let id = 3.4; // Number | 
let opts = {
  'deviceTypeExcludingIdModelManufacturer': new AtmanIoT.DeviceTypeExcludingIdModelManufacturer() // DeviceTypeExcludingIdModelManufacturer | 
};
apiInstance.deviceTypeControllerUpdateById(id, opts, (error, data, response) => {
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
 **deviceTypeExcludingIdModelManufacturer** | [**DeviceTypeExcludingIdModelManufacturer**](DeviceTypeExcludingIdModelManufacturer.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

