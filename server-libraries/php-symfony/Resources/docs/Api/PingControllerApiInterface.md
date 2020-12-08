# OpenAPI\Server\Api\PingControllerApiInterface

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**pingControllerPing**](PingControllerApiInterface.md#pingControllerPing) | **GET** /ping | 


## Service Declaration
```yaml
# src/Acme/MyBundle/Resources/services.yml
services:
    # ...
    acme.my_bundle.api.pingController:
        class: Acme\MyBundle\Api\PingControllerApi
        tags:
            - { name: "open_api_server.api", api: "pingController" }
    # ...
```

## **pingControllerPing**
> OpenAPI\Server\Model\InlineResponse200 pingControllerPing()



Ping the server

### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/PingControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\PingControllerApiInterface;

class PingControllerApi implements PingControllerApiInterface
{

    // ...

    /**
     * Implementation of PingControllerApiInterface#pingControllerPing
     */
    public function pingControllerPing()
    {
        // Implement the operation ...
    }

    // ...
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**OpenAPI\Server\Model\InlineResponse200**](../Model/InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

