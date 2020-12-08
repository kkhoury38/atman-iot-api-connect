# DeviceEventWithRelations

(Schema options: { includeRelations: true })
## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **float** | Automatically generated ID | [optional] 
**device_id** | **float** | ID of Device associated with Event | 
**channel_id** | **float** | ID of Device associated with Event | 
**event_rule_id** | **float** | ID of EventRule triggered | 
**severity** | **str** | Event severity - Can be  LOW / MEDIUM / HIGH | 
**description** | **str** | Event description | [optional] 
**resolved** | **bool** | Set to true if Event has been resolved | 
**viewed_by** | **str** | Set to true if Event has been resolved | 
**timestamp** | **datetime** | Event creation timestamp | 
**resolution_timestamp** | **datetime** | Event resolution timestamp | [optional] 
**device** | [**DeviceWithRelations**](DeviceWithRelations.md) |  | [optional] 
**channel** | [**ChannelWithRelations**](ChannelWithRelations.md) |  | [optional] 
**event_rule** | [**EventRuleWithRelations**](EventRuleWithRelations.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


