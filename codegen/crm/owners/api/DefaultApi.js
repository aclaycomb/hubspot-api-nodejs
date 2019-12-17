/**
 * CRM Owners
 * HubSpot uses **owners** to assign CRM objects to specific people in your organization. The endpoints described here are used to get a list of the owners that are available for an account. To assign an owner to an object, set the hubspot_owner_id property using the appropriate CRM object update or create a request.  If teams are available for your HubSpot tier, these endpoints will also indicate which team an owner belongs to. Team membership can be one of PRIMARY (default), SECONDARY, or CHILD.
 *
 * OpenAPI spec version: v3
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.8
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CollectionResponsePublicOwner', 'model/Error', 'model/PublicOwner'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CollectionResponsePublicOwner'), require('../model/Error'), require('../model/PublicOwner'));
  } else {
    // Browser globals (root is window)
    if (!root.CrmOwners) {
      root.CrmOwners = {};
    }
    root.CrmOwners.DefaultApi = factory(root.CrmOwners.ApiClient, root.CrmOwners.CollectionResponsePublicOwner, root.CrmOwners.Error, root.CrmOwners.PublicOwner);
  }
}(this, function(ApiClient, CollectionResponsePublicOwner, Error, PublicOwner) {
  'use strict';

  /**
   * Default service.
   * @module api/DefaultApi
   * @version v3
   */

  /**
   * Constructs a new DefaultApi. 
   * @alias module:api/DefaultApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Read an owner by given &#x60;id&#x60; or &#x60;userId&#x60;
     * 
     * @param {Number} ownerId 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.idProperty  (default to id)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PublicOwner} and HTTP response
     */
    this.getByIdWithHttpInfo = function(ownerId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'ownerId' is set
      if (ownerId === undefined || ownerId === null) {
        throw new Error("Missing the required parameter 'ownerId' when calling getById");
      }


      var pathParams = {
        'ownerId': ownerId
      };
      var queryParams = {
        'idProperty': opts['idProperty'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['hapikey', 'oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PublicOwner;

      return this.apiClient.callApi(
        '/{ownerId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Read an owner by given &#x60;id&#x60; or &#x60;userId&#x60;
     * 
     * @param {Number} ownerId 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.idProperty  (default to id)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PublicOwner}
     */
    this.getById = function(ownerId, opts) {
      return this.getByIdWithHttpInfo(ownerId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a page of owners
     * 
     * @param {Object} opts Optional parameters
     * @param {String} opts.email Filter by email address (optional)
     * @param {String} opts.after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param {Number} opts.limit The maximum number of results to display per page. (default to 100)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CollectionResponsePublicOwner} and HTTP response
     */
    this.getPageWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'email': opts['email'],
        'after': opts['after'],
        'limit': opts['limit'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['hapikey', 'oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CollectionResponsePublicOwner;

      return this.apiClient.callApi(
        '/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a page of owners
     * 
     * @param {Object} opts Optional parameters
     * @param {String} opts.email Filter by email address (optional)
     * @param {String} opts.after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param {Number} opts.limit The maximum number of results to display per page. (default to 100)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CollectionResponsePublicOwner}
     */
    this.getPage = function(opts) {
      return this.getPageWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));