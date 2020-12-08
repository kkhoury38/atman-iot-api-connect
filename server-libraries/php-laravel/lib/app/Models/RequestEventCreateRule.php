<?php
/**
 * RequestEventCreateRule
 */
namespace app\Models;

/**
 * RequestEventCreateRule
 */
class RequestEventCreateRule {

    /** @var string $description Rule description*/
    private $description;

    /** @var \app\Models\RequestEventRuleScope[] $scope */
    private $scope;

    /** @var string $action Rule action*/
    private $action;

    /** @var object $actionParameters Action Parameters*/
    private $actionParameters;

}
