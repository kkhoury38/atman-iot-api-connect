<?php

/**
 * AssetControllerController
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
use OpenAPI\Server\Api\AssetControllerApiInterface;
use OpenAPI\Server\Model\Asset;
use OpenAPI\Server\Model\AssetExcludingId;
use OpenAPI\Server\Model\AssetExcludingIdAssetGroupId;

/**
 * AssetControllerController Class Doc Comment
 *
 * @category Class
 * @package  OpenAPI\Server\Controller
 * @author   OpenAPI Generator team
 * @link     https://github.com/openapitools/openapi-generator
 */
class AssetControllerController extends Controller
{

    /**
     * Operation assetControllerCreate
     *
     * @param Request $request The Symfony request to handle.
     * @return Response The Symfony response.
     */
    public function assetControllerCreateAction(Request $request)
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
        $assetExcludingId = $request->getContent();

        // Use the default value if no value was provided

        // Deserialize the input values that needs it
        try {
            $inputFormat = $request->getMimeType($request->getContentType());
            $assetExcludingId = $this->deserialize($assetExcludingId, 'OpenAPI\Server\Model\AssetExcludingId', $inputFormat);
        } catch (SerializerRuntimeException $exception) {
            return $this->createBadRequestResponse($exception->getMessage());
        }

        // Validate the input values
        $asserts = [];
        $asserts[] = new Assert\Type("OpenAPI\Server\Model\AssetExcludingId");
        $asserts[] = new Assert\Valid();
        $response = $this->validate($assetExcludingId, $asserts);
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
            $result = $handler->assetControllerCreate($assetExcludingId, $responseCode, $responseHeaders);

            // Find default response message
            $message = 'Returns created Asset model instance';

            // Find a more specific message, if available
            switch ($responseCode) {
                case 200:
                    $message = 'Returns created Asset model instance';
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
     * Operation assetControllerDeleteById
     *
     * @param Request $request The Symfony request to handle.
     * @return Response The Symfony response.
     */
    public function assetControllerDeleteByIdAction(Request $request, $id)
    {
        // Handle authentication
        // Authentication 'bearerAuth' required
        // HTTP basic authentication required
        $securitybearerAuth = $request->headers->get('authorization');

        // Read out all input parameter values into variables

        // Use the default value if no value was provided

        // Deserialize the input values that needs it
        try {
            $id = $this->deserialize($id, 'float', 'string');
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


        try {
            $handler = $this->getApiHandler();

            // Set authentication method 'bearerAuth'
            $handler->setbearerAuth($securitybearerAuth);
            
            // Make the call to the business logic
            $responseCode = 204;
            $responseHeaders = [];
            $result = $handler->assetControllerDeleteById($id, $responseCode, $responseHeaders);

            // Find default response message
            $message = 'Asset model instance deletion verification';

            // Find a more specific message, if available
            switch ($responseCode) {
                case 204:
                    $message = 'Asset model instance deletion verification';
                    break;
                case 401:
                    $message = 'User is not authorized';
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
     * Operation assetControllerFind
     *
     * @param Request $request The Symfony request to handle.
     * @return Response The Symfony response.
     */
    public function assetControllerFindAction(Request $request, $assetGroupId)
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
            $assetGroupId = $this->deserialize($assetGroupId, 'float', 'string');
        } catch (SerializerRuntimeException $exception) {
            return $this->createBadRequestResponse($exception->getMessage());
        }

        // Validate the input values
        $asserts = [];
        $asserts[] = new Assert\NotNull();
        $asserts[] = new Assert\Type("float");
        $response = $this->validate($assetGroupId, $asserts);
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
            $result = $handler->assetControllerFind($assetGroupId, $responseCode, $responseHeaders);

            // Find default response message
            $message = 'Returns Array of Asset model instances in AssetGroup with provided id';

            // Find a more specific message, if available
            switch ($responseCode) {
                case 200:
                    $message = 'Returns Array of Asset model instances in AssetGroup with provided id';
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
     * Operation assetControllerFindByName
     *
     * @param Request $request The Symfony request to handle.
     * @return Response The Symfony response.
     */
    public function assetControllerFindByNameAction(Request $request, $assetName)
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
            $assetName = $this->deserialize($assetName, 'string', 'string');
        } catch (SerializerRuntimeException $exception) {
            return $this->createBadRequestResponse($exception->getMessage());
        }

        // Validate the input values
        $asserts = [];
        $asserts[] = new Assert\NotNull();
        $asserts[] = new Assert\Type("string");
        $response = $this->validate($assetName, $asserts);
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
            $result = $handler->assetControllerFindByName($assetName, $responseCode, $responseHeaders);

            // Find default response message
            $message = 'Returns Asset model instance that matches provided Asset name';

            // Find a more specific message, if available
            switch ($responseCode) {
                case 200:
                    $message = 'Returns Asset model instance that matches provided Asset name';
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
     * Operation assetControllerFindByUserId
     *
     * @param Request $request The Symfony request to handle.
     * @return Response The Symfony response.
     */
    public function assetControllerFindByUserIdAction(Request $request, $userId)
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
            $userId = $this->deserialize($userId, 'float', 'string');
        } catch (SerializerRuntimeException $exception) {
            return $this->createBadRequestResponse($exception->getMessage());
        }

        // Validate the input values
        $asserts = [];
        $asserts[] = new Assert\NotNull();
        $asserts[] = new Assert\Type("float");
        $response = $this->validate($userId, $asserts);
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
            $result = $handler->assetControllerFindByUserId($userId, $responseCode, $responseHeaders);

            // Find default response message
            $message = 'Returns array of Asset model instances that matches provided User Id';

            // Find a more specific message, if available
            switch ($responseCode) {
                case 200:
                    $message = 'Returns array of Asset model instances that matches provided User Id';
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
     * Operation assetControllerUpdateById
     *
     * @param Request $request The Symfony request to handle.
     * @return Response The Symfony response.
     */
    public function assetControllerUpdateByIdAction(Request $request, $id)
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
        $assetExcludingIdAssetGroupId = $request->getContent();

        // Use the default value if no value was provided

        // Deserialize the input values that needs it
        try {
            $id = $this->deserialize($id, 'float', 'string');
            $inputFormat = $request->getMimeType($request->getContentType());
            $assetExcludingIdAssetGroupId = $this->deserialize($assetExcludingIdAssetGroupId, 'OpenAPI\Server\Model\AssetExcludingIdAssetGroupId', $inputFormat);
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
        $asserts[] = new Assert\Type("OpenAPI\Server\Model\AssetExcludingIdAssetGroupId");
        $asserts[] = new Assert\Valid();
        $response = $this->validate($assetExcludingIdAssetGroupId, $asserts);
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
            $result = $handler->assetControllerUpdateById($id, $assetExcludingIdAssetGroupId, $responseCode, $responseHeaders);

            // Find default response message
            $message = 'Asset PATCH success';

            // Find a more specific message, if available
            switch ($responseCode) {
                case 204:
                    $message = 'Asset PATCH success';
                    break;
                case 401:
                    $message = 'User is not authorized';
                    break;
                case 404:
                    $message = 'Asset not found';
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
     * @return AssetControllerApiInterface
     */
    public function getApiHandler()
    {
        return $this->apiServer->getApiHandler('assetController');
    }
}
