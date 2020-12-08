<?php
/**
 * RequestDataLoggerSetupCsv2
 */
namespace app\Models;

/**
 * RequestDataLoggerSetupCsv2
 */
class RequestDataLoggerSetupCsv2 {

    /** @var string $delimiter Delimiter used in CSV file*/
    private $delimiter;

    /** @var string $decimalPoint Decimal Point of values in CSV file*/
    private $decimalPoint;

    /** @var \app\Models\RequestDataLoggerSetupCsv2TimeData $timeData */
    private $timeData;

    /** @var \app\Models\RequestDataLoggerSetupCsv2Data $data */
    private $data;

    /** @var bool $confirm Provided Configuration Confirmation. Set to true to save current configuration*/
    private $confirm;

    /** @var string $fileFormat Data File Format*/
    private $fileFormat;

}
