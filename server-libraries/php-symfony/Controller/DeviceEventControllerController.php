<?php

/**
 * DeviceEventControllerController
 * PHP version 5
 *
 * @category Class
 * @package  OpenAPI\Server\Controller
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

namespace OpenAPI\Server\Controller;

use \Exception;
use JMS\Serializer\Exception\RuntimeException as SerializerRuntimeException;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Symfony\Component\Validator\Constraints as Assert;
use OpenAPI\Server\Api\DeviceEventControllerApiInterface;
use OpenAPI\Server\Model\DeviceEventWithRelations;
use OpenAPI\Server\Model\LoopbackCount;

/**
 * DeviceEventControllerController Class Doc Comment
 *
 * @category Class
 * @package  OpenAPI\Server\Controller
 * @author   OpenAPI Generator team
 * @link     https://github.com/openapitools/openapi-generator
 */
class DeviceEventControllerController extends Controller
{

    /**
     * Operation deviceEventControllerCountNotViewed
     *
     * @param Request $request The Symfony request to handle.
     * @return Response The Symfony response.
     */
    public function deviceEventControllerCountNotViewedAction(Request $request, $assetId)
    {
        // Figure out what data format to return to the client
        $produces = ['application/json'];
        // Figure out what the client accepts
        $clientAccepts = $request->headers->has('Accept')?$request->headers->get('Accept'):'*/*';
        $responseFormat = $this->getOutputFormat($clientAccepts, $produces);
        if ($responseFormat === null) {
            return new Response('', 406);
        }

        // Handle authentication
        // Authentication 'bearerAuth' required
        // HTTP basic authentication required
        $securitybearerAuth = $request->headers->get('authorization');

        // Read out all input parameter values into variables

        // Use the default value if no value was provided

        // Deserialize the input values that needs it
        try {
            $assetId = $this->deserialize($assetId, 'float', 'string');
        } catch (SerializerRuntimeException $exception) {
            return $this->createBadRequestResponse($exception->getMessage());
        }

        // Validate the input values
        $asserts = [];
        $asserts[] = new Assert\NotNull();
        $asserts[] = new Assert\Type("float");
        $response = $this->validate($assetId, $asserts);
        if ($response instanceof Response) {
            return $response;
        }


        try {
            $handler = $this->getApiHandler();

            // Set authentication method 'bearerAuth'
            $handler->setbearerAuth($securitybearerAuth);
            
            // Make the call to the business logic
            $responseCode = 200;
            $responseHeaders = [];
            $result = $handler->deviceEventControllerCountNotViewed($assetId, $responseCode, $responseHeaders);

            // Find default response message
            $message = 'Count of not viewed Device Events in asset';

            // Find a more specific message, if available
            switch ($responseCode) {
                case 200:
                    $message = 'Count of not viewed Device Events in asset';
                    break;
                case 401:
                    $message = 'User is not authorized';
                    break;
                case 406:
                    $message = 'Request is not acceptable. Check response for help';
                    break;
            }

            return new Response(
                $result !== null ?$this->serialize($result, $responseFormat):'',
                $responseCode,
                array_merge(
                    $responseHeaders,
                    [
                        'Content-Type' => $responseFormat,
                        'X-OpenAPI-Message' => $message
                    ]
                )
            );
        } catch (Exception $fallthrough) {
            return $this->createErrorResponse(new HttpException(500, 'An unsuspected error occurred.', $fallthrough));
        }
    }

    /**
     * Operation deviceEventControllerFind
     *
     * @param Request $request The Symfony request to handle.
     * @return Response The Symfony response.
     */
    public function deviceEventControllerFindAction(Request $request, $assetId, $page, $count)
    {
        // Figure out what data format to return to the client
        $produces = ['application/json'];
        // Figure out what the client accepts
        $clientAccepts = $request->headers->has('Accept')?$request->headers->get('Accept'):'*/*';
        $responseFormat = $this->getOutputFormat($clientAccepts, $produces);
        if ($responseFormat === null) {
            return new Response('', 406);
        }

        // Handle authentication
        // Authentication 'bearerAuth' required
        // HTTP basic authentication required
        $securitybearerAuth = $request->headers->get('authorization');

        // Read out all input parameter values into variables

        // Use the default value if no value was provided

        // Deserialize the input values that needs it
        try {
            $assetId = $this->deserialize($assetId, 'float', 'string');
            $page = $this->deserialize($page, 'float', 'string');
            $count = $this->deserialize($count, 'float', 'string');
        } catch (SerializerRuntimeException $exception) {
            return $this->createBadRequestResponse($exception->getMessage());
        }

        // Validate the input values
        $asserts = [];
        $asserts[] = new Assert\NotNull();
        $asserts[] = new Assert\Type("float");
        $response = $this->validate($assetId, $asserts);
        if ($response instanceof Response) {
            return $response;
        }
        $asserts = [];
        $asserts[] = new Assert\NotNull();
        $asserts[] = new Assert\Type("float");
        $response = $this->validate($page, $asserts);
        if ($response instanceof Response) {
            return $response;
        }
        $asserts = [];
        $asserts[] = new Assert\NotNull();
        $asserts[] = new Assert\Type("float");
        $response = $this->validate($count, $asserts);
        if ($response instanceof Response) {
            return $response;
        }


        try {
            $handler = $this->getApiHandler();

            // Set authentication method 'bearerAuth'
            $handler->setbearerAuth($securitybearerAuth);
            
            // Make the call to the business logic
            $responseCode = 200;
            $responseHeaders = [];
            $result = $handler->deviceEventControllerFind($assetId, $page, $count, $responseCode, $responseHeaders);

            // Find default response message
            $message = 'Array of DeviceEvents in asset';

            // Find a more specific message, if available
            switch ($responseCode) {
                case 200:
                    $message = 'Array of DeviceEvents in asset';
                    break;
                case 401:
                    $message = 'User is not authorized';
                    break;
                case 406:
                    $message = 'Request is not acceptable. Check response for help';
                    break;
            }

            return new Response(
                $result !== null ?$this->serialize($result, $responseFormat):'',
                $responseCode,
                array_merge(
                    $responseHeaders,
                    [
                        'Content-Type' => $responseFormat,
                        'X-OpenAPI-Message' => $message
                    ]
                )
            );
        } catch (Exception $fallthrough) {
            return $this->createErrorResponse(new HttpException(500, 'An unsuspected error occurred.', $fallthrough));
        }
    }

    /**
     * Operation deviceEventControllerUpdateViewedBy
     *
     * @param Request $request The Symfony request to handle.
     * @return Response The Symfony response.
     */
    public function deviceEventControllerUpdateViewedByAction(Request $request, $eventId)
    {
        // Handle authentication
        // Authentication 'bearerAuth' required
        // HTTP basic authentication required
        $securitybearerAuth = $request->headers->get('authorization');

        // Read out all input parameter values into variables

        // Use the default value if no value was provided

        // Deserialize the input values that needs it
        try {
            $eventId = $this->deserialize($eventId, 'float', 'string');
        } catch (SerializerRuntimeException $exception) {
            return $this->createBadRequestResponse($exception->getMessage());
        }

        // Validate the input values
        $asserts = [];
        $asserts[] = new Assert\NotNull();
        $asserts[] = new Assert\Type("float");
        $response = $this->validate($eventId, $asserts);
        if ($response instanceof Response) {
            return $response;
        }


        try {
            $handler = $this->getApiHandler();

            // Set authentication method 'bearerAuth'
            $handler->setbearerAuth($securitybearerAuth);
            
            // Make the call to the business logic
            $responseCode = 204;
            $responseHeaders = [];
            $result = $handler->deviceEventControllerUpdateViewedBy($eventId, $responseCode, $responseHeaders);

            // Find default response message
            $message = 'DeviceEvent updated';

            // Find a more specific message, if available
            switch ($responseCode) {
                case 204:
                    $message = 'DeviceEvent updated';
                    break;
                case 401:
                    $message = 'User is not authorized';
                    break;
                case 406:
                    $message = 'Request is not acceptable. Check response for help';
                    break;
            }

            return new Response(
                '',
                $responseCode,
                array_merge(
                    $responseHeaders,
                    [
                        'X-OpenAPI-Message' => $message
                    ]
                )
            );
        } catch (Exception $fallthrough) {
            return $this->createErrorResponse(new HttpException(500, 'An unsuspected error occurred.', $fallthrough));
        }
    }

    /**
     * Returns the handler for this API controller.
     * @return DeviceEventControllerApiInterface
     */
    public function getApiHandler()
    {
        return $this->apiServer->getApiHandler('deviceEventController');
    }
}
