<?php
/**
 * ChannelTypeExtended
 */
namespace app\Models;

/**
 * ChannelTypeExtended
 */
class ChannelTypeExtended {

    /** @var float $id Automatically generated ID*/
    private $id;

    /** @var string $name ChannelType name*/
    private $name;

    /** @var string $category ChannelType category*/
    private $category;

    /** @var string $description ChannelType description*/
    private $description;

    /** @var string $unit Unit of measurement*/
    private $unit;

    /** @var string $channelType Type of data: UNDEFINED / SPOT_VALUE / COUNTER / TEXT*/
    private $channelType;

    /** @var float $deviceTypeId ID of DeviceType that ChannelType belongs to*/
    private $deviceTypeId;

    /** @var bool $error Error status of channel type*/
    private $error;

}
