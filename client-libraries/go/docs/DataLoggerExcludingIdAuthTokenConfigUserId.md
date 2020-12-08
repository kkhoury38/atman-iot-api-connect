# DataLoggerExcludingIdAuthTokenConfigUserId

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | **string** | Datalogger description | [optional] 
**ConnectionType** | **string** | Method used by DataLogger to send data to the system. At present only FTP implemented | 
**FileFormat** | **string** | Format of the files uploaded to the system DataLogger. At present system supports CSV and XML formats | 
**Username** | **string** | Username of system FTP account, where the DataLogger sends the data (if applicable) | [optional] 
**Passwd** | **string** | Password of system FTP account, where the DataLogger sends the data (if applicable) | [optional] 
**AutoInit** | **bool** | Flag for selecting if DataLogger is to be initiated automatically from preexisting configuration | 
**DataCompressed** | **bool** | Flag for selecting if DataLogger sends compressed files | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


