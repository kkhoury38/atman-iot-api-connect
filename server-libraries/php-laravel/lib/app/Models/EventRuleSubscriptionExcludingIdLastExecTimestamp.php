<?php
/**
 * EventRuleSubscriptionExcludingIdLastExecTimestamp
 */
namespace app\Models;

/**
 * EventRuleSubscriptionExcludingIdLastExecTimestamp
 */
class EventRuleSubscriptionExcludingIdLastExecTimestamp {

    /** @var float $executionPeriod EventRule execution period - seconds*/
    private $executionPeriod;

    /** @var float $assetId ID of Asset subscribed to EventRule*/
    private $assetId;

    /** @var float $eventRuleId ID of associated EventRule*/
    private $eventRuleId;

    /** @var bool $ruleActivated Is set to true when EventRule has been activated*/
    private $ruleActivated;

}
