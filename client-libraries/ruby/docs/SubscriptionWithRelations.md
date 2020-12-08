# OpenapiClient::SubscriptionWithRelations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Float** |  | [optional] 
**product** | **String** |  | 
**type** | **String** |  | [optional] 
**description** | **String** |  | 
**duration** | **Float** |  | 
**monthly_price** | **Float** |  | 
**yearly_price** | **Float** |  | 
**active** | **Boolean** |  | 
**user_subscriptions** | [**Array&lt;UserSubscriptionWithRelations&gt;**](UserSubscriptionWithRelations.md) |  | [optional] 

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::SubscriptionWithRelations.new(id: null,
                                 product: null,
                                 type: null,
                                 description: null,
                                 duration: null,
                                 monthly_price: null,
                                 yearly_price: null,
                                 active: null,
                                 user_subscriptions: null)
```


