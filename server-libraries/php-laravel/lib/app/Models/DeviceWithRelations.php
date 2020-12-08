<?php
/**
 * DeviceWithRelations
 */
namespace app\Models;

/**
 * DeviceWithRelations
 */
class DeviceWithRelations {

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

    /** @var \app\Models\DataLoggerWithRelations $dataLogger */
    private $dataLogger;

    /** @var \app\Models\DeviceTypeWithRelations $deviceType */
    private $deviceType;

}
