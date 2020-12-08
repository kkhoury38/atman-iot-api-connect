# \DeviceControllerApi

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DeviceControllerCreate**](DeviceControllerApi.md#DeviceControllerCreate) | **Post** /device/{dataLoggerId} | 
[**DeviceControllerCreateChannel**](DeviceControllerApi.md#DeviceControllerCreateChannel) | **Post** /device/{deviceId}/channel | 
[**DeviceControllerDisableChannelMonitoring**](DeviceControllerApi.md#DeviceControllerDisableChannelMonitoring) | **Get** /device/{deviceId}/channel/{channelId}/disable-monitoring/all/{all} | 
[**DeviceControllerEnableChannelMonitoring**](DeviceControllerApi.md#DeviceControllerEnableChannelMonitoring) | **Get** /device/{deviceId}/channel/{channelId}/enable-monitoring/all/{all} | 
[**DeviceControllerFind**](DeviceControllerApi.md#DeviceControllerFind) | **Get** /devices/{dataLoggerId} | 
[**DeviceControllerFindChannelTypes**](DeviceControllerApi.md#DeviceControllerFindChannelTypes) | **Get** /device/{deviceId}/channelTypes | 
[**DeviceControllerFindChannels**](DeviceControllerApi.md#DeviceControllerFindChannels) | **Get** /device/{deviceId}/channels | 
[**DeviceControllerGetDevicesWithType**](DeviceControllerApi.md#DeviceControllerGetDevicesWithType) | **Post** /devices/with-device-type | 
[**DeviceControllerUpdateById**](DeviceControllerApi.md#DeviceControllerUpdateById) | **Patch** /device/{id} | 



## DeviceControllerCreate

> Device DeviceControllerCreate(ctx, dataLoggerId, optional)



Used for creating a new <b>Device</b>, belonging to a <b>DataLogger</b> with id <i>dataLoggerId</i> by an authorized <b>User</b> identified by the provided <i>token</i>.<br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-dataloggercontroller\" target=\"_blank\">DataLoggerController</a>, <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocsdevice\" target=\"_blank\">DeviceModel</a></i>

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**dataLoggerId** | **float32**|  | 
 **optional** | ***DeviceControllerCreateOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a DeviceControllerCreateOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **deviceExcludingIdDataLoggerId** | [**optional.Interface of DeviceExcludingIdDataLoggerId**](DeviceExcludingIdDataLoggerId.md)|  | 

### Return type

[**Device**](Device.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeviceControllerCreateChannel

> Channel DeviceControllerCreateChannel(ctx, deviceId, optional)



Used for creating a new <b>Channel</b>, belonging to a <b>Device</b> with id <i>deviceId</i> by an authorized <b>User</b> identified by the provided <i>token</i>.<br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocschannel\" target=\"_blank\">ChannelModel</a>, <a href=\"/documentation.html#tocsdevice\" target=\"_blank\">DeviceModel</a></i>

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**deviceId** | **float32**|  | 
 **optional** | ***DeviceControllerCreateChannelOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a DeviceControllerCreateChannelOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **channelExcludingIdDeviceId** | [**optional.Interface of ChannelExcludingIdDeviceId**](ChannelExcludingIdDeviceId.md)|  | 

### Return type

[**Channel**](Channel.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeviceControllerDisableChannelMonitoring

> DeviceControllerDisableChannelMonitoring(ctx, deviceId, channelId, all)



Disable monitoring of <b>Channel</b> identified by <i>channelId</i>, in <b>Device</b> identified by <i>deviceId</i>, owned by <b>User</b> authorized by <i>token</i>.<br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocschannel\" target=\"_blank\">ChannelModel</a>, <a href=\"/documentation.html#tocsdevice\" target=\"_blank\">DeviceModel</a></i>

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**deviceId** | **float32**|  | 
**channelId** | **float32**|  | 
**all** | **bool**|  | 

### Return type

 (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeviceControllerEnableChannelMonitoring

> DeviceControllerEnableChannelMonitoring(ctx, deviceId, channelId, all)



Enable monitoring of <b>Channel</b> identified by <i>channelId</i>, in <b>Device</b> identified by <i>deviceId</i>, owned by <b>User</b> authorized by <i>token</i>.<br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocschannel\" target=\"_blank\">ChannelModel</a>, <a href=\"/documentation.html#tocsdevice\" target=\"_blank\">DeviceModel</a></i>

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**deviceId** | **float32**|  | 
**channelId** | **float32**|  | 
**all** | **bool**|  | 

### Return type

 (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeviceControllerFind

> []Device DeviceControllerFind(ctx, dataLoggerId)



Used for getting the <b>Devices</b>, belonging to a <b>DataLogger</b> with id <i>dataLoggerId</i> by an authorized <b>User</b> identified by the provided <i>token</i>.<br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-dataloggercontroller\" target=\"_blank\">DataLoggerController</a>, <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocsdevice\" target=\"_blank\">DeviceModel</a></i>

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**dataLoggerId** | **float32**|  | 

### Return type

[**[]Device**](Device.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeviceControllerFindChannelTypes

> []ChannelType DeviceControllerFindChannelTypes(ctx, deviceId)



Used for getting the  <b>Channel</b><b>Types</b> of <b>Channels</b> belonging to a <b>Device</b> with id <i>deviceId</i>, by an authorized <b>User</b> identified by the provided <i>token</i>.<br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocschannel\" target=\"_blank\">ChannelModel</a>, <a href=\"/documentation.html#tocschanneltype\" target=\"_blank\">ChannelTypeModel</a>, <a href=\"/documentation.html#tocsdevice\" target=\"_blank\">DeviceModel</a></i>

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**deviceId** | **float32**|  | 

### Return type

[**[]ChannelType**](ChannelType.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeviceControllerFindChannels

> []Channel DeviceControllerFindChannels(ctx, deviceId)



Used for getting <b>Channel</b><b>s</b>, belonging to a <b>Device</b> with id <i>deviceId</i>, by an authorized <b>User</b> identified by the provided <i>token</i>.<br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocschannel\" target=\"_blank\">ChannelModel</a>, <a href=\"/documentation.html#tocsdevice\" target=\"_blank\">DeviceModel</a></i>

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**deviceId** | **float32**|  | 

### Return type

[**[]Channel**](Channel.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeviceControllerGetDevicesWithType

> []DeviceWithType DeviceControllerGetDevicesWithType(ctx, optional)



Returns array of devices with their device types

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***DeviceControllerGetDevicesWithTypeOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a DeviceControllerGetDevicesWithTypeOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceExcludingDescriptionSerialNoDataLoggerIdDeviceTypeId** | [**optional.Interface of []DeviceExcludingDescriptionSerialNoDataLoggerIdDeviceTypeId**](DeviceExcluding_description-serialNo-dataLoggerId-deviceTypeId_.md)|  | 

### Return type

[**[]DeviceWithType**](DeviceWithType.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeviceControllerUpdateById

> DeviceControllerUpdateById(ctx, id, optional)



### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **float32**|  | 
 **optional** | ***DeviceControllerUpdateByIdOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a DeviceControllerUpdateByIdOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **deviceExcludingIdSerialNoDataLoggerIdDeviceTypeId** | [**optional.Interface of DeviceExcludingIdSerialNoDataLoggerIdDeviceTypeId**](DeviceExcludingIdSerialNoDataLoggerIdDeviceTypeId.md)|  | 

### Return type

 (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

