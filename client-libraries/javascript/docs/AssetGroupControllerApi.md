# AtmanIoT.AssetGroupControllerApi

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assetGroupControllerCreateAssetGroup**](AssetGroupControllerApi.md#assetGroupControllerCreateAssetGroup) | **POST** /asset-group/user | 
[**assetGroupControllerDeleteById**](AssetGroupControllerApi.md#assetGroupControllerDeleteById) | **DELETE** /asset-group/{id} | 
[**assetGroupControllerFindUserAssetGroups**](AssetGroupControllerApi.md#assetGroupControllerFindUserAssetGroups) | **GET** /asset-groups/user | 
[**assetGroupControllerUpdateById**](AssetGroupControllerApi.md#assetGroupControllerUpdateById) | **PATCH** /asset-group/{id} | 



## assetGroupControllerCreateAssetGroup

> AssetGroup assetGroupControllerCreateAssetGroup(opts)



### Example

```javascript
import AtmanIoT from 'atman_io_t';
let defaultClient = AtmanIoT.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AtmanIoT.AssetGroupControllerApi();
let opts = {
  'assetGroupExcludingIdUserId': new AtmanIoT.AssetGroupExcludingIdUserId() // AssetGroupExcludingIdUserId | 
};
apiInstance.assetGroupControllerCreateAssetGroup(opts, (error, data, response) => {
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
 **assetGroupExcludingIdUserId** | [**AssetGroupExcludingIdUserId**](AssetGroupExcludingIdUserId.md)|  | [optional] 

### Return type

[**AssetGroup**](AssetGroup.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## assetGroupControllerDeleteById

> assetGroupControllerDeleteById(id)



### Example

```javascript
import AtmanIoT from 'atman_io_t';
let defaultClient = AtmanIoT.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AtmanIoT.AssetGroupControllerApi();
let id = 3.4; // Number | 
apiInstance.assetGroupControllerDeleteById(id, (error, data, response) => {
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


## assetGroupControllerFindUserAssetGroups

> [AssetGroup] assetGroupControllerFindUserAssetGroups()



### Example

```javascript
import AtmanIoT from 'atman_io_t';
let defaultClient = AtmanIoT.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AtmanIoT.AssetGroupControllerApi();
apiInstance.assetGroupControllerFindUserAssetGroups((error, data, response) => {
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

[**[AssetGroup]**](AssetGroup.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## assetGroupControllerUpdateById

> assetGroupControllerUpdateById(id, opts)



Edit (PATCH) AssetGroup

### Example

```javascript
import AtmanIoT from 'atman_io_t';
let defaultClient = AtmanIoT.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AtmanIoT.AssetGroupControllerApi();
let id = 3.4; // Number | 
let opts = {
  'assetGroupExcludingIdUserId': new AtmanIoT.AssetGroupExcludingIdUserId() // AssetGroupExcludingIdUserId | 
};
apiInstance.assetGroupControllerUpdateById(id, opts, (error, data, response) => {
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
 **assetGroupExcludingIdUserId** | [**AssetGroupExcludingIdUserId**](AssetGroupExcludingIdUserId.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

