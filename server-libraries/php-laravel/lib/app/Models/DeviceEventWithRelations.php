<?php
/**
 * DeviceEventWithRelations
 */
namespace app\Models;

/**
 * DeviceEventWithRelations
 */
class DeviceEventWithRelations {

    /** @var float $id Automatically generated ID*/
    private $id;

    /** @var float $deviceId ID of Device associated with Event*/
    private $deviceId;

    /** @var float $channelId ID of Device associated with Event*/
    private $channelId;

    /** @var float $eventRuleId ID of EventRule triggered*/
    private $eventRuleId;

    /** @var string $severity Event severity - Can be  LOW / MEDIUM / HIGH*/
    private $severity;

    /** @var string $description Event description*/
    private $description;

    /** @var bool $resolved Set to true if Event has been resolved*/
    private $resolved;

    /** @var string $viewedBy Set to true if Event has been resolved*/
    private $viewedBy;

    /** @var \DateTime $timestamp Event creation timestamp*/
    private $timestamp;

    /** @var \DateTime $resolutionTimestamp Event resolution timestamp*/
    private $resolutionTimestamp;

    /** @var \app\Models\DeviceWithRelations $device */
    private $device;

    /** @var \app\Models\ChannelWithRelations $channel */
    private $channel;

    /** @var \app\Models\EventRuleWithRelations $eventRule */
    private $eventRule;

}
