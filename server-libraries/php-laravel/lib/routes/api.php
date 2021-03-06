<?php

/**
 * Atman IoT
 * Atman IoT Server
 *
 * The version of the OpenAPI document: 3.0.1
 * Contact: k.khoury@k-ren.gr
 *
 * NOTE: This class is auto generated by OpenAPI-Generator
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 * Source files are located at:
 *
 * > https://github.com/OpenAPITools/openapi-generator/blob/master/modules/openapi-generator/src/main/resources/php-laravel/
 */

/**
 * post assetControllerCreate
 * Summary: 
 * Notes: Used for creating a new &lt;b&gt;Asset&lt;/b&gt;, by an authorized &lt;b&gt;User&lt;/b&gt;, identified by the provided &lt;i&gt;token&lt;/i&gt;. An &lt;b&gt;Asset&lt;/b&gt; is a way of logical grouping of &lt;b&gt;Devices&lt;/b&gt;. One &lt;b&gt;Asset&lt;/b&gt; can contain many &lt;b&gt;Devices&lt;/b&gt; and can belong to one &lt;b&gt;AssetGroup&lt;/b&gt;. &lt;br&gt;&lt;br&gt;&lt;i&gt;&lt;b&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-assetgroupcontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;AssetGroupController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-devicecontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DeviceController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-usercontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;UserController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocsasset\&quot; target&#x3D;\&quot;_blank\&quot;&gt;AssetModel&lt;/a&gt;&lt;/i&gt;
 * Output-Formats: [application/json]
 */
Route::post('/api/asset', 'AssetControllerController@assetControllerCreate');
/**
 * get assetControllerFindByName
 * Summary: 
 * Notes: Used for getting the &lt;b&gt;Asset&lt;/b&gt; identified by &lt;i&gt;assetName&lt;/i&gt;, by an authorized &lt;b&gt;User&lt;/b&gt; or &lt;b&gt;Virtual User&lt;/b&gt; identified by the provided &lt;i&gt;token&lt;/i&gt;. An &lt;b&gt;Asset&lt;/b&gt; is a way of logical grouping of &lt;b&gt;Devices&lt;/b&gt;. One &lt;b&gt;Asset&lt;/b&gt; can contain many &lt;b&gt;Devices&lt;/b&gt; and can belong to one &lt;b&gt;AssetGroup&lt;/b&gt;.&lt;br&gt;&lt;br&gt;&lt;i&gt;&lt;b&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-assetgroupcontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;AssetGroupController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-devicecontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DeviceController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-usercontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;UserController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocsasset\&quot; target&#x3D;\&quot;_blank\&quot;&gt;AssetModel&lt;/a&gt;&lt;/i&gt;
 * Output-Formats: [application/json]
 */
Route::get('/api/asset/by-name/{assetName}', 'AssetControllerController@assetControllerFindByName');
/**
 * delete assetControllerDeleteById
 * Summary: 
 * Notes: Used for deleting an &lt;b&gt;Asset&lt;/b&gt;, identified by &lt;i&gt;id&lt;/i&gt; by an authorized &lt;b&gt;User&lt;/b&gt; identified by the provided &lt;i&gt;token&lt;/i&gt;. &lt;br&gt;&lt;br&gt;&lt;i&gt;&lt;b&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-usercontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;UserController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocsasset\&quot; target&#x3D;\&quot;_blank\&quot;&gt;AssetModel&lt;/a&gt;&lt;/i&gt;

 */
Route::delete('/api/asset/{id}', 'AssetControllerController@assetControllerDeleteById');
/**
 * patch assetControllerUpdateById
 * Summary: 
 * Notes: Edit (Patch) Asset by Id

 */
Route::patch('/api/asset/{id}', 'AssetControllerController@assetControllerUpdateById');
/**
 * get assetControllerFindByUserId
 * Summary: 
 * Notes: Used for getting the &lt;b&gt;Assets&lt;/b&gt; of an authorized &lt;b&gt;User&lt;/b&gt; identified by the provided &lt;i&gt;userId&lt;/i&gt;, by an authorized &lt;b&gt;Admin&lt;/b&gt;. An &lt;b&gt;Asset&lt;/b&gt; is a way of logical grouping of &lt;b&gt;Devices&lt;/b&gt;. One &lt;b&gt;Asset&lt;/b&gt; can contain many &lt;b&gt;Devices&lt;/b&gt; and can belong to one &lt;b&gt;AssetGroup&lt;/b&gt;.&lt;br&gt;&lt;br&gt;&lt;i&gt;&lt;b&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-assetgroupcontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;AssetGroupController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-devicecontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DeviceController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-usercontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;UserController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocsasset\&quot; target&#x3D;\&quot;_blank\&quot;&gt;AssetModel&lt;/a&gt;&lt;/i&gt;
 * Output-Formats: [application/json]
 */
Route::get('/api/assets/by-user/{userId}', 'AssetControllerController@assetControllerFindByUserId');
/**
 * get assetControllerFind
 * Summary: 
 * Notes: Used for getting the &lt;b&gt;Assets&lt;/b&gt; belonging to an &lt;b&gt;AssetGroup&lt;/b&gt;, in turn belonging to an authorized &lt;b&gt;User&lt;/b&gt; or &lt;b&gt;Virtual User&lt;/b&gt;.  An &lt;b&gt;Asset&lt;/b&gt; is a way of logical grouping of &lt;b&gt;Devices&lt;/b&gt;. One &lt;b&gt;Asset&lt;/b&gt; can contain many &lt;b&gt;Devices&lt;/b&gt; and can belong to the &lt;b&gt;AssetGroup&lt;/b&gt; with the provided &lt;i&gt;assetGroupId&lt;/i&gt;. An &lt;b&gt;AssetGroup&lt;/b&gt; can have many &lt;b&gt;Assets&lt;/b&gt;. &lt;i&gt;&lt;b&gt;. &lt;br&gt;&lt;br&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-assetgroupcontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;AssetGroupController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-devicecontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DeviceController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-usercontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;UserController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocsasset\&quot; target&#x3D;\&quot;_blank\&quot;&gt;AssetModel&lt;/a&gt;&lt;/i&gt;
 * Output-Formats: [application/json]
 */
Route::get('/api/assets/{assetGroupId}', 'AssetControllerController@assetControllerFind');
/**
 * post assetGroupControllerCreateAssetGroup
 * Summary: 
 * Notes: 
 * Output-Formats: [application/json]
 */
Route::post('/api/asset-group/user', 'AssetGroupControllerController@assetGroupControllerCreateAssetGroup');
/**
 * delete assetGroupControllerDeleteById
 * Summary: 
 * Notes: 

 */
Route::delete('/api/asset-group/{id}', 'AssetGroupControllerController@assetGroupControllerDeleteById');
/**
 * patch assetGroupControllerUpdateById
 * Summary: 
 * Notes: Edit (PATCH) AssetGroup

 */
Route::patch('/api/asset-group/{id}', 'AssetGroupControllerController@assetGroupControllerUpdateById');
/**
 * get assetGroupControllerFindUserAssetGroups
 * Summary: 
 * Notes: 
 * Output-Formats: [application/json]
 */
Route::get('/api/asset-groups/user', 'AssetGroupControllerController@assetGroupControllerFindUserAssetGroups');
/**
 * post dashboardElementControllerCreate
 * Summary: 
 * Notes: 
 * Output-Formats: [application/json]
 */
Route::post('/api/dashboard-element', 'DashboardElementControllerController@dashboardElementControllerCreate');
/**
 * delete dashboardElementControllerDeleteById
 * Summary: 
 * Notes: 

 */
Route::delete('/api/dashboard-element/{id}', 'DashboardElementControllerController@dashboardElementControllerDeleteById');
/**
 * patch dashboardElementControllerMoveElementDown
 * Summary: 
 * Notes: 

 */
Route::patch('/api/dashboard-element/{id}/move-down', 'DashboardElementControllerController@dashboardElementControllerMoveElementDown');
/**
 * patch dashboardElementControllerMoveElementUp
 * Summary: 
 * Notes: 

 */
Route::patch('/api/dashboard-element/{id}/move-up', 'DashboardElementControllerController@dashboardElementControllerMoveElementUp');
/**
 * get dashboardElementControllerFindByUserIdAssetIdLocation
 * Summary: 
 * Notes: 
 * Output-Formats: [application/json]
 */
Route::get('/api/dashboard-elements/asset-id/{assetId}/user-id/{userId}/location/{location}', 'DashboardElementControllerController@dashboardElementControllerFindByUserIdAssetIdLocation');
/**
 * post dataLoggerControllerCreate
 * Summary: 
 * Notes: Used for creating a new &lt;b&gt;DataLogger&lt;/b&gt; by and authorized &lt;b&gt;User&lt;/b&gt;, identified by the provided &lt;i&gt;token&lt;/i&gt;. &lt;br&gt;&lt;br&gt;&lt;i&gt;&lt;b&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-usercontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;UserController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocsdatalogger\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DataLoggerModel&lt;/a&gt;&lt;/i&gt;
 * Output-Formats: [application/json]
 */
Route::post('/api/data-logger', 'DataLoggerControllerController@dataLoggerControllerCreate');
/**
 * post dataLoggerControllerUploadDataFromCsv
 * Summary: 
 * Notes: Used for receiving data, sent in CSV format by a &lt;b&gt;DataLogger&lt;/b&gt; identified by &lt;i&gt;id&lt;/i&gt; and &lt;i&gt;dataLoggerToken&lt;/i&gt;. If the &lt;b&gt;DataLogger&lt;/b&gt; is sending data via FTP, endpoint is called internally.&lt;br&gt;&lt;br&gt;&lt;i&gt;&lt;b&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#tocsdatalogger\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DataLoggerModel&lt;/a&gt;&lt;/i&gt;

 */
Route::post('/api/data-logger/data-from-csv/{id}/{dataLoggerToken}', 'DataLoggerControllerController@dataLoggerControllerUploadDataFromCsv');
/**
 * post dataLoggerControllerUploadDataFromXml
 * Summary: 
 * Notes: Used for receiving data, sent in XML format by a &lt;b&gt;DataLogger&lt;/b&gt; identified by &lt;i&gt;id&lt;/i&gt; and &lt;i&gt;dataLoggerToken&lt;/i&gt;. If the &lt;b&gt;DataLogger&lt;/b&gt; is sending data via FTP, endpoint is called internally.&lt;br&gt;&lt;br&gt;&lt;i&gt;&lt;b&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#tocsdatalogger\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DataLoggerModel&lt;/a&gt;&lt;/i&gt;

 */
Route::post('/api/data-logger/data-from-xml/{id}/{dataLoggerToken}', 'DataLoggerControllerController@dataLoggerControllerUploadDataFromXml');
/**
 * post dataLoggerControllerSetupFromFtp1
 * Summary: 
 * Notes: Step 1 of setup process of &lt;b&gt;DataLoggers&lt;/b&gt; sending data via FTP. It is used for sending a sample uncompressed &lt;i&gt;file&lt;/i&gt; containing raw data, as it was generated by the &lt;b&gt;DataLogger&lt;/b&gt; (hardware) identified by &lt;i&gt;dataLoggerToken&lt;/i&gt;.&lt;br&gt;&lt;br&gt;&lt;i&gt;&lt;b&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#tocsdatalogger\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DataLoggerModel&lt;/a&gt;&lt;/i&gt;

 */
Route::post('/api/data-logger/setup-ftp/step1/{id}/{dataLoggerToken}', 'DataLoggerControllerController@dataLoggerControllerSetupFromFtp1');
/**
 * post dataLoggerControllerSetupFromFtpCsv2
 * Summary: 
 * Notes: Step 2 of setup process of &lt;b&gt;DataLoggers&lt;/b&gt; sending CSV data via FTP. It is used for mapping properties of the sent &lt;i&gt;file&lt;/i&gt; to properties of models in the system. &lt;b&gt;DataLogger&lt;/b&gt; to be setup, is identified by &lt;i&gt;id&lt;/i&gt; and &lt;b&gt;User&lt;/b&gt; performing operation is identified by &lt;i&gt;token&lt;/i&gt;. Endpoint response represents the results of the mapping (required in Step 3). If it is satisfactory, it is saved by setting the property &lt;i&gt;confirm&lt;/i&gt; to &lt;i&gt;true&lt;/i&gt;.&lt;br&gt;&lt;br&gt;&lt;i&gt;&lt;b&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-usercontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;UserController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocsdatalogger\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DataLoggerModel&lt;/a&gt;&lt;/i&gt;
 * Output-Formats: [application/json]
 */
Route::post('/api/data-logger/setup-ftp/step2/csv/{id}', 'DataLoggerControllerController@dataLoggerControllerSetupFromFtpCsv2');
/**
 * post dataLoggerControllerSetupFromFtpXml2
 * Summary: 
 * Notes: Step 2 of setup process of &lt;b&gt;DataLoggers&lt;/b&gt; sending XML data via FTP. It is used for mapping properties of the sent &lt;i&gt;file&lt;/i&gt; to properties of models in the system. &lt;b&gt;DataLogger&lt;/b&gt; to be setup, is identified by &lt;i&gt;id&lt;/i&gt; and &lt;b&gt;User&lt;/b&gt; performing operation is identified by &lt;i&gt;token&lt;/i&gt;. Endpoint response represents the results of the mapping (required in Step 3). If it is satisfactory, it is saved by setting the property &lt;i&gt;confirm&lt;/i&gt; to &lt;i&gt;true&lt;/i&gt;.&lt;br&gt;&lt;br&gt;&lt;i&gt;&lt;b&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-usercontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;UserController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocsdatalogger\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DataLoggerModel&lt;/a&gt;&lt;/i&gt;
 * Output-Formats: [application/json]
 */
Route::post('/api/data-logger/setup-ftp/step2/xml/{id}', 'DataLoggerControllerController@dataLoggerControllerSetupFromFtpXml2');
/**
 * post dataLoggerControllerSetupFromFtp3
 * Summary: 
 * Notes: Step 3 of setup process of &lt;b&gt;DataLoggers&lt;/b&gt; sending data via FTP. It is used for initiating &lt;b&gt;DeviceTypes&lt;/b&gt;, &lt;b&gt;ChannelTypes&lt;/b&gt; and &lt;b&gt;Devices&lt;/b&gt;. Accepts as input the output of Step 2. Make sure that the &lt;i&gt;manufacturer&lt;/i&gt; property is added.&lt;br&gt;&lt;br&gt;&lt;i&gt;&lt;b&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-devicecontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DeviceController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-devicetypecontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DeviceTypeController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-devicetypechanneltypecontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DeviceTypeChannelTypeController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-usercontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;UserController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocsdatalogger\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DataLoggerModel&lt;/a&gt;&lt;/i&gt;

 */
Route::post('/api/data-logger/setup-ftp/step3/{id}', 'DataLoggerControllerController@dataLoggerControllerSetupFromFtp3');
/**
 * delete dataLoggerControllerDeleteById
 * Summary: 
 * Notes: Deletes a&lt;b&gt; DataLogger&lt;/b&gt; identified by &lt;i&gt;id&lt;/i&gt;, owned by a &lt;b&gt;User&lt;/b&gt; identified by the provided &lt;i&gt;token.&lt;/i&gt;&lt;br&gt;&lt;br&gt;&lt;i&gt;&lt;b&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-usercontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;UserController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocsdatalogger\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DataLoggerModel&lt;/a&gt;&lt;/i&gt;

 */
Route::delete('/api/data-logger/{id}', 'DataLoggerControllerController@dataLoggerControllerDeleteById');
/**
 * get dataLoggerControllerFind
 * Summary: 
 * Notes: Returns an array of &lt;b&gt;DataLoggers&lt;/b&gt; owned by a &lt;b&gt;User&lt;/b&gt; identified by the provided &lt;i&gt;token.&lt;/i&gt;&lt;br&gt;&lt;br&gt;&lt;i&gt;&lt;b&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-usercontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;UserController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocsdatalogger\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DataLoggerModel&lt;/a&gt;&lt;/i&gt;
 * Output-Formats: [application/json]
 */
Route::get('/api/data-loggers', 'DataLoggerControllerController@dataLoggerControllerFind');
/**
 * get deviceChannelControllerFindByPeriod
 * Summary: 
 * Notes: 
 * Output-Formats: [application/json]
 */
Route::get('/api/device-channel/data-by-period/{deviceId}/{channelId}/from/{fromTS}/to/{toTs}/page/{page}/count/{count}/groupBy/{groupBy}/operation/{operation}', 'DeviceChannelControllerController@deviceChannelControllerFindByPeriod');
/**
 * post deviceChannelControllerFindDeviceChannelLastTSSnChName
 * Summary: 
 * Notes: 
 * Output-Formats: [application/json]
 */
Route::post('/api/device-channel/data-last-timestamp-by-name/{serialNo}/{channelName}', 'DeviceChannelControllerController@deviceChannelControllerFindDeviceChannelLastTSSnChName');
/**
 * get deviceChannelControllerFindDeviceAllLastTS
 * Summary: 
 * Notes: 
 * Output-Formats: [application/json]
 */
Route::get('/api/device-channel/data-last-timestamp/all-channels/{deviceId}', 'DeviceChannelControllerController@deviceChannelControllerFindDeviceAllLastTS');
/**
 * get deviceChannelControllerFindDeviceChannelLastTS
 * Summary: 
 * Notes: 
 * Output-Formats: [application/json]
 */
Route::get('/api/device-channel/data-last-timestamp/{deviceId}/{channelId}', 'DeviceChannelControllerController@deviceChannelControllerFindDeviceChannelLastTS');
/**
 * get deviceChannelControllerFindDeviceAllLastRecordedTS
 * Summary: 
 * Notes: 
 * Output-Formats: [application/json]
 */
Route::get('/api/device-channel/last-timestamp-in-device/{deviceId}', 'DeviceChannelControllerController@deviceChannelControllerFindDeviceAllLastRecordedTS');
/**
 * post deviceControllerCreate
 * Summary: 
 * Notes: Used for creating a new &lt;b&gt;Device&lt;/b&gt;, belonging to a &lt;b&gt;DataLogger&lt;/b&gt; with id &lt;i&gt;dataLoggerId&lt;/i&gt; by an authorized &lt;b&gt;User&lt;/b&gt; identified by the provided &lt;i&gt;token&lt;/i&gt;.&lt;br&gt;&lt;br&gt;&lt;i&gt;&lt;b&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-dataloggercontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DataLoggerController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-usercontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;UserController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocsdevice\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DeviceModel&lt;/a&gt;&lt;/i&gt;
 * Output-Formats: [application/json]
 */
Route::post('/api/device/{dataLoggerId}', 'DeviceControllerController@deviceControllerCreate');
/**
 * post deviceControllerCreateChannel
 * Summary: 
 * Notes: Used for creating a new &lt;b&gt;Channel&lt;/b&gt;, belonging to a &lt;b&gt;Device&lt;/b&gt; with id &lt;i&gt;deviceId&lt;/i&gt; by an authorized &lt;b&gt;User&lt;/b&gt; identified by the provided &lt;i&gt;token&lt;/i&gt;.&lt;br&gt;&lt;br&gt;&lt;i&gt;&lt;b&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-usercontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;UserController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocschannel\&quot; target&#x3D;\&quot;_blank\&quot;&gt;ChannelModel&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocsdevice\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DeviceModel&lt;/a&gt;&lt;/i&gt;
 * Output-Formats: [application/json]
 */
Route::post('/api/device/{deviceId}/channel', 'DeviceControllerController@deviceControllerCreateChannel');
/**
 * get deviceControllerDisableChannelMonitoring
 * Summary: 
 * Notes: Disable monitoring of &lt;b&gt;Channel&lt;/b&gt; identified by &lt;i&gt;channelId&lt;/i&gt;, in &lt;b&gt;Device&lt;/b&gt; identified by &lt;i&gt;deviceId&lt;/i&gt;, owned by &lt;b&gt;User&lt;/b&gt; authorized by &lt;i&gt;token&lt;/i&gt;.&lt;br&gt;&lt;br&gt;&lt;i&gt;&lt;b&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-usercontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;UserController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocschannel\&quot; target&#x3D;\&quot;_blank\&quot;&gt;ChannelModel&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocsdevice\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DeviceModel&lt;/a&gt;&lt;/i&gt;

 */
Route::get('/api/device/{deviceId}/channel/{channelId}/disable-monitoring/all/{all}', 'DeviceControllerController@deviceControllerDisableChannelMonitoring');
/**
 * get deviceControllerEnableChannelMonitoring
 * Summary: 
 * Notes: Enable monitoring of &lt;b&gt;Channel&lt;/b&gt; identified by &lt;i&gt;channelId&lt;/i&gt;, in &lt;b&gt;Device&lt;/b&gt; identified by &lt;i&gt;deviceId&lt;/i&gt;, owned by &lt;b&gt;User&lt;/b&gt; authorized by &lt;i&gt;token&lt;/i&gt;.&lt;br&gt;&lt;br&gt;&lt;i&gt;&lt;b&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-usercontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;UserController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocschannel\&quot; target&#x3D;\&quot;_blank\&quot;&gt;ChannelModel&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocsdevice\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DeviceModel&lt;/a&gt;&lt;/i&gt;

 */
Route::get('/api/device/{deviceId}/channel/{channelId}/enable-monitoring/all/{all}', 'DeviceControllerController@deviceControllerEnableChannelMonitoring');
/**
 * get deviceControllerFindChannelTypes
 * Summary: 
 * Notes: Used for getting the  &lt;b&gt;Channel&lt;/b&gt;&lt;b&gt;Types&lt;/b&gt; of &lt;b&gt;Channels&lt;/b&gt; belonging to a &lt;b&gt;Device&lt;/b&gt; with id &lt;i&gt;deviceId&lt;/i&gt;, by an authorized &lt;b&gt;User&lt;/b&gt; identified by the provided &lt;i&gt;token&lt;/i&gt;.&lt;br&gt;&lt;br&gt;&lt;i&gt;&lt;b&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-usercontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;UserController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocschannel\&quot; target&#x3D;\&quot;_blank\&quot;&gt;ChannelModel&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocschanneltype\&quot; target&#x3D;\&quot;_blank\&quot;&gt;ChannelTypeModel&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocsdevice\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DeviceModel&lt;/a&gt;&lt;/i&gt;
 * Output-Formats: [application/json]
 */
Route::get('/api/device/{deviceId}/channelTypes', 'DeviceControllerController@deviceControllerFindChannelTypes');
/**
 * get deviceControllerFindChannels
 * Summary: 
 * Notes: Used for getting &lt;b&gt;Channel&lt;/b&gt;&lt;b&gt;s&lt;/b&gt;, belonging to a &lt;b&gt;Device&lt;/b&gt; with id &lt;i&gt;deviceId&lt;/i&gt;, by an authorized &lt;b&gt;User&lt;/b&gt; identified by the provided &lt;i&gt;token&lt;/i&gt;.&lt;br&gt;&lt;br&gt;&lt;i&gt;&lt;b&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-usercontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;UserController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocschannel\&quot; target&#x3D;\&quot;_blank\&quot;&gt;ChannelModel&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocsdevice\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DeviceModel&lt;/a&gt;&lt;/i&gt;
 * Output-Formats: [application/json]
 */
Route::get('/api/device/{deviceId}/channels', 'DeviceControllerController@deviceControllerFindChannels');
/**
 * patch deviceControllerUpdateById
 * Summary: 
 * Notes: 

 */
Route::patch('/api/device/{id}', 'DeviceControllerController@deviceControllerUpdateById');
/**
 * post deviceControllerGetDevicesWithType
 * Summary: 
 * Notes: Returns array of devices with their device types
 * Output-Formats: [application/json]
 */
Route::post('/api/devices/with-device-type', 'DeviceControllerController@deviceControllerGetDevicesWithType');
/**
 * get deviceControllerFind
 * Summary: 
 * Notes: Used for getting the &lt;b&gt;Devices&lt;/b&gt;, belonging to a &lt;b&gt;DataLogger&lt;/b&gt; with id &lt;i&gt;dataLoggerId&lt;/i&gt; by an authorized &lt;b&gt;User&lt;/b&gt; identified by the provided &lt;i&gt;token&lt;/i&gt;.&lt;br&gt;&lt;br&gt;&lt;i&gt;&lt;b&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-dataloggercontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DataLoggerController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-usercontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;UserController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocsdevice\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DeviceModel&lt;/a&gt;&lt;/i&gt;
 * Output-Formats: [application/json]
 */
Route::get('/api/devices/{dataLoggerId}', 'DeviceControllerController@deviceControllerFind');
/**
 * get deviceEventControllerFind
 * Summary: 
 * Notes: 
 * Output-Formats: [application/json]
 */
Route::get('/api/device-events/assetId/{assetId}/page/{page}/count/{count}', 'DeviceEventControllerController@deviceEventControllerFind');
/**
 * get deviceEventControllerCountNotViewed
 * Summary: 
 * Notes: 
 * Output-Formats: [application/json]
 */
Route::get('/api/device-events/by-asset/count-not-viewed/{assetId}', 'DeviceEventControllerController@deviceEventControllerCountNotViewed');
/**
 * get deviceEventControllerUpdateViewedBy
 * Summary: 
 * Notes: 

 */
Route::get('/api/device-events/mark-read/{eventId}', 'DeviceEventControllerController@deviceEventControllerUpdateViewedBy');
/**
 * post deviceGroupMembershipControllerCreate
 * Summary: 
 * Notes: 
 * Output-Formats: [application/json]
 */
Route::post('/api/device-group-memberships', 'DeviceGroupMembershipControllerController@deviceGroupMembershipControllerCreate');
/**
 * get deviceGroupMembershipControllerFindByAssetId
 * Summary: 
 * Notes: 
 * Output-Formats: [application/json]
 */
Route::get('/api/device-group-memberships/by-asset/{assetId}', 'DeviceGroupMembershipControllerController@deviceGroupMembershipControllerFindByAssetId');
/**
 * get deviceGroupMembershipControllerFindByDeviceId
 * Summary: 
 * Notes: 
 * Output-Formats: [application/json]
 */
Route::get('/api/device-group-memberships/by-device/{deviceId}', 'DeviceGroupMembershipControllerController@deviceGroupMembershipControllerFindByDeviceId');
/**
 * delete deviceGroupMembershipControllerDeleteById
 * Summary: 
 * Notes: 

 */
Route::delete('/api/device-group-memberships/{id}', 'DeviceGroupMembershipControllerController@deviceGroupMembershipControllerDeleteById');
/**
 * patch deviceTypeChannelTypeControllerUpdateById
 * Summary: 
 * Notes: 

 */
Route::patch('/api/device-type-channel-type/channel-type/{channelTypeId}', 'DeviceTypeChannelTypeControllerController@deviceTypeChannelTypeControllerUpdateById');
/**
 * post deviceTypeChannelTypeControllerCreate
 * Summary: 
 * Notes: 
 * Output-Formats: [application/json]
 */
Route::post('/api/device-type-channel-type/{deviceTypeId}', 'DeviceTypeChannelTypeControllerController@deviceTypeChannelTypeControllerCreate');
/**
 * get deviceTypeChannelTypeControllerDeviceTypeChannelCategories
 * Summary: 
 * Notes: 
 * Output-Formats: [application/json]
 */
Route::get('/api/device-type-channel-type/{deviceTypeId}/channel-categories', 'DeviceTypeChannelTypeControllerController@deviceTypeChannelTypeControllerDeviceTypeChannelCategories');
/**
 * get deviceTypeChannelTypeControllerCount
 * Summary: 
 * Notes: 
 * Output-Formats: [application/json]
 */
Route::get('/api/device-type-channel-type/{deviceTypeId}/count', 'DeviceTypeChannelTypeControllerController@deviceTypeChannelTypeControllerCount');
/**
 * get deviceTypeChannelTypeControllerFind
 * Summary: 
 * Notes: 
 * Output-Formats: [application/json]
 */
Route::get('/api/device-type-channel-type/{deviceTypeId}/page/{page}/count/{count}', 'DeviceTypeChannelTypeControllerController@deviceTypeChannelTypeControllerFind');
/**
 * post deviceTypeControllerCreate
 * Summary: 
 * Notes: 
 * Output-Formats: [application/json]
 */
Route::post('/api/device-type', 'DeviceTypeControllerController@deviceTypeControllerCreate');
/**
 * get deviceTypeControllerCount
 * Summary: 
 * Notes: 
 * Output-Formats: [application/json]
 */
Route::get('/api/device-type/count', 'DeviceTypeControllerController@deviceTypeControllerCount');
/**
 * get deviceTypeControllerGetAssetDeviceCategories
 * Summary: 
 * Notes: 
 * Output-Formats: [application/json]
 */
Route::get('/api/device-type/device-categories-in-asset/{assetId}', 'DeviceTypeControllerController@deviceTypeControllerGetAssetDeviceCategories');
/**
 * get deviceTypeControllerFind
 * Summary: 
 * Notes: 
 * Output-Formats: [application/json]
 */
Route::get('/api/device-type/get-all/page/{page}/count/{count}', 'DeviceTypeControllerController@deviceTypeControllerFind');
/**
 * patch deviceTypeControllerUpdateById
 * Summary: 
 * Notes: 

 */
Route::patch('/api/device-type/{id}', 'DeviceTypeControllerController@deviceTypeControllerUpdateById');
/**
 * post eventControllerCreateNow
 * Summary: 
 * Notes: 
 * Output-Formats: [application/json]
 */
Route::post('/api/event', 'EventControllerController@eventControllerCreateNow');
/**
 * get eventControllerProcessSubscriptions
 * Summary: 
 * Notes: 

 */
Route::get('/api/event/process', 'EventControllerController@eventControllerProcessSubscriptions');
/**
 * post eventControllerCreateRelatedDev
 * Summary: 
 * Notes: 
 * Output-Formats: [application/json]
 */
Route::post('/api/event/related-device', 'EventControllerController@eventControllerCreateRelatedDev');
/**
 * patch eventControllerUpdateById
 * Summary: 
 * Notes: 

 */
Route::patch('/api/event/resolve/{id}', 'EventControllerController@eventControllerUpdateById');
/**
 * post eventControllerCreateRule
 * Summary: 
 * Notes: 
 * Output-Formats: [application/json]
 */
Route::post('/api/event/rule', 'EventControllerController@eventControllerCreateRule');
/**
 * post eventControllerCreateRuleSubscription
 * Summary: 
 * Notes: 
 * Output-Formats: [application/json]
 */
Route::post('/api/event/rule/subscription', 'EventControllerController@eventControllerCreateRuleSubscription');
/**
 * get eventControllerFind
 * Summary: 
 * Notes: 
 * Output-Formats: [application/json]
 */
Route::get('/api/events/all/{assetId}', 'EventControllerController@eventControllerFind');
/**
 * get eventControllerFindUnresolved
 * Summary: 
 * Notes: 
 * Output-Formats: [application/json]
 */
Route::get('/api/events/unresolved/{assetId}', 'EventControllerController@eventControllerFindUnresolved');
/**
 * get pingControllerPing
 * Summary: 
 * Notes: Ping the server
 * Output-Formats: [application/json]
 */
Route::get('/api/ping', 'PingControllerController@pingControllerPing');
/**
 * get schedulerControllerProcessEvents
 * Summary: 
 * Notes: 

 */
Route::get('/api/scheduler/process/events/{attempt}/{serverKey}', 'SchedulerControllerController@schedulerControllerProcessEvents');
/**
 * get schedulerControllerProcessFtpRejected
 * Summary: 
 * Notes: 

 */
Route::get('/api/scheduler/process/ftp-rejected/{serverKey}', 'SchedulerControllerController@schedulerControllerProcessFtpRejected');
/**
 * get userControllerGetVirtualUsers
 * Summary: 
 * Notes: Returns users under administrator account
 * Output-Formats: [application/json]
 */
Route::get('/api/user/getVirtualUsers', 'UserControllerController@userControllerGetVirtualUsers');
/**
 * post userControllerLogin
 * Summary: 
 * Notes: Used for &lt;b&gt;User&lt;/b&gt; and &lt;b&gt;Virtual User&lt;/b&gt; login. Exchanges &lt;i&gt;username/password&lt;/i&gt; with an authorization &lt;i&gt;token&lt;/i&gt;. Please enter the email provided durring registration in the username field.&lt;br&gt;&lt;br&gt;&lt;i&gt;&lt;b&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#tocsuser\&quot; target&#x3D;\&quot;_blank\&quot;&gt;UserModel&lt;/a&gt;&lt;/i&gt;
 * Output-Formats: [application/json]
 */
Route::post('/api/user/login', 'UserControllerController@userControllerLogin');
/**
 * post userControllerCreateVirtual
 * Summary: 
 * Notes: Used for registering a new &lt;b&gt;Virtual User&lt;/b&gt; by a &lt;b&gt;User&lt;/b&gt;, identified by the provided &lt;i&gt;token.&lt;/i&gt;&lt;br&gt;&lt;br&gt;&lt;i&gt;&lt;b&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#tocsuser\&quot; target&#x3D;\&quot;_blank\&quot;&gt;UserModel&lt;/a&gt;&lt;/i&gt;
 * Output-Formats: [application/json]
 */
Route::post('/api/user/register/virtual', 'UserControllerController@userControllerCreateVirtual');
/**
 * post userControllerCreate
 * Summary: 
 * Notes: Used for registering a new &lt;b&gt;User&lt;/b&gt;.&lt;br&gt;&lt;br&gt;&lt;i&gt;&lt;b&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#tocsuser\&quot; target&#x3D;\&quot;_blank\&quot;&gt;UserModel&lt;/a&gt;&lt;/i&gt;
 * Output-Formats: [application/json]
 */
Route::post('/api/user/register/{referenceCode}', 'UserControllerController@userControllerCreate');
/**
 * delete userControllerDeleteVirtualUserById
 * Summary: 
 * Notes: Deletes Virtual User by Id

 */
Route::delete('/api/users/virtualUser/{id}', 'UserControllerController@userControllerDeleteVirtualUserById');
/**
 * get userSubscriptionControllerGetByRefferenceCode
 * Summary: 
 * Notes: 
 * Output-Formats: [application/json]
 */
Route::get('/api/user-subscription/get-by-reference-code/{referenceCode}', 'UserSubscriptionControllerController@userSubscriptionControllerGetByRefferenceCode');
/**
 * get userSubscriptionControllerCreateUserSubscriptionBySubId
 * Summary: 
 * Notes: 
 * Output-Formats: [application/json]
 */
Route::get('/api/user-subscription/get-new/{subscriptionId}', 'UserSubscriptionControllerController@userSubscriptionControllerCreateUserSubscriptionBySubId');
/**
 * get userSubscriptionControllerFindSubscriptionsByCategory
 * Summary: 
 * Notes: 
 * Output-Formats: [application/json]
 */
Route::get('/api/user-subscription/subscriptions/{product}', 'UserSubscriptionControllerController@userSubscriptionControllerFindSubscriptionsByCategory');
/**
 * post userSubscriptionControllerCreate
 * Summary: 
 * Notes: 

 */
Route::post('/api/user-subscriptions/paypal/callback', 'UserSubscriptionControllerController@userSubscriptionControllerCreate');
/**
 * post userSubscriptionControllerVerifyCode
 * Summary: 
 * Notes: 
 * Output-Formats: [application/json]
 */
Route::post('/api/user-subscriptions/verify-reference-code', 'UserSubscriptionControllerController@userSubscriptionControllerVerifyCode');
/**
 * post virtualAccessControllerCreateAccessByRight
 * Summary: 
 * Notes: 
 * Output-Formats: [application/json]
 */
Route::post('/api/virtual-access/by-asset', 'VirtualAccessControllerController@virtualAccessControllerCreateAccessByRight');
/**
 * post virtualAccessControllerCreateAccessByGroup
 * Summary: 
 * Notes: 
 * Output-Formats: [application/json]
 */
Route::post('/api/virtual-access/by-asset-group', 'VirtualAccessControllerController@virtualAccessControllerCreateAccessByGroup');
/**
 * get virtualAccessControllerFindByUserId
 * Summary: 
 * Notes: 
 * Output-Formats: [application/json]
 */
Route::get('/api/virtual-access/by-userId/{userId}', 'VirtualAccessControllerController@virtualAccessControllerFindByUserId');
/**
 * delete virtualAccessControllerDeleteById
 * Summary: 
 * Notes: 

 */
Route::delete('/api/virtual-access/{id}', 'VirtualAccessControllerController@virtualAccessControllerDeleteById');

