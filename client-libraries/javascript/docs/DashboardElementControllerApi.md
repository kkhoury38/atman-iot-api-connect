# AtmanIoT.DashboardElementControllerApi

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dashboardElementControllerCreate**](DashboardElementControllerApi.md#dashboardElementControllerCreate) | **POST** /dashboard-element | 
[**dashboardElementControllerDeleteById**](DashboardElementControllerApi.md#dashboardElementControllerDeleteById) | **DELETE** /dashboard-element/{id} | 
[**dashboardElementControllerFindByUserIdAssetIdLocation**](DashboardElementControllerApi.md#dashboardElementControllerFindByUserIdAssetIdLocation) | **GET** /dashboard-elements/asset-id/{assetId}/user-id/{userId}/location/{location} | 
[**dashboardElementControllerMoveElementDown**](DashboardElementControllerApi.md#dashboardElementControllerMoveElementDown) | **PATCH** /dashboard-element/{id}/move-down | 
[**dashboardElementControllerMoveElementUp**](DashboardElementControllerApi.md#dashboardElementControllerMoveElementUp) | **PATCH** /dashboard-element/{id}/move-up | 



## dashboardElementControllerCreate

> DashboardElement dashboardElementControllerCreate(opts)



### Example

```javascript
import AtmanIoT from 'atman_io_t';
let defaultClient = AtmanIoT.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AtmanIoT.DashboardElementControllerApi();
let opts = {
  'newDashboardElement': new AtmanIoT.NewDashboardElement() // NewDashboardElement | 
};
apiInstance.dashboardElementControllerCreate(opts, (error, data, response) => {
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
 **newDashboardElement** | [**NewDashboardElement**](NewDashboardElement.md)|  | [optional] 

### Return type

[**DashboardElement**](DashboardElement.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## dashboardElementControllerDeleteById

> dashboardElementControllerDeleteById(id)



### Example

```javascript
import AtmanIoT from 'atman_io_t';
let defaultClient = AtmanIoT.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AtmanIoT.DashboardElementControllerApi();
let id = 3.4; // Number | 
apiInstance.dashboardElementControllerDeleteById(id, (error, data, response) => {
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


## dashboardElementControllerFindByUserIdAssetIdLocation

> [DashboardElementWithScope] dashboardElementControllerFindByUserIdAssetIdLocation(assetId, userId, location)



### Example

```javascript
import AtmanIoT from 'atman_io_t';
let defaultClient = AtmanIoT.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AtmanIoT.DashboardElementControllerApi();
let assetId = 3.4; // Number | 
let userId = 3.4; // Number | 
let location = "location_example"; // String | 
apiInstance.dashboardElementControllerFindByUserIdAssetIdLocation(assetId, userId, location, (error, data, response) => {
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
 **userId** | **Number**|  | 
 **location** | **String**|  | 

### Return type

[**[DashboardElementWithScope]**](DashboardElementWithScope.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## dashboardElementControllerMoveElementDown

> dashboardElementControllerMoveElementDown(id)



### Example

```javascript
import AtmanIoT from 'atman_io_t';
let defaultClient = AtmanIoT.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AtmanIoT.DashboardElementControllerApi();
let id = 3.4; // Number | 
apiInstance.dashboardElementControllerMoveElementDown(id, (error, data, response) => {
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


## dashboardElementControllerMoveElementUp

> dashboardElementControllerMoveElementUp(id)



### Example

```javascript
import AtmanIoT from 'atman_io_t';
let defaultClient = AtmanIoT.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AtmanIoT.DashboardElementControllerApi();
let id = 3.4; // Number | 
apiInstance.dashboardElementControllerMoveElementUp(id, (error, data, response) => {
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

