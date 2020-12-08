<?php
/**
 * RequestDataLoggerSetupXml2SearchStringStructureSplit
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
 * Class representing the RequestDataLoggerSetupXml2SearchStringStructureSplit model.
 *
 * (Schema options: { exclude: [ &#39;fileFormat&#39; ] })
 *
 * @package OpenAPI\Server\Model
 * @author  OpenAPI Generator team
 */
class RequestDataLoggerSetupXml2SearchStringStructureSplit 
{
        /**
     * Delimiter used to split the string in the provided XML Key
     *
     * @var string
     * @SerializedName("delimiter")
     * @Assert\NotNull()
     * @Assert\Type("string")
     * @Type("string")
     */
    protected $delimiter;

    /**
     * Location of the required value in string split using delimmiter
     *
     * @var float
     * @SerializedName("location")
     * @Assert\NotNull()
     * @Assert\Type("float")
     * @Type("float")
     */
    protected $location;

    /**
     * Constructor
     * @param mixed[] $data Associated array of property values initializing the model
     */
    public function __construct(array $data = null)
    {
        $this->delimiter = isset($data['delimiter']) ? $data['delimiter'] : null;
        $this->location = isset($data['location']) ? $data['location'] : null;
    }

    /**
     * Gets delimiter.
     *
     * @return string
     */
    public function getDelimiter()
    {
        return $this->delimiter;
    }

    /**
     * Sets delimiter.
     *
     * @param string $delimiter  Delimiter used to split the string in the provided XML Key
     *
     * @return $this
     */
    public function setDelimiter($delimiter)
    {
        $this->delimiter = $delimiter;

        return $this;
    }

    /**
     * Gets location.
     *
     * @return float
     */
    public function getLocation()
    {
        return $this->location;
    }

    /**
     * Sets location.
     *
     * @param float $location  Location of the required value in string split using delimmiter
     *
     * @return $this
     */
    public function setLocation($location)
    {
        $this->location = $location;

        return $this;
    }
}


