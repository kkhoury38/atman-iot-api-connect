<?php

/**
 * EventControllerController
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
use OpenAPI\Server\Api\EventControllerApiInterface;
use OpenAPI\Server\Model\Event;
use OpenAPI\Server\Model\EventExcludingIdResolvedTimestampResolutionTimestamp;
use OpenAPI\Server\Model\EventRelatedDevice;
use OpenAPI\Server\Model\EventRelatedDeviceExcludingId;
use OpenAPI\Server\Model\EventRule;
use OpenAPI\Server\Model\EventRuleSubscription;
use OpenAPI\Server\Model\EventRuleSubscriptionExcludingIdLastExecTimestamp;
use OpenAPI\Server\Model\RequestEventCreateRule;
use OpenAPI\Server\Model\ResponseEventAssetEvents;

/**
 * EventControllerController Class Doc Comment
 *
 * @category Class
 * @package  OpenAPI\Server\Controller
 * @author   OpenAPI Generator team
 * @link     https://github.com/openapitools/openapi-generator
 */
class EventControllerController extends Controller
{

    /**
     * Operation eventControllerCreateNow
     *
     * @param Request $request The Symfony request to handle.
     * @return Response The Symfony response.
     */
    public function eventControllerCreateNowAction(Request $request)
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
        $eventExcludingIdResolvedTimestampResolutionTimestamp = $request->getContent();

        // Use the default value if no value was provided

        // Deserialize the input values that needs it
        try {
            $inputFormat = $request->getMimeType($request->getContentType());
            $eventExcludingIdResolvedTimestampResolutionTimestamp = $this->deserialize($eventExcludingIdResolvedTimestampResolutionTimestamp, 'OpenAPI\Server\Model\EventExcludingIdResolvedTimestampResolutionTimestamp', $inputFormat);
        } catch (SerializerRuntimeException $exception) {
            return $this->createBadRequestResponse($exception->getMessage());
        }

        // Validate the input values
        $asserts = [];
        $asserts[] = new Assert\Type("OpenAPI\Server\Model\EventExcludingIdResolvedTimestampResolutionTimestamp");
        $asserts[] = new Assert\Valid();
        $response = $this->validate($eventExcludingIdResolvedTimestampResolutionTimestamp, $asserts);
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
            $result = $handler->eventControllerCreateNow($eventExcludingIdResolvedTimestampResolutionTimestamp, $responseCode, $responseHeaders);

            // Find default response message
            $message = 'Event model instance';

            // Find a more specific message, if available
            switch ($responseCode) {
                case 200:
                    $message = 'Event model instance';
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
     * Operation eventControllerCreateRelatedDev
     *
     * @param Request $request The Symfony request to handle.
     * @return Response The Symfony response.
     */
    public function eventControllerCreateRelatedDevAction(Request $request)
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
        $eventRelatedDeviceExcludingId = $request->getContent();

        // Use the default value if no value was provided

        // Deserialize the input values that needs it
        try {
            $inputFormat = $request->getMimeType($request->getContentType());
            $eventRelatedDeviceExcludingId = $this->deserialize($eventRelatedDeviceExcludingId, 'OpenAPI\Server\Model\EventRelatedDeviceExcludingId', $inputFormat);
        } catch (SerializerRuntimeException $exception) {
            return $this->createBadRequestResponse($exception->getMessage());
        }

        // Validate the input values
        $asserts = [];
        $asserts[] = new Assert\Type("OpenAPI\Server\Model\EventRelatedDeviceExcludingId");
        $asserts[] = new Assert\Valid();
        $response = $this->validate($eventRelatedDeviceExcludingId, $asserts);
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
            $result = $handler->eventControllerCreateRelatedDev($eventRelatedDeviceExcludingId, $responseCode, $responseHeaders);

            // Find default response message
            $message = 'Event Related Device model instance';

            // Find a more specific message, if available
            switch ($responseCode) {
                case 200:
                    $message = 'Event Related Device model instance';
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
     * Operation eventControllerCreateRule
     *
     * @param Request $request The Symfony request to handle.
     * @return Response The Symfony response.
     */
    public function eventControllerCreateRuleAction(Request $request)
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
        $requestEventCreateRule = $request->getContent();

        // Use the default value if no value was provided

        // Deserialize the input values that needs it
        try {
            $inputFormat = $request->getMimeType($request->getContentType());
            $requestEventCreateRule = $this->deserialize($requestEventCreateRule, 'OpenAPI\Server\Model\RequestEventCreateRule', $inputFormat);
        } catch (SerializerRuntimeException $exception) {
            return $this->createBadRequestResponse($exception->getMessage());
        }

        // Validate the input values
        $asserts = [];
        $asserts[] = new Assert\Type("OpenAPI\Server\Model\RequestEventCreateRule");
        $asserts[] = new Assert\Valid();
        $response = $this->validate($requestEventCreateRule, $asserts);
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
            $result = $handler->eventControllerCreateRule($requestEventCreateRule, $responseCode, $responseHeaders);

            // Find default response message
            $message = 'Event Rule model instance';

            // Find a more specific message, if available
            switch ($responseCode) {
                case 200:
                    $message = 'Event Rule model instance';
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
     * Operation eventControllerCreateRuleSubscription
     *
     * @param Request $request The Symfony request to handle.
     * @return Response The Symfony response.
     */
    public function eventControllerCreateRuleSubscriptionAction(Request $request)
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
        $eventRuleSubscriptionExcludingIdLastExecTimestamp = $request->getContent();

        // Use the default value if no value was provided

        // Deserialize the input values that needs it
        try {
            $inputFormat = $request->getMimeType($request->getContentType());
            $eventRuleSubscriptionExcludingIdLastExecTimestamp = $this->deserialize($eventRuleSubscriptionExcludingIdLastExecTimestamp, 'OpenAPI\Server\Model\EventRuleSubscriptionExcludingIdLastExecTimestamp', $inputFormat);
        } catch (SerializerRuntimeException $exception) {
            return $this->createBadRequestResponse($exception->getMessage());
        }

        // Validate the input values
        $asserts = [];
        $asserts[] = new Assert\Type("OpenAPI\Server\Model\EventRuleSubscriptionExcludingIdLastExecTimestamp");
        $asserts[] = new Assert\Valid();
        $response = $this->validate($eventRuleSubscriptionExcludingIdLastExecTimestamp, $asserts);
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
            $result = $handler->eventControllerCreateRuleSubscription($eventRuleSubscriptionExcludingIdLastExecTimestamp, $responseCode, $responseHeaders);

            // Find default response message
            $message = 'Event Rule Subscription model instance';

            // Find a more specific message, if available
            switch ($responseCode) {
                case 200:
                    $message = 'Event Rule Subscription model instance';
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
     * Operation eventControllerFind
     *
     * @param Request $request The Symfony request to handle.
     * @return Response The Symfony response.
     */
    public function eventControllerFindAction(Request $request, $assetId)
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
            $result = $handler->eventControllerFind($assetId, $responseCode, $responseHeaders);

            // Find default response message
            $message = 'Array of all Asset Events';

            // Find a more specific message, if available
            switch ($responseCode) {
                case 200:
                    $message = 'Array of all Asset Events';
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
     * Operation eventControllerFindUnresolved
     *
     * @param Request $request The Symfony request to handle.
     * @return Response The Symfony response.
     */
    public function eventControllerFindUnresolvedAction(Request $request, $assetId)
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
            $result = $handler->eventControllerFindUnresolved($assetId, $responseCode, $responseHeaders);

            // Find default response message
            $message = 'Array of unresolved Asset Events';

            // Find a more specific message, if available
            switch ($responseCode) {
                case 200:
                    $message = 'Array of unresolved Asset Events';
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
     * Operation eventControllerProcessSubscriptions
     *
     * @param Request $request The Symfony request to handle.
     * @return Response The Symfony response.
     */
    public function eventControllerProcessSubscriptionsAction(Request $request)
    {
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
            $responseCode = 204;
            $responseHeaders = [];
            $result = $handler->eventControllerProcessSubscriptions($responseCode, $responseHeaders);

            // Find default response message
            $message = 'Event Processing finished';

            // Find a more specific message, if available
            switch ($responseCode) {
                case 204:
                    $message = 'Event Processing finished';
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
     * Operation eventControllerUpdateById
     *
     * @param Request $request The Symfony request to handle.
     * @return Response The Symfony response.
     */
    public function eventControllerUpdateByIdAction(Request $request, $id)
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
            $result = $handler->eventControllerUpdateById($id, $responseCode, $responseHeaders);

            // Find default response message
            $message = 'Event resolved';

            // Find a more specific message, if available
            switch ($responseCode) {
                case 204:
                    $message = 'Event resolved';
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
     * @return EventControllerApiInterface
     */
    public function getApiHandler()
    {
        return $this->apiServer->getApiHandler('eventController');
    }
}
