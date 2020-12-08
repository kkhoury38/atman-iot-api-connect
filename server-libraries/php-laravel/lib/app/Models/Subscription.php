<?php
/**
 * Subscription
 */
namespace app\Models;

/**
 * Subscription
 */
class Subscription {

    /** @var float $id */
    private $id;

    /** @var string $product */
    private $product;

    /** @var string $type */
    private $type;

    /** @var string $description */
    private $description;

    /** @var float $duration */
    private $duration;

    /** @var float $monthlyPrice */
    private $monthlyPrice;

    /** @var float $yearlyPrice */
    private $yearlyPrice;

    /** @var bool $active */
    private $active;

}
