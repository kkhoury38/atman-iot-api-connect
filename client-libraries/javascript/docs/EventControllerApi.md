# AtmanIoT.EventControllerApi

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**eventControllerCreateNow**](EventControllerApi.md#eventControllerCreateNow) | **POST** /event | 
[**eventControllerCreateRelatedDev**](EventControllerApi.md#eventControllerCreateRelatedDev) | **POST** /event/related-device | 
[**eventControllerCreateRule**](EventControllerApi.md#eventControllerCreateRule) | **POST** /event/rule | 
[**eventControllerCreateRuleSubscription**](EventControllerApi.md#eventControllerCreateRuleSubscription) | **POST** /event/rule/subscription | 
[**eventControllerFind**](EventControllerApi.md#eventControllerFind) | **GET** /events/all/{assetId} | 
[**eventControllerFindUnresolved**](EventControllerApi.md#eventControllerFindUnresolved) | **GET** /events/unresolved/{assetId} | 
[**eventControllerProcessSubscriptions**](EventControllerApi.md#eventControllerProcessSubscriptions) | **GET** /event/process | 
[**eventControllerUpdateById**](EventControllerApi.md#eventControllerUpdateById) | **PATCH** /event/resolve/{id} | 



## eventControllerCreateNow

> Event eventControllerCreateNow(opts)



### Example

```javascript
import AtmanIoT from 'atman_io_t';
let defaultClient = AtmanIoT.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AtmanIoT.EventControllerApi();
let opts = {
  'eventExcludingIdResolvedTimestampResolutionTimestamp': new AtmanIoT.EventExcludingIdResolvedTimestampResolutionTimestamp() // EventExcludingIdResolvedTimestampResolutionTimestamp | 
};
apiInstance.eventControllerCreateNow(opts, (error, data, response) => {
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
 **eventExcludingIdResolvedTimestampResolutionTimestamp** | [**EventExcludingIdResolvedTimestampResolutionTimestamp**](EventExcludingIdResolvedTimestampResolutionTimestamp.md)|  | [optional] 

### Return type

[**Event**](Event.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## eventControllerCreateRelatedDev

> EventRelatedDevice eventControllerCreateRelatedDev(opts)



### Example

```javascript
import AtmanIoT from 'atman_io_t';
let defaultClient = AtmanIoT.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AtmanIoT.EventControllerApi();
let opts = {
  'eventRelatedDeviceExcludingId': new AtmanIoT.EventRelatedDeviceExcludingId() // EventRelatedDeviceExcludingId | 
};
apiInstance.eventControllerCreateRelatedDev(opts, (error, data, response) => {
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
 **eventRelatedDeviceExcludingId** | [**EventRelatedDeviceExcludingId**](EventRelatedDeviceExcludingId.md)|  | [optional] 

### Return type

[**EventRelatedDevice**](EventRelatedDevice.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## eventControllerCreateRule

> EventRule eventControllerCreateRule(opts)



### Example

```javascript
import AtmanIoT from 'atman_io_t';
let defaultClient = AtmanIoT.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AtmanIoT.EventControllerApi();
let opts = {
  'requestEventCreateRule': new AtmanIoT.RequestEventCreateRule() // RequestEventCreateRule | 
};
apiInstance.eventControllerCreateRule(opts, (error, data, response) => {
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
 **requestEventCreateRule** | [**RequestEventCreateRule**](RequestEventCreateRule.md)|  | [optional] 

### Return type

[**EventRule**](EventRule.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## eventControllerCreateRuleSubscription

> EventRuleSubscription eventControllerCreateRuleSubscription(opts)



### Example

```javascript
import AtmanIoT from 'atman_io_t';
let defaultClient = AtmanIoT.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AtmanIoT.EventControllerApi();
let opts = {
  'eventRuleSubscriptionExcludingIdLastExecTimestamp': new AtmanIoT.EventRuleSubscriptionExcludingIdLastExecTimestamp() // EventRuleSubscriptionExcludingIdLastExecTimestamp | 
};
apiInstance.eventControllerCreateRuleSubscription(opts, (error, data, response) => {
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
 **eventRuleSubscriptionExcludingIdLastExecTimestamp** | [**EventRuleSubscriptionExcludingIdLastExecTimestamp**](EventRuleSubscriptionExcludingIdLastExecTimestamp.md)|  | [optional] 

### Return type

[**EventRuleSubscription**](EventRuleSubscription.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## eventControllerFind

> [ResponseEventAssetEvents] eventControllerFind(assetId)



### Example

```javascript
import AtmanIoT from 'atman_io_t';
let defaultClient = AtmanIoT.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AtmanIoT.EventControllerApi();
let assetId = 3.4; // Number | 
apiInstance.eventControllerFind(assetId, (error, data, response) => {
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

[**[ResponseEventAssetEvents]**](ResponseEventAssetEvents.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## eventControllerFindUnresolved

> [ResponseEventAssetEvents] eventControllerFindUnresolved(assetId)



### Example

```javascript
import AtmanIoT from 'atman_io_t';
let defaultClient = AtmanIoT.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AtmanIoT.EventControllerApi();
let assetId = 3.4; // Number | 
apiInstance.eventControllerFindUnresolved(assetId, (error, data, response) => {
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

[**[ResponseEventAssetEvents]**](ResponseEventAssetEvents.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## eventControllerProcessSubscriptions

> eventControllerProcessSubscriptions()



### Example

```javascript
import AtmanIoT from 'atman_io_t';
let defaultClient = AtmanIoT.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AtmanIoT.EventControllerApi();
apiInstance.eventControllerProcessSubscriptions((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## eventControllerUpdateById

> eventControllerUpdateById(id)



### Example

```javascript
import AtmanIoT from 'atman_io_t';
let defaultClient = AtmanIoT.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AtmanIoT.EventControllerApi();
let id = 3.4; // Number | 
apiInstance.eventControllerUpdateById(id, (error, data, response) => {
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

