# AtmanIoT.DataLoggerWithRelations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Automatically generated ID | [optional] 
**description** | **String** | Datalogger description | [optional] 
**connectionType** | **String** | Method used by DataLogger to send data to the system. At present only FTP implemented | 
**fileFormat** | **String** | Format of the files uploaded to the system DataLogger. At present system supports CSV and XML formats | 
**username** | **String** | Username of system FTP account, where the DataLogger sends the data (if applicable) | [optional] 
**passwd** | **String** | Password of system FTP account, where the DataLogger sends the data (if applicable) | [optional] 
**authToken** | **String** | Authentication token of DataLogger | [optional] 
**config** | **String** | JSON configuration file for DataLogger | [optional] 
**autoInit** | **Boolean** | Flag for selecting if DataLogger is to be initiated automatically from preexisting configuration | 
**dataCompressed** | **Boolean** | Flag for selecting if DataLogger sends compressed files | 
**userId** | **Number** | ID of User that DataLogger belongs to | 
**user** | [**UserWithRelations**](UserWithRelations.md) |  | [optional] 


