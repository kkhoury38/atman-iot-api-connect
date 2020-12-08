# OpenapiClient::DataLoggerExcludingIdAuthTokenConfigUserId

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **String** | Datalogger description | [optional] 
**connection_type** | **String** | Method used by DataLogger to send data to the system. At present only FTP implemented | 
**file_format** | **String** | Format of the files uploaded to the system DataLogger. At present system supports CSV and XML formats | 
**username** | **String** | Username of system FTP account, where the DataLogger sends the data (if applicable) | [optional] 
**passwd** | **String** | Password of system FTP account, where the DataLogger sends the data (if applicable) | [optional] 
**auto_init** | **Boolean** | Flag for selecting if DataLogger is to be initiated automatically from preexisting configuration | 
**data_compressed** | **Boolean** | Flag for selecting if DataLogger sends compressed files | 

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::DataLoggerExcludingIdAuthTokenConfigUserId.new(description: null,
                                 connection_type: null,
                                 file_format: null,
                                 username: null,
                                 passwd: null,
                                 auto_init: null,
                                 data_compressed: null)
```


