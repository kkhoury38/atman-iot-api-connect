# OpenapiClient::EventRuleSubscriptionExcludingIdLastExecTimestamp

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**execution_period** | **Float** | EventRule execution period - seconds | 
**asset_id** | **Float** | ID of Asset subscribed to EventRule | 
**event_rule_id** | **Float** | ID of associated EventRule | 
**rule_activated** | **Boolean** | Is set to true when EventRule has been activated | 

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::EventRuleSubscriptionExcludingIdLastExecTimestamp.new(execution_period: null,
                                 asset_id: null,
                                 event_rule_id: null,
                                 rule_activated: null)
```


