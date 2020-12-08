# OpenapiClient::DeviceTypeWithRelations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Float** | Automatically generated ID | [optional] 
**model** | **String** | DeviceType model | 
**description** | **String** | DeviceType description | [optional] 
**manufacturer** | **String** | DeviceType manufacturer | 
**category** | **String** | DeviceType category | [optional] 
**channel_types** | [**Array&lt;ChannelTypeWithRelations&gt;**](ChannelTypeWithRelations.md) |  | [optional] 

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::DeviceTypeWithRelations.new(id: null,
                                 model: null,
                                 description: null,
                                 manufacturer: null,
                                 category: null,
                                 channel_types: null)
```


