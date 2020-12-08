# OpenAPI\Client\UserControllerApi

All URIs are relative to *https://atman-iot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**userControllerCreate**](UserControllerApi.md#userControllerCreate) | **POST** /user/register/{referenceCode} | 
[**userControllerCreateVirtual**](UserControllerApi.md#userControllerCreateVirtual) | **POST** /user/register/virtual | 
[**userControllerDeleteVirtualUserById**](UserControllerApi.md#userControllerDeleteVirtualUserById) | **DELETE** /users/virtualUser/{id} | 
[**userControllerGetVirtualUsers**](UserControllerApi.md#userControllerGetVirtualUsers) | **GET** /user/getVirtualUsers | 
[**userControllerLogin**](UserControllerApi.md#userControllerLogin) | **POST** /user/login | 



## userControllerCreate

> \OpenAPI\Client\Model\User userControllerCreate($reference_code, $user_excluding_id_username_is_virtual_roles_subscription_reference_code)



Used for registering a new <b>User</b>.<br><br><i><b>References:</b> <a href=\"/documentation.html#tocsuser\" target=\"_blank\">UserModel</a></i>

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new OpenAPI\Client\Api\UserControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$reference_code = 'reference_code_example'; // string | 
$user_excluding_id_username_is_virtual_roles_subscription_reference_code = new \OpenAPI\Client\Model\UserExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode(); // \OpenAPI\Client\Model\UserExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode | 

try {
    $result = $apiInstance->userControllerCreate($reference_code, $user_excluding_id_username_is_virtual_roles_subscription_reference_code);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling UserControllerApi->userControllerCreate: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reference_code** | **string**|  |
 **user_excluding_id_username_is_virtual_roles_subscription_reference_code** | [**\OpenAPI\Client\Model\UserExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode**](../Model/UserExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode.md)|  | [optional]

### Return type

[**\OpenAPI\Client\Model\User**](../Model/User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## userControllerCreateVirtual

> \OpenAPI\Client\Model\User userControllerCreateVirtual($user_excluding_id_username_is_virtual_roles_subscription_reference_code)



Used for registering a new <b>Virtual User</b> by a <b>User</b>, identified by the provided <i>token.</i><br><br><i><b>References:</b> <a href=\"/documentation.html#tocsuser\" target=\"_blank\">UserModel</a></i>

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\UserControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$user_excluding_id_username_is_virtual_roles_subscription_reference_code = new \OpenAPI\Client\Model\UserExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode(); // \OpenAPI\Client\Model\UserExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode | 

try {
    $result = $apiInstance->userControllerCreateVirtual($user_excluding_id_username_is_virtual_roles_subscription_reference_code);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling UserControllerApi->userControllerCreateVirtual: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_excluding_id_username_is_virtual_roles_subscription_reference_code** | [**\OpenAPI\Client\Model\UserExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode**](../Model/UserExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode.md)|  | [optional]

### Return type

[**\OpenAPI\Client\Model\User**](../Model/User.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## userControllerDeleteVirtualUserById

> userControllerDeleteVirtualUserById($id)



Deletes Virtual User by Id

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\UserControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 3.4; // float | 

try {
    $apiInstance->userControllerDeleteVirtualUserById($id);
} catch (Exception $e) {
    echo 'Exception when calling UserControllerApi->userControllerDeleteVirtualUserById: ', $e->getMessage(), PHP_EOL;
}
?>
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

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## userControllerGetVirtualUsers

> \OpenAPI\Client\Model\UserExcludingPasswdEmailRolesIsVirtualSubscriptionReferenceCode[] userControllerGetVirtualUsers()



Returns users under administrator account

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\UserControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->userControllerGetVirtualUsers();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling UserControllerApi->userControllerGetVirtualUsers: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\OpenAPI\Client\Model\UserExcludingPasswdEmailRolesIsVirtualSubscriptionReferenceCode[]**](../Model/UserExcludingPasswdEmailRolesIsVirtualSubscriptionReferenceCode.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## userControllerLogin

> \OpenAPI\Client\Model\Token userControllerLogin($user_excluding_id_email_is_virtual_roles_subscription_reference_code)



Used for <b>User</b> and <b>Virtual User</b> login. Exchanges <i>username/password</i> with an authorization <i>token</i>. Please enter the email provided durring registration in the username field.<br><br><i><b>References:</b> <a href=\"/documentation.html#tocsuser\" target=\"_blank\">UserModel</a></i>

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new OpenAPI\Client\Api\UserControllerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$user_excluding_id_email_is_virtual_roles_subscription_reference_code = new \OpenAPI\Client\Model\UserExcludingIdEmailIsVirtualRolesSubscriptionReferenceCode(); // \OpenAPI\Client\Model\UserExcludingIdEmailIsVirtualRolesSubscriptionReferenceCode | 

try {
    $result = $apiInstance->userControllerLogin($user_excluding_id_email_is_virtual_roles_subscription_reference_code);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling UserControllerApi->userControllerLogin: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_excluding_id_email_is_virtual_roles_subscription_reference_code** | [**\OpenAPI\Client\Model\UserExcludingIdEmailIsVirtualRolesSubscriptionReferenceCode**](../Model/UserExcludingIdEmailIsVirtualRolesSubscriptionReferenceCode.md)|  | [optional]

### Return type

[**\OpenAPI\Client\Model\Token**](../Model/Token.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)

