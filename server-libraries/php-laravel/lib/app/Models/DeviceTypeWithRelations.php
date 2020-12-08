<?php
/**
 * DeviceTypeWithRelations
 */
namespace app\Models;

/**
 * DeviceTypeWithRelations
 */
class DeviceTypeWithRelations {

    /** @var float $id Automatically generated ID*/
    private $id;

    /** @var string $model DeviceType model*/
    private $model;

    /** @var string $description DeviceType description*/
    private $description;

    /** @var string $manufacturer DeviceType manufacturer*/
    private $manufacturer;

    /** @var string $category DeviceType category*/
    private $category;

    /** @var \app\Models\ChannelTypeWithRelations[] $channelTypes */
    private $channelTypes;

}
