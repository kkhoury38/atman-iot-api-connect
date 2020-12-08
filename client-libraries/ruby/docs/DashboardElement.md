# OpenapiClient::DashboardElement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Float** | Automatically generated ID | [optional] 
**asset_id** | **Float** | ID of Asset that Dashboard Element belongs to | 
**user_id** | **Float** | ID of User that Dashboard Element belongs to | 
**device_category** | **String** | Device Category | 
**channel_category** | **String** | Channel Category | 
**element_type** | **String** | Element Type | 
**position** | **Float** | Element Position | 
**location** | **String** | Element Location: mainDashboard / assetDashboard | 
**time_window** | **Float** | Time Window | 
**operation** | **String** | Data Operation | 
**group_by** | **String** | Data group by | 
**title** | **String** | Element Title | [optional] 
**x_label** | **String** | Element X Label | [optional] 
**y_label** | **String** | Element Y Label | [optional] 

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::DashboardElement.new(id: null,
                                 asset_id: null,
                                 user_id: null,
                                 device_category: null,
                                 channel_category: null,
                                 element_type: null,
                                 position: null,
                                 location: null,
                                 time_window: null,
                                 operation: null,
                                 group_by: null,
                                 title: null,
                                 x_label: null,
                                 y_label: null)
```


