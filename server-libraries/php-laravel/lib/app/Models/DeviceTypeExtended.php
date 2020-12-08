<?php
/**
 * DeviceTypeExtended
 */
namespace app\Models;

/**
 * DeviceTypeExtended
 */
class DeviceTypeExtended {

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

    /** @var bool $error Error status of device type*/
    private $error;

    /** @var \app\Models\ChannelTypeExtended[] $channelTypes */
    private $channelTypes;

}
