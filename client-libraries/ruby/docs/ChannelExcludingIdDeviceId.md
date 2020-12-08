# OpenapiClient::ChannelExcludingIdDeviceId

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**monitor** | **Boolean** | Enable channel monitoring - data recording - by setting to true | 
**last_timestamp** | **DateTime** | Timestamp | [optional] 
**status** | **String** | Channel Status | [optional] 
**channel_type_id** | **Float** | ID of ChannelType associated with Channel | 

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::ChannelExcludingIdDeviceId.new(monitor: null,
                                 last_timestamp: null,
                                 status: null,
                                 channel_type_id: null)
```


