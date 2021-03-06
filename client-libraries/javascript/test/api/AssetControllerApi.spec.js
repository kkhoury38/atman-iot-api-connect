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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.AtmanIoT);
  }
}(this, function(expect, AtmanIoT) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new AtmanIoT.AssetControllerApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('AssetControllerApi', function() {
    describe('assetControllerCreate', function() {
      it('should call assetControllerCreate successfully', function(done) {
        //uncomment below and update the code to test assetControllerCreate
        //instance.assetControllerCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('assetControllerDeleteById', function() {
      it('should call assetControllerDeleteById successfully', function(done) {
        //uncomment below and update the code to test assetControllerDeleteById
        //instance.assetControllerDeleteById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('assetControllerFind', function() {
      it('should call assetControllerFind successfully', function(done) {
        //uncomment below and update the code to test assetControllerFind
        //instance.assetControllerFind(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('assetControllerFindByName', function() {
      it('should call assetControllerFindByName successfully', function(done) {
        //uncomment below and update the code to test assetControllerFindByName
        //instance.assetControllerFindByName(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('assetControllerFindByUserId', function() {
      it('should call assetControllerFindByUserId successfully', function(done) {
        //uncomment below and update the code to test assetControllerFindByUserId
        //instance.assetControllerFindByUserId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('assetControllerUpdateById', function() {
      it('should call assetControllerUpdateById successfully', function(done) {
        //uncomment below and update the code to test assetControllerUpdateById
        //instance.assetControllerUpdateById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
