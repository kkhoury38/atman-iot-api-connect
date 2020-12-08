# AtmanIoT.UserControllerApi

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**userControllerCreate**](UserControllerApi.md#userControllerCreate) | **POST** /user/register/{referenceCode} | 
[**userControllerCreateVirtual**](UserControllerApi.md#userControllerCreateVirtual) | **POST** /user/register/virtual | 
[**userControllerDeleteVirtualUserById**](UserControllerApi.md#userControllerDeleteVirtualUserById) | **DELETE** /users/virtualUser/{id} | 
[**userControllerGetVirtualUsers**](UserControllerApi.md#userControllerGetVirtualUsers) | **GET** /user/getVirtualUsers | 
[**userControllerLogin**](UserControllerApi.md#userControllerLogin) | **POST** /user/login | 



## userControllerCreate

> User userControllerCreate(referenceCode, opts)



Used for registering a new &lt;b&gt;User&lt;/b&gt;.&lt;br&gt;&lt;br&gt;&lt;i&gt;&lt;b&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#tocsuser\&quot; target&#x3D;\&quot;_blank\&quot;&gt;UserModel&lt;/a&gt;&lt;/i&gt;

### Example

```javascript
import AtmanIoT from 'atman_io_t';

let apiInstance = new AtmanIoT.UserControllerApi();
let referenceCode = "referenceCode_example"; // String | 
let opts = {
  'userExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode': new AtmanIoT.UserExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode() // UserExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode | 
};
apiInstance.userControllerCreate(referenceCode, opts, (error, data, response) => {
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
 **referenceCode** | **String**|  | 
 **userExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode** | [**UserExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode**](UserExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode.md)|  | [optional] 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## userControllerCreateVirtual

> User userControllerCreateVirtual(opts)



Used for registering a new &lt;b&gt;Virtual User&lt;/b&gt; by a &lt;b&gt;User&lt;/b&gt;, identified by the provided &lt;i&gt;token.&lt;/i&gt;&lt;br&gt;&lt;br&gt;&lt;i&gt;&lt;b&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#tocsuser\&quot; target&#x3D;\&quot;_blank\&quot;&gt;UserModel&lt;/a&gt;&lt;/i&gt;

### Example

```javascript
import AtmanIoT from 'atman_io_t';
let defaultClient = AtmanIoT.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AtmanIoT.UserControllerApi();
let opts = {
  'userExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode': new AtmanIoT.UserExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode() // UserExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode | 
};
apiInstance.userControllerCreateVirtual(opts, (error, data, response) => {
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
 **userExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode** | [**UserExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode**](UserExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode.md)|  | [optional] 

### Return type

[**User**](User.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## userControllerDeleteVirtualUserById

> userControllerDeleteVirtualUserById(id)



Deletes Virtual User by Id

### Example

```javascript
import AtmanIoT from 'atman_io_t';
let defaultClient = AtmanIoT.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AtmanIoT.UserControllerApi();
let id = 3.4; // Number | 
apiInstance.userControllerDeleteVirtualUserById(id, (error, data, response) => {
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


## userControllerGetVirtualUsers

> [UserExcludingPasswdEmailRolesIsVirtualSubscriptionReferenceCode] userControllerGetVirtualUsers()



Returns users under administrator account

### Example

```javascript
import AtmanIoT from 'atman_io_t';
let defaultClient = AtmanIoT.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AtmanIoT.UserControllerApi();
apiInstance.userControllerGetVirtualUsers((error, data, response) => {
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

[**[UserExcludingPasswdEmailRolesIsVirtualSubscriptionReferenceCode]**](UserExcludingPasswdEmailRolesIsVirtualSubscriptionReferenceCode.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## userControllerLogin

> Token userControllerLogin(opts)



Used for &lt;b&gt;User&lt;/b&gt; and &lt;b&gt;Virtual User&lt;/b&gt; login. Exchanges &lt;i&gt;username/password&lt;/i&gt; with an authorization &lt;i&gt;token&lt;/i&gt;. Please enter the email provided durring registration in the username field.&lt;br&gt;&lt;br&gt;&lt;i&gt;&lt;b&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#tocsuser\&quot; target&#x3D;\&quot;_blank\&quot;&gt;UserModel&lt;/a&gt;&lt;/i&gt;

### Example

```javascript
import AtmanIoT from 'atman_io_t';

let apiInstance = new AtmanIoT.UserControllerApi();
let opts = {
  'userExcludingIdEmailIsVirtualRolesSubscriptionReferenceCode': new AtmanIoT.UserExcludingIdEmailIsVirtualRolesSubscriptionReferenceCode() // UserExcludingIdEmailIsVirtualRolesSubscriptionReferenceCode | 
};
apiInstance.userControllerLogin(opts, (error, data, response) => {
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
 **userExcludingIdEmailIsVirtualRolesSubscriptionReferenceCode** | [**UserExcludingIdEmailIsVirtualRolesSubscriptionReferenceCode**](UserExcludingIdEmailIsVirtualRolesSubscriptionReferenceCode.md)|  | [optional] 

### Return type

[**Token**](Token.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

