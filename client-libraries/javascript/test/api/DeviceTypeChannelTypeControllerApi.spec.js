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
    instance = new AtmanIoT.DeviceTypeChannelTypeControllerApi();
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

  describe('DeviceTypeChannelTypeControllerApi', function() {
    describe('deviceTypeChannelTypeControllerCount', function() {
      it('should call deviceTypeChannelTypeControllerCount successfully', function(done) {
        //uncomment below and update the code to test deviceTypeChannelTypeControllerCount
        //instance.deviceTypeChannelTypeControllerCount(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deviceTypeChannelTypeControllerCreate', function() {
      it('should call deviceTypeChannelTypeControllerCreate successfully', function(done) {
        //uncomment below and update the code to test deviceTypeChannelTypeControllerCreate
        //instance.deviceTypeChannelTypeControllerCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deviceTypeChannelTypeControllerDeviceTypeChannelCategories', function() {
      it('should call deviceTypeChannelTypeControllerDeviceTypeChannelCategories successfully', function(done) {
        //uncomment below and update the code to test deviceTypeChannelTypeControllerDeviceTypeChannelCategories
        //instance.deviceTypeChannelTypeControllerDeviceTypeChannelCategories(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deviceTypeChannelTypeControllerFind', function() {
      it('should call deviceTypeChannelTypeControllerFind successfully', function(done) {
        //uncomment below and update the code to test deviceTypeChannelTypeControllerFind
        //instance.deviceTypeChannelTypeControllerFind(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deviceTypeChannelTypeControllerUpdateById', function() {
      it('should call deviceTypeChannelTypeControllerUpdateById successfully', function(done) {
        //uncomment below and update the code to test deviceTypeChannelTypeControllerUpdateById
        //instance.deviceTypeChannelTypeControllerUpdateById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
