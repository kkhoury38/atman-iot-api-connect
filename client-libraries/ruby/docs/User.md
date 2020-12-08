# OpenapiClient::User

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Float** | Automatically generated ID | [optional] 
**username** | **String** | Username | 
**passwd** | **String** | Password | [optional] 
**email** | **String** | Email | 
**roles** | **Array&lt;String&gt;** |  | [optional] 
**is_virtual** | **Boolean** | Automatically assigned flag to select if User is virtual or not | 
**subscription_reference_code** | **String** |  | [optional] 

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::User.new(id: null,
                                 username: null,
                                 passwd: null,
                                 email: null,
                                 roles: null,
                                 is_virtual: null,
                                 subscription_reference_code: null)
```


