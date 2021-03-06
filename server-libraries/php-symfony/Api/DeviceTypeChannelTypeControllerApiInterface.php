<?php
/**
 * DeviceTypeChannelTypeControllerApiInterface
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
use OpenAPI\Server\Model\ChannelType;
use OpenAPI\Server\Model\ChannelTypeExcludingIdDeviceTypeId;
use OpenAPI\Server\Model\ChannelTypeExcludingIdNameDeviceTypeId;
use OpenAPI\Server\Model\ChannelTypeExcludingNameDescriptionUnitChannelTypeDeviceTypeId;
use OpenAPI\Server\Model\LoopbackCount;

/**
 * DeviceTypeChannelTypeControllerApiInterface Interface Doc Comment
 *
 * @category Interface
 * @package  OpenAPI\Server\Api
 * @author   OpenAPI Generator team
 * @link     https://github.com/openapitools/openapi-generator
 */
interface DeviceTypeChannelTypeControllerApiInterface
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
     * Operation deviceTypeChannelTypeControllerCount
     *
     * @param  float $deviceTypeId   (required)
     * @param  integer $responseCode     The HTTP response code to return
     * @param  array   $responseHeaders  Additional HTTP headers to return with the response ()
     *
     * @return OpenAPI\Server\Model\LoopbackCount
     *
     */
    public function deviceTypeChannelTypeControllerCount($deviceTypeId, &$responseCode, array &$responseHeaders);

    /**
     * Operation deviceTypeChannelTypeControllerCreate
     *
     * @param  float $deviceTypeId   (required)
     * @param  OpenAPI\Server\Model\ChannelTypeExcludingIdDeviceTypeId $channelTypeExcludingIdDeviceTypeId   (optional)
     * @param  integer $responseCode     The HTTP response code to return
     * @param  array   $responseHeaders  Additional HTTP headers to return with the response ()
     *
     * @return OpenAPI\Server\Model\ChannelType
     *
     */
    public function deviceTypeChannelTypeControllerCreate($deviceTypeId, ChannelTypeExcludingIdDeviceTypeId $channelTypeExcludingIdDeviceTypeId = null, &$responseCode, array &$responseHeaders);

    /**
     * Operation deviceTypeChannelTypeControllerDeviceTypeChannelCategories
     *
     * @param  float $deviceTypeId   (required)
     * @param  integer $responseCode     The HTTP response code to return
     * @param  array   $responseHeaders  Additional HTTP headers to return with the response ()
     *
     * @return OpenAPI\Server\Model\ChannelTypeExcludingNameDescriptionUnitChannelTypeDeviceTypeId[]
     *
     */
    public function deviceTypeChannelTypeControllerDeviceTypeChannelCategories($deviceTypeId, &$responseCode, array &$responseHeaders);

    /**
     * Operation deviceTypeChannelTypeControllerFind
     *
     * @param  float $deviceTypeId   (required)
     * @param  float $page   (required)
     * @param  float $count   (required)
     * @param  integer $responseCode     The HTTP response code to return
     * @param  array   $responseHeaders  Additional HTTP headers to return with the response ()
     *
     * @return OpenAPI\Server\Model\ChannelType[]
     *
     */
    public function deviceTypeChannelTypeControllerFind($deviceTypeId, $page, $count, &$responseCode, array &$responseHeaders);

    /**
     * Operation deviceTypeChannelTypeControllerUpdateById
     *
     * @param  float $channelTypeId   (required)
     * @param  OpenAPI\Server\Model\ChannelTypeExcludingIdNameDeviceTypeId $channelTypeExcludingIdNameDeviceTypeId   (optional)
     * @param  integer $responseCode     The HTTP response code to return
     * @param  array   $responseHeaders  Additional HTTP headers to return with the response ()
     *
     * @return void
     *
     */
    public function deviceTypeChannelTypeControllerUpdateById($channelTypeId, ChannelTypeExcludingIdNameDeviceTypeId $channelTypeExcludingIdNameDeviceTypeId = null, &$responseCode, array &$responseHeaders);
}
