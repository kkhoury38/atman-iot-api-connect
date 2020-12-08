<?php
/**
 * UserWithRelations
 */
namespace app\Models;

/**
 * UserWithRelations
 */
class UserWithRelations {

    /** @var float $id Automatically generated ID*/
    private $id;

    /** @var string $username Username*/
    private $username;

    /** @var string $passwd Password*/
    private $passwd;

    /** @var string $email Email*/
    private $email;

    /** @var string[] $roles */
    private $roles;

    /** @var bool $isVirtual Automatically assigned flag to select if User is virtual or not*/
    private $isVirtual;

    /** @var string $subscriptionReferenceCode */
    private $subscriptionReferenceCode;

    /** @var \app\Models\UserCredentialsWithRelations $userCredentials */
    private $userCredentials;

}
