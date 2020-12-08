<?php
/**
 * Event
 */
namespace app\Models;

/**
 * Event
 */
class Event {

    /** @var float $id Automatically generated ID*/
    private $id;

    /** @var float $assetId ID of Asset associated with Event*/
    private $assetId;

    /** @var float $eventRuleId ID of EventRule triggered*/
    private $eventRuleId;

    /** @var string $severity Event severity - Can be  LOW / MEDIUM / HIGH*/
    private $severity;

    /** @var string $description Event description*/
    private $description;

    /** @var bool $resolved Set to true if Event has been resolved*/
    private $resolved;

    /** @var \DateTime $timestamp Event creation timestamp*/
    private $timestamp;

    /** @var \DateTime $resolutionTimestamp Event resolution timestamp*/
    private $resolutionTimestamp;

}
