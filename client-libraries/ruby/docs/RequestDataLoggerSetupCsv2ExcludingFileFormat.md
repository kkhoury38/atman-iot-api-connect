# OpenapiClient::RequestDataLoggerSetupCsv2ExcludingFileFormat

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delimiter** | **String** | Delimiter used in CSV file | 
**decimal_point** | **String** | Decimal Point of values in CSV file | 
**time_data** | [**RequestDataLoggerSetupCsv2TimeData**](RequestDataLoggerSetupCsv2TimeData.md) |  | 
**data** | [**RequestDataLoggerSetupCsv2Data**](RequestDataLoggerSetupCsv2Data.md) |  | 
**confirm** | **Boolean** | Provided Configuration Confirmation. Set to true to save current configuration | 

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::RequestDataLoggerSetupCsv2ExcludingFileFormat.new(delimiter: null,
                                 decimal_point: null,
                                 time_data: null,
                                 data: null,
                                 confirm: null)
```


