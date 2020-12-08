# OpenapiClient::EventRule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Float** | Automatically generated ID | [optional] 
**description** | **String** | Rule description | [optional] 
**scope** | **String** | Rule scope | 
**algorithm** | **String** | Event Detection Algorithm | [optional] 
**action** | **String** | Rule action | 
**action_parameters** | **String** | Rule action parameters | [optional] 
**rule** | **String** | JSON Rule | [optional] 
**execution_period** | **Float** | EventRule execution period - seconds | [optional] 
**last_exec_timestamp** | **DateTime** | Last execution timestamp | [optional] 
**activated** | **Boolean** | Is set to true when EventRule has been activated | [optional] 
**in_progress** | **Boolean** | Is automaticaly set to true when EventRule is being processed | [optional] 

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::EventRule.new(id: null,
                                 description: null,
                                 scope: null,
                                 algorithm: null,
                                 action: null,
                                 action_parameters: null,
                                 rule: null,
                                 execution_period: null,
                                 last_exec_timestamp: null,
                                 activated: null,
                                 in_progress: null)
```


