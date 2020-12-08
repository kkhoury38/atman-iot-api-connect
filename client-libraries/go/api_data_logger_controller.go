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

// DataLoggerControllerApiService DataLoggerControllerApi service
type DataLoggerControllerApiService service

// DataLoggerControllerCreateOpts Optional parameters for the method 'DataLoggerControllerCreate'
type DataLoggerControllerCreateOpts struct {
    DataLoggerExcludingIdAuthTokenConfigUserId optional.Interface
}

/*
DataLoggerControllerCreate Method for DataLoggerControllerCreate
Used for creating a new &lt;b&gt;DataLogger&lt;/b&gt; by and authorized &lt;b&gt;User&lt;/b&gt;, identified by the provided &lt;i&gt;token&lt;/i&gt;. &lt;br&gt;&lt;br&gt;&lt;i&gt;&lt;b&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-usercontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;UserController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocsdatalogger\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DataLoggerModel&lt;/a&gt;&lt;/i&gt;
 * @param ctx _context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 * @param optional nil or *DataLoggerControllerCreateOpts - Optional Parameters:
 * @param "DataLoggerExcludingIdAuthTokenConfigUserId" (optional.Interface of DataLoggerExcludingIdAuthTokenConfigUserId) - 
@return DataLogger
*/
func (a *DataLoggerControllerApiService) DataLoggerControllerCreate(ctx _context.Context, localVarOptionals *DataLoggerControllerCreateOpts) (DataLogger, *_nethttp.Response, error) {
	var (
		localVarHTTPMethod   = _nethttp.MethodPost
		localVarPostBody     interface{}
		localVarFormFileName string
		localVarFileName     string
		localVarFileBytes    []byte
		localVarReturnValue  DataLogger
	)

	// create path and map variables
	localVarPath := a.client.cfg.BasePath + "/data-logger"
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
	if localVarOptionals != nil && localVarOptionals.DataLoggerExcludingIdAuthTokenConfigUserId.IsSet() {
		localVarOptionalDataLoggerExcludingIdAuthTokenConfigUserId, localVarOptionalDataLoggerExcludingIdAuthTokenConfigUserIdok := localVarOptionals.DataLoggerExcludingIdAuthTokenConfigUserId.Value().(DataLoggerExcludingIdAuthTokenConfigUserId)
		if !localVarOptionalDataLoggerExcludingIdAuthTokenConfigUserIdok {
			return localVarReturnValue, nil, reportError("dataLoggerExcludingIdAuthTokenConfigUserId should be DataLoggerExcludingIdAuthTokenConfigUserId")
		}
		localVarPostBody = &localVarOptionalDataLoggerExcludingIdAuthTokenConfigUserId
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
DataLoggerControllerDeleteById Method for DataLoggerControllerDeleteById
Deletes a&lt;b&gt; DataLogger&lt;/b&gt; identified by &lt;i&gt;id&lt;/i&gt;, owned by a &lt;b&gt;User&lt;/b&gt; identified by the provided &lt;i&gt;token.&lt;/i&gt;&lt;br&gt;&lt;br&gt;&lt;i&gt;&lt;b&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-usercontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;UserController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocsdatalogger\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DataLoggerModel&lt;/a&gt;&lt;/i&gt;
 * @param ctx _context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 * @param id
*/
func (a *DataLoggerControllerApiService) DataLoggerControllerDeleteById(ctx _context.Context, id float32) (*_nethttp.Response, error) {
	var (
		localVarHTTPMethod   = _nethttp.MethodDelete
		localVarPostBody     interface{}
		localVarFormFileName string
		localVarFileName     string
		localVarFileBytes    []byte
	)

	// create path and map variables
	localVarPath := a.client.cfg.BasePath + "/data-logger/{id}"
	localVarPath = strings.Replace(localVarPath, "{"+"id"+"}", _neturl.QueryEscape(parameterToString(id, "")) , -1)

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
	localVarHTTPHeaderAccepts := []string{}

	// set Accept header
	localVarHTTPHeaderAccept := selectHeaderAccept(localVarHTTPHeaderAccepts)
	if localVarHTTPHeaderAccept != "" {
		localVarHeaderParams["Accept"] = localVarHTTPHeaderAccept
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

/*
DataLoggerControllerFind Method for DataLoggerControllerFind
Returns an array of &lt;b&gt;DataLoggers&lt;/b&gt; owned by a &lt;b&gt;User&lt;/b&gt; identified by the provided &lt;i&gt;token.&lt;/i&gt;&lt;br&gt;&lt;br&gt;&lt;i&gt;&lt;b&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-usercontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;UserController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocsdatalogger\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DataLoggerModel&lt;/a&gt;&lt;/i&gt;
 * @param ctx _context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
@return []DataLogger
*/
func (a *DataLoggerControllerApiService) DataLoggerControllerFind(ctx _context.Context) ([]DataLogger, *_nethttp.Response, error) {
	var (
		localVarHTTPMethod   = _nethttp.MethodGet
		localVarPostBody     interface{}
		localVarFormFileName string
		localVarFileName     string
		localVarFileBytes    []byte
		localVarReturnValue  []DataLogger
	)

	// create path and map variables
	localVarPath := a.client.cfg.BasePath + "/data-loggers"
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
DataLoggerControllerSetupFromFtp1 Method for DataLoggerControllerSetupFromFtp1
Step 1 of setup process of &lt;b&gt;DataLoggers&lt;/b&gt; sending data via FTP. It is used for sending a sample uncompressed &lt;i&gt;file&lt;/i&gt; containing raw data, as it was generated by the &lt;b&gt;DataLogger&lt;/b&gt; (hardware) identified by &lt;i&gt;dataLoggerToken&lt;/i&gt;.&lt;br&gt;&lt;br&gt;&lt;i&gt;&lt;b&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#tocsdatalogger\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DataLoggerModel&lt;/a&gt;&lt;/i&gt;
 * @param ctx _context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 * @param id
 * @param dataLoggerToken
*/
func (a *DataLoggerControllerApiService) DataLoggerControllerSetupFromFtp1(ctx _context.Context, id float32, dataLoggerToken string) (*_nethttp.Response, error) {
	var (
		localVarHTTPMethod   = _nethttp.MethodPost
		localVarPostBody     interface{}
		localVarFormFileName string
		localVarFileName     string
		localVarFileBytes    []byte
	)

	// create path and map variables
	localVarPath := a.client.cfg.BasePath + "/data-logger/setup-ftp/step1/{id}/{dataLoggerToken}"
	localVarPath = strings.Replace(localVarPath, "{"+"id"+"}", _neturl.QueryEscape(parameterToString(id, "")) , -1)

	localVarPath = strings.Replace(localVarPath, "{"+"dataLoggerToken"+"}", _neturl.QueryEscape(parameterToString(dataLoggerToken, "")) , -1)

	localVarHeaderParams := make(map[string]string)
	localVarQueryParams := _neturl.Values{}
	localVarFormParams := _neturl.Values{}

	// to determine the Content-Type header
	localVarHTTPContentTypes := []string{"multipart/form-data"}

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

// DataLoggerControllerSetupFromFtp3Opts Optional parameters for the method 'DataLoggerControllerSetupFromFtp3'
type DataLoggerControllerSetupFromFtp3Opts struct {
    ResponseDataLoggerSetupStep2 optional.Interface
}

/*
DataLoggerControllerSetupFromFtp3 Method for DataLoggerControllerSetupFromFtp3
Step 3 of setup process of &lt;b&gt;DataLoggers&lt;/b&gt; sending data via FTP. It is used for initiating &lt;b&gt;DeviceTypes&lt;/b&gt;, &lt;b&gt;ChannelTypes&lt;/b&gt; and &lt;b&gt;Devices&lt;/b&gt;. Accepts as input the output of Step 2. Make sure that the &lt;i&gt;manufacturer&lt;/i&gt; property is added.&lt;br&gt;&lt;br&gt;&lt;i&gt;&lt;b&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-devicecontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DeviceController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-devicetypecontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DeviceTypeController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-devicetypechanneltypecontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DeviceTypeChannelTypeController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-usercontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;UserController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocsdatalogger\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DataLoggerModel&lt;/a&gt;&lt;/i&gt;
 * @param ctx _context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 * @param id
 * @param optional nil or *DataLoggerControllerSetupFromFtp3Opts - Optional Parameters:
 * @param "ResponseDataLoggerSetupStep2" (optional.Interface of ResponseDataLoggerSetupStep2) - 
*/
func (a *DataLoggerControllerApiService) DataLoggerControllerSetupFromFtp3(ctx _context.Context, id float32, localVarOptionals *DataLoggerControllerSetupFromFtp3Opts) (*_nethttp.Response, error) {
	var (
		localVarHTTPMethod   = _nethttp.MethodPost
		localVarPostBody     interface{}
		localVarFormFileName string
		localVarFileName     string
		localVarFileBytes    []byte
	)

	// create path and map variables
	localVarPath := a.client.cfg.BasePath + "/data-logger/setup-ftp/step3/{id}"
	localVarPath = strings.Replace(localVarPath, "{"+"id"+"}", _neturl.QueryEscape(parameterToString(id, "")) , -1)

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
	if localVarOptionals != nil && localVarOptionals.ResponseDataLoggerSetupStep2.IsSet() {
		localVarOptionalResponseDataLoggerSetupStep2, localVarOptionalResponseDataLoggerSetupStep2ok := localVarOptionals.ResponseDataLoggerSetupStep2.Value().(ResponseDataLoggerSetupStep2)
		if !localVarOptionalResponseDataLoggerSetupStep2ok {
			return nil, reportError("responseDataLoggerSetupStep2 should be ResponseDataLoggerSetupStep2")
		}
		localVarPostBody = &localVarOptionalResponseDataLoggerSetupStep2
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

// DataLoggerControllerSetupFromFtpCsv2Opts Optional parameters for the method 'DataLoggerControllerSetupFromFtpCsv2'
type DataLoggerControllerSetupFromFtpCsv2Opts struct {
    RequestDataLoggerSetupCsv2ExcludingFileFormat optional.Interface
}

/*
DataLoggerControllerSetupFromFtpCsv2 Method for DataLoggerControllerSetupFromFtpCsv2
Step 2 of setup process of &lt;b&gt;DataLoggers&lt;/b&gt; sending CSV data via FTP. It is used for mapping properties of the sent &lt;i&gt;file&lt;/i&gt; to properties of models in the system. &lt;b&gt;DataLogger&lt;/b&gt; to be setup, is identified by &lt;i&gt;id&lt;/i&gt; and &lt;b&gt;User&lt;/b&gt; performing operation is identified by &lt;i&gt;token&lt;/i&gt;. Endpoint response represents the results of the mapping (required in Step 3). If it is satisfactory, it is saved by setting the property &lt;i&gt;confirm&lt;/i&gt; to &lt;i&gt;true&lt;/i&gt;.&lt;br&gt;&lt;br&gt;&lt;i&gt;&lt;b&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-usercontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;UserController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocsdatalogger\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DataLoggerModel&lt;/a&gt;&lt;/i&gt;
 * @param ctx _context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 * @param id
 * @param optional nil or *DataLoggerControllerSetupFromFtpCsv2Opts - Optional Parameters:
 * @param "RequestDataLoggerSetupCsv2ExcludingFileFormat" (optional.Interface of RequestDataLoggerSetupCsv2ExcludingFileFormat) - 
@return ResponseDataLoggerSetupStep2
*/
func (a *DataLoggerControllerApiService) DataLoggerControllerSetupFromFtpCsv2(ctx _context.Context, id float32, localVarOptionals *DataLoggerControllerSetupFromFtpCsv2Opts) (ResponseDataLoggerSetupStep2, *_nethttp.Response, error) {
	var (
		localVarHTTPMethod   = _nethttp.MethodPost
		localVarPostBody     interface{}
		localVarFormFileName string
		localVarFileName     string
		localVarFileBytes    []byte
		localVarReturnValue  ResponseDataLoggerSetupStep2
	)

	// create path and map variables
	localVarPath := a.client.cfg.BasePath + "/data-logger/setup-ftp/step2/csv/{id}"
	localVarPath = strings.Replace(localVarPath, "{"+"id"+"}", _neturl.QueryEscape(parameterToString(id, "")) , -1)

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
	if localVarOptionals != nil && localVarOptionals.RequestDataLoggerSetupCsv2ExcludingFileFormat.IsSet() {
		localVarOptionalRequestDataLoggerSetupCsv2ExcludingFileFormat, localVarOptionalRequestDataLoggerSetupCsv2ExcludingFileFormatok := localVarOptionals.RequestDataLoggerSetupCsv2ExcludingFileFormat.Value().(RequestDataLoggerSetupCsv2ExcludingFileFormat)
		if !localVarOptionalRequestDataLoggerSetupCsv2ExcludingFileFormatok {
			return localVarReturnValue, nil, reportError("requestDataLoggerSetupCsv2ExcludingFileFormat should be RequestDataLoggerSetupCsv2ExcludingFileFormat")
		}
		localVarPostBody = &localVarOptionalRequestDataLoggerSetupCsv2ExcludingFileFormat
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

// DataLoggerControllerSetupFromFtpXml2Opts Optional parameters for the method 'DataLoggerControllerSetupFromFtpXml2'
type DataLoggerControllerSetupFromFtpXml2Opts struct {
    RequestDataLoggerSetupXml2ExcludingFileFormat optional.Interface
}

/*
DataLoggerControllerSetupFromFtpXml2 Method for DataLoggerControllerSetupFromFtpXml2
Step 2 of setup process of &lt;b&gt;DataLoggers&lt;/b&gt; sending XML data via FTP. It is used for mapping properties of the sent &lt;i&gt;file&lt;/i&gt; to properties of models in the system. &lt;b&gt;DataLogger&lt;/b&gt; to be setup, is identified by &lt;i&gt;id&lt;/i&gt; and &lt;b&gt;User&lt;/b&gt; performing operation is identified by &lt;i&gt;token&lt;/i&gt;. Endpoint response represents the results of the mapping (required in Step 3). If it is satisfactory, it is saved by setting the property &lt;i&gt;confirm&lt;/i&gt; to &lt;i&gt;true&lt;/i&gt;.&lt;br&gt;&lt;br&gt;&lt;i&gt;&lt;b&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#atman-iot-usercontroller\&quot; target&#x3D;\&quot;_blank\&quot;&gt;UserController&lt;/a&gt;, &lt;a href&#x3D;\&quot;/documentation.html#tocsdatalogger\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DataLoggerModel&lt;/a&gt;&lt;/i&gt;
 * @param ctx _context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 * @param id
 * @param optional nil or *DataLoggerControllerSetupFromFtpXml2Opts - Optional Parameters:
 * @param "RequestDataLoggerSetupXml2ExcludingFileFormat" (optional.Interface of RequestDataLoggerSetupXml2ExcludingFileFormat) - 
@return ResponseDataLoggerSetupStep2
*/
func (a *DataLoggerControllerApiService) DataLoggerControllerSetupFromFtpXml2(ctx _context.Context, id float32, localVarOptionals *DataLoggerControllerSetupFromFtpXml2Opts) (ResponseDataLoggerSetupStep2, *_nethttp.Response, error) {
	var (
		localVarHTTPMethod   = _nethttp.MethodPost
		localVarPostBody     interface{}
		localVarFormFileName string
		localVarFileName     string
		localVarFileBytes    []byte
		localVarReturnValue  ResponseDataLoggerSetupStep2
	)

	// create path and map variables
	localVarPath := a.client.cfg.BasePath + "/data-logger/setup-ftp/step2/xml/{id}"
	localVarPath = strings.Replace(localVarPath, "{"+"id"+"}", _neturl.QueryEscape(parameterToString(id, "")) , -1)

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
	if localVarOptionals != nil && localVarOptionals.RequestDataLoggerSetupXml2ExcludingFileFormat.IsSet() {
		localVarOptionalRequestDataLoggerSetupXml2ExcludingFileFormat, localVarOptionalRequestDataLoggerSetupXml2ExcludingFileFormatok := localVarOptionals.RequestDataLoggerSetupXml2ExcludingFileFormat.Value().(RequestDataLoggerSetupXml2ExcludingFileFormat)
		if !localVarOptionalRequestDataLoggerSetupXml2ExcludingFileFormatok {
			return localVarReturnValue, nil, reportError("requestDataLoggerSetupXml2ExcludingFileFormat should be RequestDataLoggerSetupXml2ExcludingFileFormat")
		}
		localVarPostBody = &localVarOptionalRequestDataLoggerSetupXml2ExcludingFileFormat
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
DataLoggerControllerUploadDataFromCsv Method for DataLoggerControllerUploadDataFromCsv
Used for receiving data, sent in CSV format by a &lt;b&gt;DataLogger&lt;/b&gt; identified by &lt;i&gt;id&lt;/i&gt; and &lt;i&gt;dataLoggerToken&lt;/i&gt;. If the &lt;b&gt;DataLogger&lt;/b&gt; is sending data via FTP, endpoint is called internally.&lt;br&gt;&lt;br&gt;&lt;i&gt;&lt;b&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#tocsdatalogger\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DataLoggerModel&lt;/a&gt;&lt;/i&gt;
 * @param ctx _context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 * @param id
 * @param dataLoggerToken
*/
func (a *DataLoggerControllerApiService) DataLoggerControllerUploadDataFromCsv(ctx _context.Context, id float32, dataLoggerToken string) (*_nethttp.Response, error) {
	var (
		localVarHTTPMethod   = _nethttp.MethodPost
		localVarPostBody     interface{}
		localVarFormFileName string
		localVarFileName     string
		localVarFileBytes    []byte
	)

	// create path and map variables
	localVarPath := a.client.cfg.BasePath + "/data-logger/data-from-csv/{id}/{dataLoggerToken}"
	localVarPath = strings.Replace(localVarPath, "{"+"id"+"}", _neturl.QueryEscape(parameterToString(id, "")) , -1)

	localVarPath = strings.Replace(localVarPath, "{"+"dataLoggerToken"+"}", _neturl.QueryEscape(parameterToString(dataLoggerToken, "")) , -1)

	localVarHeaderParams := make(map[string]string)
	localVarQueryParams := _neturl.Values{}
	localVarFormParams := _neturl.Values{}

	// to determine the Content-Type header
	localVarHTTPContentTypes := []string{"multipart/form-data"}

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

/*
DataLoggerControllerUploadDataFromXml Method for DataLoggerControllerUploadDataFromXml
Used for receiving data, sent in XML format by a &lt;b&gt;DataLogger&lt;/b&gt; identified by &lt;i&gt;id&lt;/i&gt; and &lt;i&gt;dataLoggerToken&lt;/i&gt;. If the &lt;b&gt;DataLogger&lt;/b&gt; is sending data via FTP, endpoint is called internally.&lt;br&gt;&lt;br&gt;&lt;i&gt;&lt;b&gt;References:&lt;/b&gt; &lt;a href&#x3D;\&quot;/documentation.html#tocsdatalogger\&quot; target&#x3D;\&quot;_blank\&quot;&gt;DataLoggerModel&lt;/a&gt;&lt;/i&gt;
 * @param ctx _context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 * @param id
 * @param dataLoggerToken
*/
func (a *DataLoggerControllerApiService) DataLoggerControllerUploadDataFromXml(ctx _context.Context, id float32, dataLoggerToken string) (*_nethttp.Response, error) {
	var (
		localVarHTTPMethod   = _nethttp.MethodPost
		localVarPostBody     interface{}
		localVarFormFileName string
		localVarFileName     string
		localVarFileBytes    []byte
	)

	// create path and map variables
	localVarPath := a.client.cfg.BasePath + "/data-logger/data-from-xml/{id}/{dataLoggerToken}"
	localVarPath = strings.Replace(localVarPath, "{"+"id"+"}", _neturl.QueryEscape(parameterToString(id, "")) , -1)

	localVarPath = strings.Replace(localVarPath, "{"+"dataLoggerToken"+"}", _neturl.QueryEscape(parameterToString(dataLoggerToken, "")) , -1)

	localVarHeaderParams := make(map[string]string)
	localVarQueryParams := _neturl.Values{}
	localVarFormParams := _neturl.Values{}

	// to determine the Content-Type header
	localVarHTTPContentTypes := []string{"multipart/form-data"}

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
