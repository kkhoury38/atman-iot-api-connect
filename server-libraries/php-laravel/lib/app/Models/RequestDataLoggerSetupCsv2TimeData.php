<?php
/**
 * RequestDataLoggerSetupCsv2TimeData
 */
namespace app\Models;

/**
 * RequestDataLoggerSetupCsv2TimeData
 */
class RequestDataLoggerSetupCsv2TimeData {

    /** @var float $column Column containing time data*/
    private $column;

    /** @var float $firstItemRow Row containing first value of time data in the CSV file*/
    private $firstItemRow;

    /** @var float $nextItemIteration Relevant row location of next item*/
    private $nextItemIteration;

    /** @var \app\Models\RequestDataLoggerSetupCsv2LocationSpec $timezone */
    private $timezone;

    /** @var \app\Models\RequestDataLoggerSetupCsv2LocationSpec $format */
    private $format;

}
