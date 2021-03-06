<?php
/**
 * UserSubscriptionControllerApiInterfaceTest
 * PHP version 5
 *
 * @category Class
 * @package  OpenAPI\Server\Tests\Api
 * @author   openapi-generator contributors
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
 * Please update the test case below to test the endpoint.
 */

namespace OpenAPI\Server\Tests\Api;

use OpenAPI\Server\Configuration;
use OpenAPI\Server\ApiClient;
use OpenAPI\Server\ApiException;
use OpenAPI\Server\ObjectSerializer;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

/**
 * UserSubscriptionControllerApiInterfaceTest Class Doc Comment
 *
 * @category Class
 * @package  OpenAPI\Server\Tests\Api
 * @author   openapi-generator contributors
 * @link     https://github.com/openapitools/openapi-generator
 */
class UserSubscriptionControllerApiInterfaceTest extends WebTestCase
{

    /**
     * Setup before running any test cases
     */
    public static function setUpBeforeClass()
    {
    }

    /**
     * Setup before running each test case
     */
    public function setUp()
    {
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown()
    {
    }

    /**
     * Clean up after running all test cases
     */
    public static function tearDownAfterClass()
    {
    }

    /**
     * Test case for userSubscriptionControllerCreate
     *
     * .
     *
     */
    public function testUserSubscriptionControllerCreate()
    {
        $client = static::createClient();

        $path = '/user-subscriptions/paypal/callback';

        $crawler = $client->request('POST', $path, [], [], ['CONTENT_TYPE' => 'application/json']);
    }

    /**
     * Test case for userSubscriptionControllerCreateUserSubscriptionBySubId
     *
     * .
     *
     */
    public function testUserSubscriptionControllerCreateUserSubscriptionBySubId()
    {
        $client = static::createClient();

        $path = '/user-subscription/get-new/{subscriptionId}';
        $pattern = '{subscriptionId}';
        $path = str_replace($pattern, $data, $path);

        $crawler = $client->request('GET', $path);
    }

    /**
     * Test case for userSubscriptionControllerFindSubscriptionsByCategory
     *
     * .
     *
     */
    public function testUserSubscriptionControllerFindSubscriptionsByCategory()
    {
        $client = static::createClient();

        $path = '/user-subscription/subscriptions/{product}';
        $pattern = '{product}';
        $data = $this->genTestData('[a-z0-9]+');
        $path = str_replace($pattern, $data, $path);

        $crawler = $client->request('GET', $path);
    }

    /**
     * Test case for userSubscriptionControllerGetByRefferenceCode
     *
     * .
     *
     */
    public function testUserSubscriptionControllerGetByRefferenceCode()
    {
        $client = static::createClient();

        $path = '/user-subscription/get-by-reference-code/{referenceCode}';
        $pattern = '{referenceCode}';
        $data = $this->genTestData('[a-z0-9]+');
        $path = str_replace($pattern, $data, $path);

        $crawler = $client->request('GET', $path);
    }

    /**
     * Test case for userSubscriptionControllerVerifyCode
     *
     * .
     *
     */
    public function testUserSubscriptionControllerVerifyCode()
    {
        $client = static::createClient();

        $path = '/user-subscriptions/verify-reference-code';

        $crawler = $client->request('POST', $path, [], [], ['CONTENT_TYPE' => 'application/json']);
    }

    protected function genTestData($regexp)
    {
        $grammar  = new \Hoa\File\Read('hoa://Library/Regex/Grammar.pp');
        $compiler = \Hoa\Compiler\Llk\Llk::load($grammar);
        $ast      = $compiler->parse($regexp);
        $generator = new \Hoa\Regex\Visitor\Isotropic(new \Hoa\Math\Sampler\Random());

        return $generator->visit($ast); 
    }
}
