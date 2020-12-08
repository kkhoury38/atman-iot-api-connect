<?php
/**
 * EventExcludingIdResolvedTimestampResolutionTimestamp
 */
namespace app\Models;

/**
 * EventExcludingIdResolvedTimestampResolutionTimestamp
 */
class EventExcludingIdResolvedTimestampResolutionTimestamp {

    /** @var float $assetId ID of Asset associated with Event*/
    private $assetId;

    /** @var float $eventRuleId ID of EventRule triggered*/
    private $eventRuleId;

    /** @var string $severity Event severity - Can be  LOW / MEDIUM / HIGH*/
    private $severity;

    /** @var string $description Event description*/
    private $description;

}
