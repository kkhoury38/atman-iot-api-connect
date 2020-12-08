# OpenapiClient::DeviceEventWithRelations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Float** | Automatically generated ID | [optional] 
**device_id** | **Float** | ID of Device associated with Event | 
**channel_id** | **Float** | ID of Device associated with Event | 
**event_rule_id** | **Float** | ID of EventRule triggered | 
**severity** | **String** | Event severity - Can be  LOW / MEDIUM / HIGH | 
**description** | **String** | Event description | [optional] 
**resolved** | **Boolean** | Set to true if Event has been resolved | 
**viewed_by** | **String** | Set to true if Event has been resolved | 
**timestamp** | **DateTime** | Event creation timestamp | 
**resolution_timestamp** | **DateTime** | Event resolution timestamp | [optional] 
**device** | [**DeviceWithRelations**](DeviceWithRelations.md) |  | [optional] 
**channel** | [**ChannelWithRelations**](ChannelWithRelations.md) |  | [optional] 
**event_rule** | [**EventRuleWithRelations**](EventRuleWithRelations.md) |  | [optional] 

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::DeviceEventWithRelations.new(id: null,
                                 device_id: null,
                                 channel_id: null,
                                 event_rule_id: null,
                                 severity: null,
                                 description: null,
                                 resolved: null,
                                 viewed_by: null,
                                 timestamp: null,
                                 resolution_timestamp: null,
                                 device: null,
                                 channel: null,
                                 event_rule: null)
```


