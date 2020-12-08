<?php
/**
 * EventRule
 */
namespace app\Models;

/**
 * EventRule
 */
class EventRule {

    /** @var float $id Automatically generated ID*/
    private $id;

    /** @var string $description Rule description*/
    private $description;

    /** @var string $scope Rule scope*/
    private $scope;

    /** @var string $algorithm Event Detection Algorithm*/
    private $algorithm;

    /** @var string $action Rule action*/
    private $action;

    /** @var string $actionParameters Rule action parameters*/
    private $actionParameters;

    /** @var string $rule JSON Rule*/
    private $rule;

    /** @var float $executionPeriod EventRule execution period - seconds*/
    private $executionPeriod;

    /** @var \DateTime $lastExecTimestamp Last execution timestamp*/
    private $lastExecTimestamp;

    /** @var bool $activated Is set to true when EventRule has been activated*/
    private $activated;

    /** @var bool $inProgress Is automaticaly set to true when EventRule is being processed*/
    private $inProgress;

}
