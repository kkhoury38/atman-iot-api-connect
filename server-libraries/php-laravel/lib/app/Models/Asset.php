<?php
/**
 * Asset
 */
namespace app\Models;

/**
 * Asset
 */
class Asset {

    /** @var float $id Automatically generated ID*/
    private $id;

    /** @var string $name Asset name*/
    private $name;

    /** @var string $description Asset description*/
    private $description;

    /** @var float $assetGroupId ID of AssetGroup that Asset belongs to*/
    private $assetGroupId;

}
