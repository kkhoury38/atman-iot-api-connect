# OpenapiClient::RequestDataLoggerSetupCsv2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delimiter** | **String** | Delimiter used in CSV file | 
**decimal_point** | **String** | Decimal Point of values in CSV file | 
**time_data** | [**RequestDataLoggerSetupCsv2TimeData**](RequestDataLoggerSetupCsv2TimeData.md) |  | 
**data** | [**RequestDataLoggerSetupCsv2Data**](RequestDataLoggerSetupCsv2Data.md) |  | 
**confirm** | **Boolean** | Provided Configuration Confirmation. Set to true to save current configuration | 
**file_format** | **String** | Data File Format | 

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::RequestDataLoggerSetupCsv2.new(delimiter: null,
                                 decimal_point: null,
                                 time_data: null,
                                 data: null,
                                 confirm: null,
                                 file_format: null)
```


