<?php
/**
 * ResponseDataLoggerSetupStep2
 */
namespace app\Models;

/**
 * ResponseDataLoggerSetupStep2
 */
class ResponseDataLoggerSetupStep2 {

    /** @var \app\Models\DeviceTypeExtended[] $deviceTypes */
    private $deviceTypes;

    /** @var \app\Models\Device[] $devices */
    private $devices;

    /** @var \app\Models\MeasurementSample $sample */
    private $sample;

    /** @var float $errorCount Sample Value*/
    private $errorCount;

    /** @var string[] $errors */
    private $errors;

}
