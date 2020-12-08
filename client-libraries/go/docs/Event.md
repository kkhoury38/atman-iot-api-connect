# Event

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **float32** | Automatically generated ID | [optional] 
**AssetId** | **float32** | ID of Asset associated with Event | 
**EventRuleId** | **float32** | ID of EventRule triggered | 
**Severity** | **string** | Event severity - Can be  LOW / MEDIUM / HIGH | 
**Description** | **string** | Event description | [optional] 
**Resolved** | **bool** | Set to true if Event has been resolved | 
**Timestamp** | [**time.Time**](time.Time.md) | Event creation timestamp | 
**ResolutionTimestamp** | [**time.Time**](time.Time.md) | Event resolution timestamp | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


