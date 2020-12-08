<?php
/**
 * Channel
 */
namespace app\Models;

/**
 * Channel
 */
class Channel {

    /** @var float $id Automatically generated ID*/
    private $id;

    /** @var bool $monitor Enable channel monitoring - data recording - by setting to true*/
    private $monitor;

    /** @var \DateTime $lastTimestamp Timestamp*/
    private $lastTimestamp;

    /** @var string $status Channel Status*/
    private $status;

    /** @var float $deviceId ID of Device that Channel belongs to*/
    private $deviceId;

    /** @var float $channelTypeId ID of ChannelType associated with Channel*/
    private $channelTypeId;

}
