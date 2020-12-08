# AtmanIoT.VirtualAccessControllerApi

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**virtualAccessControllerCreateAccessByGroup**](VirtualAccessControllerApi.md#virtualAccessControllerCreateAccessByGroup) | **POST** /virtual-access/by-asset-group | 
[**virtualAccessControllerCreateAccessByRight**](VirtualAccessControllerApi.md#virtualAccessControllerCreateAccessByRight) | **POST** /virtual-access/by-asset | 
[**virtualAccessControllerDeleteById**](VirtualAccessControllerApi.md#virtualAccessControllerDeleteById) | **DELETE** /virtual-access/{id} | 
[**virtualAccessControllerFindByUserId**](VirtualAccessControllerApi.md#virtualAccessControllerFindByUserId) | **GET** /virtual-access/by-userId/{userId} | 



## virtualAccessControllerCreateAccessByGroup

> [VirtualAccess] virtualAccessControllerCreateAccessByGroup(opts)



### Example

```javascript
import AtmanIoT from 'atman_io_t';
let defaultClient = AtmanIoT.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AtmanIoT.VirtualAccessControllerApi();
let opts = {
  'requestVirtualAccessRightExcludingAssetId': new AtmanIoT.RequestVirtualAccessRightExcludingAssetId() // RequestVirtualAccessRightExcludingAssetId | 
};
apiInstance.virtualAccessControllerCreateAccessByGroup(opts, (error, data, response) => {
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
 **requestVirtualAccessRightExcludingAssetId** | [**RequestVirtualAccessRightExcludingAssetId**](RequestVirtualAccessRightExcludingAssetId.md)|  | [optional] 

### Return type

[**[VirtualAccess]**](VirtualAccess.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## virtualAccessControllerCreateAccessByRight

> VirtualAccess virtualAccessControllerCreateAccessByRight(opts)



### Example

```javascript
import AtmanIoT from 'atman_io_t';
let defaultClient = AtmanIoT.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AtmanIoT.VirtualAccessControllerApi();
let opts = {
  'requestVirtualAccessRightExcludingAssetGroupId': new AtmanIoT.RequestVirtualAccessRightExcludingAssetGroupId() // RequestVirtualAccessRightExcludingAssetGroupId | 
};
apiInstance.virtualAccessControllerCreateAccessByRight(opts, (error, data, response) => {
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
 **requestVirtualAccessRightExcludingAssetGroupId** | [**RequestVirtualAccessRightExcludingAssetGroupId**](RequestVirtualAccessRightExcludingAssetGroupId.md)|  | [optional] 

### Return type

[**VirtualAccess**](VirtualAccess.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## virtualAccessControllerDeleteById

> virtualAccessControllerDeleteById(id)



### Example

```javascript
import AtmanIoT from 'atman_io_t';
let defaultClient = AtmanIoT.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AtmanIoT.VirtualAccessControllerApi();
let id = 3.4; // Number | 
apiInstance.virtualAccessControllerDeleteById(id, (error, data, response) => {
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


## virtualAccessControllerFindByUserId

> [VirtualAccess] virtualAccessControllerFindByUserId(userId)



### Example

```javascript
import AtmanIoT from 'atman_io_t';
let defaultClient = AtmanIoT.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AtmanIoT.VirtualAccessControllerApi();
let userId = 3.4; // Number | 
apiInstance.virtualAccessControllerFindByUserId(userId, (error, data, response) => {
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
 **userId** | **Number**|  | 

### Return type

[**[VirtualAccess]**](VirtualAccess.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

