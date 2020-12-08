<?php
/**
 * DataFloat
 */
namespace app\Models;

/**
 * DataFloat
 */
class DataFloat {

    /** @var float $id Automatically generated ID*/
    private $id;

    /** @var float $period Recording period - seconds*/
    private $period;

    /** @var float $measurement Recorded measurement*/
    private $measurement;

    /** @var \DateTime $timestamp Timestamp*/
    private $timestamp;

    /** @var float $channelId ID of Channel that DataFloat belongs to*/
    private $channelId;

}
