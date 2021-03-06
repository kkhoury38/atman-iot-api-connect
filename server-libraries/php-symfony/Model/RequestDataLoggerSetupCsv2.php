<?php
/**
 * RequestDataLoggerSetupCsv2
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
 * Class representing the RequestDataLoggerSetupCsv2 model.
 *
 * @package OpenAPI\Server\Model
 * @author  OpenAPI Generator team
 */
class RequestDataLoggerSetupCsv2 
{
        /**
     * Delimiter used in CSV file
     *
     * @var string
     * @SerializedName("delimiter")
     * @Assert\NotNull()
     * @Assert\Type("string")
     * @Type("string")
     */
    protected $delimiter;

    /**
     * Decimal Point of values in CSV file
     *
     * @var string
     * @SerializedName("decimalPoint")
     * @Assert\NotNull()
     * @Assert\Type("string")
     * @Type("string")
     */
    protected $decimalPoint;

    /**
     * @var OpenAPI\Server\Model\RequestDataLoggerSetupCsv2TimeData
     * @SerializedName("timeData")
     * @Assert\NotNull()
     * @Assert\Type("OpenAPI\Server\Model\RequestDataLoggerSetupCsv2TimeData")
     * @Type("OpenAPI\Server\Model\RequestDataLoggerSetupCsv2TimeData")
     */
    protected $timeData;

    /**
     * @var OpenAPI\Server\Model\RequestDataLoggerSetupCsv2Data
     * @SerializedName("data")
     * @Assert\NotNull()
     * @Assert\Type("OpenAPI\Server\Model\RequestDataLoggerSetupCsv2Data")
     * @Type("OpenAPI\Server\Model\RequestDataLoggerSetupCsv2Data")
     */
    protected $data;

    /**
     * Provided Configuration Confirmation. Set to true to save current configuration
     *
     * @var bool
     * @SerializedName("confirm")
     * @Assert\NotNull()
     * @Assert\Type("bool")
     * @Type("bool")
     */
    protected $confirm;

    /**
     * Data File Format
     *
     * @var string
     * @SerializedName("fileFormat")
     * @Assert\NotNull()
     * @Assert\Type("string")
     * @Type("string")
     */
    protected $fileFormat;

    /**
     * Constructor
     * @param mixed[] $data Associated array of property values initializing the model
     */
    public function __construct(array $data = null)
    {
        $this->delimiter = isset($data['delimiter']) ? $data['delimiter'] : null;
        $this->decimalPoint = isset($data['decimalPoint']) ? $data['decimalPoint'] : null;
        $this->timeData = isset($data['timeData']) ? $data['timeData'] : null;
        $this->data = isset($data['data']) ? $data['data'] : null;
        $this->confirm = isset($data['confirm']) ? $data['confirm'] : null;
        $this->fileFormat = isset($data['fileFormat']) ? $data['fileFormat'] : null;
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
     * @param string $delimiter  Delimiter used in CSV file
     *
     * @return $this
     */
    public function setDelimiter($delimiter)
    {
        $this->delimiter = $delimiter;

        return $this;
    }

    /**
     * Gets decimalPoint.
     *
     * @return string
     */
    public function getDecimalPoint()
    {
        return $this->decimalPoint;
    }

    /**
     * Sets decimalPoint.
     *
     * @param string $decimalPoint  Decimal Point of values in CSV file
     *
     * @return $this
     */
    public function setDecimalPoint($decimalPoint)
    {
        $this->decimalPoint = $decimalPoint;

        return $this;
    }

    /**
     * Gets timeData.
     *
     * @return OpenAPI\Server\Model\RequestDataLoggerSetupCsv2TimeData
     */
    public function getTimeData(): RequestDataLoggerSetupCsv2TimeData
    {
        return $this->timeData;
    }

    /**
     * Sets timeData.
     *
     * @param OpenAPI\Server\Model\RequestDataLoggerSetupCsv2TimeData $timeData
     *
     * @return $this
     */
    public function setTimeData(RequestDataLoggerSetupCsv2TimeData $timeData)
    {
        $this->timeData = $timeData;

        return $this;
    }

    /**
     * Gets data.
     *
     * @return OpenAPI\Server\Model\RequestDataLoggerSetupCsv2Data
     */
    public function getData(): RequestDataLoggerSetupCsv2Data
    {
        return $this->data;
    }

    /**
     * Sets data.
     *
     * @param OpenAPI\Server\Model\RequestDataLoggerSetupCsv2Data $data
     *
     * @return $this
     */
    public function setData(RequestDataLoggerSetupCsv2Data $data)
    {
        $this->data = $data;

        return $this;
    }

    /**
     * Gets confirm.
     *
     * @return bool
     */
    public function isConfirm()
    {
        return $this->confirm;
    }

    /**
     * Sets confirm.
     *
     * @param bool $confirm  Provided Configuration Confirmation. Set to true to save current configuration
     *
     * @return $this
     */
    public function setConfirm($confirm)
    {
        $this->confirm = $confirm;

        return $this;
    }

    /**
     * Gets fileFormat.
     *
     * @return string
     */
    public function getFileFormat()
    {
        return $this->fileFormat;
    }

    /**
     * Sets fileFormat.
     *
     * @param string $fileFormat  Data File Format
     *
     * @return $this
     */
    public function setFileFormat($fileFormat)
    {
        $this->fileFormat = $fileFormat;

        return $this;
    }
}


