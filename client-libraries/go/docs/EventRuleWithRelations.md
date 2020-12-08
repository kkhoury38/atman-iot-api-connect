# EventRuleWithRelations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **float32** | Automatically generated ID | [optional] 
**Description** | **string** | Rule description | [optional] 
**Scope** | **string** | Rule scope | 
**Algorithm** | **string** | Event Detection Algorithm | [optional] 
**Action** | **string** | Rule action | 
**ActionParameters** | **string** | Rule action parameters | [optional] 
**Rule** | **string** | JSON Rule | [optional] 
**ExecutionPeriod** | **float32** | EventRule execution period - seconds | [optional] 
**LastExecTimestamp** | [**time.Time**](time.Time.md) | Last execution timestamp | [optional] 
**Activated** | **bool** | Is set to true when EventRule has been activated | [optional] 
**InProgress** | **bool** | Is automaticaly set to true when EventRule is being processed | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


