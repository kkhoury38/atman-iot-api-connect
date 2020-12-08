<?php
/**
 * Device
 */
namespace app\Models;

/**
 * Device
 */
class Device {

    /** @var float $id Automatically generated ID*/
    private $id;

    /** @var string $description Device description*/
    private $description;

    /** @var string $serialNo Device serial number*/
    private $serialNo;

    /** @var float $dataLoggerId ID of DataLogger that Device belongs to*/
    private $dataLoggerId;

    /** @var float $deviceTypeId */
    private $deviceTypeId;

}
