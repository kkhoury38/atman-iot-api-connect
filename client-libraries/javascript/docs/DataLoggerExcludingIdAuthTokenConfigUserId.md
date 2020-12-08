# AtmanIoT.DataLoggerExcludingIdAuthTokenConfigUserId

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **String** | Datalogger description | [optional] 
**connectionType** | **String** | Method used by DataLogger to send data to the system. At present only FTP implemented | 
**fileFormat** | **String** | Format of the files uploaded to the system DataLogger. At present system supports CSV and XML formats | 
**username** | **String** | Username of system FTP account, where the DataLogger sends the data (if applicable) | [optional] 
**passwd** | **String** | Password of system FTP account, where the DataLogger sends the data (if applicable) | [optional] 
**autoInit** | **Boolean** | Flag for selecting if DataLogger is to be initiated automatically from preexisting configuration | 
**dataCompressed** | **Boolean** | Flag for selecting if DataLogger sends compressed files | 


