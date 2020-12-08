# OpenAPI\Server\Api\DashboardElementControllerApiInterface

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dashboardElementControllerCreate**](DashboardElementControllerApiInterface.md#dashboardElementControllerCreate) | **POST** /dashboard-element | 
[**dashboardElementControllerDeleteById**](DashboardElementControllerApiInterface.md#dashboardElementControllerDeleteById) | **DELETE** /dashboard-element/{id} | 
[**dashboardElementControllerFindByUserIdAssetIdLocation**](DashboardElementControllerApiInterface.md#dashboardElementControllerFindByUserIdAssetIdLocation) | **GET** /dashboard-elements/asset-id/{assetId}/user-id/{userId}/location/{location} | 
[**dashboardElementControllerMoveElementDown**](DashboardElementControllerApiInterface.md#dashboardElementControllerMoveElementDown) | **PATCH** /dashboard-element/{id}/move-down | 
[**dashboardElementControllerMoveElementUp**](DashboardElementControllerApiInterface.md#dashboardElementControllerMoveElementUp) | **PATCH** /dashboard-element/{id}/move-up | 


## Service Declaration
```yaml
# src/Acme/MyBundle/Resources/services.yml
services:
    # ...
    acme.my_bundle.api.dashboardElementController:
        class: Acme\MyBundle\Api\DashboardElementControllerApi
        tags:
            - { name: "open_api_server.api", api: "dashboardElementController" }
    # ...
```

## **dashboardElementControllerCreate**
> OpenAPI\Server\Model\DashboardElement dashboardElementControllerCreate($newDashboardElement)



### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/DashboardElementControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\DashboardElementControllerApiInterface;

class DashboardElementControllerApi implements DashboardElementControllerApiInterface
{

    // ...

    /**
     * Implementation of DashboardElementControllerApiInterface#dashboardElementControllerCreate
     */
    public function dashboardElementControllerCreate(NewDashboardElement $newDashboardElement = null)
    {
        // Implement the operation ...
    }

    // ...
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **newDashboardElement** | [**OpenAPI\Server\Model\NewDashboardElement**](../Model/NewDashboardElement.md)|  | [optional]

### Return type

[**OpenAPI\Server\Model\DashboardElement**](../Model/DashboardElement.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **dashboardElementControllerDeleteById**
> dashboardElementControllerDeleteById($id)



### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/DashboardElementControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\DashboardElementControllerApiInterface;

class DashboardElementControllerApi implements DashboardElementControllerApiInterface
{

    // ...

    /**
     * Implementation of DashboardElementControllerApiInterface#dashboardElementControllerDeleteById
     */
    public function dashboardElementControllerDeleteById($id)
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

## **dashboardElementControllerFindByUserIdAssetIdLocation**
> OpenAPI\Server\Model\DashboardElementWithScope dashboardElementControllerFindByUserIdAssetIdLocation($assetId, $userId, $location)



### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/DashboardElementControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\DashboardElementControllerApiInterface;

class DashboardElementControllerApi implements DashboardElementControllerApiInterface
{

    // ...

    /**
     * Implementation of DashboardElementControllerApiInterface#dashboardElementControllerFindByUserIdAssetIdLocation
     */
    public function dashboardElementControllerFindByUserIdAssetIdLocation($assetId, $userId, $location)
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
 **userId** | **float**|  |
 **location** | **string**|  |

### Return type

[**OpenAPI\Server\Model\DashboardElementWithScope**](../Model/DashboardElementWithScope.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **dashboardElementControllerMoveElementDown**
> dashboardElementControllerMoveElementDown($id)



### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/DashboardElementControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\DashboardElementControllerApiInterface;

class DashboardElementControllerApi implements DashboardElementControllerApiInterface
{

    // ...

    /**
     * Implementation of DashboardElementControllerApiInterface#dashboardElementControllerMoveElementDown
     */
    public function dashboardElementControllerMoveElementDown($id)
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

## **dashboardElementControllerMoveElementUp**
> dashboardElementControllerMoveElementUp($id)



### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/DashboardElementControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\DashboardElementControllerApiInterface;

class DashboardElementControllerApi implements DashboardElementControllerApiInterface
{

    // ...

    /**
     * Implementation of DashboardElementControllerApiInterface#dashboardElementControllerMoveElementUp
     */
    public function dashboardElementControllerMoveElementUp($id)
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

