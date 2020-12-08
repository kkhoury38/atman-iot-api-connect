# OpenapiClient::RequestDataLoggerSetupXml2SearchStringStructure

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **String** | XML key containing parent attribute | 
**is_string** | **Boolean** | Flag for selecting if parent value is the entire string contained in the provided XML Key.  If set to true performSplit must be defined | 
**perform_split** | [**Array&lt;RequestDataLoggerSetupXml2SearchStringStructureSplit&gt;**](RequestDataLoggerSetupXml2SearchStringStructureSplit.md) |  | 

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::RequestDataLoggerSetupXml2SearchStringStructure.new(key: null,
                                 is_string: null,
                                 perform_split: null)
```


