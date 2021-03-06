<?php
/**
 * ChannelWithRelations
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
 * Class representing the ChannelWithRelations model.
 *
 * (Schema options: { includeRelations: true })
 *
 * @package OpenAPI\Server\Model
 * @author  OpenAPI Generator team
 */
class ChannelWithRelations 
{
        /**
     * Automatically generated ID
     *
     * @var float|null
     * @SerializedName("id")
     * @Assert\Type("float")
     * @Type("float")
     */
    protected $id;

    /**
     * Enable channel monitoring - data recording - by setting to true
     *
     * @var bool
     * @SerializedName("monitor")
     * @Assert\NotNull()
     * @Assert\Type("bool")
     * @Type("bool")
     */
    protected $monitor;

    /**
     * Timestamp
     *
     * @var \DateTime|null
     * @SerializedName("lastTimestamp")
     * @Assert\DateTime()
     * @Type("DateTime")
     */
    protected $lastTimestamp;

    /**
     * Channel Status
     *
     * @var string|null
     * @SerializedName("status")
     * @Assert\Type("string")
     * @Type("string")
     */
    protected $status;

    /**
     * ID of Device that Channel belongs to
     *
     * @var float
     * @SerializedName("deviceId")
     * @Assert\NotNull()
     * @Assert\Type("float")
     * @Type("float")
     */
    protected $deviceId;

    /**
     * ID of ChannelType associated with Channel
     *
     * @var float
     * @SerializedName("channelTypeId")
     * @Assert\NotNull()
     * @Assert\Type("float")
     * @Type("float")
     */
    protected $channelTypeId;

    /**
     * @var OpenAPI\Server\Model\DeviceWithRelations|null
     * @SerializedName("device")
     * @Assert\Type("OpenAPI\Server\Model\DeviceWithRelations")
     * @Type("OpenAPI\Server\Model\DeviceWithRelations")
     */
    protected $device;

    /**
     * @var OpenAPI\Server\Model\ChannelTypeWithRelations|null
     * @SerializedName("channelType")
     * @Assert\Type("OpenAPI\Server\Model\ChannelTypeWithRelations")
     * @Type("OpenAPI\Server\Model\ChannelTypeWithRelations")
     */
    protected $channelType;

    /**
     * Constructor
     * @param mixed[] $data Associated array of property values initializing the model
     */
    public function __construct(array $data = null)
    {
        $this->id = isset($data['id']) ? $data['id'] : null;
        $this->monitor = isset($data['monitor']) ? $data['monitor'] : null;
        $this->lastTimestamp = isset($data['lastTimestamp']) ? $data['lastTimestamp'] : null;
        $this->status = isset($data['status']) ? $data['status'] : null;
        $this->deviceId = isset($data['deviceId']) ? $data['deviceId'] : null;
        $this->channelTypeId = isset($data['channelTypeId']) ? $data['channelTypeId'] : null;
        $this->device = isset($data['device']) ? $data['device'] : null;
        $this->channelType = isset($data['channelType']) ? $data['channelType'] : null;
    }

    /**
     * Gets id.
     *
     * @return float|null
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Sets id.
     *
     * @param float|null $id  Automatically generated ID
     *
     * @return $this
     */
    public function setId($id = null)
    {
        $this->id = $id;

        return $this;
    }

    /**
     * Gets monitor.
     *
     * @return bool
     */
    public function isMonitor()
    {
        return $this->monitor;
    }

    /**
     * Sets monitor.
     *
     * @param bool $monitor  Enable channel monitoring - data recording - by setting to true
     *
     * @return $this
     */
    public function setMonitor($monitor)
    {
        $this->monitor = $monitor;

        return $this;
    }

    /**
     * Gets lastTimestamp.
     *
     * @return \DateTime|null
     */
    public function getLastTimestamp(): ?\DateTime
    {
        return $this->lastTimestamp;
    }

    /**
     * Sets lastTimestamp.
     *
     * @param \DateTime|null $lastTimestamp  Timestamp
     *
     * @return $this
     */
    public function setLastTimestamp(\DateTime $lastTimestamp = null)
    {
        $this->lastTimestamp = $lastTimestamp;

        return $this;
    }

    /**
     * Gets status.
     *
     * @return string|null
     */
    public function getStatus()
    {
        return $this->status;
    }

    /**
     * Sets status.
     *
     * @param string|null $status  Channel Status
     *
     * @return $this
     */
    public function setStatus($status = null)
    {
        $this->status = $status;

        return $this;
    }

    /**
     * Gets deviceId.
     *
     * @return float
     */
    public function getDeviceId()
    {
        return $this->deviceId;
    }

    /**
     * Sets deviceId.
     *
     * @param float $deviceId  ID of Device that Channel belongs to
     *
     * @return $this
     */
    public function setDeviceId($deviceId)
    {
        $this->deviceId = $deviceId;

        return $this;
    }

    /**
     * Gets channelTypeId.
     *
     * @return float
     */
    public function getChannelTypeId()
    {
        return $this->channelTypeId;
    }

    /**
     * Sets channelTypeId.
     *
     * @param float $channelTypeId  ID of ChannelType associated with Channel
     *
     * @return $this
     */
    public function setChannelTypeId($channelTypeId)
    {
        $this->channelTypeId = $channelTypeId;

        return $this;
    }

    /**
     * Gets device.
     *
     * @return OpenAPI\Server\Model\DeviceWithRelations|null
     */
    public function getDevice(): ?DeviceWithRelations
    {
        return $this->device;
    }

    /**
     * Sets device.
     *
     * @param OpenAPI\Server\Model\DeviceWithRelations|null $device
     *
     * @return $this
     */
    public function setDevice(DeviceWithRelations $device = null)
    {
        $this->device = $device;

        return $this;
    }

    /**
     * Gets channelType.
     *
     * @return OpenAPI\Server\Model\ChannelTypeWithRelations|null
     */
    public function getChannelType(): ?ChannelTypeWithRelations
    {
        return $this->channelType;
    }

    /**
     * Sets channelType.
     *
     * @param OpenAPI\Server\Model\ChannelTypeWithRelations|null $channelType
     *
     * @return $this
     */
    public function setChannelType(ChannelTypeWithRelations $channelType = null)
    {
        $this->channelType = $channelType;

        return $this;
    }
}


