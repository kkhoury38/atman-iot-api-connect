<?php
/**
 * RequestDataLoggerSetupXml2SearchStringStructure
 */
namespace app\Models;

/**
 * RequestDataLoggerSetupXml2SearchStringStructure
 */
class RequestDataLoggerSetupXml2SearchStringStructure {

    /** @var string $key XML key containing parent attribute*/
    private $key;

    /** @var bool $isString Flag for selecting if parent value is the entire string contained in the provided XML Key.  If set to true performSplit must be defined*/
    private $isString;

    /** @var \app\Models\RequestDataLoggerSetupXml2SearchStringStructureSplit[] $performSplit */
    private $performSplit;

}
