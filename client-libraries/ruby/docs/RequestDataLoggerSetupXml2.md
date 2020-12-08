# OpenapiClient::RequestDataLoggerSetupXml2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_list_key** | **String** | XML key of list containing the the measurements | 
**model** | [**RequestDataLoggerSetupXml2SearchStringStructure**](RequestDataLoggerSetupXml2SearchStringStructure.md) |  | 
**serial_no** | [**RequestDataLoggerSetupXml2SearchStringStructure**](RequestDataLoggerSetupXml2SearchStringStructure.md) |  | 
**channel_name** | [**RequestDataLoggerSetupXml2SearchStringStructure**](RequestDataLoggerSetupXml2SearchStringStructure.md) |  | 
**channel_unit** | [**RequestDataLoggerSetupXml2SearchStringStructure**](RequestDataLoggerSetupXml2SearchStringStructure.md) |  | 
**value** | [**RequestDataLoggerSetupXml2SearchStringStructure**](RequestDataLoggerSetupXml2SearchStringStructure.md) |  | 
**period** | [**RequestDataLoggerSetupXml2SearchStringStructure**](RequestDataLoggerSetupXml2SearchStringStructure.md) |  | 
**timestamp** | [**RequestDataLoggerSetupXml2SearchStringStructure**](RequestDataLoggerSetupXml2SearchStringStructure.md) |  | 
**confirm** | **Boolean** | Provided Configuration Confirmation. Set to true to save current configuration | 
**file_format** | **String** | Data File Format | 

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::RequestDataLoggerSetupXml2.new(object_list_key: null,
                                 model: null,
                                 serial_no: null,
                                 channel_name: null,
                                 channel_unit: null,
                                 value: null,
                                 period: null,
                                 timestamp: null,
                                 confirm: null,
                                 file_format: null)
```


