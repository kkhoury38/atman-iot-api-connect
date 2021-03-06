<?php
/**
 * RequestDataLoggerSetupCsv2DataHeaderLocation
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
 * RequestDataLoggerSetupCsv2DataHeaderLocation Class Doc Comment
 *
 * @category Class
 * @description (Schema options: { exclude: [ &#39;fileFormat&#39; ] })
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */
class RequestDataLoggerSetupCsv2DataHeaderLocation implements ModelInterface, ArrayAccess
{
    const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'RequestDataLoggerSetupCsv2DataHeaderLocation';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'first_item_col' => 'float',
        'next_item_iteration' => 'float',
        'model' => '\OpenAPI\Client\Model\RequestDataLoggerSetupCsv2DataHeaderLocationKeysArray',
        'serial_no' => '\OpenAPI\Client\Model\RequestDataLoggerSetupCsv2DataHeaderLocationKeysArray',
        'channel_name' => '\OpenAPI\Client\Model\RequestDataLoggerSetupCsv2DataHeaderLocationKeysStrArray',
        'channel_unit' => '\OpenAPI\Client\Model\RequestDataLoggerSetupCsv2DataHeaderLocationKeysStrArray',
        'period' => '\OpenAPI\Client\Model\RequestDataLoggerSetupCsv2DataHeaderLocationKeysNumber'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPIFormats = [
        'first_item_col' => null,
        'next_item_iteration' => null,
        'model' => null,
        'serial_no' => null,
        'channel_name' => null,
        'channel_unit' => null,
        'period' => null
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
        'first_item_col' => 'firstItemCol',
        'next_item_iteration' => 'nextItemIteration',
        'model' => 'model',
        'serial_no' => 'serialNo',
        'channel_name' => 'channelName',
        'channel_unit' => 'channelUnit',
        'period' => 'period'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'first_item_col' => 'setFirstItemCol',
        'next_item_iteration' => 'setNextItemIteration',
        'model' => 'setModel',
        'serial_no' => 'setSerialNo',
        'channel_name' => 'setChannelName',
        'channel_unit' => 'setChannelUnit',
        'period' => 'setPeriod'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'first_item_col' => 'getFirstItemCol',
        'next_item_iteration' => 'getNextItemIteration',
        'model' => 'getModel',
        'serial_no' => 'getSerialNo',
        'channel_name' => 'getChannelName',
        'channel_unit' => 'getChannelUnit',
        'period' => 'getPeriod'
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
        $this->container['first_item_col'] = isset($data['first_item_col']) ? $data['first_item_col'] : null;
        $this->container['next_item_iteration'] = isset($data['next_item_iteration']) ? $data['next_item_iteration'] : null;
        $this->container['model'] = isset($data['model']) ? $data['model'] : null;
        $this->container['serial_no'] = isset($data['serial_no']) ? $data['serial_no'] : null;
        $this->container['channel_name'] = isset($data['channel_name']) ? $data['channel_name'] : null;
        $this->container['channel_unit'] = isset($data['channel_unit']) ? $data['channel_unit'] : null;
        $this->container['period'] = isset($data['period']) ? $data['period'] : null;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

        if ($this->container['first_item_col'] === null) {
            $invalidProperties[] = "'first_item_col' can't be null";
        }
        if ($this->container['next_item_iteration'] === null) {
            $invalidProperties[] = "'next_item_iteration' can't be null";
        }
        if ($this->container['model'] === null) {
            $invalidProperties[] = "'model' can't be null";
        }
        if ($this->container['serial_no'] === null) {
            $invalidProperties[] = "'serial_no' can't be null";
        }
        if ($this->container['channel_name'] === null) {
            $invalidProperties[] = "'channel_name' can't be null";
        }
        if ($this->container['channel_unit'] === null) {
            $invalidProperties[] = "'channel_unit' can't be null";
        }
        if ($this->container['period'] === null) {
            $invalidProperties[] = "'period' can't be null";
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
     * Gets first_item_col
     *
     * @return float
     */
    public function getFirstItemCol()
    {
        return $this->container['first_item_col'];
    }

    /**
     * Sets first_item_col
     *
     * @param float $first_item_col First column of header
     *
     * @return $this
     */
    public function setFirstItemCol($first_item_col)
    {
        $this->container['first_item_col'] = $first_item_col;

        return $this;
    }

    /**
     * Gets next_item_iteration
     *
     * @return float
     */
    public function getNextItemIteration()
    {
        return $this->container['next_item_iteration'];
    }

    /**
     * Sets next_item_iteration
     *
     * @param float $next_item_iteration Relevant row location of next item
     *
     * @return $this
     */
    public function setNextItemIteration($next_item_iteration)
    {
        $this->container['next_item_iteration'] = $next_item_iteration;

        return $this;
    }

    /**
     * Gets model
     *
     * @return \OpenAPI\Client\Model\RequestDataLoggerSetupCsv2DataHeaderLocationKeysArray
     */
    public function getModel()
    {
        return $this->container['model'];
    }

    /**
     * Sets model
     *
     * @param \OpenAPI\Client\Model\RequestDataLoggerSetupCsv2DataHeaderLocationKeysArray $model model
     *
     * @return $this
     */
    public function setModel($model)
    {
        $this->container['model'] = $model;

        return $this;
    }

    /**
     * Gets serial_no
     *
     * @return \OpenAPI\Client\Model\RequestDataLoggerSetupCsv2DataHeaderLocationKeysArray
     */
    public function getSerialNo()
    {
        return $this->container['serial_no'];
    }

    /**
     * Sets serial_no
     *
     * @param \OpenAPI\Client\Model\RequestDataLoggerSetupCsv2DataHeaderLocationKeysArray $serial_no serial_no
     *
     * @return $this
     */
    public function setSerialNo($serial_no)
    {
        $this->container['serial_no'] = $serial_no;

        return $this;
    }

    /**
     * Gets channel_name
     *
     * @return \OpenAPI\Client\Model\RequestDataLoggerSetupCsv2DataHeaderLocationKeysStrArray
     */
    public function getChannelName()
    {
        return $this->container['channel_name'];
    }

    /**
     * Sets channel_name
     *
     * @param \OpenAPI\Client\Model\RequestDataLoggerSetupCsv2DataHeaderLocationKeysStrArray $channel_name channel_name
     *
     * @return $this
     */
    public function setChannelName($channel_name)
    {
        $this->container['channel_name'] = $channel_name;

        return $this;
    }

    /**
     * Gets channel_unit
     *
     * @return \OpenAPI\Client\Model\RequestDataLoggerSetupCsv2DataHeaderLocationKeysStrArray
     */
    public function getChannelUnit()
    {
        return $this->container['channel_unit'];
    }

    /**
     * Sets channel_unit
     *
     * @param \OpenAPI\Client\Model\RequestDataLoggerSetupCsv2DataHeaderLocationKeysStrArray $channel_unit channel_unit
     *
     * @return $this
     */
    public function setChannelUnit($channel_unit)
    {
        $this->container['channel_unit'] = $channel_unit;

        return $this;
    }

    /**
     * Gets period
     *
     * @return \OpenAPI\Client\Model\RequestDataLoggerSetupCsv2DataHeaderLocationKeysNumber
     */
    public function getPeriod()
    {
        return $this->container['period'];
    }

    /**
     * Sets period
     *
     * @param \OpenAPI\Client\Model\RequestDataLoggerSetupCsv2DataHeaderLocationKeysNumber $period period
     *
     * @return $this
     */
    public function setPeriod($period)
    {
        $this->container['period'] = $period;

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


