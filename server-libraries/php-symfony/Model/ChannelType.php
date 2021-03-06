<?php
/**
 * ChannelType
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
 * Class representing the ChannelType model.
 *
 * @package OpenAPI\Server\Model
 * @author  OpenAPI Generator team
 */
class ChannelType 
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
     * ChannelType name
     *
     * @var string
     * @SerializedName("name")
     * @Assert\NotNull()
     * @Assert\Type("string")
     * @Type("string")
     */
    protected $name;

    /**
     * ChannelType category
     *
     * @var string|null
     * @SerializedName("category")
     * @Assert\Type("string")
     * @Type("string")
     */
    protected $category;

    /**
     * ChannelType description
     *
     * @var string|null
     * @SerializedName("description")
     * @Assert\Type("string")
     * @Type("string")
     */
    protected $description;

    /**
     * Unit of measurement
     *
     * @var string|null
     * @SerializedName("unit")
     * @Assert\Type("string")
     * @Type("string")
     */
    protected $unit;

    /**
     * Type of data: UNDEFINED / SPOT_VALUE / COUNTER / TEXT
     *
     * @var string
     * @SerializedName("channelType")
     * @Assert\NotNull()
     * @Assert\Type("string")
     * @Type("string")
     */
    protected $channelType;

    /**
     * ID of DeviceType that ChannelType belongs to
     *
     * @var float
     * @SerializedName("deviceTypeId")
     * @Assert\NotNull()
     * @Assert\Type("float")
     * @Type("float")
     */
    protected $deviceTypeId;

    /**
     * Constructor
     * @param mixed[] $data Associated array of property values initializing the model
     */
    public function __construct(array $data = null)
    {
        $this->id = isset($data['id']) ? $data['id'] : null;
        $this->name = isset($data['name']) ? $data['name'] : null;
        $this->category = isset($data['category']) ? $data['category'] : null;
        $this->description = isset($data['description']) ? $data['description'] : null;
        $this->unit = isset($data['unit']) ? $data['unit'] : null;
        $this->channelType = isset($data['channelType']) ? $data['channelType'] : null;
        $this->deviceTypeId = isset($data['deviceTypeId']) ? $data['deviceTypeId'] : null;
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
     * Gets name.
     *
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Sets name.
     *
     * @param string $name  ChannelType name
     *
     * @return $this
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Gets category.
     *
     * @return string|null
     */
    public function getCategory()
    {
        return $this->category;
    }

    /**
     * Sets category.
     *
     * @param string|null $category  ChannelType category
     *
     * @return $this
     */
    public function setCategory($category = null)
    {
        $this->category = $category;

        return $this;
    }

    /**
     * Gets description.
     *
     * @return string|null
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Sets description.
     *
     * @param string|null $description  ChannelType description
     *
     * @return $this
     */
    public function setDescription($description = null)
    {
        $this->description = $description;

        return $this;
    }

    /**
     * Gets unit.
     *
     * @return string|null
     */
    public function getUnit()
    {
        return $this->unit;
    }

    /**
     * Sets unit.
     *
     * @param string|null $unit  Unit of measurement
     *
     * @return $this
     */
    public function setUnit($unit = null)
    {
        $this->unit = $unit;

        return $this;
    }

    /**
     * Gets channelType.
     *
     * @return string
     */
    public function getChannelType()
    {
        return $this->channelType;
    }

    /**
     * Sets channelType.
     *
     * @param string $channelType  Type of data: UNDEFINED / SPOT_VALUE / COUNTER / TEXT
     *
     * @return $this
     */
    public function setChannelType($channelType)
    {
        $this->channelType = $channelType;

        return $this;
    }

    /**
     * Gets deviceTypeId.
     *
     * @return float
     */
    public function getDeviceTypeId()
    {
        return $this->deviceTypeId;
    }

    /**
     * Sets deviceTypeId.
     *
     * @param float $deviceTypeId  ID of DeviceType that ChannelType belongs to
     *
     * @return $this
     */
    public function setDeviceTypeId($deviceTypeId)
    {
        $this->deviceTypeId = $deviceTypeId;

        return $this;
    }
}


