# OpenapiClient::Channel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Float** | Automatically generated ID | [optional] 
**monitor** | **Boolean** | Enable channel monitoring - data recording - by setting to true | 
**last_timestamp** | **DateTime** | Timestamp | [optional] 
**status** | **String** | Channel Status | [optional] 
**device_id** | **Float** | ID of Device that Channel belongs to | 
**channel_type_id** | **Float** | ID of ChannelType associated with Channel | 

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::Channel.new(id: null,
                                 monitor: null,
                                 last_timestamp: null,
                                 status: null,
                                 device_id: null,
                                 channel_type_id: null)
```


