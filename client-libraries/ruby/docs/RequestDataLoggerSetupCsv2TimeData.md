# OpenapiClient::RequestDataLoggerSetupCsv2TimeData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column** | **Float** | Column containing time data | 
**first_item_row** | **Float** | Row containing first value of time data in the CSV file | 
**next_item_iteration** | **Float** | Relevant row location of next item | 
**timezone** | [**RequestDataLoggerSetupCsv2LocationSpec**](RequestDataLoggerSetupCsv2LocationSpec.md) |  | 
**format** | [**RequestDataLoggerSetupCsv2LocationSpec**](RequestDataLoggerSetupCsv2LocationSpec.md) |  | 

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::RequestDataLoggerSetupCsv2TimeData.new(column: null,
                                 first_item_row: null,
                                 next_item_iteration: null,
                                 timezone: null,
                                 format: null)
```


