<?php
/**
 * RequestDataLoggerSetupXml2
 */
namespace app\Models;

/**
 * RequestDataLoggerSetupXml2
 */
class RequestDataLoggerSetupXml2 {

    /** @var string $objectListKey XML key of list containing the the measurements*/
    private $objectListKey;

    /** @var \app\Models\RequestDataLoggerSetupXml2SearchStringStructure $model */
    private $model;

    /** @var \app\Models\RequestDataLoggerSetupXml2SearchStringStructure $serialNo */
    private $serialNo;

    /** @var \app\Models\RequestDataLoggerSetupXml2SearchStringStructure $channelName */
    private $channelName;

    /** @var \app\Models\RequestDataLoggerSetupXml2SearchStringStructure $channelUnit */
    private $channelUnit;

    /** @var \app\Models\RequestDataLoggerSetupXml2SearchStringStructure $value */
    private $value;

    /** @var \app\Models\RequestDataLoggerSetupXml2SearchStringStructure $period */
    private $period;

    /** @var \app\Models\RequestDataLoggerSetupXml2SearchStringStructure $timestamp */
    private $timestamp;

    /** @var bool $confirm Provided Configuration Confirmation. Set to true to save current configuration*/
    private $confirm;

    /** @var string $fileFormat Data File Format*/
    private $fileFormat;

}
