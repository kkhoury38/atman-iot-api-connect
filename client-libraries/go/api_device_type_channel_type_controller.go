/*
 * Atman IoT
 *
 * Atman IoT Server
 *
 * API version: 3.0.1
 * Contact: k.khoury@k-ren.gr
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package openapi

import (
	_context "context"
	_ioutil "io/ioutil"
	_nethttp "net/http"
	_neturl "net/url"
	"strings"
	"github.com/antihax/optional"
)

// Linger please
var (
	_ _context.Context
)

// DeviceTypeChannelTypeControllerApiService DeviceTypeChannelTypeControllerApi service
type DeviceTypeChannelTypeControllerApiService service

/*
DeviceTypeChannelTypeControllerCount Method for DeviceTypeChannelTypeControllerCount
 * @param ctx _context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 * @param deviceTypeId
@return LoopbackCount
*/
func (a *DeviceTypeChannelTypeControllerApiService) DeviceTypeChannelTypeControllerCount(ctx _context.Context, deviceTypeId float32) (LoopbackCount, *_nethttp.Response, error) {
	var (
		localVarHTTPMethod   = _nethttp.MethodGet
		localVarPostBody     interface{}
		localVarFormFileName string
		localVarFileName     string
		localVarFileBytes    []byte
		localVarReturnValue  LoopbackCount
	)

	// create path and map variables
	localVarPath := a.client.cfg.BasePath + "/device-type-channel-type/{deviceTypeId}/count"
	localVarPath = strings.Replace(localVarPath, "{"+"deviceTypeId"+"}", _neturl.QueryEscape(parameterToString(deviceTypeId, "")) , -1)

	localVarHeaderParams := make(map[string]string)
	localVarQueryParams := _neturl.Values{}
	localVarFormParams := _neturl.Values{}

	// to determine the Content-Type header
	localVarHTTPContentTypes := []string{}

	// set Content-Type header
	localVarHTTPContentType := selectHeaderContentType(localVarHTTPContentTypes)
	if localVarHTTPContentType != "" {
		localVarHeaderParams["Content-Type"] = localVarHTTPContentType
	}

	// to determine the Accept header
	localVarHTTPHeaderAccepts := []string{"application/json"}

	// set Accept header
	localVarHTTPHeaderAccept := selectHeaderAccept(localVarHTTPHeaderAccepts)
	if localVarHTTPHeaderAccept != "" {
		localVarHeaderParams["Accept"] = localVarHTTPHeaderAccept
	}
	r, err := a.client.prepareRequest(ctx, localVarPath, localVarHTTPMethod, localVarPostBody, localVarHeaderParams, localVarQueryParams, localVarFormParams, localVarFormFileName, localVarFileName, localVarFileBytes)
	if err != nil {
		return localVarReturnValue, nil, err
	}

	localVarHTTPResponse, err := a.client.callAPI(r)
	if err != nil || localVarHTTPResponse == nil {
		return localVarReturnValue, localVarHTTPResponse, err
	}

	localVarBody, err := _ioutil.ReadAll(localVarHTTPResponse.Body)
	localVarHTTPResponse.Body.Close()
	if err != nil {
		return localVarReturnValue, localVarHTTPResponse, err
	}

	if localVarHTTPResponse.StatusCode >= 300 {
		newErr := GenericOpenAPIError{
			body:  localVarBody,
			error: localVarHTTPResponse.Status,
		}
		return localVarReturnValue, localVarHTTPResponse, newErr
	}

	err = a.client.decode(&localVarReturnValue, localVarBody, localVarHTTPResponse.Header.Get("Content-Type"))
	if err != nil {
		newErr := GenericOpenAPIError{
			body:  localVarBody,
			error: err.Error(),
		}
		return localVarReturnValue, localVarHTTPResponse, newErr
	}

	return localVarReturnValue, localVarHTTPResponse, nil
}

// DeviceTypeChannelTypeControllerCreateOpts Optional parameters for the method 'DeviceTypeChannelTypeControllerCreate'
type DeviceTypeChannelTypeControllerCreateOpts struct {
    ChannelTypeExcludingIdDeviceTypeId optional.Interface
}

/*
DeviceTypeChannelTypeControllerCreate Method for DeviceTypeChannelTypeControllerCreate
 * @param ctx _context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 * @param deviceTypeId
 * @param optional nil or *DeviceTypeChannelTypeControllerCreateOpts - Optional Parameters:
 * @param "ChannelTypeExcludingIdDeviceTypeId" (optional.Interface of ChannelTypeExcludingIdDeviceTypeId) - 
@return ChannelType
*/
func (a *DeviceTypeChannelTypeControllerApiService) DeviceTypeChannelTypeControllerCreate(ctx _context.Context, deviceTypeId float32, localVarOptionals *DeviceTypeChannelTypeControllerCreateOpts) (ChannelType, *_nethttp.Response, error) {
	var (
		localVarHTTPMethod   = _nethttp.MethodPost
		localVarPostBody     interface{}
		localVarFormFileName string
		localVarFileName     string
		localVarFileBytes    []byte
		localVarReturnValue  ChannelType
	)

	// create path and map variables
	localVarPath := a.client.cfg.BasePath + "/device-type-channel-type/{deviceTypeId}"
	localVarPath = strings.Replace(localVarPath, "{"+"deviceTypeId"+"}", _neturl.QueryEscape(parameterToString(deviceTypeId, "")) , -1)

	localVarHeaderParams := make(map[string]string)
	localVarQueryParams := _neturl.Values{}
	localVarFormParams := _neturl.Values{}

	// to determine the Content-Type header
	localVarHTTPContentTypes := []string{"application/json"}

	// set Content-Type header
	localVarHTTPContentType := selectHeaderContentType(localVarHTTPContentTypes)
	if localVarHTTPContentType != "" {
		localVarHeaderParams["Content-Type"] = localVarHTTPContentType
	}

	// to determine the Accept header
	localVarHTTPHeaderAccepts := []string{"application/json"}

	// set Accept header
	localVarHTTPHeaderAccept := selectHeaderAccept(localVarHTTPHeaderAccepts)
	if localVarHTTPHeaderAccept != "" {
		localVarHeaderParams["Accept"] = localVarHTTPHeaderAccept
	}
	// body params
	if localVarOptionals != nil && localVarOptionals.ChannelTypeExcludingIdDeviceTypeId.IsSet() {
		localVarOptionalChannelTypeExcludingIdDeviceTypeId, localVarOptionalChannelTypeExcludingIdDeviceTypeIdok := localVarOptionals.ChannelTypeExcludingIdDeviceTypeId.Value().(ChannelTypeExcludingIdDeviceTypeId)
		if !localVarOptionalChannelTypeExcludingIdDeviceTypeIdok {
			return localVarReturnValue, nil, reportError("channelTypeExcludingIdDeviceTypeId should be ChannelTypeExcludingIdDeviceTypeId")
		}
		localVarPostBody = &localVarOptionalChannelTypeExcludingIdDeviceTypeId
	}

	r, err := a.client.prepareRequest(ctx, localVarPath, localVarHTTPMethod, localVarPostBody, localVarHeaderParams, localVarQueryParams, localVarFormParams, localVarFormFileName, localVarFileName, localVarFileBytes)
	if err != nil {
		return localVarReturnValue, nil, err
	}

	localVarHTTPResponse, err := a.client.callAPI(r)
	if err != nil || localVarHTTPResponse == nil {
		return localVarReturnValue, localVarHTTPResponse, err
	}

	localVarBody, err := _ioutil.ReadAll(localVarHTTPResponse.Body)
	localVarHTTPResponse.Body.Close()
	if err != nil {
		return localVarReturnValue, localVarHTTPResponse, err
	}

	if localVarHTTPResponse.StatusCode >= 300 {
		newErr := GenericOpenAPIError{
			body:  localVarBody,
			error: localVarHTTPResponse.Status,
		}
		return localVarReturnValue, localVarHTTPResponse, newErr
	}

	err = a.client.decode(&localVarReturnValue, localVarBody, localVarHTTPResponse.Header.Get("Content-Type"))
	if err != nil {
		newErr := GenericOpenAPIError{
			body:  localVarBody,
			error: err.Error(),
		}
		return localVarReturnValue, localVarHTTPResponse, newErr
	}

	return localVarReturnValue, localVarHTTPResponse, nil
}

/*
DeviceTypeChannelTypeControllerDeviceTypeChannelCategories Method for DeviceTypeChannelTypeControllerDeviceTypeChannelCategories
 * @param ctx _context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 * @param deviceTypeId
@return []ChannelTypeExcludingNameDescriptionUnitChannelTypeDeviceTypeId
*/
func (a *DeviceTypeChannelTypeControllerApiService) DeviceTypeChannelTypeControllerDeviceTypeChannelCategories(ctx _context.Context, deviceTypeId float32) ([]ChannelTypeExcludingNameDescriptionUnitChannelTypeDeviceTypeId, *_nethttp.Response, error) {
	var (
		localVarHTTPMethod   = _nethttp.MethodGet
		localVarPostBody     interface{}
		localVarFormFileName string
		localVarFileName     string
		localVarFileBytes    []byte
		localVarReturnValue  []ChannelTypeExcludingNameDescriptionUnitChannelTypeDeviceTypeId
	)

	// create path and map variables
	localVarPath := a.client.cfg.BasePath + "/device-type-channel-type/{deviceTypeId}/channel-categories"
	localVarPath = strings.Replace(localVarPath, "{"+"deviceTypeId"+"}", _neturl.QueryEscape(parameterToString(deviceTypeId, "")) , -1)

	localVarHeaderParams := make(map[string]string)
	localVarQueryParams := _neturl.Values{}
	localVarFormParams := _neturl.Values{}

	// to determine the Content-Type header
	localVarHTTPContentTypes := []string{}

	// set Content-Type header
	localVarHTTPContentType := selectHeaderContentType(localVarHTTPContentTypes)
	if localVarHTTPContentType != "" {
		localVarHeaderParams["Content-Type"] = localVarHTTPContentType
	}

	// to determine the Accept header
	localVarHTTPHeaderAccepts := []string{"application/json"}

	// set Accept header
	localVarHTTPHeaderAccept := selectHeaderAccept(localVarHTTPHeaderAccepts)
	if localVarHTTPHeaderAccept != "" {
		localVarHeaderParams["Accept"] = localVarHTTPHeaderAccept
	}
	r, err := a.client.prepareRequest(ctx, localVarPath, localVarHTTPMethod, localVarPostBody, localVarHeaderParams, localVarQueryParams, localVarFormParams, localVarFormFileName, localVarFileName, localVarFileBytes)
	if err != nil {
		return localVarReturnValue, nil, err
	}

	localVarHTTPResponse, err := a.client.callAPI(r)
	if err != nil || localVarHTTPResponse == nil {
		return localVarReturnValue, localVarHTTPResponse, err
	}

	localVarBody, err := _ioutil.ReadAll(localVarHTTPResponse.Body)
	localVarHTTPResponse.Body.Close()
	if err != nil {
		return localVarReturnValue, localVarHTTPResponse, err
	}

	if localVarHTTPResponse.StatusCode >= 300 {
		newErr := GenericOpenAPIError{
			body:  localVarBody,
			error: localVarHTTPResponse.Status,
		}
		return localVarReturnValue, localVarHTTPResponse, newErr
	}

	err = a.client.decode(&localVarReturnValue, localVarBody, localVarHTTPResponse.Header.Get("Content-Type"))
	if err != nil {
		newErr := GenericOpenAPIError{
			body:  localVarBody,
			error: err.Error(),
		}
		return localVarReturnValue, localVarHTTPResponse, newErr
	}

	return localVarReturnValue, localVarHTTPResponse, nil
}

/*
DeviceTypeChannelTypeControllerFind Method for DeviceTypeChannelTypeControllerFind
 * @param ctx _context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 * @param deviceTypeId
 * @param page
 * @param count
@return []ChannelType
*/
func (a *DeviceTypeChannelTypeControllerApiService) DeviceTypeChannelTypeControllerFind(ctx _context.Context, deviceTypeId float32, page float32, count float32) ([]ChannelType, *_nethttp.Response, error) {
	var (
		localVarHTTPMethod   = _nethttp.MethodGet
		localVarPostBody     interface{}
		localVarFormFileName string
		localVarFileName     string
		localVarFileBytes    []byte
		localVarReturnValue  []ChannelType
	)

	// create path and map variables
	localVarPath := a.client.cfg.BasePath + "/device-type-channel-type/{deviceTypeId}/page/{page}/count/{count}"
	localVarPath = strings.Replace(localVarPath, "{"+"deviceTypeId"+"}", _neturl.QueryEscape(parameterToString(deviceTypeId, "")) , -1)

	localVarPath = strings.Replace(localVarPath, "{"+"page"+"}", _neturl.QueryEscape(parameterToString(page, "")) , -1)

	localVarPath = strings.Replace(localVarPath, "{"+"count"+"}", _neturl.QueryEscape(parameterToString(count, "")) , -1)

	localVarHeaderParams := make(map[string]string)
	localVarQueryParams := _neturl.Values{}
	localVarFormParams := _neturl.Values{}

	// to determine the Content-Type header
	localVarHTTPContentTypes := []string{}

	// set Content-Type header
	localVarHTTPContentType := selectHeaderContentType(localVarHTTPContentTypes)
	if localVarHTTPContentType != "" {
		localVarHeaderParams["Content-Type"] = localVarHTTPContentType
	}

	// to determine the Accept header
	localVarHTTPHeaderAccepts := []string{"application/json"}

	// set Accept header
	localVarHTTPHeaderAccept := selectHeaderAccept(localVarHTTPHeaderAccepts)
	if localVarHTTPHeaderAccept != "" {
		localVarHeaderParams["Accept"] = localVarHTTPHeaderAccept
	}
	r, err := a.client.prepareRequest(ctx, localVarPath, localVarHTTPMethod, localVarPostBody, localVarHeaderParams, localVarQueryParams, localVarFormParams, localVarFormFileName, localVarFileName, localVarFileBytes)
	if err != nil {
		return localVarReturnValue, nil, err
	}

	localVarHTTPResponse, err := a.client.callAPI(r)
	if err != nil || localVarHTTPResponse == nil {
		return localVarReturnValue, localVarHTTPResponse, err
	}

	localVarBody, err := _ioutil.ReadAll(localVarHTTPResponse.Body)
	localVarHTTPResponse.Body.Close()
	if err != nil {
		return localVarReturnValue, localVarHTTPResponse, err
	}

	if localVarHTTPResponse.StatusCode >= 300 {
		newErr := GenericOpenAPIError{
			body:  localVarBody,
			error: localVarHTTPResponse.Status,
		}
		return localVarReturnValue, localVarHTTPResponse, newErr
	}

	err = a.client.decode(&localVarReturnValue, localVarBody, localVarHTTPResponse.Header.Get("Content-Type"))
	if err != nil {
		newErr := GenericOpenAPIError{
			body:  localVarBody,
			error: err.Error(),
		}
		return localVarReturnValue, localVarHTTPResponse, newErr
	}

	return localVarReturnValue, localVarHTTPResponse, nil
}

// DeviceTypeChannelTypeControllerUpdateByIdOpts Optional parameters for the method 'DeviceTypeChannelTypeControllerUpdateById'
type DeviceTypeChannelTypeControllerUpdateByIdOpts struct {
    ChannelTypeExcludingIdNameDeviceTypeId optional.Interface
}

/*
DeviceTypeChannelTypeControllerUpdateById Method for DeviceTypeChannelTypeControllerUpdateById
 * @param ctx _context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 * @param channelTypeId
 * @param optional nil or *DeviceTypeChannelTypeControllerUpdateByIdOpts - Optional Parameters:
 * @param "ChannelTypeExcludingIdNameDeviceTypeId" (optional.Interface of ChannelTypeExcludingIdNameDeviceTypeId) - 
*/
func (a *DeviceTypeChannelTypeControllerApiService) DeviceTypeChannelTypeControllerUpdateById(ctx _context.Context, channelTypeId float32, localVarOptionals *DeviceTypeChannelTypeControllerUpdateByIdOpts) (*_nethttp.Response, error) {
	var (
		localVarHTTPMethod   = _nethttp.MethodPatch
		localVarPostBody     interface{}
		localVarFormFileName string
		localVarFileName     string
		localVarFileBytes    []byte
	)

	// create path and map variables
	localVarPath := a.client.cfg.BasePath + "/device-type-channel-type/channel-type/{channelTypeId}"
	localVarPath = strings.Replace(localVarPath, "{"+"channelTypeId"+"}", _neturl.QueryEscape(parameterToString(channelTypeId, "")) , -1)

	localVarHeaderParams := make(map[string]string)
	localVarQueryParams := _neturl.Values{}
	localVarFormParams := _neturl.Values{}

	// to determine the Content-Type header
	localVarHTTPContentTypes := []string{"application/json"}

	// set Content-Type header
	localVarHTTPContentType := selectHeaderContentType(localVarHTTPContentTypes)
	if localVarHTTPContentType != "" {
		localVarHeaderParams["Content-Type"] = localVarHTTPContentType
	}

	// to determine the Accept header
	localVarHTTPHeaderAccepts := []string{}

	// set Accept header
	localVarHTTPHeaderAccept := selectHeaderAccept(localVarHTTPHeaderAccepts)
	if localVarHTTPHeaderAccept != "" {
		localVarHeaderParams["Accept"] = localVarHTTPHeaderAccept
	}
	// body params
	if localVarOptionals != nil && localVarOptionals.ChannelTypeExcludingIdNameDeviceTypeId.IsSet() {
		localVarOptionalChannelTypeExcludingIdNameDeviceTypeId, localVarOptionalChannelTypeExcludingIdNameDeviceTypeIdok := localVarOptionals.ChannelTypeExcludingIdNameDeviceTypeId.Value().(ChannelTypeExcludingIdNameDeviceTypeId)
		if !localVarOptionalChannelTypeExcludingIdNameDeviceTypeIdok {
			return nil, reportError("channelTypeExcludingIdNameDeviceTypeId should be ChannelTypeExcludingIdNameDeviceTypeId")
		}
		localVarPostBody = &localVarOptionalChannelTypeExcludingIdNameDeviceTypeId
	}

	r, err := a.client.prepareRequest(ctx, localVarPath, localVarHTTPMethod, localVarPostBody, localVarHeaderParams, localVarQueryParams, localVarFormParams, localVarFormFileName, localVarFileName, localVarFileBytes)
	if err != nil {
		return nil, err
	}

	localVarHTTPResponse, err := a.client.callAPI(r)
	if err != nil || localVarHTTPResponse == nil {
		return localVarHTTPResponse, err
	}

	localVarBody, err := _ioutil.ReadAll(localVarHTTPResponse.Body)
	localVarHTTPResponse.Body.Close()
	if err != nil {
		return localVarHTTPResponse, err
	}

	if localVarHTTPResponse.StatusCode >= 300 {
		newErr := GenericOpenAPIError{
			body:  localVarBody,
			error: localVarHTTPResponse.Status,
		}
		return localVarHTTPResponse, newErr
	}

	return localVarHTTPResponse, nil
}
