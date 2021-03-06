/**
 * Atman IoT
 * Atman IoT Server
 *
 * The version of the OpenAPI document: 3.0.1
 * Contact: k.khoury@k-ren.gr
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import DataLogger from '../model/DataLogger';
import DataLoggerExcludingIdAuthTokenConfigUserId from '../model/DataLoggerExcludingIdAuthTokenConfigUserId';
import RequestDataLoggerSetupCsv2ExcludingFileFormat from '../model/RequestDataLoggerSetupCsv2ExcludingFileFormat';
import RequestDataLoggerSetupXml2ExcludingFileFormat from '../model/RequestDataLoggerSetupXml2ExcludingFileFormat';
import ResponseDataLoggerSetupStep2 from '../model/ResponseDataLoggerSetupStep2';

/**
* DataLoggerController service.
* @module api/DataLoggerControllerApi
* @version 3.0.1
*/
export default class DataLoggerControllerApi {

    /**
    * Constructs a new DataLoggerControllerApi. 
    * @alias module:api/DataLoggerControllerApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the dataLoggerControllerCreate operation.
     * @callback module:api/DataLoggerControllerApi~dataLoggerControllerCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DataLogger} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Used for creating a new <b>DataLogger</b> by and authorized <b>User</b>, identified by the provided <i>token</i>. <br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocsdatalogger\" target=\"_blank\">DataLoggerModel</a></i>
     * @param {Object} opts Optional parameters
     * @param {module:model/DataLoggerExcludingIdAuthTokenConfigUserId} opts.dataLoggerExcludingIdAuthTokenConfigUserId 
     * @param {module:api/DataLoggerControllerApi~dataLoggerControllerCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DataLogger}
     */
    dataLoggerControllerCreate(opts, callback) {
      opts = opts || {};
      let postBody = opts['dataLoggerExcludingIdAuthTokenConfigUserId'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = DataLogger;
      return this.apiClient.callApi(
        '/data-logger', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the dataLoggerControllerDeleteById operation.
     * @callback module:api/DataLoggerControllerApi~dataLoggerControllerDeleteByIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes a<b> DataLogger</b> identified by <i>id</i>, owned by a <b>User</b> identified by the provided <i>token.</i><br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocsdatalogger\" target=\"_blank\">DataLoggerModel</a></i>
     * @param {Number} id 
     * @param {module:api/DataLoggerControllerApi~dataLoggerControllerDeleteByIdCallback} callback The callback function, accepting three arguments: error, data, response
     */
    dataLoggerControllerDeleteById(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling dataLoggerControllerDeleteById");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/data-logger/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the dataLoggerControllerFind operation.
     * @callback module:api/DataLoggerControllerApi~dataLoggerControllerFindCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/DataLogger>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns an array of <b>DataLoggers</b> owned by a <b>User</b> identified by the provided <i>token.</i><br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocsdatalogger\" target=\"_blank\">DataLoggerModel</a></i>
     * @param {module:api/DataLoggerControllerApi~dataLoggerControllerFindCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/DataLogger>}
     */
    dataLoggerControllerFind(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [DataLogger];
      return this.apiClient.callApi(
        '/data-loggers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the dataLoggerControllerSetupFromFtp1 operation.
     * @callback module:api/DataLoggerControllerApi~dataLoggerControllerSetupFromFtp1Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Step 1 of setup process of <b>DataLoggers</b> sending data via FTP. It is used for sending a sample uncompressed <i>file</i> containing raw data, as it was generated by the <b>DataLogger</b> (hardware) identified by <i>dataLoggerToken</i>.<br><br><i><b>References:</b> <a href=\"/documentation.html#tocsdatalogger\" target=\"_blank\">DataLoggerModel</a></i>
     * @param {Number} id 
     * @param {String} dataLoggerToken 
     * @param {module:api/DataLoggerControllerApi~dataLoggerControllerSetupFromFtp1Callback} callback The callback function, accepting three arguments: error, data, response
     */
    dataLoggerControllerSetupFromFtp1(id, dataLoggerToken, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling dataLoggerControllerSetupFromFtp1");
      }
      // verify the required parameter 'dataLoggerToken' is set
      if (dataLoggerToken === undefined || dataLoggerToken === null) {
        throw new Error("Missing the required parameter 'dataLoggerToken' when calling dataLoggerControllerSetupFromFtp1");
      }

      let pathParams = {
        'id': id,
        'dataLoggerToken': dataLoggerToken
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['multipart/form-data'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/data-logger/setup-ftp/step1/{id}/{dataLoggerToken}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the dataLoggerControllerSetupFromFtp3 operation.
     * @callback module:api/DataLoggerControllerApi~dataLoggerControllerSetupFromFtp3Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Step 3 of setup process of <b>DataLoggers</b> sending data via FTP. It is used for initiating <b>DeviceTypes</b>, <b>ChannelTypes</b> and <b>Devices</b>. Accepts as input the output of Step 2. Make sure that the <i>manufacturer</i> property is added.<br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-devicecontroller\" target=\"_blank\">DeviceController</a>, <a href=\"/documentation.html#atman-iot-devicetypecontroller\" target=\"_blank\">DeviceTypeController</a>, <a href=\"/documentation.html#atman-iot-devicetypechanneltypecontroller\" target=\"_blank\">DeviceTypeChannelTypeController</a>, <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocsdatalogger\" target=\"_blank\">DataLoggerModel</a></i>
     * @param {Number} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/ResponseDataLoggerSetupStep2} opts.responseDataLoggerSetupStep2 
     * @param {module:api/DataLoggerControllerApi~dataLoggerControllerSetupFromFtp3Callback} callback The callback function, accepting three arguments: error, data, response
     */
    dataLoggerControllerSetupFromFtp3(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['responseDataLoggerSetupStep2'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling dataLoggerControllerSetupFromFtp3");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/data-logger/setup-ftp/step3/{id}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the dataLoggerControllerSetupFromFtpCsv2 operation.
     * @callback module:api/DataLoggerControllerApi~dataLoggerControllerSetupFromFtpCsv2Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseDataLoggerSetupStep2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Step 2 of setup process of <b>DataLoggers</b> sending CSV data via FTP. It is used for mapping properties of the sent <i>file</i> to properties of models in the system. <b>DataLogger</b> to be setup, is identified by <i>id</i> and <b>User</b> performing operation is identified by <i>token</i>. Endpoint response represents the results of the mapping (required in Step 3). If it is satisfactory, it is saved by setting the property <i>confirm</i> to <i>true</i>.<br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocsdatalogger\" target=\"_blank\">DataLoggerModel</a></i>
     * @param {Number} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/RequestDataLoggerSetupCsv2ExcludingFileFormat} opts.requestDataLoggerSetupCsv2ExcludingFileFormat 
     * @param {module:api/DataLoggerControllerApi~dataLoggerControllerSetupFromFtpCsv2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseDataLoggerSetupStep2}
     */
    dataLoggerControllerSetupFromFtpCsv2(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['requestDataLoggerSetupCsv2ExcludingFileFormat'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling dataLoggerControllerSetupFromFtpCsv2");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ResponseDataLoggerSetupStep2;
      return this.apiClient.callApi(
        '/data-logger/setup-ftp/step2/csv/{id}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the dataLoggerControllerSetupFromFtpXml2 operation.
     * @callback module:api/DataLoggerControllerApi~dataLoggerControllerSetupFromFtpXml2Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseDataLoggerSetupStep2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Step 2 of setup process of <b>DataLoggers</b> sending XML data via FTP. It is used for mapping properties of the sent <i>file</i> to properties of models in the system. <b>DataLogger</b> to be setup, is identified by <i>id</i> and <b>User</b> performing operation is identified by <i>token</i>. Endpoint response represents the results of the mapping (required in Step 3). If it is satisfactory, it is saved by setting the property <i>confirm</i> to <i>true</i>.<br><br><i><b>References:</b> <a href=\"/documentation.html#atman-iot-usercontroller\" target=\"_blank\">UserController</a>, <a href=\"/documentation.html#tocsdatalogger\" target=\"_blank\">DataLoggerModel</a></i>
     * @param {Number} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/RequestDataLoggerSetupXml2ExcludingFileFormat} opts.requestDataLoggerSetupXml2ExcludingFileFormat 
     * @param {module:api/DataLoggerControllerApi~dataLoggerControllerSetupFromFtpXml2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseDataLoggerSetupStep2}
     */
    dataLoggerControllerSetupFromFtpXml2(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['requestDataLoggerSetupXml2ExcludingFileFormat'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling dataLoggerControllerSetupFromFtpXml2");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ResponseDataLoggerSetupStep2;
      return this.apiClient.callApi(
        '/data-logger/setup-ftp/step2/xml/{id}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the dataLoggerControllerUploadDataFromCsv operation.
     * @callback module:api/DataLoggerControllerApi~dataLoggerControllerUploadDataFromCsvCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Used for receiving data, sent in CSV format by a <b>DataLogger</b> identified by <i>id</i> and <i>dataLoggerToken</i>. If the <b>DataLogger</b> is sending data via FTP, endpoint is called internally.<br><br><i><b>References:</b> <a href=\"/documentation.html#tocsdatalogger\" target=\"_blank\">DataLoggerModel</a></i>
     * @param {Number} id 
     * @param {String} dataLoggerToken 
     * @param {module:api/DataLoggerControllerApi~dataLoggerControllerUploadDataFromCsvCallback} callback The callback function, accepting three arguments: error, data, response
     */
    dataLoggerControllerUploadDataFromCsv(id, dataLoggerToken, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling dataLoggerControllerUploadDataFromCsv");
      }
      // verify the required parameter 'dataLoggerToken' is set
      if (dataLoggerToken === undefined || dataLoggerToken === null) {
        throw new Error("Missing the required parameter 'dataLoggerToken' when calling dataLoggerControllerUploadDataFromCsv");
      }

      let pathParams = {
        'id': id,
        'dataLoggerToken': dataLoggerToken
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['multipart/form-data'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/data-logger/data-from-csv/{id}/{dataLoggerToken}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the dataLoggerControllerUploadDataFromXml operation.
     * @callback module:api/DataLoggerControllerApi~dataLoggerControllerUploadDataFromXmlCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Used for receiving data, sent in XML format by a <b>DataLogger</b> identified by <i>id</i> and <i>dataLoggerToken</i>. If the <b>DataLogger</b> is sending data via FTP, endpoint is called internally.<br><br><i><b>References:</b> <a href=\"/documentation.html#tocsdatalogger\" target=\"_blank\">DataLoggerModel</a></i>
     * @param {Number} id 
     * @param {String} dataLoggerToken 
     * @param {module:api/DataLoggerControllerApi~dataLoggerControllerUploadDataFromXmlCallback} callback The callback function, accepting three arguments: error, data, response
     */
    dataLoggerControllerUploadDataFromXml(id, dataLoggerToken, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling dataLoggerControllerUploadDataFromXml");
      }
      // verify the required parameter 'dataLoggerToken' is set
      if (dataLoggerToken === undefined || dataLoggerToken === null) {
        throw new Error("Missing the required parameter 'dataLoggerToken' when calling dataLoggerControllerUploadDataFromXml");
      }

      let pathParams = {
        'id': id,
        'dataLoggerToken': dataLoggerToken
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['multipart/form-data'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/data-logger/data-from-xml/{id}/{dataLoggerToken}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
