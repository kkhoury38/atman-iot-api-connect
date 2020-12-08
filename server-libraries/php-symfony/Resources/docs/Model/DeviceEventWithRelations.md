# DeviceEventWithRelations

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **float** | Automatically generated ID | [optional] 
**deviceId** | **float** | ID of Device associated with Event | 
**channelId** | **float** | ID of Device associated with Event | 
**eventRuleId** | **float** | ID of EventRule triggered | 
**severity** | **string** | Event severity - Can be  LOW / MEDIUM / HIGH | 
**description** | **string** | Event description | [optional] 
**resolved** | **bool** | Set to true if Event has been resolved | 
**viewedBy** | **string** | Set to true if Event has been resolved | 
**timestamp** | [**\DateTime**](\DateTime.md) | Event creation timestamp | 
**resolutionTimestamp** | [**\DateTime**](\DateTime.md) | Event resolution timestamp | [optional] 
**device** | [**OpenAPI\Server\Model\DeviceWithRelations**](DeviceWithRelations.md) |  | [optional] 
**channel** | [**OpenAPI\Server\Model\ChannelWithRelations**](ChannelWithRelations.md) |  | [optional] 
**eventRule** | [**OpenAPI\Server\Model\EventRuleWithRelations**](EventRuleWithRelations.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


