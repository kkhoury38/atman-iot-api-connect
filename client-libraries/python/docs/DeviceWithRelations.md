# DeviceWithRelations

(Schema options: { includeRelations: true })
## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **float** | Automatically generated ID | [optional] 
**description** | **str** | Device description | [optional] 
**serial_no** | **str** | Device serial number | 
**data_logger_id** | **float** | ID of DataLogger that Device belongs to | 
**device_type_id** | **float** |  | [optional] 
**data_logger** | [**DataLoggerWithRelations**](DataLoggerWithRelations.md) |  | [optional] 
**device_type** | [**DeviceTypeWithRelations**](DeviceTypeWithRelations.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


