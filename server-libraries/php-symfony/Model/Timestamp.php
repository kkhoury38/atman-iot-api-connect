<?php
/**
 * Timestamp
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
 * Class representing the Timestamp model.
 *
 * @package OpenAPI\Server\Model
 * @author  OpenAPI Generator team
 */
class Timestamp 
{
        /**
     * Timestamp (same as timestamp property)
     *
     * @var \DateTime|null
     * @SerializedName("value")
     * @Assert\DateTime()
     * @Type("DateTime")
     */
    protected $value;

    /**
     * Timestamp format
     *
     * @var string|null
     * @SerializedName("format")
     * @Assert\Type("string")
     * @Type("string")
     */
    protected $format;

    /**
     * Timestamp time zone
     *
     * @var string|null
     * @SerializedName("timezone")
     * @Assert\Type("string")
     * @Type("string")
     */
    protected $timezone;

    /**
     * Constructor
     * @param mixed[] $data Associated array of property values initializing the model
     */
    public function __construct(array $data = null)
    {
        $this->value = isset($data['value']) ? $data['value'] : null;
        $this->format = isset($data['format']) ? $data['format'] : null;
        $this->timezone = isset($data['timezone']) ? $data['timezone'] : null;
    }

    /**
     * Gets value.
     *
     * @return \DateTime|null
     */
    public function getValue(): ?\DateTime
    {
        return $this->value;
    }

    /**
     * Sets value.
     *
     * @param \DateTime|null $value  Timestamp (same as timestamp property)
     *
     * @return $this
     */
    public function setValue(\DateTime $value = null)
    {
        $this->value = $value;

        return $this;
    }

    /**
     * Gets format.
     *
     * @return string|null
     */
    public function getFormat()
    {
        return $this->format;
    }

    /**
     * Sets format.
     *
     * @param string|null $format  Timestamp format
     *
     * @return $this
     */
    public function setFormat($format = null)
    {
        $this->format = $format;

        return $this;
    }

    /**
     * Gets timezone.
     *
     * @return string|null
     */
    public function getTimezone()
    {
        return $this->timezone;
    }

    /**
     * Sets timezone.
     *
     * @param string|null $timezone  Timestamp time zone
     *
     * @return $this
     */
    public function setTimezone($timezone = null)
    {
        $this->timezone = $timezone;

        return $this;
    }
}


