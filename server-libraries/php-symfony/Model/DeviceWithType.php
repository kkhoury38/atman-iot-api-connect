<?php
/**
 * DeviceWithType
 *
 * PHP version 5
 *
 * @category Class
 * @package  OpenAPI\Server\Model
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

namespace OpenAPI\Server\Model;

use Symfony\Component\Validator\Constraints as Assert;
use JMS\Serializer\Annotation\Type;
use JMS\Serializer\Annotation\SerializedName;

/**
 * Class representing the DeviceWithType model.
 *
 * @package OpenAPI\Server\Model
 * @author  OpenAPI Generator team
 */
class DeviceWithType 
{
        /**
     * @var OpenAPI\Server\Model\DeviceType
     * @SerializedName("deviceType")
     * @Assert\NotNull()
     * @Assert\Type("OpenAPI\Server\Model\DeviceType")
     * @Type("OpenAPI\Server\Model\DeviceType")
     */
    protected $deviceType;

    /**
     * @var OpenAPI\Server\Model\Device
     * @SerializedName("device")
     * @Assert\NotNull()
     * @Assert\Type("OpenAPI\Server\Model\Device")
     * @Type("OpenAPI\Server\Model\Device")
     */
    protected $device;

    /**
     * Constructor
     * @param mixed[] $data Associated array of property values initializing the model
     */
    public function __construct(array $data = null)
    {
        $this->deviceType = isset($data['deviceType']) ? $data['deviceType'] : null;
        $this->device = isset($data['device']) ? $data['device'] : null;
    }

    /**
     * Gets deviceType.
     *
     * @return OpenAPI\Server\Model\DeviceType
     */
    public function getDeviceType(): DeviceType
    {
        return $this->deviceType;
    }

    /**
     * Sets deviceType.
     *
     * @param OpenAPI\Server\Model\DeviceType $deviceType
     *
     * @return $this
     */
    public function setDeviceType(DeviceType $deviceType)
    {
        $this->deviceType = $deviceType;

        return $this;
    }

    /**
     * Gets device.
     *
     * @return OpenAPI\Server\Model\Device
     */
    public function getDevice(): Device
    {
        return $this->device;
    }

    /**
     * Sets device.
     *
     * @param OpenAPI\Server\Model\Device $device
     *
     * @return $this
     */
    public function setDevice(Device $device)
    {
        $this->device = $device;

        return $this;
    }
}


