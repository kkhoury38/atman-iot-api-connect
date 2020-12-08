# # DeviceEventWithRelations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **float** | Automatically generated ID | [optional] 
**device_id** | **float** | ID of Device associated with Event | 
**channel_id** | **float** | ID of Device associated with Event | 
**event_rule_id** | **float** | ID of EventRule triggered | 
**severity** | **string** | Event severity - Can be  LOW / MEDIUM / HIGH | 
**description** | **string** | Event description | [optional] 
**resolved** | **bool** | Set to true if Event has been resolved | 
**viewed_by** | **string** | Set to true if Event has been resolved | 
**timestamp** | [**\DateTime**](\DateTime.md) | Event creation timestamp | 
**resolution_timestamp** | [**\DateTime**](\DateTime.md) | Event resolution timestamp | [optional] 
**device** | [**\OpenAPI\Client\Model\DeviceWithRelations**](DeviceWithRelations.md) |  | [optional] 
**channel** | [**\OpenAPI\Client\Model\ChannelWithRelations**](ChannelWithRelations.md) |  | [optional] 
**event_rule** | [**\OpenAPI\Client\Model\EventRuleWithRelations**](EventRuleWithRelations.md) |  | [optional] 

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)


