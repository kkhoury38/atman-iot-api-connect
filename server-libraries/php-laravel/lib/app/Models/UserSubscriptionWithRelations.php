<?php
/**
 * UserSubscriptionWithRelations
 */
namespace app\Models;

/**
 * UserSubscriptionWithRelations
 */
class UserSubscriptionWithRelations {

    /** @var float $id */
    private $id;

    /** @var string $referenceCode */
    private $referenceCode;

    /** @var string $email */
    private $email;

    /** @var float $discount */
    private $discount;

    /** @var \DateTime $creationTimestamp Timestamp*/
    private $creationTimestamp;

    /** @var \DateTime $activationTimestamp Timestamp*/
    private $activationTimestamp;

    /** @var \DateTime $endTimestamp Timestamp*/
    private $endTimestamp;

    /** @var bool $hasRegistered */
    private $hasRegistered;

    /** @var float $subscriptionId ID of Subscription*/
    private $subscriptionId;

    /** @var \app\Models\SubscriptionWithRelations $subscription */
    private $subscription;

}
