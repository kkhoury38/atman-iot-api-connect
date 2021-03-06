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
import AssetGroup from '../model/AssetGroup';
import AssetGroupExcludingIdUserId from '../model/AssetGroupExcludingIdUserId';

/**
* AssetGroupController service.
* @module api/AssetGroupControllerApi
* @version 3.0.1
*/
export default class AssetGroupControllerApi {

    /**
    * Constructs a new AssetGroupControllerApi. 
    * @alias module:api/AssetGroupControllerApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the assetGroupControllerCreateAssetGroup operation.
     * @callback module:api/AssetGroupControllerApi~assetGroupControllerCreateAssetGroupCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AssetGroup} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/AssetGroupExcludingIdUserId} opts.assetGroupExcludingIdUserId 
     * @param {module:api/AssetGroupControllerApi~assetGroupControllerCreateAssetGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AssetGroup}
     */
    assetGroupControllerCreateAssetGroup(opts, callback) {
      opts = opts || {};
      let postBody = opts['assetGroupExcludingIdUserId'];

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
      let returnType = AssetGroup;
      return this.apiClient.callApi(
        '/asset-group/user', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the assetGroupControllerDeleteById operation.
     * @callback module:api/AssetGroupControllerApi~assetGroupControllerDeleteByIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id 
     * @param {module:api/AssetGroupControllerApi~assetGroupControllerDeleteByIdCallback} callback The callback function, accepting three arguments: error, data, response
     */
    assetGroupControllerDeleteById(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling assetGroupControllerDeleteById");
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
        '/asset-group/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the assetGroupControllerFindUserAssetGroups operation.
     * @callback module:api/AssetGroupControllerApi~assetGroupControllerFindUserAssetGroupsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/AssetGroup>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/AssetGroupControllerApi~assetGroupControllerFindUserAssetGroupsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/AssetGroup>}
     */
    assetGroupControllerFindUserAssetGroups(callback) {
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
      let returnType = [AssetGroup];
      return this.apiClient.callApi(
        '/asset-groups/user', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the assetGroupControllerUpdateById operation.
     * @callback module:api/AssetGroupControllerApi~assetGroupControllerUpdateByIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit (PATCH) AssetGroup
     * @param {Number} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/AssetGroupExcludingIdUserId} opts.assetGroupExcludingIdUserId 
     * @param {module:api/AssetGroupControllerApi~assetGroupControllerUpdateByIdCallback} callback The callback function, accepting three arguments: error, data, response
     */
    assetGroupControllerUpdateById(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['assetGroupExcludingIdUserId'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling assetGroupControllerUpdateById");
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
        '/asset-group/{id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
