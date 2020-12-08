<?php
/**
 * RequestDataLoggerSetupCsv2
 *
 * PHP version 5
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * Atman IoT
 *
 * Atman IoT Server
 *
 * The version of the OpenAPI document: 3.0.1
 * Contact: k.khoury@k-ren.gr
 * Generated by: https://openapi-generator.tech
 * OpenAPI Generator version: 4.3.1
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace OpenAPI\Client\Model;

use \ArrayAccess;
use \OpenAPI\Client\ObjectSerializer;

/**
 * RequestDataLoggerSetupCsv2 Class Doc Comment
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */
class RequestDataLoggerSetupCsv2 implements ModelInterface, ArrayAccess
{
    const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'RequestDataLoggerSetupCsv2';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'delimiter' => 'string',
        'decimal_point' => 'string',
        'time_data' => '\OpenAPI\Client\Model\RequestDataLoggerSetupCsv2TimeData',
        'data' => '\OpenAPI\Client\Model\RequestDataLoggerSetupCsv2Data',
        'confirm' => 'bool',
        'file_format' => 'string'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPIFormats = [
        'delimiter' => null,
        'decimal_point' => null,
        'time_data' => null,
        'data' => null,
        'confirm' => null,
        'file_format' => null
    ];

    /**
     * Array of property to type mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function openAPITypes()
    {
        return self::$openAPITypes;
    }

    /**
     * Array of property to format mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function openAPIFormats()
    {
        return self::$openAPIFormats;
    }

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @var string[]
     */
    protected static $attributeMap = [
        'delimiter' => 'delimiter',
        'decimal_point' => 'decimalPoint',
        'time_data' => 'timeData',
        'data' => 'data',
        'confirm' => 'confirm',
        'file_format' => 'fileFormat'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'delimiter' => 'setDelimiter',
        'decimal_point' => 'setDecimalPoint',
        'time_data' => 'setTimeData',
        'data' => 'setData',
        'confirm' => 'setConfirm',
        'file_format' => 'setFileFormat'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'delimiter' => 'getDelimiter',
        'decimal_point' => 'getDecimalPoint',
        'time_data' => 'getTimeData',
        'data' => 'getData',
        'confirm' => 'getConfirm',
        'file_format' => 'getFileFormat'
    ];

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @return array
     */
    public static function attributeMap()
    {
        return self::$attributeMap;
    }

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @return array
     */
    public static function setters()
    {
        return self::$setters;
    }

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @return array
     */
    public static function getters()
    {
        return self::$getters;
    }

    /**
     * The original name of the model.
     *
     * @return string
     */
    public function getModelName()
    {
        return self::$openAPIModelName;
    }

    

    

    /**
     * Associative array for storing property values
     *
     * @var mixed[]
     */
    protected $container = [];

    /**
     * Constructor
     *
     * @param mixed[] $data Associated array of property values
     *                      initializing the model
     */
    public function __construct(array $data = null)
    {
        $this->container['delimiter'] = isset($data['delimiter']) ? $data['delimiter'] : null;
        $this->container['decimal_point'] = isset($data['decimal_point']) ? $data['decimal_point'] : null;
        $this->container['time_data'] = isset($data['time_data']) ? $data['time_data'] : null;
        $this->container['data'] = isset($data['data']) ? $data['data'] : null;
        $this->container['confirm'] = isset($data['confirm']) ? $data['confirm'] : null;
        $this->container['file_format'] = isset($data['file_format']) ? $data['file_format'] : null;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

        if ($this->container['delimiter'] === null) {
            $invalidProperties[] = "'delimiter' can't be null";
        }
        if ($this->container['decimal_point'] === null) {
            $invalidProperties[] = "'decimal_point' can't be null";
        }
        if ($this->container['time_data'] === null) {
            $invalidProperties[] = "'time_data' can't be null";
        }
        if ($this->container['data'] === null) {
            $invalidProperties[] = "'data' can't be null";
        }
        if ($this->container['confirm'] === null) {
            $invalidProperties[] = "'confirm' can't be null";
        }
        if ($this->container['file_format'] === null) {
            $invalidProperties[] = "'file_format' can't be null";
        }
        return $invalidProperties;
    }

    /**
     * Validate all the properties in the model
     * return true if all passed
     *
     * @return bool True if all properties are valid
     */
    public function valid()
    {
        return count($this->listInvalidProperties()) === 0;
    }


    /**
     * Gets delimiter
     *
     * @return string
     */
    public function getDelimiter()
    {
        return $this->container['delimiter'];
    }

    /**
     * Sets delimiter
     *
     * @param string $delimiter Delimiter used in CSV file
     *
     * @return $this
     */
    public function setDelimiter($delimiter)
    {
        $this->container['delimiter'] = $delimiter;

        return $this;
    }

    /**
     * Gets decimal_point
     *
     * @return string
     */
    public function getDecimalPoint()
    {
        return $this->container['decimal_point'];
    }

    /**
     * Sets decimal_point
     *
     * @param string $decimal_point Decimal Point of values in CSV file
     *
     * @return $this
     */
    public function setDecimalPoint($decimal_point)
    {
        $this->container['decimal_point'] = $decimal_point;

        return $this;
    }

    /**
     * Gets time_data
     *
     * @return \OpenAPI\Client\Model\RequestDataLoggerSetupCsv2TimeData
     */
    public function getTimeData()
    {
        return $this->container['time_data'];
    }

    /**
     * Sets time_data
     *
     * @param \OpenAPI\Client\Model\RequestDataLoggerSetupCsv2TimeData $time_data time_data
     *
     * @return $this
     */
    public function setTimeData($time_data)
    {
        $this->container['time_data'] = $time_data;

        return $this;
    }

    /**
     * Gets data
     *
     * @return \OpenAPI\Client\Model\RequestDataLoggerSetupCsv2Data
     */
    public function getData()
    {
        return $this->container['data'];
    }

    /**
     * Sets data
     *
     * @param \OpenAPI\Client\Model\RequestDataLoggerSetupCsv2Data $data data
     *
     * @return $this
     */
    public function setData($data)
    {
        $this->container['data'] = $data;

        return $this;
    }

    /**
     * Gets confirm
     *
     * @return bool
     */
    public function getConfirm()
    {
        return $this->container['confirm'];
    }

    /**
     * Sets confirm
     *
     * @param bool $confirm Provided Configuration Confirmation. Set to true to save current configuration
     *
     * @return $this
     */
    public function setConfirm($confirm)
    {
        $this->container['confirm'] = $confirm;

        return $this;
    }

    /**
     * Gets file_format
     *
     * @return string
     */
    public function getFileFormat()
    {
        return $this->container['file_format'];
    }

    /**
     * Sets file_format
     *
     * @param string $file_format Data File Format
     *
     * @return $this
     */
    public function setFileFormat($file_format)
    {
        $this->container['file_format'] = $file_format;

        return $this;
    }
    /**
     * Returns true if offset exists. False otherwise.
     *
     * @param integer $offset Offset
     *
     * @return boolean
     */
    public function offsetExists($offset)
    {
        return isset($this->container[$offset]);
    }

    /**
     * Gets offset.
     *
     * @param integer $offset Offset
     *
     * @return mixed
     */
    public function offsetGet($offset)
    {
        return isset($this->container[$offset]) ? $this->container[$offset] : null;
    }

    /**
     * Sets value based on offset.
     *
     * @param integer $offset Offset
     * @param mixed   $value  Value to be set
     *
     * @return void
     */
    public function offsetSet($offset, $value)
    {
        if (is_null($offset)) {
            $this->container[] = $value;
        } else {
            $this->container[$offset] = $value;
        }
    }

    /**
     * Unsets offset.
     *
     * @param integer $offset Offset
     *
     * @return void
     */
    public function offsetUnset($offset)
    {
        unset($this->container[$offset]);
    }

    /**
     * Gets the string presentation of the object
     *
     * @return string
     */
    public function __toString()
    {
        return json_encode(
            ObjectSerializer::sanitizeForSerialization($this),
            JSON_PRETTY_PRINT
        );
    }

    /**
     * Gets a header-safe presentation of the object
     *
     * @return string
     */
    public function toHeaderValue()
    {
        return json_encode(ObjectSerializer::sanitizeForSerialization($this));
    }
}


