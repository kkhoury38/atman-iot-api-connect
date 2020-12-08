<?php
/**
 * EventRuleSubscription
 */
namespace app\Models;

/**
 * EventRuleSubscription
 */
class EventRuleSubscription {

    /** @var float $id Automatically generated ID*/
    private $id;

    /** @var float $executionPeriod EventRule execution period - seconds*/
    private $executionPeriod;

    /** @var string $lastExecTimestamp Last execution timestamp*/
    private $lastExecTimestamp;

    /** @var float $assetId ID of Asset subscribed to EventRule*/
    private $assetId;

    /** @var float $eventRuleId ID of associated EventRule*/
    private $eventRuleId;

    /** @var bool $ruleActivated Is set to true when EventRule has been activated*/
    private $ruleActivated;

}
