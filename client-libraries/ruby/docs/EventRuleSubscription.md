# OpenapiClient::EventRuleSubscription

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Float** | Automatically generated ID | [optional] 
**execution_period** | **Float** | EventRule execution period - seconds | 
**last_exec_timestamp** | **String** | Last execution timestamp | [optional] 
**asset_id** | **Float** | ID of Asset subscribed to EventRule | 
**event_rule_id** | **Float** | ID of associated EventRule | 
**rule_activated** | **Boolean** | Is set to true when EventRule has been activated | 

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::EventRuleSubscription.new(id: null,
                                 execution_period: null,
                                 last_exec_timestamp: null,
                                 asset_id: null,
                                 event_rule_id: null,
                                 rule_activated: null)
```


