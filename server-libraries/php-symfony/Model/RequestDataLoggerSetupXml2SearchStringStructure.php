<?php
/**
 * RequestDataLoggerSetupXml2SearchStringStructure
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
 * Class representing the RequestDataLoggerSetupXml2SearchStringStructure model.
 *
 * (Schema options: { exclude: [ &#39;fileFormat&#39; ] })
 *
 * @package OpenAPI\Server\Model
 * @author  OpenAPI Generator team
 */
class RequestDataLoggerSetupXml2SearchStringStructure 
{
        /**
     * XML key containing parent attribute
     *
     * @var string
     * @SerializedName("key")
     * @Assert\NotNull()
     * @Assert\Type("string")
     * @Type("string")
     */
    protected $key;

    /**
     * Flag for selecting if parent value is the entire string contained in the provided XML Key.  If set to true performSplit must be defined
     *
     * @var bool
     * @SerializedName("isString")
     * @Assert\NotNull()
     * @Assert\Type("bool")
     * @Type("bool")
     */
    protected $isString;

    /**
     * @var OpenAPI\Server\Model\RequestDataLoggerSetupXml2SearchStringStructureSplit[]
     * @SerializedName("performSplit")
     * @Assert\NotNull()
     * @Assert\All({
     *   @Assert\Type("OpenAPI\Server\Model\RequestDataLoggerSetupXml2SearchStringStructureSplit")
     * })
     * @Type("array<OpenAPI\Server\Model\RequestDataLoggerSetupXml2SearchStringStructureSplit>")
     */
    protected $performSplit;

    /**
     * Constructor
     * @param mixed[] $data Associated array of property values initializing the model
     */
    public function __construct(array $data = null)
    {
        $this->key = isset($data['key']) ? $data['key'] : null;
        $this->isString = isset($data['isString']) ? $data['isString'] : null;
        $this->performSplit = isset($data['performSplit']) ? $data['performSplit'] : null;
    }

    /**
     * Gets key.
     *
     * @return string
     */
    public function getKey()
    {
        return $this->key;
    }

    /**
     * Sets key.
     *
     * @param string $key  XML key containing parent attribute
     *
     * @return $this
     */
    public function setKey($key)
    {
        $this->key = $key;

        return $this;
    }

    /**
     * Gets isString.
     *
     * @return bool
     */
    public function isIsString()
    {
        return $this->isString;
    }

    /**
     * Sets isString.
     *
     * @param bool $isString  Flag for selecting if parent value is the entire string contained in the provided XML Key.  If set to true performSplit must be defined
     *
     * @return $this
     */
    public function setIsString($isString)
    {
        $this->isString = $isString;

        return $this;
    }

    /**
     * Gets performSplit.
     *
     * @return OpenAPI\Server\Model\RequestDataLoggerSetupXml2SearchStringStructureSplit[]
     */
    public function getPerformSplit(): array
    {
        return $this->performSplit;
    }

    /**
     * Sets performSplit.
     *
     * @param OpenAPI\Server\Model\RequestDataLoggerSetupXml2SearchStringStructureSplit[] $performSplit
     *
     * @return $this
     */
    public function setPerformSplit(array $performSplit)
    {
        $this->performSplit = $performSplit;

        return $this;
    }
}


