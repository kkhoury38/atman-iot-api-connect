<?php
/**
 * DashboardElementControllerApiInterfaceTest
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
 * DashboardElementControllerApiInterfaceTest Class Doc Comment
 *
 * @category Class
 * @package  OpenAPI\Server\Tests\Api
 * @author   openapi-generator contributors
 * @link     https://github.com/openapitools/openapi-generator
 */
class DashboardElementControllerApiInterfaceTest extends WebTestCase
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
     * Test case for dashboardElementControllerCreate
     *
     * .
     *
     */
    public function testDashboardElementControllerCreate()
    {
        $client = static::createClient();

        $path = '/dashboard-element';

        $crawler = $client->request('POST', $path, [], [], ['CONTENT_TYPE' => 'application/json']);
    }

    /**
     * Test case for dashboardElementControllerDeleteById
     *
     * .
     *
     */
    public function testDashboardElementControllerDeleteById()
    {
        $client = static::createClient();

        $path = '/dashboard-element/{id}';
        $pattern = '{id}';
        $path = str_replace($pattern, $data, $path);

        $crawler = $client->request('DELETE', $path);
    }

    /**
     * Test case for dashboardElementControllerFindByUserIdAssetIdLocation
     *
     * .
     *
     */
    public function testDashboardElementControllerFindByUserIdAssetIdLocation()
    {
        $client = static::createClient();

        $path = '/dashboard-elements/asset-id/{assetId}/user-id/{userId}/location/{location}';
        $pattern = '{assetId}';
        $path = str_replace($pattern, $data, $path);
        $pattern = '{userId}';
        $path = str_replace($pattern, $data, $path);
        $pattern = '{location}';
        $data = $this->genTestData('[a-z0-9]+');
        $path = str_replace($pattern, $data, $path);

        $crawler = $client->request('GET', $path);
    }

    /**
     * Test case for dashboardElementControllerMoveElementDown
     *
     * .
     *
     */
    public function testDashboardElementControllerMoveElementDown()
    {
        $client = static::createClient();

        $path = '/dashboard-element/{id}/move-down';
        $pattern = '{id}';
        $path = str_replace($pattern, $data, $path);

        $crawler = $client->request('PATCH', $path);
    }

    /**
     * Test case for dashboardElementControllerMoveElementUp
     *
     * .
     *
     */
    public function testDashboardElementControllerMoveElementUp()
    {
        $client = static::createClient();

        $path = '/dashboard-element/{id}/move-up';
        $pattern = '{id}';
        $path = str_replace($pattern, $data, $path);

        $crawler = $client->request('PATCH', $path);
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
