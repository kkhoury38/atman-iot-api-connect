# # DataLogger

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **float** | Automatically generated ID | [optional] 
**description** | **string** | Datalogger description | [optional] 
**connection_type** | **string** | Method used by DataLogger to send data to the system. At present only FTP implemented | 
**file_format** | **string** | Format of the files uploaded to the system DataLogger. At present system supports CSV and XML formats | 
**username** | **string** | Username of system FTP account, where the DataLogger sends the data (if applicable) | [optional] 
**passwd** | **string** | Password of system FTP account, where the DataLogger sends the data (if applicable) | [optional] 
**auth_token** | **string** | Authentication token of DataLogger | [optional] 
**config** | **string** | JSON configuration file for DataLogger | [optional] 
**auto_init** | **bool** | Flag for selecting if DataLogger is to be initiated automatically from preexisting configuration | 
**data_compressed** | **bool** | Flag for selecting if DataLogger sends compressed files | 
**user_id** | **float** | ID of User that DataLogger belongs to | 

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)


