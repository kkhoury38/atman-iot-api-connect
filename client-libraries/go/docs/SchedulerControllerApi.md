# \SchedulerControllerApi

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**SchedulerControllerProcessEvents**](SchedulerControllerApi.md#SchedulerControllerProcessEvents) | **Get** /scheduler/process/events/{attempt}/{serverKey} | 
[**SchedulerControllerProcessFtpRejected**](SchedulerControllerApi.md#SchedulerControllerProcessFtpRejected) | **Get** /scheduler/process/ftp-rejected/{serverKey} | 



## SchedulerControllerProcessEvents

> SchedulerControllerProcessEvents(ctx, attempt, serverKey)



### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**attempt** | **float32**|  | 
**serverKey** | **string**|  | 

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SchedulerControllerProcessFtpRejected

> SchedulerControllerProcessFtpRejected(ctx, serverKey)



### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**serverKey** | **string**|  | 

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

