# DataLoggerWithRelations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **float32** | Automatically generated ID | [optional] 
**Description** | **string** | Datalogger description | [optional] 
**ConnectionType** | **string** | Method used by DataLogger to send data to the system. At present only FTP implemented | 
**FileFormat** | **string** | Format of the files uploaded to the system DataLogger. At present system supports CSV and XML formats | 
**Username** | **string** | Username of system FTP account, where the DataLogger sends the data (if applicable) | [optional] 
**Passwd** | **string** | Password of system FTP account, where the DataLogger sends the data (if applicable) | [optional] 
**AuthToken** | **string** | Authentication token of DataLogger | [optional] 
**Config** | **string** | JSON configuration file for DataLogger | [optional] 
**AutoInit** | **bool** | Flag for selecting if DataLogger is to be initiated automatically from preexisting configuration | 
**DataCompressed** | **bool** | Flag for selecting if DataLogger sends compressed files | 
**UserId** | **float32** | ID of User that DataLogger belongs to | 
**User** | [**UserWithRelations**](UserWithRelations.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


