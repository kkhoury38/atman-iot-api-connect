# AtmanIoT.AssetControllerApi

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assetControllerCreate**](AssetControllerApi.md#assetControllerCreate) | **POST** /asset | 
[**assetControllerDeleteById**](AssetControllerApi.md#assetControllerDeleteById) | **DELETE** /asset/{id} | 
[**assetControllerFind**](AssetControllerApi.md#assetControllerFind) | **GET** /assets/{assetGroupId} | 
[**assetControllerFindByName**](AssetControllerApi.md#assetControllerFindByName) | **GET** /asset/by-name/{assetName} | 
[**assetControllerFindByUserId**](AssetControllerApi.md#assetControllerFindByUserId) | **GET** /assets/by-user/{userId} | 
[**assetControllerUpdateById**](AssetControllerApi.md#assetControllerUpdateById) | **PATCH** /asset/{id} | 



## assetControllerCreate

> Asset assetControllerCreate(opts)



Used for creating a new &lt;b&gt;Asset&lt;/b&gt;, by an authorized &lt;b&gt;User&lt;/b&gt;, identified by the provided &lt;i&gt;token&lt;/i&gt;. An &lt;b&gt;Asset&lt;/b&gt; is a way of logical grouping of &lt;b&gt;Devices&lt;/b&gt;. One &lt;b&gt;Asset&lt;/b&gt; can contain many &lt;b&gt;Devices&lt;/b&gt; and can belong to one &lt;b&gt;AssetGroup&lt;/b&gt;. &lt;br&gt;&lt;br&gt;&lt;i&gt;&lt;b&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-assetgroupcontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;AssetGroupController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-devicecontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DeviceController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-usercontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;UserController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocsasset\&quot; target&#x3D;\&quot;_blank\&quot;&gt;AssetModel&lt;/a&gt;&lt;/i&gt;

### Example

```javascript
import AtmanIoT from 'atman_io_t';
let defaultClient = AtmanIoT.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AtmanIoT.AssetControllerApi();
let opts = {
  'assetExcludingId': new AtmanIoT.AssetExcludingId() // AssetExcludingId | 
};
apiInstance.assetControllerCreate(opts, (error, data, response) => {
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
 **assetExcludingId** | [**AssetExcludingId**](AssetExcludingId.md)|  | [optional] 

### Return type

[**Asset**](Asset.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## assetControllerDeleteById

> assetControllerDeleteById(id)



Used for deleting an &lt;b&gt;Asset&lt;/b&gt;, identified by &lt;i&gt;id&lt;/i&gt; by an authorized &lt;b&gt;User&lt;/b&gt; identified by the provided &lt;i&gt;token&lt;/i&gt;. &lt;br&gt;&lt;br&gt;&lt;i&gt;&lt;b&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-usercontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;UserController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocsasset\&quot; target&#x3D;\&quot;_blank\&quot;&gt;AssetModel&lt;/a&gt;&lt;/i&gt;

### Example

```javascript
import AtmanIoT from 'atman_io_t';
let defaultClient = AtmanIoT.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AtmanIoT.AssetControllerApi();
let id = 3.4; // Number | 
apiInstance.assetControllerDeleteById(id, (error, data, response) => {
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


## assetControllerFind

> [Asset] assetControllerFind(assetGroupId)



Used for getting the &lt;b&gt;Assets&lt;/b&gt; belonging to an &lt;b&gt;AssetGroup&lt;/b&gt;, in turn belonging to an authorized &lt;b&gt;User&lt;/b&gt; or &lt;b&gt;Virtual User&lt;/b&gt;.  An &lt;b&gt;Asset&lt;/b&gt; is a way of logical grouping of &lt;b&gt;Devices&lt;/b&gt;. One &lt;b&gt;Asset&lt;/b&gt; can contain many &lt;b&gt;Devices&lt;/b&gt; and can belong to the &lt;b&gt;AssetGroup&lt;/b&gt; with the provided &lt;i&gt;assetGroupId&lt;/i&gt;. An &lt;b&gt;AssetGroup&lt;/b&gt; can have many &lt;b&gt;Assets&lt;/b&gt;. &lt;i&gt;&lt;b&gt;. &lt;br&gt;&lt;br&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-assetgroupcontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;AssetGroupController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-devicecontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DeviceController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-usercontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;UserController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocsasset\&quot; target&#x3D;\&quot;_blank\&quot;&gt;AssetModel&lt;/a&gt;&lt;/i&gt;

### Example

```javascript
import AtmanIoT from 'atman_io_t';
let defaultClient = AtmanIoT.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AtmanIoT.AssetControllerApi();
let assetGroupId = 3.4; // Number | 
apiInstance.assetControllerFind(assetGroupId, (error, data, response) => {
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
 **assetGroupId** | **Number**|  | 

### Return type

[**[Asset]**](Asset.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## assetControllerFindByName

> Asset assetControllerFindByName(assetName)



Used for getting the &lt;b&gt;Asset&lt;/b&gt; identified by &lt;i&gt;assetName&lt;/i&gt;, by an authorized &lt;b&gt;User&lt;/b&gt; or &lt;b&gt;Virtual User&lt;/b&gt; identified by the provided &lt;i&gt;token&lt;/i&gt;. An &lt;b&gt;Asset&lt;/b&gt; is a way of logical grouping of &lt;b&gt;Devices&lt;/b&gt;. One &lt;b&gt;Asset&lt;/b&gt; can contain many &lt;b&gt;Devices&lt;/b&gt; and can belong to one &lt;b&gt;AssetGroup&lt;/b&gt;.&lt;br&gt;&lt;br&gt;&lt;i&gt;&lt;b&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-assetgroupcontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;AssetGroupController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-devicecontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DeviceController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-usercontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;UserController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocsasset\&quot; target&#x3D;\&quot;_blank\&quot;&gt;AssetModel&lt;/a&gt;&lt;/i&gt;

### Example

```javascript
import AtmanIoT from 'atman_io_t';
let defaultClient = AtmanIoT.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AtmanIoT.AssetControllerApi();
let assetName = "assetName_example"; // String | 
apiInstance.assetControllerFindByName(assetName, (error, data, response) => {
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
 **assetName** | **String**|  | 

### Return type

[**Asset**](Asset.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## assetControllerFindByUserId

> [Asset] assetControllerFindByUserId(userId)



Used for getting the &lt;b&gt;Assets&lt;/b&gt; of an authorized &lt;b&gt;User&lt;/b&gt; identified by the provided &lt;i&gt;userId&lt;/i&gt;, by an authorized &lt;b&gt;Admin&lt;/b&gt;. An &lt;b&gt;Asset&lt;/b&gt; is a way of logical grouping of &lt;b&gt;Devices&lt;/b&gt;. One &lt;b&gt;Asset&lt;/b&gt; can contain many &lt;b&gt;Devices&lt;/b&gt; and can belong to one &lt;b&gt;AssetGroup&lt;/b&gt;.&lt;br&gt;&lt;br&gt;&lt;i&gt;&lt;b&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-assetgroupcontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;AssetGroupController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-devicecontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DeviceController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-usercontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;UserController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocsasset\&quot; target&#x3D;\&quot;_blank\&quot;&gt;AssetModel&lt;/a&gt;&lt;/i&gt;

### Example

```javascript
import AtmanIoT from 'atman_io_t';
let defaultClient = AtmanIoT.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AtmanIoT.AssetControllerApi();
let userId = 3.4; // Number | 
apiInstance.assetControllerFindByUserId(userId, (error, data, response) => {
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

[**[Asset]**](Asset.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## assetControllerUpdateById

> assetControllerUpdateById(id, opts)



Edit (Patch) Asset by Id

### Example

```javascript
import AtmanIoT from 'atman_io_t';
let defaultClient = AtmanIoT.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AtmanIoT.AssetControllerApi();
let id = 3.4; // Number | 
let opts = {
  'assetExcludingIdAssetGroupId': new AtmanIoT.AssetExcludingIdAssetGroupId() // AssetExcludingIdAssetGroupId | 
};
apiInstance.assetControllerUpdateById(id, opts, (error, data, response) => {
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
 **assetExcludingIdAssetGroupId** | [**AssetExcludingIdAssetGroupId**](AssetExcludingIdAssetGroupId.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

