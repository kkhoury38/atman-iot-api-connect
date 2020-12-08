<?php

/**
 * DeviceTypeControllerController
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
use OpenAPI\Server\Api\DeviceTypeControllerApiInterface;
use OpenAPI\Server\Model\DeviceType;
use OpenAPI\Server\Model\DeviceTypeExcludingIdModelManufacturer;
use OpenAPI\Server\Model\DeviceTypeExcludingModelDescriptionManufacturer;
use OpenAPI\Server\Model\LoopbackCount;

/**
 * DeviceTypeControllerController Class Doc Comment
 *
 * @category Class
 * @package  OpenAPI\Server\Controller
 * @author   OpenAPI Generator team
 * @link     https://github.com/openapitools/openapi-generator
 */
class DeviceTypeControllerController extends Controller
{

    /**
     * Operation deviceTypeControllerCount
     *
     * @param Request $request The Symfony request to handle.
     * @return Response The Symfony response.
     */
    public function deviceTypeControllerCountAction(Request $request)
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

        // Validate the input values


        try {
            $handler = $this->getApiHandler();

            // Set authentication method 'bearerAuth'
            $handler->setbearerAuth($securitybearerAuth);
            
            // Make the call to the business logic
            $responseCode = 200;
            $responseHeaders = [];
            $result = $handler->deviceTypeControllerCount($responseCode, $responseHeaders);

            // Find default response message
            $message = 'DeviceType model count';

            // Find a more specific message, if available
            switch ($responseCode) {
                case 200:
                    $message = 'DeviceType model count';
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
     * Operation deviceTypeControllerCreate
     *
     * @param Request $request The Symfony request to handle.
     * @return Response The Symfony response.
     */
    public function deviceTypeControllerCreateAction(Request $request)
    {
        // Make sure that the client is providing something that we can consume
        $consumes = ['application/json'];
        if (!static::isContentTypeAllowed($request, $consumes)) {
            // We can't consume the content that the client is sending us
            return new Response('', 415);
        }

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
        $deviceType = $request->getContent();

        // Use the default value if no value was provided

        // Deserialize the input values that needs it
        try {
            $inputFormat = $request->getMimeType($request->getContentType());
            $deviceType = $this->deserialize($deviceType, 'OpenAPI\Server\Model\DeviceType', $inputFormat);
        } catch (SerializerRuntimeException $exception) {
            return $this->createBadRequestResponse($exception->getMessage());
        }

        // Validate the input values
        $asserts = [];
        $asserts[] = new Assert\Type("OpenAPI\Server\Model\DeviceType");
        $asserts[] = new Assert\Valid();
        $response = $this->validate($deviceType, $asserts);
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
            $result = $handler->deviceTypeControllerCreate($deviceType, $responseCode, $responseHeaders);

            // Find default response message
            $message = 'DeviceType model instance';

            // Find a more specific message, if available
            switch ($responseCode) {
                case 200:
                    $message = 'DeviceType model instance';
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
     * Operation deviceTypeControllerFind
     *
     * @param Request $request The Symfony request to handle.
     * @return Response The Symfony response.
     */
    public function deviceTypeControllerFindAction(Request $request, $page, $count)
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
            $page = $this->deserialize($page, 'float', 'string');
            $count = $this->deserialize($count, 'float', 'string');
        } catch (SerializerRuntimeException $exception) {
            return $this->createBadRequestResponse($exception->getMessage());
        }

        // Validate the input values
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
            $result = $handler->deviceTypeControllerFind($page, $count, $responseCode, $responseHeaders);

            // Find default response message
            $message = 'Array of DeviceType model instances';

            // Find a more specific message, if available
            switch ($responseCode) {
                case 200:
                    $message = 'Array of DeviceType model instances';
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
     * Operation deviceTypeControllerGetAssetDeviceCategories
     *
     * @param Request $request The Symfony request to handle.
     * @return Response The Symfony response.
     */
    public function deviceTypeControllerGetAssetDeviceCategoriesAction(Request $request, $assetId)
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
            $result = $handler->deviceTypeControllerGetAssetDeviceCategories($assetId, $responseCode, $responseHeaders);

            // Find default response message
            $message = 'Array of DeviceType model instances';

            // Find a more specific message, if available
            switch ($responseCode) {
                case 200:
                    $message = 'Array of DeviceType model instances';
                    break;
                case 401:
                    $message = 'User is not authorized';
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
     * Operation deviceTypeControllerUpdateById
     *
     * @param Request $request The Symfony request to handle.
     * @return Response The Symfony response.
     */
    public function deviceTypeControllerUpdateByIdAction(Request $request, $id)
    {
        // Make sure that the client is providing something that we can consume
        $consumes = ['application/json'];
        if (!static::isContentTypeAllowed($request, $consumes)) {
            // We can't consume the content that the client is sending us
            return new Response('', 415);
        }

        // Handle authentication
        // Authentication 'bearerAuth' required
        // HTTP basic authentication required
        $securitybearerAuth = $request->headers->get('authorization');

        // Read out all input parameter values into variables
        $deviceTypeExcludingIdModelManufacturer = $request->getContent();

        // Use the default value if no value was provided

        // Deserialize the input values that needs it
        try {
            $id = $this->deserialize($id, 'float', 'string');
            $inputFormat = $request->getMimeType($request->getContentType());
            $deviceTypeExcludingIdModelManufacturer = $this->deserialize($deviceTypeExcludingIdModelManufacturer, 'OpenAPI\Server\Model\DeviceTypeExcludingIdModelManufacturer', $inputFormat);
        } catch (SerializerRuntimeException $exception) {
            return $this->createBadRequestResponse($exception->getMessage());
        }

        // Validate the input values
        $asserts = [];
        $asserts[] = new Assert\NotNull();
        $asserts[] = new Assert\Type("float");
        $response = $this->validate($id, $asserts);
        if ($response instanceof Response) {
            return $response;
        }
        $asserts = [];
        $asserts[] = new Assert\Type("OpenAPI\Server\Model\DeviceTypeExcludingIdModelManufacturer");
        $asserts[] = new Assert\Valid();
        $response = $this->validate($deviceTypeExcludingIdModelManufacturer, $asserts);
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
            $result = $handler->deviceTypeControllerUpdateById($id, $deviceTypeExcludingIdModelManufacturer, $responseCode, $responseHeaders);

            // Find default response message
            $message = 'DeviceType PATCH success';

            // Find a more specific message, if available
            switch ($responseCode) {
                case 204:
                    $message = 'DeviceType PATCH success';
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
     * @return DeviceTypeControllerApiInterface
     */
    public function getApiHandler()
    {
        return $this->apiServer->getApiHandler('deviceTypeController');
    }
}
