<?php
/**
 * AssetGroup
 */
namespace app\Models;

/**
 * AssetGroup
 */
class AssetGroup {

    /** @var float $id Automatically generated ID*/
    private $id;

    /** @var string $name AssetGroup name*/
    private $name;

    /** @var string $description AssetGroup description*/
    private $description;

    /** @var float $userId ID of User that AssetGroup belongs to*/
    private $userId;

}
