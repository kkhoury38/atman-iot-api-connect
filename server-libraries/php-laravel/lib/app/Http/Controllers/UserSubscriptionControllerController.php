<?php

/**
 * Atman IoT
 * Atman IoT Server
 *
 * The version of the OpenAPI document: 3.0.1
 * Contact: k.khoury@k-ren.gr
 *
 * NOTE: This class is auto generated by OpenAPI-Generator
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 * Source files are located at:
 *
 * > https://github.com/OpenAPITools/openapi-generator/blob/master/modules/openapi-generator/src/main/resources/php-laravel/
 */


namespace App\Http\Controllers;

use Illuminate\Support\Facades\Request;

class UserSubscriptionControllerController extends Controller
{
    /**
     * Constructor
     */
    public function __construct()
    {
    }

    /**
     * Operation userSubscriptionControllerGetByRefferenceCode
     *
     * .
     *
     * @param string $referenceCode  (required)
     *
     * @return Http response
     */
    public function userSubscriptionControllerGetByRefferenceCode($referenceCode)
    {
        $input = Request::all();

        //path params validation


        //not path params validation

        return response('How about implementing userSubscriptionControllerGetByRefferenceCode as a get method ?');
    }
    /**
     * Operation userSubscriptionControllerCreateUserSubscriptionBySubId
     *
     * .
     *
     * @param float $subscriptionId  (required)
     *
     * @return Http response
     */
    public function userSubscriptionControllerCreateUserSubscriptionBySubId($subscriptionId)
    {
        $input = Request::all();

        //path params validation


        //not path params validation

        return response('How about implementing userSubscriptionControllerCreateUserSubscriptionBySubId as a get method ?');
    }
    /**
     * Operation userSubscriptionControllerFindSubscriptionsByCategory
     *
     * .
     *
     * @param string $product  (required)
     *
     * @return Http response
     */
    public function userSubscriptionControllerFindSubscriptionsByCategory($product)
    {
        $input = Request::all();

        //path params validation


        //not path params validation

        return response('How about implementing userSubscriptionControllerFindSubscriptionsByCategory as a get method ?');
    }
    /**
     * Operation userSubscriptionControllerCreate
     *
     * .
     *
     *
     * @return Http response
     */
    public function userSubscriptionControllerCreate()
    {
        $input = Request::all();

        //path params validation


        //not path params validation
        $body = $input['body'];


        return response('How about implementing userSubscriptionControllerCreate as a post method ?');
    }
    /**
     * Operation userSubscriptionControllerVerifyCode
     *
     * .
     *
     *
     * @return Http response
     */
    public function userSubscriptionControllerVerifyCode()
    {
        $input = Request::all();

        //path params validation


        //not path params validation
        $codeVerificationRequest = $input['codeVerificationRequest'];


        return response('How about implementing userSubscriptionControllerVerifyCode as a post method ?');
    }
}
