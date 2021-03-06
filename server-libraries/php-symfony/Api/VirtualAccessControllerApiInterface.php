<?php
/**
 * VirtualAccessControllerApiInterface
 * PHP version 5
 *
 * @category Class
 * @package  OpenAPI\Server
 * @author   OpenAPI Generator team
 * @link     https://github.com/openapitools/openapi-generator
 */

/**
 * Atman IoT
 *
 * Atman IoT Server
 *
 * The version of the OpenAPI document: 3.0.1
 * Contact: k.khoury@k-ren.gr
 * Generated by: https://github.com/openapitools/openapi-generator.git
 *
 */

/**
 * NOTE: This class is auto generated by the openapi generator program.
 * https://github.com/openapitools/openapi-generator
 * Do not edit the class manually.
 */

namespace OpenAPI\Server\Api;

use Symfony\Component\HttpFoundation\File\UploadedFile;
use OpenAPI\Server\Model\RequestVirtualAccessRightExcludingAssetGroupId;
use OpenAPI\Server\Model\RequestVirtualAccessRightExcludingAssetId;
use OpenAPI\Server\Model\VirtualAccess;

/**
 * VirtualAccessControllerApiInterface Interface Doc Comment
 *
 * @category Interface
 * @package  OpenAPI\Server\Api
 * @author   OpenAPI Generator team
 * @link     https://github.com/openapitools/openapi-generator
 */
interface VirtualAccessControllerApiInterface
{

    /**
     * Sets authentication method bearerAuth
     *
     * @param string $value Value of the bearerAuth authentication method.
     *
     * @return void
     */
    public function setbearerAuth($value);

    /**
     * Operation virtualAccessControllerCreateAccessByGroup
     *
     * @param  OpenAPI\Server\Model\RequestVirtualAccessRightExcludingAssetId $requestVirtualAccessRightExcludingAssetId   (optional)
     * @param  integer $responseCode     The HTTP response code to return
     * @param  array   $responseHeaders  Additional HTTP headers to return with the response ()
     *
     * @return OpenAPI\Server\Model\VirtualAccess[]
     *
     */
    public function virtualAccessControllerCreateAccessByGroup(RequestVirtualAccessRightExcludingAssetId $requestVirtualAccessRightExcludingAssetId = null, &$responseCode, array &$responseHeaders);

    /**
     * Operation virtualAccessControllerCreateAccessByRight
     *
     * @param  OpenAPI\Server\Model\RequestVirtualAccessRightExcludingAssetGroupId $requestVirtualAccessRightExcludingAssetGroupId   (optional)
     * @param  integer $responseCode     The HTTP response code to return
     * @param  array   $responseHeaders  Additional HTTP headers to return with the response ()
     *
     * @return OpenAPI\Server\Model\VirtualAccess
     *
     */
    public function virtualAccessControllerCreateAccessByRight(RequestVirtualAccessRightExcludingAssetGroupId $requestVirtualAccessRightExcludingAssetGroupId = null, &$responseCode, array &$responseHeaders);

    /**
     * Operation virtualAccessControllerDeleteById
     *
     * @param  float $id   (required)
     * @param  integer $responseCode     The HTTP response code to return
     * @param  array   $responseHeaders  Additional HTTP headers to return with the response ()
     *
     * @return void
     *
     */
    public function virtualAccessControllerDeleteById($id, &$responseCode, array &$responseHeaders);

    /**
     * Operation virtualAccessControllerFindByUserId
     *
     * @param  float $userId   (required)
     * @param  integer $responseCode     The HTTP response code to return
     * @param  array   $responseHeaders  Additional HTTP headers to return with the response ()
     *
     * @return OpenAPI\Server\Model\VirtualAccess[]
     *
     */
    public function virtualAccessControllerFindByUserId($userId, &$responseCode, array &$responseHeaders);
}
