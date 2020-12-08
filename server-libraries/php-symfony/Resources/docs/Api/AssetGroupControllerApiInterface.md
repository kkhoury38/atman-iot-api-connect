# OpenAPI\Server\Api\AssetGroupControllerApiInterface

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assetGroupControllerCreateAssetGroup**](AssetGroupControllerApiInterface.md#assetGroupControllerCreateAssetGroup) | **POST** /asset-group/user | 
[**assetGroupControllerDeleteById**](AssetGroupControllerApiInterface.md#assetGroupControllerDeleteById) | **DELETE** /asset-group/{id} | 
[**assetGroupControllerFindUserAssetGroups**](AssetGroupControllerApiInterface.md#assetGroupControllerFindUserAssetGroups) | **GET** /asset-groups/user | 
[**assetGroupControllerUpdateById**](AssetGroupControllerApiInterface.md#assetGroupControllerUpdateById) | **PATCH** /asset-group/{id} | 


## Service Declaration
```yaml
# src/Acme/MyBundle/Resources/services.yml
services:
    # ...
    acme.my_bundle.api.assetGroupController:
        class: Acme\MyBundle\Api\AssetGroupControllerApi
        tags:
            - { name: "open_api_server.api", api: "assetGroupController" }
    # ...
```

## **assetGroupControllerCreateAssetGroup**
> OpenAPI\Server\Model\AssetGroup assetGroupControllerCreateAssetGroup($assetGroupExcludingIdUserId)



### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/AssetGroupControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\AssetGroupControllerApiInterface;

class AssetGroupControllerApi implements AssetGroupControllerApiInterface
{

    // ...

    /**
     * Implementation of AssetGroupControllerApiInterface#assetGroupControllerCreateAssetGroup
     */
    public function assetGroupControllerCreateAssetGroup(AssetGroupExcludingIdUserId $assetGroupExcludingIdUserId = null)
    {
        // Implement the operation ...
    }

    // ...
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetGroupExcludingIdUserId** | [**OpenAPI\Server\Model\AssetGroupExcludingIdUserId**](../Model/AssetGroupExcludingIdUserId.md)|  | [optional]

### Return type

[**OpenAPI\Server\Model\AssetGroup**](../Model/AssetGroup.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **assetGroupControllerDeleteById**
> assetGroupControllerDeleteById($id)



### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/AssetGroupControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\AssetGroupControllerApiInterface;

class AssetGroupControllerApi implements AssetGroupControllerApiInterface
{

    // ...

    /**
     * Implementation of AssetGroupControllerApiInterface#assetGroupControllerDeleteById
     */
    public function assetGroupControllerDeleteById($id)
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

## **assetGroupControllerFindUserAssetGroups**
> OpenAPI\Server\Model\AssetGroup assetGroupControllerFindUserAssetGroups()



### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/AssetGroupControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\AssetGroupControllerApiInterface;

class AssetGroupControllerApi implements AssetGroupControllerApiInterface
{

    // ...

    /**
     * Implementation of AssetGroupControllerApiInterface#assetGroupControllerFindUserAssetGroups
     */
    public function assetGroupControllerFindUserAssetGroups()
    {
        // Implement the operation ...
    }

    // ...
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**OpenAPI\Server\Model\AssetGroup**](../Model/AssetGroup.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **assetGroupControllerUpdateById**
> assetGroupControllerUpdateById($id, $assetGroupExcludingIdUserId)



Edit (PATCH) AssetGroup

### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/AssetGroupControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\AssetGroupControllerApiInterface;

class AssetGroupControllerApi implements AssetGroupControllerApiInterface
{

    // ...

    /**
     * Implementation of AssetGroupControllerApiInterface#assetGroupControllerUpdateById
     */
    public function assetGroupControllerUpdateById($id, AssetGroupExcludingIdUserId $assetGroupExcludingIdUserId = null)
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
 **assetGroupExcludingIdUserId** | [**OpenAPI\Server\Model\AssetGroupExcludingIdUserId**](../Model/AssetGroupExcludingIdUserId.md)|  | [optional]

### Return type

void (empty response body)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

