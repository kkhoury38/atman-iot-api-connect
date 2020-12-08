# OpenapiClient::ResponseDataLoggerSetupStep2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_types** | [**Array&lt;DeviceTypeExtended&gt;**](DeviceTypeExtended.md) |  | 
**devices** | [**Array&lt;Device&gt;**](Device.md) |  | 
**sample** | [**MeasurementSample**](MeasurementSample.md) |  | [optional] 
**error_count** | **Float** | Sample Value | 
**errors** | **Array&lt;String&gt;** |  | [optional] 

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::ResponseDataLoggerSetupStep2.new(device_types: null,
                                 devices: null,
                                 sample: null,
                                 error_count: null,
                                 errors: null)
```


