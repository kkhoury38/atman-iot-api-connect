<?php
/**
 * EventRuleSubscriptionExcludingIdLastExecTimestamp
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
 * Class representing the EventRuleSubscriptionExcludingIdLastExecTimestamp model.
 *
 * (Schema options: { exclude: [ &#39;id&#39;, &#39;lastExecTimestamp&#39; ] })
 *
 * @package OpenAPI\Server\Model
 * @author  OpenAPI Generator team
 */
class EventRuleSubscriptionExcludingIdLastExecTimestamp 
{
        /**
     * EventRule execution period - seconds
     *
     * @var float
     * @SerializedName("executionPeriod")
     * @Assert\NotNull()
     * @Assert\Type("float")
     * @Type("float")
     */
    protected $executionPeriod;

    /**
     * ID of Asset subscribed to EventRule
     *
     * @var float
     * @SerializedName("assetId")
     * @Assert\NotNull()
     * @Assert\Type("float")
     * @Type("float")
     */
    protected $assetId;

    /**
     * ID of associated EventRule
     *
     * @var float
     * @SerializedName("eventRuleId")
     * @Assert\NotNull()
     * @Assert\Type("float")
     * @Type("float")
     */
    protected $eventRuleId;

    /**
     * Is set to true when EventRule has been activated
     *
     * @var bool
     * @SerializedName("ruleActivated")
     * @Assert\NotNull()
     * @Assert\Type("bool")
     * @Type("bool")
     */
    protected $ruleActivated;

    /**
     * Constructor
     * @param mixed[] $data Associated array of property values initializing the model
     */
    public function __construct(array $data = null)
    {
        $this->executionPeriod = isset($data['executionPeriod']) ? $data['executionPeriod'] : null;
        $this->assetId = isset($data['assetId']) ? $data['assetId'] : null;
        $this->eventRuleId = isset($data['eventRuleId']) ? $data['eventRuleId'] : null;
        $this->ruleActivated = isset($data['ruleActivated']) ? $data['ruleActivated'] : null;
    }

    /**
     * Gets executionPeriod.
     *
     * @return float
     */
    public function getExecutionPeriod()
    {
        return $this->executionPeriod;
    }

    /**
     * Sets executionPeriod.
     *
     * @param float $executionPeriod  EventRule execution period - seconds
     *
     * @return $this
     */
    public function setExecutionPeriod($executionPeriod)
    {
        $this->executionPeriod = $executionPeriod;

        return $this;
    }

    /**
     * Gets assetId.
     *
     * @return float
     */
    public function getAssetId()
    {
        return $this->assetId;
    }

    /**
     * Sets assetId.
     *
     * @param float $assetId  ID of Asset subscribed to EventRule
     *
     * @return $this
     */
    public function setAssetId($assetId)
    {
        $this->assetId = $assetId;

        return $this;
    }

    /**
     * Gets eventRuleId.
     *
     * @return float
     */
    public function getEventRuleId()
    {
        return $this->eventRuleId;
    }

    /**
     * Sets eventRuleId.
     *
     * @param float $eventRuleId  ID of associated EventRule
     *
     * @return $this
     */
    public function setEventRuleId($eventRuleId)
    {
        $this->eventRuleId = $eventRuleId;

        return $this;
    }

    /**
     * Gets ruleActivated.
     *
     * @return bool
     */
    public function isRuleActivated()
    {
        return $this->ruleActivated;
    }

    /**
     * Sets ruleActivated.
     *
     * @param bool $ruleActivated  Is set to true when EventRule has been activated
     *
     * @return $this
     */
    public function setRuleActivated($ruleActivated)
    {
        $this->ruleActivated = $ruleActivated;

        return $this;
    }
}


