<?php
/**
 * DataLoggerExcludingIdAuthTokenConfigUserId
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
 * Class representing the DataLoggerExcludingIdAuthTokenConfigUserId model.
 *
 * (Schema options: { exclude: [ &#39;id&#39;, &#39;authToken&#39;, &#39;config&#39;, &#39;userId&#39; ] })
 *
 * @package OpenAPI\Server\Model
 * @author  OpenAPI Generator team
 */
class DataLoggerExcludingIdAuthTokenConfigUserId 
{
        /**
     * Datalogger description
     *
     * @var string|null
     * @SerializedName("description")
     * @Assert\Type("string")
     * @Type("string")
     */
    protected $description;

    /**
     * Method used by DataLogger to send data to the system. At present only FTP implemented
     *
     * @var string
     * @SerializedName("connectionType")
     * @Assert\NotNull()
     * @Assert\Type("string")
     * @Type("string")
     */
    protected $connectionType;

    /**
     * Format of the files uploaded to the system DataLogger. At present system supports CSV and XML formats
     *
     * @var string
     * @SerializedName("fileFormat")
     * @Assert\NotNull()
     * @Assert\Type("string")
     * @Type("string")
     */
    protected $fileFormat;

    /**
     * Username of system FTP account, where the DataLogger sends the data (if applicable)
     *
     * @var string|null
     * @SerializedName("username")
     * @Assert\Type("string")
     * @Type("string")
     */
    protected $username;

    /**
     * Password of system FTP account, where the DataLogger sends the data (if applicable)
     *
     * @var string|null
     * @SerializedName("passwd")
     * @Assert\Type("string")
     * @Type("string")
     */
    protected $passwd;

    /**
     * Flag for selecting if DataLogger is to be initiated automatically from preexisting configuration
     *
     * @var bool
     * @SerializedName("autoInit")
     * @Assert\NotNull()
     * @Assert\Type("bool")
     * @Type("bool")
     */
    protected $autoInit;

    /**
     * Flag for selecting if DataLogger sends compressed files
     *
     * @var bool
     * @SerializedName("dataCompressed")
     * @Assert\NotNull()
     * @Assert\Type("bool")
     * @Type("bool")
     */
    protected $dataCompressed;

    /**
     * Constructor
     * @param mixed[] $data Associated array of property values initializing the model
     */
    public function __construct(array $data = null)
    {
        $this->description = isset($data['description']) ? $data['description'] : null;
        $this->connectionType = isset($data['connectionType']) ? $data['connectionType'] : null;
        $this->fileFormat = isset($data['fileFormat']) ? $data['fileFormat'] : null;
        $this->username = isset($data['username']) ? $data['username'] : null;
        $this->passwd = isset($data['passwd']) ? $data['passwd'] : null;
        $this->autoInit = isset($data['autoInit']) ? $data['autoInit'] : null;
        $this->dataCompressed = isset($data['dataCompressed']) ? $data['dataCompressed'] : null;
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
     * @param string|null $description  Datalogger description
     *
     * @return $this
     */
    public function setDescription($description = null)
    {
        $this->description = $description;

        return $this;
    }

    /**
     * Gets connectionType.
     *
     * @return string
     */
    public function getConnectionType()
    {
        return $this->connectionType;
    }

    /**
     * Sets connectionType.
     *
     * @param string $connectionType  Method used by DataLogger to send data to the system. At present only FTP implemented
     *
     * @return $this
     */
    public function setConnectionType($connectionType)
    {
        $this->connectionType = $connectionType;

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
     * @param string $fileFormat  Format of the files uploaded to the system DataLogger. At present system supports CSV and XML formats
     *
     * @return $this
     */
    public function setFileFormat($fileFormat)
    {
        $this->fileFormat = $fileFormat;

        return $this;
    }

    /**
     * Gets username.
     *
     * @return string|null
     */
    public function getUsername()
    {
        return $this->username;
    }

    /**
     * Sets username.
     *
     * @param string|null $username  Username of system FTP account, where the DataLogger sends the data (if applicable)
     *
     * @return $this
     */
    public function setUsername($username = null)
    {
        $this->username = $username;

        return $this;
    }

    /**
     * Gets passwd.
     *
     * @return string|null
     */
    public function getPasswd()
    {
        return $this->passwd;
    }

    /**
     * Sets passwd.
     *
     * @param string|null $passwd  Password of system FTP account, where the DataLogger sends the data (if applicable)
     *
     * @return $this
     */
    public function setPasswd($passwd = null)
    {
        $this->passwd = $passwd;

        return $this;
    }

    /**
     * Gets autoInit.
     *
     * @return bool
     */
    public function isAutoInit()
    {
        return $this->autoInit;
    }

    /**
     * Sets autoInit.
     *
     * @param bool $autoInit  Flag for selecting if DataLogger is to be initiated automatically from preexisting configuration
     *
     * @return $this
     */
    public function setAutoInit($autoInit)
    {
        $this->autoInit = $autoInit;

        return $this;
    }

    /**
     * Gets dataCompressed.
     *
     * @return bool
     */
    public function isDataCompressed()
    {
        return $this->dataCompressed;
    }

    /**
     * Sets dataCompressed.
     *
     * @param bool $dataCompressed  Flag for selecting if DataLogger sends compressed files
     *
     * @return $this
     */
    public function setDataCompressed($dataCompressed)
    {
        $this->dataCompressed = $dataCompressed;

        return $this;
    }
}


