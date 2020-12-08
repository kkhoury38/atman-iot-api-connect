# OpenapiClient::Device

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Float** | Automatically generated ID | [optional] 
**description** | **String** | Device description | [optional] 
**serial_no** | **String** | Device serial number | 
**data_logger_id** | **Float** | ID of DataLogger that Device belongs to | 
**device_type_id** | **Float** |  | [optional] 

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::Device.new(id: null,
                                 description: null,
                                 serial_no: null,
                                 data_logger_id: null,
                                 device_type_id: null)
```


