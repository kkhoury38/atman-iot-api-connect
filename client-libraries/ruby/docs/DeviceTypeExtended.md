# OpenapiClient::DeviceTypeExtended

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Float** | Automatically generated ID | [optional] 
**model** | **String** | DeviceType model | 
**description** | **String** | DeviceType description | [optional] 
**manufacturer** | **String** | DeviceType manufacturer | 
**category** | **String** | DeviceType category | [optional] 
**error** | **Boolean** | Error status of device type | 
**channel_types** | [**Array&lt;ChannelTypeExtended&gt;**](ChannelTypeExtended.md) |  | 

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::DeviceTypeExtended.new(id: null,
                                 model: null,
                                 description: null,
                                 manufacturer: null,
                                 category: null,
                                 error: null,
                                 channel_types: null)
```


