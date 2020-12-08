# OpenapiClient::Event

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Float** | Automatically generated ID | [optional] 
**asset_id** | **Float** | ID of Asset associated with Event | 
**event_rule_id** | **Float** | ID of EventRule triggered | 
**severity** | **String** | Event severity - Can be  LOW / MEDIUM / HIGH | 
**description** | **String** | Event description | [optional] 
**resolved** | **Boolean** | Set to true if Event has been resolved | 
**timestamp** | **DateTime** | Event creation timestamp | 
**resolution_timestamp** | **DateTime** | Event resolution timestamp | [optional] 

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::Event.new(id: null,
                                 asset_id: null,
                                 event_rule_id: null,
                                 severity: null,
                                 description: null,
                                 resolved: null,
                                 timestamp: null,
                                 resolution_timestamp: null)
```


