# OpenapiClient::UserSubscriptionWithRelations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Float** |  | [optional] 
**reference_code** | **String** |  | 
**email** | **String** |  | [optional] 
**discount** | **Float** |  | 
**creation_timestamp** | **DateTime** | Timestamp | 
**activation_timestamp** | **DateTime** | Timestamp | [optional] 
**end_timestamp** | **DateTime** | Timestamp | [optional] 
**has_registered** | **Boolean** |  | 
**subscription_id** | **Float** | ID of Subscription | 
**subscription** | [**SubscriptionWithRelations**](SubscriptionWithRelations.md) |  | [optional] 

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::UserSubscriptionWithRelations.new(id: null,
                                 reference_code: null,
                                 email: null,
                                 discount: null,
                                 creation_timestamp: null,
                                 activation_timestamp: null,
                                 end_timestamp: null,
                                 has_registered: null,
                                 subscription_id: null,
                                 subscription: null)
```


