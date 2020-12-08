<?php
/**
 * Device
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
 * Class representing the Device model.
 *
 * @package OpenAPI\Server\Model
 * @author  OpenAPI Generator team
 */
class Device 
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
     * Device description
     *
     * @var string|null
     * @SerializedName("description")
     * @Assert\Type("string")
     * @Type("string")
     */
    protected $description;

    /**
     * Device serial number
     *
     * @var string
     * @SerializedName("serialNo")
     * @Assert\NotNull()
     * @Assert\Type("string")
     * @Type("string")
     */
    protected $serialNo;

    /**
     * ID of DataLogger that Device belongs to
     *
     * @var float
     * @SerializedName("dataLoggerId")
     * @Assert\NotNull()
     * @Assert\Type("float")
     * @Type("float")
     */
    protected $dataLoggerId;

    /**
     * @var float|null
     * @SerializedName("deviceTypeId")
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
        $this->description = isset($data['description']) ? $data['description'] : null;
        $this->serialNo = isset($data['serialNo']) ? $data['serialNo'] : null;
        $this->dataLoggerId = isset($data['dataLoggerId']) ? $data['dataLoggerId'] : null;
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
     * @param string|null $description  Device description
     *
     * @return $this
     */
    public function setDescription($description = null)
    {
        $this->description = $description;

        return $this;
    }

    /**
     * Gets serialNo.
     *
     * @return string
     */
    public function getSerialNo()
    {
        return $this->serialNo;
    }

    /**
     * Sets serialNo.
     *
     * @param string $serialNo  Device serial number
     *
     * @return $this
     */
    public function setSerialNo($serialNo)
    {
        $this->serialNo = $serialNo;

        return $this;
    }

    /**
     * Gets dataLoggerId.
     *
     * @return float
     */
    public function getDataLoggerId()
    {
        return $this->dataLoggerId;
    }

    /**
     * Sets dataLoggerId.
     *
     * @param float $dataLoggerId  ID of DataLogger that Device belongs to
     *
     * @return $this
     */
    public function setDataLoggerId($dataLoggerId)
    {
        $this->dataLoggerId = $dataLoggerId;

        return $this;
    }

    /**
     * Gets deviceTypeId.
     *
     * @return float|null
     */
    public function getDeviceTypeId()
    {
        return $this->deviceTypeId;
    }

    /**
     * Sets deviceTypeId.
     *
     * @param float|null $deviceTypeId
     *
     * @return $this
     */
    public function setDeviceTypeId($deviceTypeId = null)
    {
        $this->deviceTypeId = $deviceTypeId;

        return $this;
    }
}


