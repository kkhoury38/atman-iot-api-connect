<?php
/**
 * MeasurementSample
 */
namespace app\Models;

/**
 * MeasurementSample
 */
class MeasurementSample {

    /** @var object $value measurement: string / number*/
    private $value;

    /** @var float $period */
    private $period;

    /** @var \app\Models\Timestamp $timestamp */
    private $timestamp;

    /** @var string $scope Scope*/
    private $scope;

}
