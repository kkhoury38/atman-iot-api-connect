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
    instance = new AtmanIoT.DeviceTypeControllerApi();
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

  describe('DeviceTypeControllerApi', function() {
    describe('deviceTypeControllerCount', function() {
      it('should call deviceTypeControllerCount successfully', function(done) {
        //uncomment below and update the code to test deviceTypeControllerCount
        //instance.deviceTypeControllerCount(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deviceTypeControllerCreate', function() {
      it('should call deviceTypeControllerCreate successfully', function(done) {
        //uncomment below and update the code to test deviceTypeControllerCreate
        //instance.deviceTypeControllerCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deviceTypeControllerFind', function() {
      it('should call deviceTypeControllerFind successfully', function(done) {
        //uncomment below and update the code to test deviceTypeControllerFind
        //instance.deviceTypeControllerFind(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deviceTypeControllerGetAssetDeviceCategories', function() {
      it('should call deviceTypeControllerGetAssetDeviceCategories successfully', function(done) {
        //uncomment below and update the code to test deviceTypeControllerGetAssetDeviceCategories
        //instance.deviceTypeControllerGetAssetDeviceCategories(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deviceTypeControllerUpdateById', function() {
      it('should call deviceTypeControllerUpdateById successfully', function(done) {
        //uncomment below and update the code to test deviceTypeControllerUpdateById
        //instance.deviceTypeControllerUpdateById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
