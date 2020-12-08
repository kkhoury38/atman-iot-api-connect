# AtmanIoT.DeviceEventWithRelations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Automatically generated ID | [optional] 
**deviceId** | **Number** | ID of Device associated with Event | 
**channelId** | **Number** | ID of Device associated with Event | 
**eventRuleId** | **Number** | ID of EventRule triggered | 
**severity** | **String** | Event severity - Can be  LOW / MEDIUM / HIGH | 
**description** | **String** | Event description | [optional] 
**resolved** | **Boolean** | Set to true if Event has been resolved | 
**viewedBy** | **String** | Set to true if Event has been resolved | 
**timestamp** | **Date** | Event creation timestamp | 
**resolutionTimestamp** | **Date** | Event resolution timestamp | [optional] 
**device** | [**DeviceWithRelations**](DeviceWithRelations.md) |  | [optional] 
**channel** | [**ChannelWithRelations**](ChannelWithRelations.md) |  | [optional] 
**eventRule** | [**EventRuleWithRelations**](EventRuleWithRelations.md) |  | [optional] 


