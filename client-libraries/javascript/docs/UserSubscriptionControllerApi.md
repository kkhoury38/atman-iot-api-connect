# AtmanIoT.UserSubscriptionControllerApi

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**userSubscriptionControllerCreate**](UserSubscriptionControllerApi.md#userSubscriptionControllerCreate) | **POST** /user-subscriptions/paypal/callback | 
[**userSubscriptionControllerCreateUserSubscriptionBySubId**](UserSubscriptionControllerApi.md#userSubscriptionControllerCreateUserSubscriptionBySubId) | **GET** /user-subscription/get-new/{subscriptionId} | 
[**userSubscriptionControllerFindSubscriptionsByCategory**](UserSubscriptionControllerApi.md#userSubscriptionControllerFindSubscriptionsByCategory) | **GET** /user-subscription/subscriptions/{product} | 
[**userSubscriptionControllerGetByRefferenceCode**](UserSubscriptionControllerApi.md#userSubscriptionControllerGetByRefferenceCode) | **GET** /user-subscription/get-by-reference-code/{referenceCode} | 
[**userSubscriptionControllerVerifyCode**](UserSubscriptionControllerApi.md#userSubscriptionControllerVerifyCode) | **POST** /user-subscriptions/verify-reference-code | 



## userSubscriptionControllerCreate

> userSubscriptionControllerCreate(opts)



### Example

```javascript
import AtmanIoT from 'atman_io_t';

let apiInstance = new AtmanIoT.UserSubscriptionControllerApi();
let opts = {
  'body': null // Object | 
};
apiInstance.userSubscriptionControllerCreate(opts, (error, data, response) => {
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
 **body** | **Object**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## userSubscriptionControllerCreateUserSubscriptionBySubId

> UserSubscription userSubscriptionControllerCreateUserSubscriptionBySubId(subscriptionId)



### Example

```javascript
import AtmanIoT from 'atman_io_t';

let apiInstance = new AtmanIoT.UserSubscriptionControllerApi();
let subscriptionId = 3.4; // Number | 
apiInstance.userSubscriptionControllerCreateUserSubscriptionBySubId(subscriptionId, (error, data, response) => {
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
 **subscriptionId** | **Number**|  | 

### Return type

[**UserSubscription**](UserSubscription.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## userSubscriptionControllerFindSubscriptionsByCategory

> [Subscription] userSubscriptionControllerFindSubscriptionsByCategory(product)



### Example

```javascript
import AtmanIoT from 'atman_io_t';

let apiInstance = new AtmanIoT.UserSubscriptionControllerApi();
let product = "product_example"; // String | 
apiInstance.userSubscriptionControllerFindSubscriptionsByCategory(product, (error, data, response) => {
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
 **product** | **String**|  | 

### Return type

[**[Subscription]**](Subscription.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## userSubscriptionControllerGetByRefferenceCode

> UserSubscriptionWithRelations userSubscriptionControllerGetByRefferenceCode(referenceCode)



### Example

```javascript
import AtmanIoT from 'atman_io_t';

let apiInstance = new AtmanIoT.UserSubscriptionControllerApi();
let referenceCode = "referenceCode_example"; // String | 
apiInstance.userSubscriptionControllerGetByRefferenceCode(referenceCode, (error, data, response) => {
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

### Return type

[**UserSubscriptionWithRelations**](UserSubscriptionWithRelations.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## userSubscriptionControllerVerifyCode

> UserSubscription userSubscriptionControllerVerifyCode(opts)



### Example

```javascript
import AtmanIoT from 'atman_io_t';

let apiInstance = new AtmanIoT.UserSubscriptionControllerApi();
let opts = {
  'codeVerificationRequest': new AtmanIoT.CodeVerificationRequest() // CodeVerificationRequest | 
};
apiInstance.userSubscriptionControllerVerifyCode(opts, (error, data, response) => {
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
 **codeVerificationRequest** | [**CodeVerificationRequest**](CodeVerificationRequest.md)|  | [optional] 

### Return type

[**UserSubscription**](UserSubscription.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

