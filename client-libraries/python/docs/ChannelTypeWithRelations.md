# ChannelTypeWithRelations

(Schema options: { includeRelations: true })
## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **float** | Automatically generated ID | [optional] 
**name** | **str** | ChannelType name | 
**category** | **str** | ChannelType category | [optional] 
**description** | **str** | ChannelType description | [optional] 
**unit** | **str** | Unit of measurement | [optional] 
**channel_type** | **str** | Type of data: UNDEFINED / SPOT_VALUE / COUNTER / TEXT | 
**device_type_id** | **float** | ID of DeviceType that ChannelType belongs to | 
**device_type** | [**DeviceTypeWithRelations**](DeviceTypeWithRelations.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


