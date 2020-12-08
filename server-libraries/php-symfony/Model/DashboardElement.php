<?php
/**
 * DashboardElement
 *
 * PHP version 5
 *
 * @category Class
 * @package  OpenAPI\Server\Model
 * @author   OpenAPI Generator team
 * @link     https://github.com/openapitools/openapi-generator
 */

/**
 * Atman IoT
 *
 * Atman IoT Server
 *
 * The version of the OpenAPI document: 3.0.1
 * Contact: k.khoury@k-ren.gr
 * Generated by: https://github.com/openapitools/openapi-generator.git
 *
 */

/**
 * NOTE: This class is auto generated by the openapi generator program.
 * https://github.com/openapitools/openapi-generator
 * Do not edit the class manually.
 */

namespace OpenAPI\Server\Model;

use Symfony\Component\Validator\Constraints as Assert;
use JMS\Serializer\Annotation\Type;
use JMS\Serializer\Annotation\SerializedName;

/**
 * Class representing the DashboardElement model.
 *
 * @package OpenAPI\Server\Model
 * @author  OpenAPI Generator team
 */
class DashboardElement 
{
        /**
     * Automatically generated ID
     *
     * @var float|null
     * @SerializedName("id")
     * @Assert\Type("float")
     * @Type("float")
     */
    protected $id;

    /**
     * ID of Asset that Dashboard Element belongs to
     *
     * @var float
     * @SerializedName("assetId")
     * @Assert\NotNull()
     * @Assert\Type("float")
     * @Type("float")
     */
    protected $assetId;

    /**
     * ID of User that Dashboard Element belongs to
     *
     * @var float
     * @SerializedName("userId")
     * @Assert\NotNull()
     * @Assert\Type("float")
     * @Type("float")
     */
    protected $userId;

    /**
     * Device Category
     *
     * @var string
     * @SerializedName("deviceCategory")
     * @Assert\NotNull()
     * @Assert\Type("string")
     * @Type("string")
     */
    protected $deviceCategory;

    /**
     * Channel Category
     *
     * @var string
     * @SerializedName("channelCategory")
     * @Assert\NotNull()
     * @Assert\Type("string")
     * @Type("string")
     */
    protected $channelCategory;

    /**
     * Element Type
     *
     * @var string
     * @SerializedName("elementType")
     * @Assert\NotNull()
     * @Assert\Type("string")
     * @Type("string")
     */
    protected $elementType;

    /**
     * Element Position
     *
     * @var float
     * @SerializedName("position")
     * @Assert\NotNull()
     * @Assert\Type("float")
     * @Type("float")
     */
    protected $position;

    /**
     * Element Location: mainDashboard / assetDashboard
     *
     * @var string
     * @SerializedName("location")
     * @Assert\NotNull()
     * @Assert\Type("string")
     * @Type("string")
     */
    protected $location;

    /**
     * Time Window
     *
     * @var float
     * @SerializedName("timeWindow")
     * @Assert\NotNull()
     * @Assert\Type("float")
     * @Type("float")
     */
    protected $timeWindow;

    /**
     * Data Operation
     *
     * @var string
     * @SerializedName("operation")
     * @Assert\NotNull()
     * @Assert\Type("string")
     * @Type("string")
     */
    protected $operation;

    /**
     * Data group by
     *
     * @var string
     * @SerializedName("groupBy")
     * @Assert\NotNull()
     * @Assert\Type("string")
     * @Type("string")
     */
    protected $groupBy;

    /**
     * Element Title
     *
     * @var string|null
     * @SerializedName("title")
     * @Assert\Type("string")
     * @Type("string")
     */
    protected $title;

    /**
     * Element X Label
     *
     * @var string|null
     * @SerializedName("xLabel")
     * @Assert\Type("string")
     * @Type("string")
     */
    protected $xLabel;

    /**
     * Element Y Label
     *
     * @var string|null
     * @SerializedName("yLabel")
     * @Assert\Type("string")
     * @Type("string")
     */
    protected $yLabel;

    /**
     * Constructor
     * @param mixed[] $data Associated array of property values initializing the model
     */
    public function __construct(array $data = null)
    {
        $this->id = isset($data['id']) ? $data['id'] : null;
        $this->assetId = isset($data['assetId']) ? $data['assetId'] : null;
        $this->userId = isset($data['userId']) ? $data['userId'] : null;
        $this->deviceCategory = isset($data['deviceCategory']) ? $data['deviceCategory'] : null;
        $this->channelCategory = isset($data['channelCategory']) ? $data['channelCategory'] : null;
        $this->elementType = isset($data['elementType']) ? $data['elementType'] : null;
        $this->position = isset($data['position']) ? $data['position'] : null;
        $this->location = isset($data['location']) ? $data['location'] : null;
        $this->timeWindow = isset($data['timeWindow']) ? $data['timeWindow'] : null;
        $this->operation = isset($data['operation']) ? $data['operation'] : null;
        $this->groupBy = isset($data['groupBy']) ? $data['groupBy'] : null;
        $this->title = isset($data['title']) ? $data['title'] : null;
        $this->xLabel = isset($data['xLabel']) ? $data['xLabel'] : null;
        $this->yLabel = isset($data['yLabel']) ? $data['yLabel'] : null;
    }

    /**
     * Gets id.
     *
     * @return float|null
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Sets id.
     *
     * @param float|null $id  Automatically generated ID
     *
     * @return $this
     */
    public function setId($id = null)
    {
        $this->id = $id;

        return $this;
    }

    /**
     * Gets assetId.
     *
     * @return float
     */
    public function getAssetId()
    {
        return $this->assetId;
    }

    /**
     * Sets assetId.
     *
     * @param float $assetId  ID of Asset that Dashboard Element belongs to
     *
     * @return $this
     */
    public function setAssetId($assetId)
    {
        $this->assetId = $assetId;

        return $this;
    }

    /**
     * Gets userId.
     *
     * @return float
     */
    public function getUserId()
    {
        return $this->userId;
    }

    /**
     * Sets userId.
     *
     * @param float $userId  ID of User that Dashboard Element belongs to
     *
     * @return $this
     */
    public function setUserId($userId)
    {
        $this->userId = $userId;

        return $this;
    }

    /**
     * Gets deviceCategory.
     *
     * @return string
     */
    public function getDeviceCategory()
    {
        return $this->deviceCategory;
    }

    /**
     * Sets deviceCategory.
     *
     * @param string $deviceCategory  Device Category
     *
     * @return $this
     */
    public function setDeviceCategory($deviceCategory)
    {
        $this->deviceCategory = $deviceCategory;

        return $this;
    }

    /**
     * Gets channelCategory.
     *
     * @return string
     */
    public function getChannelCategory()
    {
        return $this->channelCategory;
    }

    /**
     * Sets channelCategory.
     *
     * @param string $channelCategory  Channel Category
     *
     * @return $this
     */
    public function setChannelCategory($channelCategory)
    {
        $this->channelCategory = $channelCategory;

        return $this;
    }

    /**
     * Gets elementType.
     *
     * @return string
     */
    public function getElementType()
    {
        return $this->elementType;
    }

    /**
     * Sets elementType.
     *
     * @param string $elementType  Element Type
     *
     * @return $this
     */
    public function setElementType($elementType)
    {
        $this->elementType = $elementType;

        return $this;
    }

    /**
     * Gets position.
     *
     * @return float
     */
    public function getPosition()
    {
        return $this->position;
    }

    /**
     * Sets position.
     *
     * @param float $position  Element Position
     *
     * @return $this
     */
    public function setPosition($position)
    {
        $this->position = $position;

        return $this;
    }

    /**
     * Gets location.
     *
     * @return string
     */
    public function getLocation()
    {
        return $this->location;
    }

    /**
     * Sets location.
     *
     * @param string $location  Element Location: mainDashboard / assetDashboard
     *
     * @return $this
     */
    public function setLocation($location)
    {
        $this->location = $location;

        return $this;
    }

    /**
     * Gets timeWindow.
     *
     * @return float
     */
    public function getTimeWindow()
    {
        return $this->timeWindow;
    }

    /**
     * Sets timeWindow.
     *
     * @param float $timeWindow  Time Window
     *
     * @return $this
     */
    public function setTimeWindow($timeWindow)
    {
        $this->timeWindow = $timeWindow;

        return $this;
    }

    /**
     * Gets operation.
     *
     * @return string
     */
    public function getOperation()
    {
        return $this->operation;
    }

    /**
     * Sets operation.
     *
     * @param string $operation  Data Operation
     *
     * @return $this
     */
    public function setOperation($operation)
    {
        $this->operation = $operation;

        return $this;
    }

    /**
     * Gets groupBy.
     *
     * @return string
     */
    public function getGroupBy()
    {
        return $this->groupBy;
    }

    /**
     * Sets groupBy.
     *
     * @param string $groupBy  Data group by
     *
     * @return $this
     */
    public function setGroupBy($groupBy)
    {
        $this->groupBy = $groupBy;

        return $this;
    }

    /**
     * Gets title.
     *
     * @return string|null
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * Sets title.
     *
     * @param string|null $title  Element Title
     *
     * @return $this
     */
    public function setTitle($title = null)
    {
        $this->title = $title;

        return $this;
    }

    /**
     * Gets xLabel.
     *
     * @return string|null
     */
    public function getXLabel()
    {
        return $this->xLabel;
    }

    /**
     * Sets xLabel.
     *
     * @param string|null $xLabel  Element X Label
     *
     * @return $this
     */
    public function setXLabel($xLabel = null)
    {
        $this->xLabel = $xLabel;

        return $this;
    }

    /**
     * Gets yLabel.
     *
     * @return string|null
     */
    public function getYLabel()
    {
        return $this->yLabel;
    }

    /**
     * Sets yLabel.
     *
     * @param string|null $yLabel  Element Y Label
     *
     * @return $this
     */
    public function setYLabel($yLabel = null)
    {
        $this->yLabel = $yLabel;

        return $this;
    }
}


