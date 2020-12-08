# OpenapiClient::RequestDataLoggerSetupCsv2DataHeaderLocation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first_item_col** | **Float** | First column of header | 
**next_item_iteration** | **Float** | Relevant row location of next item | 
**model** | [**RequestDataLoggerSetupCsv2DataHeaderLocationKeysArray**](RequestDataLoggerSetupCsv2DataHeaderLocationKeysArray.md) |  | 
**serial_no** | [**RequestDataLoggerSetupCsv2DataHeaderLocationKeysArray**](RequestDataLoggerSetupCsv2DataHeaderLocationKeysArray.md) |  | 
**channel_name** | [**RequestDataLoggerSetupCsv2DataHeaderLocationKeysStrArray**](RequestDataLoggerSetupCsv2DataHeaderLocationKeysStrArray.md) |  | 
**channel_unit** | [**RequestDataLoggerSetupCsv2DataHeaderLocationKeysStrArray**](RequestDataLoggerSetupCsv2DataHeaderLocationKeysStrArray.md) |  | 
**period** | [**RequestDataLoggerSetupCsv2DataHeaderLocationKeysNumber**](RequestDataLoggerSetupCsv2DataHeaderLocationKeysNumber.md) |  | 

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::RequestDataLoggerSetupCsv2DataHeaderLocation.new(first_item_col: null,
                                 next_item_iteration: null,
                                 model: null,
                                 serial_no: null,
                                 channel_name: null,
                                 channel_unit: null,
                                 period: null)
```


