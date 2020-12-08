# OpenapiClient::EventExcludingIdResolvedTimestampResolutionTimestamp

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset_id** | **Float** | ID of Asset associated with Event | 
**event_rule_id** | **Float** | ID of EventRule triggered | 
**severity** | **String** | Event severity - Can be  LOW / MEDIUM / HIGH | 
**description** | **String** | Event description | [optional] 

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::EventExcludingIdResolvedTimestampResolutionTimestamp.new(asset_id: null,
                                 event_rule_id: null,
                                 severity: null,
                                 description: null)
```


