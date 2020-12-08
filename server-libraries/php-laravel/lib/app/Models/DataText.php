<?php
/**
 * DataText
 */
namespace app\Models;

/**
 * DataText
 */
class DataText {

    /** @var float $id Automatically generated ID*/
    private $id;

    /** @var float $period Recording period - seconds*/
    private $period;

    /** @var string $measurement Recorded data*/
    private $measurement;

    /** @var \DateTime $timestamp Timestamp*/
    private $timestamp;

    /** @var float $channelId ID of Channel that DataFloat belongs to*/
    private $channelId;

}
