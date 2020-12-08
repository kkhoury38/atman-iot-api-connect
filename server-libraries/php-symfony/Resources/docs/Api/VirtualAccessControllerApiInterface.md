# OpenAPI\Server\Api\VirtualAccessControllerApiInterface

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**virtualAccessControllerCreateAccessByGroup**](VirtualAccessControllerApiInterface.md#virtualAccessControllerCreateAccessByGroup) | **POST** /virtual-access/by-asset-group | 
[**virtualAccessControllerCreateAccessByRight**](VirtualAccessControllerApiInterface.md#virtualAccessControllerCreateAccessByRight) | **POST** /virtual-access/by-asset | 
[**virtualAccessControllerDeleteById**](VirtualAccessControllerApiInterface.md#virtualAccessControllerDeleteById) | **DELETE** /virtual-access/{id} | 
[**virtualAccessControllerFindByUserId**](VirtualAccessControllerApiInterface.md#virtualAccessControllerFindByUserId) | **GET** /virtual-access/by-userId/{userId} | 


## Service Declaration
```yaml
# src/Acme/MyBundle/Resources/services.yml
services:
    # ...
    acme.my_bundle.api.virtualAccessController:
        class: Acme\MyBundle\Api\VirtualAccessControllerApi
        tags:
            - { name: "open_api_server.api", api: "virtualAccessController" }
    # ...
```

## **virtualAccessControllerCreateAccessByGroup**
> OpenAPI\Server\Model\VirtualAccess virtualAccessControllerCreateAccessByGroup($requestVirtualAccessRightExcludingAssetId)



### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/VirtualAccessControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\VirtualAccessControllerApiInterface;

class VirtualAccessControllerApi implements VirtualAccessControllerApiInterface
{

    // ...

    /**
     * Implementation of VirtualAccessControllerApiInterface#virtualAccessControllerCreateAccessByGroup
     */
    public function virtualAccessControllerCreateAccessByGroup(RequestVirtualAccessRightExcludingAssetId $requestVirtualAccessRightExcludingAssetId = null)
    {
        // Implement the operation ...
    }

    // ...
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestVirtualAccessRightExcludingAssetId** | [**OpenAPI\Server\Model\RequestVirtualAccessRightExcludingAssetId**](../Model/RequestVirtualAccessRightExcludingAssetId.md)|  | [optional]

### Return type

[**OpenAPI\Server\Model\VirtualAccess**](../Model/VirtualAccess.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **virtualAccessControllerCreateAccessByRight**
> OpenAPI\Server\Model\VirtualAccess virtualAccessControllerCreateAccessByRight($requestVirtualAccessRightExcludingAssetGroupId)



### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/VirtualAccessControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\VirtualAccessControllerApiInterface;

class VirtualAccessControllerApi implements VirtualAccessControllerApiInterface
{

    // ...

    /**
     * Implementation of VirtualAccessControllerApiInterface#virtualAccessControllerCreateAccessByRight
     */
    public function virtualAccessControllerCreateAccessByRight(RequestVirtualAccessRightExcludingAssetGroupId $requestVirtualAccessRightExcludingAssetGroupId = null)
    {
        // Implement the operation ...
    }

    // ...
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestVirtualAccessRightExcludingAssetGroupId** | [**OpenAPI\Server\Model\RequestVirtualAccessRightExcludingAssetGroupId**](../Model/RequestVirtualAccessRightExcludingAssetGroupId.md)|  | [optional]

### Return type

[**OpenAPI\Server\Model\VirtualAccess**](../Model/VirtualAccess.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **virtualAccessControllerDeleteById**
> virtualAccessControllerDeleteById($id)



### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/VirtualAccessControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\VirtualAccessControllerApiInterface;

class VirtualAccessControllerApi implements VirtualAccessControllerApiInterface
{

    // ...

    /**
     * Implementation of VirtualAccessControllerApiInterface#virtualAccessControllerDeleteById
     */
    public function virtualAccessControllerDeleteById($id)
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

## **virtualAccessControllerFindByUserId**
> OpenAPI\Server\Model\VirtualAccess virtualAccessControllerFindByUserId($userId)



### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/VirtualAccessControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\VirtualAccessControllerApiInterface;

class VirtualAccessControllerApi implements VirtualAccessControllerApiInterface
{

    // ...

    /**
     * Implementation of VirtualAccessControllerApiInterface#virtualAccessControllerFindByUserId
     */
    public function virtualAccessControllerFindByUserId($userId)
    {
        // Implement the operation ...
    }

    // ...
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **float**|  |

### Return type

[**OpenAPI\Server\Model\VirtualAccess**](../Model/VirtualAccess.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

