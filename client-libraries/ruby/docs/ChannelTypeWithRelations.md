# OpenapiClient::ChannelTypeWithRelations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Float** | Automatically generated ID | [optional] 
**name** | **String** | ChannelType name | 
**category** | **String** | ChannelType category | [optional] 
**description** | **String** | ChannelType description | [optional] 
**unit** | **String** | Unit of measurement | [optional] 
**channel_type** | **String** | Type of data: UNDEFINED / SPOT_VALUE / COUNTER / TEXT | 
**device_type_id** | **Float** | ID of DeviceType that ChannelType belongs to | 
**device_type** | [**DeviceTypeWithRelations**](DeviceTypeWithRelations.md) |  | [optional] 

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::ChannelTypeWithRelations.new(id: null,
                                 name: null,
                                 category: null,
                                 description: null,
                                 unit: null,
                                 channel_type: null,
                                 device_type_id: null,
                                 device_type: null)
```


