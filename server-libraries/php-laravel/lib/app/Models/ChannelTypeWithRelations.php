<?php
/**
 * ChannelTypeWithRelations
 */
namespace app\Models;

/**
 * ChannelTypeWithRelations
 */
class ChannelTypeWithRelations {

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

    /** @var \app\Models\DeviceTypeWithRelations $deviceType */
    private $deviceType;

}
