# OpenAPI\Server\Api\SchedulerControllerApiInterface

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**schedulerControllerProcessEvents**](SchedulerControllerApiInterface.md#schedulerControllerProcessEvents) | **GET** /scheduler/process/events/{attempt}/{serverKey} | 
[**schedulerControllerProcessFtpRejected**](SchedulerControllerApiInterface.md#schedulerControllerProcessFtpRejected) | **GET** /scheduler/process/ftp-rejected/{serverKey} | 


## Service Declaration
```yaml
# src/Acme/MyBundle/Resources/services.yml
services:
    # ...
    acme.my_bundle.api.schedulerController:
        class: Acme\MyBundle\Api\SchedulerControllerApi
        tags:
            - { name: "open_api_server.api", api: "schedulerController" }
    # ...
```

## **schedulerControllerProcessEvents**
> schedulerControllerProcessEvents($attempt, $serverKey)



### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/SchedulerControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\SchedulerControllerApiInterface;

class SchedulerControllerApi implements SchedulerControllerApiInterface
{

    // ...

    /**
     * Implementation of SchedulerControllerApiInterface#schedulerControllerProcessEvents
     */
    public function schedulerControllerProcessEvents($attempt, $serverKey)
    {
        // Implement the operation ...
    }

    // ...
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attempt** | **float**|  |
 **serverKey** | **string**|  |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **schedulerControllerProcessFtpRejected**
> schedulerControllerProcessFtpRejected($serverKey)



### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/SchedulerControllerApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\SchedulerControllerApiInterface;

class SchedulerControllerApi implements SchedulerControllerApiInterface
{

    // ...

    /**
     * Implementation of SchedulerControllerApiInterface#schedulerControllerProcessFtpRejected
     */
    public function schedulerControllerProcessFtpRejected($serverKey)
    {
        // Implement the operation ...
    }

    // ...
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serverKey** | **string**|  |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

