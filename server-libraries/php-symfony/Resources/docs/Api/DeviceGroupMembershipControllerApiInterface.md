# OpenAPI\Server\Api\DeviceGroupMembershipControllerApiInterface

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deviceGroupMembershipControllerCreate**](DeviceGroupMembershipControllerApiInterface.md#deviceGroupMembershipControllerCreate) | **POST** /device-group-memberships | 
[**deviceGroupMembershipControllerDeleteById**](DeviceGroupMembershipControllerApiInterface.md#deviceGroupMembershipControllerDeleteById) | **DELETE** /device-group-memberships/{id} | 
[**deviceGroupMembershipControllerFindByAssetId**](DeviceGroupMembershipControllerApiInterface.md#deviceGroupMembershipControllerFindByAssetId) | **GET** /device-group-memberships/by-asset/{assetId} | 
[**deviceGroupMembershipControllerFindByDeviceId**](DeviceGroupMembershipControllerApiInterface.md#deviceGroupMembershipControllerFindByDeviceId) | **GET** /device-group-memberships/by-device/{deviceId} | 


## Service Declaration
```yaml
# src/Acme/MyBundle/Resources/services.yml
services:
    # ...
    acme.my_bundle.api.deviceGroupMembershipController:
        class: Acme\MyBundle\Api\DeviceGroupMembershipControllerApi
        tags:
            - { name: "open_api_server.api", api: "deviceGroupMembershipController" }
    # ...
```

## **deviceGroupMembershipControllerCreate**
> OpenAPI\Server\Model\DeviceGroupMembership deviceGroupMembershipControllerCreate($deviceGroupMembershipExcludingId)



### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/DeviceGroupMembershipControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\DeviceGroupMembershipControllerApiInterface;

class DeviceGroupMembershipControllerApi implements DeviceGroupMembershipControllerApiInterface
{

    // ...

    /**
     * Implementation of DeviceGroupMembershipControllerApiInterface#deviceGroupMembershipControllerCreate
     */
    public function deviceGroupMembershipControllerCreate(DeviceGroupMembershipExcludingId $deviceGroupMembershipExcludingId = null)
    {
        // Implement the operation ...
    }

    // ...
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceGroupMembershipExcludingId** | [**OpenAPI\Server\Model\DeviceGroupMembershipExcludingId**](../Model/DeviceGroupMembershipExcludingId.md)|  | [optional]

### Return type

[**OpenAPI\Server\Model\DeviceGroupMembership**](../Model/DeviceGroupMembership.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **deviceGroupMembershipControllerDeleteById**
> deviceGroupMembershipControllerDeleteById($id)



### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/DeviceGroupMembershipControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\DeviceGroupMembershipControllerApiInterface;

class DeviceGroupMembershipControllerApi implements DeviceGroupMembershipControllerApiInterface
{

    // ...

    /**
     * Implementation of DeviceGroupMembershipControllerApiInterface#deviceGroupMembershipControllerDeleteById
     */
    public function deviceGroupMembershipControllerDeleteById($id)
    {
        // Implement the operation ...
    }

    // ...
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **float**|  |

### Return type

void (empty response body)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **deviceGroupMembershipControllerFindByAssetId**
> OpenAPI\Server\Model\DeviceGroupMembership deviceGroupMembershipControllerFindByAssetId($assetId)



### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/DeviceGroupMembershipControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\DeviceGroupMembershipControllerApiInterface;

class DeviceGroupMembershipControllerApi implements DeviceGroupMembershipControllerApiInterface
{

    // ...

    /**
     * Implementation of DeviceGroupMembershipControllerApiInterface#deviceGroupMembershipControllerFindByAssetId
     */
    public function deviceGroupMembershipControllerFindByAssetId($assetId)
    {
        // Implement the operation ...
    }

    // ...
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | **float**|  |

### Return type

[**OpenAPI\Server\Model\DeviceGroupMembership**](../Model/DeviceGroupMembership.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **deviceGroupMembershipControllerFindByDeviceId**
> OpenAPI\Server\Model\DeviceGroupMembership deviceGroupMembershipControllerFindByDeviceId($deviceId)



### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/DeviceGroupMembershipControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\DeviceGroupMembershipControllerApiInterface;

class DeviceGroupMembershipControllerApi implements DeviceGroupMembershipControllerApiInterface
{

    // ...

    /**
     * Implementation of DeviceGroupMembershipControllerApiInterface#deviceGroupMembershipControllerFindByDeviceId
     */
    public function deviceGroupMembershipControllerFindByDeviceId($deviceId)
    {
        // Implement the operation ...
    }

    // ...
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **float**|  |

### Return type

[**OpenAPI\Server\Model\DeviceGroupMembership**](../Model/DeviceGroupMembership.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

