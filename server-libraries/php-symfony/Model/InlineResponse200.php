<?php
/**
 * InlineResponse200
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
 * Class representing the InlineResponse200 model.
 *
 * @package OpenAPI\Server\Model
 * @author  OpenAPI Generator team
 */
class InlineResponse200 
{
        /**
     * @var string|null
     * @SerializedName("greeting")
     * @Assert\Type("string")
     * @Type("string")
     */
    protected $greeting;

    /**
     * @var string|null
     * @SerializedName("date")
     * @Assert\Type("string")
     * @Type("string")
     */
    protected $date;

    /**
     * @var string|null
     * @SerializedName("url")
     * @Assert\Type("string")
     * @Type("string")
     */
    protected $url;

    /**
     * @var array[]|null
     * @SerializedName("headers")
     * @Assert\All({
     *   @Assert\Type("array")
     * })
     * @Type("array<string, array>")
     */
    protected $headers;

    /**
     * Constructor
     * @param mixed[] $data Associated array of property values initializing the model
     */
    public function __construct(array $data = null)
    {
        $this->greeting = isset($data['greeting']) ? $data['greeting'] : null;
        $this->date = isset($data['date']) ? $data['date'] : null;
        $this->url = isset($data['url']) ? $data['url'] : null;
        $this->headers = isset($data['headers']) ? $data['headers'] : null;
    }

    /**
     * Gets greeting.
     *
     * @return string|null
     */
    public function getGreeting()
    {
        return $this->greeting;
    }

    /**
     * Sets greeting.
     *
     * @param string|null $greeting
     *
     * @return $this
     */
    public function setGreeting($greeting = null)
    {
        $this->greeting = $greeting;

        return $this;
    }

    /**
     * Gets date.
     *
     * @return string|null
     */
    public function getDate()
    {
        return $this->date;
    }

    /**
     * Sets date.
     *
     * @param string|null $date
     *
     * @return $this
     */
    public function setDate($date = null)
    {
        $this->date = $date;

        return $this;
    }

    /**
     * Gets url.
     *
     * @return string|null
     */
    public function getUrl()
    {
        return $this->url;
    }

    /**
     * Sets url.
     *
     * @param string|null $url
     *
     * @return $this
     */
    public function setUrl($url = null)
    {
        $this->url = $url;

        return $this;
    }

    /**
     * Gets headers.
     *
     * @return array[]|null
     */
    public function getHeaders(): ?array
    {
        return $this->headers;
    }

    /**
     * Sets headers.
     *
     * @param array[]|null $headers
     *
     * @return $this
     */
    public function setHeaders(array $headers = null)
    {
        $this->headers = $headers;

        return $this;
    }
}


