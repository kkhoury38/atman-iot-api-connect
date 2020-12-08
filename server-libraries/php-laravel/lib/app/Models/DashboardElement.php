<?php
/**
 * DashboardElement
 */
namespace app\Models;

/**
 * DashboardElement
 */
class DashboardElement {

    /** @var float $id Automatically generated ID*/
    private $id;

    /** @var float $assetId ID of Asset that Dashboard Element belongs to*/
    private $assetId;

    /** @var float $userId ID of User that Dashboard Element belongs to*/
    private $userId;

    /** @var string $deviceCategory Device Category*/
    private $deviceCategory;

    /** @var string $channelCategory Channel Category*/
    private $channelCategory;

    /** @var string $elementType Element Type*/
    private $elementType;

    /** @var float $position Element Position*/
    private $position;

    /** @var string $location Element Location: mainDashboard / assetDashboard*/
    private $location;

    /** @var float $timeWindow Time Window*/
    private $timeWindow;

    /** @var string $operation Data Operation*/
    private $operation;

    /** @var string $groupBy Data group by*/
    private $groupBy;

    /** @var string $title Element Title*/
    private $title;

    /** @var string $xLabel Element X Label*/
    private $xLabel;

    /** @var string $yLabel Element Y Label*/
    private $yLabel;

}
