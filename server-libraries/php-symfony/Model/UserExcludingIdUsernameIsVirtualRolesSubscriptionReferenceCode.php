<?php
/**
 * UserExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode
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
 * Class representing the UserExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode model.
 *
 * (Schema options: { exclude: [ &#39;id&#39;, &#39;username&#39;, &#39;isVirtual&#39;, &#39;roles&#39;, &#39;subscriptionReferenceCode&#39; ] })
 *
 * @package OpenAPI\Server\Model
 * @author  OpenAPI Generator team
 */
class UserExcludingIdUsernameIsVirtualRolesSubscriptionReferenceCode 
{
        /**
     * Password
     *
     * @var string|null
     * @SerializedName("passwd")
     * @Assert\Type("string")
     * @Type("string")
     */
    protected $passwd;

    /**
     * Email
     *
     * @var string
     * @SerializedName("email")
     * @Assert\NotNull()
     * @Assert\Type("string")
     * @Type("string")
     */
    protected $email;

    /**
     * Constructor
     * @param mixed[] $data Associated array of property values initializing the model
     */
    public function __construct(array $data = null)
    {
        $this->passwd = isset($data['passwd']) ? $data['passwd'] : null;
        $this->email = isset($data['email']) ? $data['email'] : null;
    }

    /**
     * Gets passwd.
     *
     * @return string|null
     */
    public function getPasswd()
    {
        return $this->passwd;
    }

    /**
     * Sets passwd.
     *
     * @param string|null $passwd  Password
     *
     * @return $this
     */
    public function setPasswd($passwd = null)
    {
        $this->passwd = $passwd;

        return $this;
    }

    /**
     * Gets email.
     *
     * @return string
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * Sets email.
     *
     * @param string $email  Email
     *
     * @return $this
     */
    public function setEmail($email)
    {
        $this->email = $email;

        return $this;
    }
}


