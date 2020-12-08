# OpenAPI\Server\Api\AssetControllerApiInterface

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assetControllerCreate**](AssetControllerApiInterface.md#assetControllerCreate) | **POST** /asset | 
[**assetControllerDeleteById**](AssetControllerApiInterface.md#assetControllerDeleteById) | **DELETE** /asset/{id} | 
[**assetControllerFind**](AssetControllerApiInterface.md#assetControllerFind) | **GET** /assets/{assetGroupId} | 
[**assetControllerFindByName**](AssetControllerApiInterface.md#assetControllerFindByName) | **GET** /asset/by-name/{assetName} | 
[**assetControllerFindByUserId**](AssetControllerApiInterface.md#assetControllerFindByUserId) | **GET** /assets/by-user/{userId} | 
[**assetControllerUpdateById**](AssetControllerApiInterface.md#assetControllerUpdateById) | **PATCH** /asset/{id} | 


## Service Declaration
```yaml
# src/Acme/MyBundle/Resources/services.yml
services:
    # ...
    acme.my_bundle.api.assetController:
        class: Acme\MyBundle\Api\AssetControllerApi
        tags:
            - { name: "open_api_server.api", api: "assetController" }
    # ...
```

## **assetControllerCreate**
> OpenAPI\Server\Model\Asset assetControllerCreate($assetExcludingId)



Used for creating a new <b>Asset</b>, by an authorized <b>User</b>, identified by the provided <i>token</i>. An <b>Asset</b> is a way of logical grouping of <b>Devices</b>. One <b>Asset</b> can contain many <b>Devices</b> and can belong to one <b>AssetGroup</b>. <br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-assetgroupcontroller\" target=\"_blank\">AssetGroupController</a>, <a href=\"/documentation.html#atman-iot-devicecontroller\" target=\"_blank\">DeviceController</a>, <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocsasset\" target=\"_blank\">AssetModel</a></i>

### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/AssetControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\AssetControllerApiInterface;

class AssetControllerApi implements AssetControllerApiInterface
{

    // ...

    /**
     * Implementation of AssetControllerApiInterface#assetControllerCreate
     */
    public function assetControllerCreate(AssetExcludingId $assetExcludingId = null)
    {
        // Implement the operation ...
    }

    // ...
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetExcludingId** | [**OpenAPI\Server\Model\AssetExcludingId**](../Model/AssetExcludingId.md)|  | [optional]

### Return type

[**OpenAPI\Server\Model\Asset**](../Model/Asset.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **assetControllerDeleteById**
> assetControllerDeleteById($id)



Used for deleting an <b>Asset</b>, identified by <i>id</i> by an authorized <b>User</b> identified by the provided <i>token</i>. <br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocsasset\" target=\"_blank\">AssetModel</a></i>

### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/AssetControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\AssetControllerApiInterface;

class AssetControllerApi implements AssetControllerApiInterface
{

    // ...

    /**
     * Implementation of AssetControllerApiInterface#assetControllerDeleteById
     */
    public function assetControllerDeleteById($id)
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

## **assetControllerFind**
> OpenAPI\Server\Model\Asset assetControllerFind($assetGroupId)



Used for getting the <b>Assets</b> belonging to an <b>AssetGroup</b>, in turn belonging to an authorized <b>User</b> or <b>Virtual User</b>.  An <b>Asset</b> is a way of logical grouping of <b>Devices</b>. One <b>Asset</b> can contain many <b>Devices</b> and can belong to the <b>AssetGroup</b> with the provided <i>assetGroupId</i>. An <b>AssetGroup</b> can have many <b>Assets</b>. <i><b>. <br><br>References:</b> <a href=\"/documentation.html#atman-iot-assetgroupcontroller\" target=\"_blank\">AssetGroupController</a>, <a href=\"/documentation.html#atman-iot-devicecontroller\" target=\"_blank\">DeviceController</a>, <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocsasset\" target=\"_blank\">AssetModel</a></i>

### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/AssetControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\AssetControllerApiInterface;

class AssetControllerApi implements AssetControllerApiInterface
{

    // ...

    /**
     * Implementation of AssetControllerApiInterface#assetControllerFind
     */
    public function assetControllerFind($assetGroupId)
    {
        // Implement the operation ...
    }

    // ...
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetGroupId** | **float**|  |

### Return type

[**OpenAPI\Server\Model\Asset**](../Model/Asset.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **assetControllerFindByName**
> OpenAPI\Server\Model\Asset assetControllerFindByName($assetName)



Used for getting the <b>Asset</b> identified by <i>assetName</i>, by an authorized <b>User</b> or <b>Virtual User</b> identified by the provided <i>token</i>. An <b>Asset</b> is a way of logical grouping of <b>Devices</b>. One <b>Asset</b> can contain many <b>Devices</b> and can belong to one <b>AssetGroup</b>.<br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-assetgroupcontroller\" target=\"_blank\">AssetGroupController</a>, <a href=\"/documentation.html#atman-iot-devicecontroller\" target=\"_blank\">DeviceController</a>, <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocsasset\" target=\"_blank\">AssetModel</a></i>

### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/AssetControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\AssetControllerApiInterface;

class AssetControllerApi implements AssetControllerApiInterface
{

    // ...

    /**
     * Implementation of AssetControllerApiInterface#assetControllerFindByName
     */
    public function assetControllerFindByName($assetName)
    {
        // Implement the operation ...
    }

    // ...
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetName** | **string**|  |

### Return type

[**OpenAPI\Server\Model\Asset**](../Model/Asset.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **assetControllerFindByUserId**
> OpenAPI\Server\Model\Asset assetControllerFindByUserId($userId)



Used for getting the <b>Assets</b> of an authorized <b>User</b> identified by the provided <i>userId</i>, by an authorized <b>Admin</b>. An <b>Asset</b> is a way of logical grouping of <b>Devices</b>. One <b>Asset</b> can contain many <b>Devices</b> and can belong to one <b>AssetGroup</b>.<br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-assetgroupcontroller\" target=\"_blank\">AssetGroupController</a>, <a href=\"/documentation.html#atman-iot-devicecontroller\" target=\"_blank\">DeviceController</a>, <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocsasset\" target=\"_blank\">AssetModel</a></i>

### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/AssetControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\AssetControllerApiInterface;

class AssetControllerApi implements AssetControllerApiInterface
{

    // ...

    /**
     * Implementation of AssetControllerApiInterface#assetControllerFindByUserId
     */
    public function assetControllerFindByUserId($userId)
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

[**OpenAPI\Server\Model\Asset**](../Model/Asset.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **assetControllerUpdateById**
> assetControllerUpdateById($id, $assetExcludingIdAssetGroupId)



Edit (Patch) Asset by Id

### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/AssetControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\AssetControllerApiInterface;

class AssetControllerApi implements AssetControllerApiInterface
{

    // ...

    /**
     * Implementation of AssetControllerApiInterface#assetControllerUpdateById
     */
    public function assetControllerUpdateById($id, AssetExcludingIdAssetGroupId $assetExcludingIdAssetGroupId = null)
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
 **assetExcludingIdAssetGroupId** | [**OpenAPI\Server\Model\AssetExcludingIdAssetGroupId**](../Model/AssetExcludingIdAssetGroupId.md)|  | [optional]

### Return type

void (empty response body)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

