# ChannelWithRelations

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **float** | Automatically generated ID | [optional] 
**monitor** | **bool** | Enable channel monitoring - data recording - by setting to true | 
**lastTimestamp** | [**\DateTime**](\DateTime.md) | Timestamp | [optional] 
**status** | **string** | Channel Status | [optional] 
**deviceId** | **float** | ID of Device that Channel belongs to | 
**channelTypeId** | **float** | ID of ChannelType associated with Channel | 
**device** | [**OpenAPI\Server\Model\DeviceWithRelations**](DeviceWithRelations.md) |  | [optional] 
**channelType** | [**OpenAPI\Server\Model\ChannelTypeWithRelations**](ChannelTypeWithRelations.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


