# EventRuleWithRelations

(Schema options: { includeRelations: true })
## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **float** | Automatically generated ID | [optional] 
**description** | **str** | Rule description | [optional] 
**scope** | **str** | Rule scope | 
**algorithm** | **str** | Event Detection Algorithm | [optional] 
**action** | **str** | Rule action | 
**action_parameters** | **str** | Rule action parameters | [optional] 
**rule** | **str** | JSON Rule | [optional] 
**execution_period** | **float** | EventRule execution period - seconds | [optional] 
**last_exec_timestamp** | **datetime** | Last execution timestamp | [optional] 
**activated** | **bool** | Is set to true when EventRule has been activated | [optional] 
**in_progress** | **bool** | Is automaticaly set to true when EventRule is being processed | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


