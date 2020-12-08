<?php
/**
 * ChannelExcludingIdDeviceId
 */
namespace app\Models;

/**
 * ChannelExcludingIdDeviceId
 */
class ChannelExcludingIdDeviceId {

    /** @var bool $monitor Enable channel monitoring - data recording - by setting to true*/
    private $monitor;

    /** @var \DateTime $lastTimestamp Timestamp*/
    private $lastTimestamp;

    /** @var string $status Channel Status*/
    private $status;

    /** @var float $channelTypeId ID of ChannelType associated with Channel*/
    private $channelTypeId;

}
