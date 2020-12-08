# OpenapiClient::RequestEventCreateRule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **String** | Rule description | 
**scope** | [**Array&lt;RequestEventRuleScope&gt;**](RequestEventRuleScope.md) |  | 
**action** | **String** | Rule action | 
**action_parameters** | [**Object**](.md) | Action Parameters | 

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::RequestEventCreateRule.new(description: null,
                                 scope: null,
                                 action: null,
                                 action_parameters: null)
```


