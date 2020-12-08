# AtmanIoT.DeviceGroupMembershipControllerApi

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deviceGroupMembershipControllerCreate**](DeviceGroupMembershipControllerApi.md#deviceGroupMembershipControllerCreate) | **POST** /device-group-memberships | 
[**deviceGroupMembershipControllerDeleteById**](DeviceGroupMembershipControllerApi.md#deviceGroupMembershipControllerDeleteById) | **DELETE** /device-group-memberships/{id} | 
[**deviceGroupMembershipControllerFindByAssetId**](DeviceGroupMembershipControllerApi.md#deviceGroupMembershipControllerFindByAssetId) | **GET** /device-group-memberships/by-asset/{assetId} | 
[**deviceGroupMembershipControllerFindByDeviceId**](DeviceGroupMembershipControllerApi.md#deviceGroupMembershipControllerFindByDeviceId) | **GET** /device-group-memberships/by-device/{deviceId} | 



## deviceGroupMembershipControllerCreate

> DeviceGroupMembership deviceGroupMembershipControllerCreate(opts)



### Example

```javascript
import AtmanIoT from 'atman_io_t';
let defaultClient = AtmanIoT.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AtmanIoT.DeviceGroupMembershipControllerApi();
let opts = {
  'deviceGroupMembershipExcludingId': new AtmanIoT.DeviceGroupMembershipExcludingId() // DeviceGroupMembershipExcludingId | 
};
apiInstance.deviceGroupMembershipControllerCreate(opts, (error, data, response) => {
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
 **deviceGroupMembershipExcludingId** | [**DeviceGroupMembershipExcludingId**](DeviceGroupMembershipExcludingId.md)|  | [optional] 

### Return type

[**DeviceGroupMembership**](DeviceGroupMembership.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deviceGroupMembershipControllerDeleteById

> deviceGroupMembershipControllerDeleteById(id)



### Example

```javascript
import AtmanIoT from 'atman_io_t';
let defaultClient = AtmanIoT.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AtmanIoT.DeviceGroupMembershipControllerApi();
let id = 3.4; // Number | 
apiInstance.deviceGroupMembershipControllerDeleteById(id, (error, data, response) => {
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

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deviceGroupMembershipControllerFindByAssetId

> [DeviceGroupMembership] deviceGroupMembershipControllerFindByAssetId(assetId)



### Example

```javascript
import AtmanIoT from 'atman_io_t';
let defaultClient = AtmanIoT.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AtmanIoT.DeviceGroupMembershipControllerApi();
let assetId = 3.4; // Number | 
apiInstance.deviceGroupMembershipControllerFindByAssetId(assetId, (error, data, response) => {
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

[**[DeviceGroupMembership]**](DeviceGroupMembership.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deviceGroupMembershipControllerFindByDeviceId

> [DeviceGroupMembership] deviceGroupMembershipControllerFindByDeviceId(deviceId)



### Example

```javascript
import AtmanIoT from 'atman_io_t';
let defaultClient = AtmanIoT.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AtmanIoT.DeviceGroupMembershipControllerApi();
let deviceId = 3.4; // Number | 
apiInstance.deviceGroupMembershipControllerFindByDeviceId(deviceId, (error, data, response) => {
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

[**[DeviceGroupMembership]**](DeviceGroupMembership.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

